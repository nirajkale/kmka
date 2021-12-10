<template>
	<v-app>
		<v-main class="">
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: "App",
	components: {},
	data: () => ({}),
	created() {
		// document
		// 	.querySelector("meta[name=viewport]")
		// 	.setAttribute("content", "width=device-width, initial-scale=0.8");
	},
};
</script>
