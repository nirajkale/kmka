<template>
  <div class="padded-page">
    <v-row>
      <v-col cols="6" sm="12" xl="4" md="6">
        <v-card v-if="fetchInquiry">
          <v-card-title>
            Inquiry from {{getInquiry.name}}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name:"Inquiry",
  computed: mapGetters(["getInquiry"]),
  data:()=>({}),
  created(){
    this.fetchInquiry();
  },
  methods:{
    fetchInquiry(){
      this.$store.dispatch("fetchInquiry", this.$route.params.id);
    }
  }
}
</script>

<style>

</style>