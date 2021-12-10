<template>
	<div class="overflow-hidden">
		<v-app-bar
			absolute
			color="#193894"
			dark
			shrink-on-scroll
			prominent
			src="@/assets/room.jpg"
			fade-img-on-scroll
			scroll-target="#scrolling-techniques-5"
			scroll-threshold="500"
		>
			<template v-slot:img="{ props }">
				<v-img
					v-bind="props"
					gradient="to top right, rgba(19,84,122,.5), rgba(19,84,122,.5)"
				></v-img>
			</template>
			<!-- rgba(240, 127, 148,.8)  gradient="to top right, rgba(19,84,122,.5), rgba(19,84,122,.5)" -->
			<v-app-bar-nav-icon></v-app-bar-nav-icon>

			<v-app-bar-title
				class="text-xs-caption text-sm-caption text-md-h5 text-lg-h5"
				>Karwa Malani Kalantri & Associates CAs</v-app-bar-title
			>
			<!-- <div>Karwa Malani Kalantri & Associates</div> -->

			<v-spacer></v-spacer>

			<v-btn icon>
				<v-icon>mdi-magnify</v-icon>
			</v-btn>

			<v-btn icon>
				<v-icon>mdi-heart</v-icon>
			</v-btn>

			<v-btn icon>
				<v-icon>mdi-dots-vertical</v-icon>
			</v-btn>
		</v-app-bar>
		<!-- <div class="">
			<router-view :key="$route.fullPath"></router-view>
		</div> -->
		<v-sheet
			id="scrolling-techniques-5"
			class="overflow-y-auto"
			max-height="1200"
		>
			<div class="main-container">
				<router-view :key="$route.fullPath"></router-view>
			</div>
		</v-sheet>
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
