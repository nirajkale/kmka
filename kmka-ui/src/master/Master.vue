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
					<li><a href="">ABOUT</a></li>
					<li><a href="#services">SERVICES</a></li>
					<li><a href="">CONTACT</a></li>
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
							<v-icon>mdi-home</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Home</v-list-item-title>
					</v-list-item>

					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-account</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Account</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
		<router-view :key="$route.fullPath"></router-view>
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
