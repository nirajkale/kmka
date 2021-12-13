<template>
	<div class="overflow-hidden">
		<meta name="viewport" content="with=device-width, initial-scale=1.0" />
		<v-app-bar fixed flat class="floating-app-bar" dark>
			<v-app-bar-nav-icon
				@click="drawer = true"
				color="white"
			></v-app-bar-nav-icon>
			<!-- <v-toolbar-title>Title</v-toolbar-title> -->
			<v-spacer></v-spacer>
			<div class="nav-links">
				<ul>
					<li><a href="#home">HOME</a></li>
					<li><a href="#about">ABOUT</a></li>
					<li><a href="#services">SERVICES</a></li>
					<li><a href="#contact">CONTACT</a></li>
					<li><a href="">LOGIN</a></li>
				</ul>
			</div>
		</v-app-bar>
		<v-navigation-drawer v-model="drawer" fixed temporary dark color="#f44336">
			<v-list nav dense>
				<v-list-item-group
					v-model="group"
					active-class="deep-purple--text text--accent-4"
				>
					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-account</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Login</v-list-item-title>
					</v-list-item>
					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-home</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Home</v-list-item-title>
					</v-list-item>
					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-account-box</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Contact</v-list-item-title>
					</v-list-item>
					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-format-list-bulleted-type</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Services</v-list-item-title>
					</v-list-item>
					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-information-outline</v-icon>
						</v-list-item-icon>
						<v-list-item-title>About</v-list-item-title>
					</v-list-item>
					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-download</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Download Profile Brouchure</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
		<router-view :key="$route.fullPath"></router-view>
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
export default {
	data: () => ({
		drawer: false,
		group: null,
	}),
};
</script>

<style>
.main-container {
	height: 1500px;
	margin-top: 130px;
}
</style>
