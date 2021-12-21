<template>
	<div class="login-bg">
		<v-row align="center" justify="center">
			<v-col cols="4" sm="12" md="4" lg="4" xl="4">
				<div class="login-area">
					<h1>KMKA Administration</h1>
					<v-card-text>
						<validation-observer ref="observer">
							<form @submit.prevent="submit">
								<validation-provider
									v-slot="{ errors }"
									name="username"
									rules="required"
								>
									<v-text-field
										v-model="username"
										:error-messages="errors"
										prepend-icon="mdi-account-circle"
										label="Username"
										required
									></v-text-field>
								</validation-provider>
								<validation-provider
									v-slot="{ errors }"
									name="password"
									rules="required"
								>
									<v-text-field
										v-model="password"
										:error-messages="errors"
										type="password"
										prepend-icon="mdi-lock"
										label="Password"
										required
									></v-text-field>
								</validation-provider>
								<v-btn
									outlined
									fab
									icon
									class="mr-4"
									type="submit"
									:loading="loading"
									><v-icon>mdi-login</v-icon></v-btn
								>
								<!-- <v-btn @click="clear">clear</v-btn> -->
							</form>
						</validation-observer>
					</v-card-text>
				</div>
			</v-col>
		</v-row>
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
	name: "Login",
	components: {
		ValidationProvider,
		ValidationObserver,
	},
	data: () => ({
		username: "",
		password: "",
		loading: false,
	}),
	methods: {
		submit() {
			this.$refs.observer.validate();
			this.loading = true;
			this.$store
				.dispatch("login", {
					username: this.username,
					password: this.password,
				})
				.then((data) => {
					this.$router.push({ name: "home" });
					console.log(data);
				})
				.catch((err) => {
					if (err.response.status == 400 || err.response.status == 401) {
						this.$refs.observer.setErrors({
							username: [""],
							password: ["Invalid Username or Password"],
						});
						console.log(err);
					}
				})
				.finally(() => {
					this.loading = false;
				});
		},
		clear() {
			this.username = "";
			this.password = "";
		},
	},
};
</script>

<style scoped>
.login-area {
	margin-top: 50%;
	text-align: center;
}

.login-bg {
	height: 100vh;
	overflow-x: hidden;
}

h1 {
	font-size: 28px;
	font-weight: 300;
}

@media (max-width: 700px) {
	h1 {
		font-size: 20px;
	}
}
</style>
