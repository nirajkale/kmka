<template>
  <div class="padded-page">
    <div class="additional-controls">
        <v-switch
          v-model="showPendingRecords"
          label="Show Pending Inquiries"
          @change="fetchAllInquiries()"
        ></v-switch>
      </div>
    <v-card>
      <v-card-title>
        Inquiries
				<v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          v-on:keyup="fetchAllInquiries"
        ></v-text-field>
      </v-card-title>
      <v-data-table
        v-if="getInquiries"
        :headers="headers"
        :items="getInquiries.results"
        :search="search"
        :options.sync="options"
        :loading="loading"
        mobile-breakpoint="750"
      >
        <template v-slot:item.name="{ item }">
          <!-- link :to="{ name:'inquiry', params: { id:item.id } }" -->
          <v-btn x-small text elevation="0"
            @click="openInquiry(item.id)"
						class="link-button" >
            {{ item.name }}
          </v-btn>
				</template>
        <template v-slot:item.submitted_on="{ item }">
					{{ item.submitted_on | localdatetime }}
				</template>
        <template v-slot:item.acknowledged="{ item }">
					<v-btn x-small outlined 
            v-text="item.acknowledged?'Done':'Acknowledge'"
            :disabled="item.acknowledged"
            :color="item.acknowledged?'success':'primary'"
            @click="acknowledge(item.id)"
            :loading="patchId == item.id"
            >
          </v-btn>
				</template>
      </v-data-table>
    </v-card>
    <v-row justify="center" v-if="getInquiry">
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false"><v-icon>mdi-close</v-icon></v-btn>
          <v-toolbar-title>Customer Inquiry Details</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text 
              @click="acknowledge(getInquiry.id)" 
              v-if="!getInquiry.acknowledged"
              :loading="patchId == getInquiry.id"
            >Acknowledge
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <div class="dialog-content">
          <v-list
          three-line
          subheader
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Inquiry From</v-list-item-title>
              <v-list-item-subtitle>{{ getInquiry.name }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Contact Details</v-list-item-title>
              <!-- <v-list-item-subtitle>Phone: {{ getInquiry.phone }} | Email: {{ getInquiry.email }}</v-list-item-subtitle> -->
              <v-list-subtitle class="inquiry-text">
                <div class="mt-1"><v-icon class="mr-2"> mdi-phone </v-icon> {{ getInquiry.phone }} </div>
                <div class="mt-1"><v-icon class="mr-2"> mdi-email </v-icon> {{ getInquiry.email }}</div>
              </v-list-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Status</v-list-item-title>
              <v-list-item-subtitle>
                {{ getInquiry.acknowledged ? 'Acknowledged':'Yet to be acknowledged' }} | 
                Submitted On:  {{ getInquiry.submitted_on | localdatetime }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list three-line subheader>
            <v-subheader>Details</v-subheader>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Purpose</v-list-item-title>
                <v-list-item-subtitle>{{ getInquiry.purpose }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Description</v-list-item-title>
                <v-list-item-content class="inquiry-text">{{ getInquiry.desc }}</v-list-item-content>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Iquiries",
  data: ()=>({
    loading: false,
    dialog:false,
    patchId:-1,
    search: "",
    options: {},
    showPendingRecords: false,
    headers:[
      { text:'Name', value:'name' },
      { text:'Phone', value:'phone', sortable: false },
      { text:'Email', value:'email', sortable: false },
      { text:'Purpose', value:'purpose', sortable: true },
      { text:'Submitted On', value:'submitted_on', sortable: true },
      { text:'Status', value:'acknowledged', sortable: true },
    ]
  }),
  watch: {
		options: {
			handler() {
				this.fetchAllInquiries();
			},
			deep: true,
		},
	},
  computed: mapGetters(["getInquiries", "getInquiry"]),
  created(){
    this.fetchAllInquiries();
    this.$store.commit("useDarkTheme", false);
  },
  methods:{
    fetchAllInquiries(){
      this.loading = true;
      let optionsCopy = JSON.parse(JSON.stringify(this.options));
      optionsCopy.search = this.search;
      optionsCopy.type = this.showPendingRecords ? "pending": null;
			this.$store.dispatch("fetchAllInquiries", optionsCopy).finally(()=> this.loading = false);
    },
    acknowledge(id){
      this.patchId = id;
      this.$store.dispatch("updateInquiry", {
        id: id,
        "acknowledged": true
      }).then(()=>this.fetchAllInquiries())
      .finally(()=> {
        this.patchId = -1;
        this.dialog = false;
      });
    },
    openInquiry(id){
      this.loading = true;
      this.$store.dispatch("fetchInquiry", id)
      .then(()=>{
        this.dialog = true;
      }).finally(()=> this.loading = false);
    }
  }
}
</script>

<style>
.dialog-content{
  height: 100vh !important;
  background-color: white;
}

.inquiry-text{
  font-size: 14px !important;
  color: rgba(0, 0, 0, 0.6) !important;
}

.additional-controls{
    display: flex;
    flex-direction: row-reverse;
}
</style>