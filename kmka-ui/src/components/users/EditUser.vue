<template>
	<div>
		<v-row justify="center">
			<v-dialog persistent max-width="600px" v-model="dialog">
				<v-card v-if="userDetail != null">
					<v-card-title>
						<span class="headline">Edit User</span>
					</v-card-title>
					<v-card-text>
						<validation-observer ref="observer">
							<form @submit.prevent="submit">
								<validation-provider
									v-slot="{ errors }"
									name="name"
									rules="required"
								>
									<v-text-field
										name="name"
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
										label="Firstname*"
										v-model="userDetail.first_name"
										:error-messages="errors"
										required
									></v-text-field>
								</validation-provider>
								<v-slide-group>
									<v-checkbox
										v-model="userDetail.is_active"
										label="Is Active"
										class="shrink mr-2 mt-0"
									></v-checkbox>
									<v-checkbox
										v-model="userDetail.is_staff"
										class="shrink mr-2 mt-0"
										label="Is Staff"
									></v-checkbox>
								</v-slide-group>
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
	name: "EditUser",
	components: {
		ValidationProvider,
		ValidationObserver,
	},
	props: {
		id: {
			type: Number,
			required: false,
		},
		showDialog: {
			type: Boolean,
			required: false,
		},
	},
	computed: {},
	data: () => ({
		dialog: false,
		loading: false,
		userDetail: {},
	}),
	watch: {
		id: function(newId) {
			if (newId != null) {
				this.$store.dispatch("fetchUserById", newId).then((editData) => {
					this.userDetail = editData;
					this.dialog = true;
				});
			}
		},
	},
	methods: {
		clear() {
			this.userDetail.username = null;
			this.userDetail.firstname = null;
			this.userDetail.is_staff = false;
			this.userDetail.is_active = false;
			this.$nextTick(() => {
				this.$refs.observer.reset();
			});
		},
		closeDialog() {
			this.dialog = false;
			this.$emit("closed");
		},
		submit() {
			this.loading = true;
			let editUser = {
				id: this.userDetail.uri.id,
				data: this.userDetail,
			};
			this.$store
				.dispatch("editUserDetail", editUser)
				.then(() => {
					this.closeDialog();
					this.clear();
					this.$store.commit("showNotification", "Changes saved");
				})
				.catch((err) => {
					console.log(err);
					if (err.response.status == 400) {
						console.log(err.response.data);
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
<style lang="scss" scoped>
.network-checkbox {
	margin-bottom: 20px;
}
.v-text-field > .v-input__control > .v-input__slot:before {
	border-color: inherit;
	border-style: solid;
	border-width: thin 0 0 0;
}
</style>
