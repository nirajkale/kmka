<template>
	<div>
		<section class="header" id="home" ref="home">
			<section class="intro-section">
				<h1>Karwa Malani Kalantri</h1>
				<h5>& Associates</h5>
				<p>
					One stop solution for audit, accounts, consultancy & legal services
					for diversified clients in India. <br />ICAI Peer Review certificate
					number - 011319.
				</p>
				<!-- <a href="#contact" class="btn-contact">Scroll Down For More Details</a> -->
        <router-link class="btn-contact" link :to="{ path: 'home', query: { section: 'services' }}">Scroll Down For Details</router-link>
			</section>
		</section>
		<!-- Services -->
		<section class="section-container" id="services" ref="services">
			<h2>Services We Offer</h2>
			<p>
				Our practice areas are Auditing, Assurance, Financial Instituion Audits,
				Financial Services,<br />
				Project Financing, Subsidy Projects, Taxation & Book Keeping
			</p>
			<v-row class="service-row">
				<v-col cols="4" sm="12" md="6" lg="4" xl="4">
					<v-card class="service-col" elevation="2">
						<h3>Auditing and Assurance</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries.
						</p>
						<div class="service-action-items">
							<v-btn text color="#f44336" link :to="{ name: 'services', query: { section: 'audit-assurance' } }"> Learn More </v-btn>
						</div>
					</v-card>
				</v-col>
				<v-col cols="4" sm="12" md="6" lg="4" xl="4">
					<v-card class="service-col" elevation="2">
						<h3>Financial Institution Audits</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries.
						</p>
						<div class="service-action-items">
							<v-btn text color="#f44336" link :to="{ name: 'services', query: { section: 'fin-audits' } }"> Learn More </v-btn>
						</div>
					</v-card>
				</v-col>
				<v-col cols="4" sm="12" md="6" lg="4" xl="4">
					<v-card class="service-col" elevation="2">
						<h3>Financial Services & Subsidy Projects</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries.
						</p>
						<div class="service-action-items">
							<v-btn text color="#f44336" link :to="{ name: 'services', query: { section: 'fin-subsidy' } }"> Learn More </v-btn>
						</div>
					</v-card>
				</v-col>
				<v-col cols="4" sm="12" md="6" lg="4" xl="4">
					<v-card class="service-col" elevation="2">
						<h3>Taxation</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries.
						</p>
						<div class="service-action-items">
							<v-btn text color="#f44336" link :to="{ name: 'services', query: { section: 'taxation' } }"> Learn More </v-btn>
						</div>
					</v-card>
				</v-col>
				<v-col cols="4" sm="12" md="6" lg="4" xl="4">
					<v-card class="service-col" elevation="2">
						<h3>Book Keeping</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries.
						</p>
						<div class="service-action-items">
							<v-btn text color="#f44336" link :to="{ name: 'services', query: { section: 'book-keeping' } }"> Learn More </v-btn>
						</div>
					</v-card>
				</v-col>
				<v-col cols="4" sm="12" md="6" lg="4" xl="4">
					<v-card class="service-col" elevation="2">
						<h3>Company Law Matters</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries.
						</p>
						<div class="service-action-items">
							<v-btn text color="#f44336" link :to="{ name: 'services', query: { section: 'company-law' } }"> Learn More </v-btn>
						</div>
					</v-card>
				</v-col>
			</v-row>
      <p class="approach-segway">If you want more details about we provide above services, checkout 
        <router-link :to="{ path: 'approach'}">Our Approach To An Assignment</router-link></p>
		</section>
		<!-- about us -->
		<section class="section-container" id="about" ref="about">
			<h2>About Us</h2>
			<p>
				One of the fastest growing chartered accountant firm in india with ever
				expanding client base
			</p>
			<div class="about-container">
				<v-row class="about-pointer">
					<v-col cols="6" sm="6">
						<h1>10+</h1>
						<p>Years of Experience</p>
					</v-col>
					<v-col cols="6" sm="6">
						<h1>100+</h1>
						<p>Satisfied Clients</p>
					</v-col>
					<v-col cols="6" sm="6">
						<h1>1000+</h1>
						<p>Proactive & Insightful Audits</p>
					</v-col>
					<v-col cols="6" sm="6">
						<h1>ICAI</h1>
						<p>Peer Review Certified</p>
					</v-col>
				</v-row>
			</div>
		</section>
		<!-- about us -->
		<section class="section-container" id="people" ref="people">
			<h2>People Behind The Scene</h2>
			<p>
				Our team is made with skilled & highly motiviated individuals, who have
				gained in-depth experience in their respective fields after years of
				hard work.
			</p>
			<div class="profile-into">
				<h4><span>Meet Our Leaders</span></h4>
			</div>
			<div class="profile-card">
				<img src="@/assets/durgesh.jpeg" alt="" />
				<div class="profile-text">
					<h3>Durgesh kalantri</h3>
					<p>
						A qualified Chartered Accountant from Mumbai, He is an ex Employee
						of PWC Mumbai Office. During his employment he acted as a Statutory
						Auditor of Raymond Limited, Nilkamal Limited and United Breweries
						Limited. He is a founder partner in KMK associates and is known for
						his skills in Internal Audits, VAT Audits & Direct Tax Consultancy.
						Presently, he is VAT Auditor of United Breweries Limited also he is
						acting as a solicitor for UB for LBT, Direct Tax Matters, GST and
						VAT matters.
					</p>
					<div class="profile-subtext">
						<v-chip outlined class="mr-2" color="black" label small>
							<v-icon left small> mdi-email-outline </v-icon>
							durgeshkalantri@gmail.com
						</v-chip>
						<v-chip outlined class="mr-2" color="black" label small>
							<v-icon left small> mdi-badge-account-horizontal </v-icon>
							CA Membership No. 141042
						</v-chip>
						<v-chip outlined class="mr-2" color="black" label small>
							<v-icon left small> mdi-cellphone </v-icon>
							+91 98602 57457
						</v-chip>
					</div>
				</div>
			</div>
			<div class="profile-card">
				<img src="@/assets/sagar.jpeg" alt="" />
				<div class="profile-text">
					<h3>Sagar Malani</h3>
					<p>
						A qualified CA & CMA is also one of the founder partners of KMK
						associates. He has an experience set in the Service Tax and MVAT
						Related matters. He is associated with various study forums for
						knowledge sharing and updates in the field of MVAT & Service Tax.
						Mr. Sagar has his expertise in the Taxation matters of BOT contracts
						and EPC Contracts. He has worked as in internal auditor for Ashoka
						Buildcon Limited.
					</p>
					<div class="profile-subtext">
						<v-chip outlined class="mr-2" color="black" label small>
							<v-icon left small> mdi-email-outline </v-icon>
							casagarmalani@gmail.com
						</v-chip>
						<v-chip outlined class="mr-2" color="black" label small>
							<v-icon left small> mdi-badge-account-horizontal </v-icon>
							CA Membership No. 145049
						</v-chip>
						<v-chip outlined class="mr-2" color="black" label small>
							<v-icon left small> mdi-cellphone </v-icon>
							+91 97662 25588
						</v-chip>
					</div>
				</div>
			</div>
			<div class="profile-card">
				<img src="@/assets/darshan1.jpeg" alt="" />
				<div class="profile-text">
					<h3>Darshan Karwa</h3>
					<p>
						A qualified CA is also one of the founder partners of KMK
						associates. He has an experience in the field of Project financing
						and Assurance related services. Mr Darshan has an expertise in
						Assurance services. He is also known for his skills in mergers and
						aquisitions. He was one of the main consultants in the IDFC demerger
						scheme, wherein the technical consultancy was provided by KMK to
						Mckinsey.
					</p>
					<div class="profile-subtext">
						<v-chip outlined class="mr-2" color="black" label small>
							<v-icon left small> mdi-email-outline </v-icon>
							ca.darshankarwa@gmail.com
						</v-chip>
						<v-chip outlined class="mr-2" color="black" label small>
							<v-icon left small> mdi-badge-account-horizontal </v-icon>
							CA Membership No. 139341
						</v-chip>
						<v-chip outlined class="mr-2" color="black" label small>
							<v-icon left small> mdi-cellphone </v-icon>
							+91 75885 53342
						</v-chip>
					</div>
				</div>
			</div>
			<div class="profile-into">
				<h4><span>Meet The Team</span></h4>
				<p>
					A perfect blend of creativity and professional wizardry.The best
					people formula for great projects!
				</p>
				<img class="team-photo" src="@/assets/team.jpg" alt="" />
			</div>
		</section>
		<section class="section-container" id="contact" ref="contact">
			<h2>Contact Us</h2>
			<p>
				You can either reach out to us in one of our offices or give us a call.
				You can also fill out below form & we'll reach out to you within a
				bussiness day.
			</p>
			<div class="contact-layout">
				<div class="contact-physical">
					<h5>Mumbai Office</h5>
					<p>
						03, Ratnamani Towers, MMGS Marg,<br />
						Opp. Dadar Railway Station, Dadar<br />
						(E),Mumbai - 400014 Contact +919860257457<br />
						Mail–kmkassociatesca@gmail.com
					</p>
					<h5>Nashik Office</h5>
					<p>
						Flat No. 1, Aditya Appartment,<br />
						Above HDFC Bank, Matoshree Nagar, <br />
						Nashik, Maharashtra 422002
					</p>
				</div>
				<div class="contact-website">
					<validation-observer ref="observer">
						<form @submit.prevent="submit">
							<validation-provider
								v-slot="{ errors }"
								name="Name"
								rules="required|max:100"
							>
								<v-text-field
									v-model="inquiry.name"
									:error-messages="errors"
									label="Name"
									required
								></v-text-field>
							</validation-provider>
							<validation-provider
								v-slot="{ errors }"
								name="phoneNumber|max:10"
								rules="required"
							>
								<v-text-field
									v-model="inquiry.phone"
									:counter="10"
									:error-messages="errors"
									label="Phone Number"
									required
								></v-text-field>
							</validation-provider>
							<validation-provider
								v-slot="{ errors }"
								name="email"
								rules="required"
							>
								<v-text-field
									v-model="inquiry.email"
									:error-messages="errors"
									label="E-mail"
									required
								></v-text-field>
							</validation-provider>
							<validation-provider
								v-slot="{ errors }"
								name="select"
								rules="required"
							>
								<v-select
									v-model="inquiry.purpose"
									:items="items"
									:error-messages="errors"
									label="Purpose"
									required
								></v-select>
							</validation-provider>
							<validation-provider v-slot="{ errors }" name="desc">
								<v-textarea
									v-model="inquiry.desc"
									:items="items"
									:error-messages="errors"
									label="Description"
									rows="2"
								>
								</v-textarea>
							</validation-provider>
							<div class="form-submit">
								<v-btn outlined class="mr-4" type="submit" :loading="loading"> submit </v-btn>
								<v-btn outlined @click="clear"> clear </v-btn>
							</div>
						</form>
					</validation-observer>
				</div>
			</div>
		</section>
	</div>
</template>

<script>

import {
	ValidationObserver,
	ValidationProvider,
	setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

export default {
	components: { ValidationObserver, ValidationProvider },
	data() {
		return {
      loading: false,
			inquiry: {
        name: "",
        phone: "",
        email: "",
        purpose: null,
        desc: "",
      },
			items: ["Service Inquiry", "Need Help", "Existing Client", "Other"],
		};
	},
  mounted(){
    this.$store.commit("useDarkTheme", true);
    let section = this.$route.query.section;
    if(section!=undefined && section!=''){
      this.scrollTo(section);
    }
  },
	methods: {
    scrollTo(section){
      var element = this.$refs[section];
      element.scrollIntoView({ behavior: 'smooth' });
    },
    clear(){
      this.inquiry = {
        name: "",
        phone: "",
        email: "",
        purpose: null,
        desc: "",
      };
    },
		submit() {
			this.loading = true;
			this.$store
				.dispatch("createInquiry", this.inquiry)
				.then(() => {
					this.clear();
					this.$store.commit(
						"showNotification",
						"Your inquiry is successfully submitted"
					);
				})
				.catch((err) => {
					console.log(err);
					if (err.response.status == 400) {
						this.$refs.observer.setErrors(err.response.data);
					} else {
						this.$store.commit("showNotification", "Something went wrong");
					}
				})
				.finally(() => {
					this.loading = false;
				});
		},
	},
};
</script>

<style scoped></style>
