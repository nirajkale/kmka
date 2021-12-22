<template>
	<div class="overflow-hidden">
		<meta name="viewport" content="with=device-width, initial-scale=1.0" />
		<v-app-bar fixed flat class="floating-app-bar" dark>
			<v-app-bar-nav-icon
				@click="drawer = true"
				:color="themedColor"
			></v-app-bar-nav-icon>
			<!-- <v-toolbar-title>Title</v-toolbar-title> -->
			<v-spacer></v-spacer>
			<div :class="`${useDarkTheme ? 'nav-links dark' : 'nav-links'}`">
				<ul>
					<li><router-link :to="{ path: 'home', query: { section: 'home' }}">HOME</router-link></li>
          <li><router-link :to="{ path: 'home', query: { section: 'services' }}">SERVICES</router-link></li>
          <li><router-link :to="{ path: 'home', query: { section: 'about' }}">ABOUT</router-link></li>
          <li><router-link :to="{ path: 'home', query: { section: 'contact' }}">CONTACT</router-link></li>
          <li v-if="isAuthenticated">
            <v-chip outlined pill :color="themedColor"> {{userIinitials}} <v-icon right>mdi-account-outline</v-icon></v-chip>
          </li>
					<li v-else><router-link to="login">LOGIN</router-link></li>
				</ul>
			</div>
		</v-app-bar>
		<v-navigation-drawer v-model="drawer" fixed temporary dark color="#f44336">
			<v-list nav dense class="navigator">
				<v-list-item v-if="isAuthenticated" @click="logout()">
        <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{name:'login'}" v-if="!isAuthenticated" >
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ path: 'home', query: { section: 'home' }}">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ path: 'home', query: { section: 'services' }}">
          <v-list-item-icon>
            <v-icon>mdi-format-list-bulleted-type</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Services</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ path: 'home', query: { section: 'about' }}">
          <v-list-item-icon>
            <v-icon>mdi-information-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ path: 'home', query: { section: 'contact' }}">
          <v-list-item-icon>
            <v-icon>mdi-account-box</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-download</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Download Profile Brouchure</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ name: 'inquiries' }" v-if="isAuthenticated">
          <v-list-item-icon>
            <v-icon>mdi-help-box</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Manage Inquiries</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ name: 'users' }" v-if="isAuthenticated">
          <v-list-item-icon>
            <v-icon>mdi-account-supervisor</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Manage Users</v-list-item-title>
        </v-list-item>
			</v-list>
		</v-navigation-drawer>
		<router-view :key="$route.fullPath"></router-view>
		<Snackbar></Snackbar>
		<div class="footer">
			<v-row>
				<v-col>
					<h4>KMK & Associates</h4>
					<h5>Follow us on social media</h5>
					<div class="social-links">
						<v-btn icon color="blue" dark>
							<v-icon>mdi-linkedin</v-icon>
						</v-btn>
						<v-btn icon color="blue accent-2" dark>
							<v-icon>mdi-facebook</v-icon>
						</v-btn>
						<v-btn icon color="pink" dark>
							<v-icon>mdi-instagram</v-icon>
						</v-btn>
						<v-btn icon color="blue darken-1" dark>
							<v-icon>mdi-twitter</v-icon>
						</v-btn>
					</div>
					<h5>© 2022 KMKA</h5>
				</v-col>
				<v-col>
					<h4>Support</h4>
					<ul>
						<li><a href="">Download Profile Brouchure</a></li>
						<li><a href="">Mission Statement</a></li>
						<li><a href="">Our Approach To Assignment</a></li>
					</ul>
				</v-col>
				<v-col>
					<h5>Developed & Maintained By</h5>
					<h5>Niraj Kale | nirajkale30@gmail.com</h5>
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import Snackbar from "../components/Snackbar.vue";

export default {
	name: "Master",
	components: { Snackbar },
	data: () => ({
		drawer: false,
		group: null,
	}),
	computed: {
		...mapGetters(["userObj", "isAuthenticated", "useDarkTheme"]),
    themedColor: function(){
      return this.useDarkTheme ? "white": "black";
    },
		userIinitials: function () {
			var initials = "??";
			if (this.userObj) {
				var firstChar =
					this.userObj.first_name && this.userObj.first_name.length > 0
						? this.userObj.first_name[0]
						: "?";
				var lastChar =
					this.userObj.last_name && this.userObj.last_name.length > 0
						? this.userObj.last_name[0]
						: this.userObj.first_name && this.userObj.first_name.length > 1
						? this.userObj.first_name[1]
						: "?";
				initials = firstChar + lastChar;
				initials = initials.toUpperCase();
			}
			return initials;
		},
	},
	methods: {
		logout() {
			localStorage.removeItem("authToken") || null;
			localStorage.removeItem("authUser") || null;
			this.$router.push({ name: "login" });
		},
    jumpTo(section){
      window.location.hash = section;
      this.drawer = false;
    }
	},
};
</script>

<style>

.theme--dark.v-list-item--active:hover::before, .theme--dark.v-list-item--active::before{
  opacity: 0;
}

</style>
