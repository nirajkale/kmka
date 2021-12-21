<template>
	<div>
		<v-row justify="center">
			<v-dialog persistent max-width="600px" v-model="showDialog">
				<v-card>
					<v-card-title>
						<span class="headline">New User</span>
					</v-card-title>
					<v-card-text>
						<validation-observer ref="observer">
							<form @submit.prevent="submit">
								<validation-provider
									v-slot="{ errors }"
									name="username"
									rules="required"
								>
									<v-text-field
										name="username"
										label="Name*"
										v-model="userDetail.username"
										:error-messages="errors"
										required
									></v-text-field>
								</validation-provider>
								<validation-provider
									v-slot="{ errors }"
									name="firstname"
									rules="required"
								>
									<v-text-field
										name="firstname"
										label="FirstName*"
										v-model="userDetail.firstname"
										:error-messages="errors"
										required
									></v-text-field>
								</validation-provider>
								<validation-provider
									v-slot="{ errors }"
									name="lastname"
									rules="required"
								>
									<v-text-field
										name="lastname"
										label="LastName*"
										v-model="userDetail.lastname"
										:error-messages="errors"
										required
									></v-text-field>
								</validation-provider>
								<validation-provider
									v-slot="{ errors }"
									name="password"
									rules="required"
								>
									<v-text-field
										name="password"
										label="Password*"
										type="password"
										v-model="userDetail.password"
										:error-messages="errors"
										required
									></v-text-field>
								</validation-provider>
								<validation-provider
									v-slot="{ errors }"
									name="confirmPassword"
									rules="required"
								>
									<v-text-field
										name="confirmPassword"
										label="Confirm Password*"
										type="password"
										v-model="userDetail.confirm_password"
										:error-messages="errors"
										required
									></v-text-field>
								</validation-provider>
								<v-container class="px-0" fluid>
									<v-checkbox
										v-model="userDetail.is_staff"
										label="Is Staff"
										class="shrink mr-2 mt-0"
									></v-checkbox>
								</v-container>
								<v-btn type="submit" color="primary" :loading="loading"
									>Save</v-btn
								>
								<v-btn text @click="closeDialog(false)">Close</v-btn>
							</form>
						</validation-observer>
					</v-card-text>
				</v-card>
			</v-dialog>
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
	name: "NewUser",
	components: {
		ValidationProvider,
		ValidationObserver,
	},
	props: {
		showDialog: {
			type: Boolean,
			required: false,
		},
	},
	data: () => ({
		loading: false,
		snackbar: false,
		snackText: "",
		userDetail: {
			username: null,
			firstname: null,
			lastname: null,
			confirmPassword: null,
			is_staff: false,
		},
	}),
	methods: {
		closeDialog: function(saved) {
      this.clear();
			this.$emit("closed", saved);
		},
		clear() {
			this.userDetail.username = null;
			this.userDetail.firstname = null;
			this.userDetail.lastname = null;
			this.userDetail.password = null;
			this.userDetail.confirm_password = null;
			this.userDetail.is_staff = false;
			this.$nextTick(() => {
				this.$refs.observer.reset();
			});
		},
		submit() {
			this.loading = true;
			this.$store
				.dispatch("createNewUser", this.userDetail)
				.then(() => {
					this.closeDialog();
					this.clear();
					this.$store.commit(
						"showNotification",
						"New User Successfully Created"
					);
				})
				.catch((err) => {
					console.log(err);
					if (err.response.status == 400) {
						this.$refs.observer.setErrors(err.response.data);
					} else {
						this.$store.commit("showNotification", "Something went wrong");
						this.closeDialog();
					}
				})
				.finally(() => {
					this.loading = false;
				});
		},
	},
};
</script>
