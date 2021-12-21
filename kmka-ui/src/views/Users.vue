<template>
	<div v-if="getUsers" class="padded-page">
		<v-card>
			<v-card-title>
				Manage Users
				<v-spacer></v-spacer>
				<v-text-field
					append-icon="mdi-magnify"
					label="Search"
					single-line
					hide-details
					v-model="search"
					v-on:keyup="fetchAllUsers"
				></v-text-field>
			</v-card-title>
			<v-data-table
				dense
				:headers="headers"
				fixed-header
				:items="getUsers.results"
				:options.sync="options"
				:server-items-length="getUsers.count"
			>
				<template v-slot:item.is_active="{ item }">
					<span v-if="item.is_active">
						<v-chip color="primary" small text-color="white">Yes </v-chip>
					</span>
					<span v-else>
						<v-chip color="secondary" small text-color="white">No</v-chip>
					</span>
				</template>
				<template v-slot:item.is_staff="{ item }">
					<span v-if="item.is_staff">
						<v-chip color="primary" small text-color="white">Yes</v-chip></span
					>
					<span v-else>
						<v-chip color="secondary" small text-color="white">No</v-chip></span
					>
				</template>
				<template v-slot:item.actions="{ item }">
					<v-btn
						small
						icon
						@click="editId = item.uri.id"
						:loading="item.uri.id == editId"
						v-tooltip="'Edit User'"
						class="mr-1"
						><v-icon>mdi-pencil</v-icon></v-btn
					>
					<v-btn
						small
						icon
						@click="confirmUserDeletion(item.uri.id)"
						:loading="item.uri.id == deleteId"
						v-tooltip="'Delete User'"
						class="mr-1"
						><v-icon>mdi-delete</v-icon></v-btn
					>
					<v-btn
						small
						icon
						@click="confirmResetUserPassword(item.uri.id)"
						:loading="item.uri.id == resetId"
						v-tooltip="'Reset Password'"
						><v-icon>mdi-lock-reset</v-icon></v-btn
					>
				</template>
			</v-data-table>
		</v-card>
		<v-dialog persistent max-width="550px" v-model="modalFlags.deletion">
			<v-card>
				<v-card-title>
					<span class="headline">Delete User</span>
				</v-card-title>
				<v-card-text
					>Are you sure you want to delete this user ?
					<div class="mt-4">
						<v-btn
							dark
							class="red"
							@click="deleteUser()"
							:loading="loadingFlags.delete"
						>
							Delete
						</v-btn>
						<v-btn color="secondary" text @click="resetModalStates()">
							Cancel
						</v-btn>
					</div>
				</v-card-text>
			</v-card>
		</v-dialog>
		<v-dialog persistent max-width="550px" v-model="modalFlags.reset">
			<v-card>
				<v-card-title>
					<span class="headline">Reset User Password</span>
				</v-card-title>
				<v-card-text
					>Are you sure you want to reset password for this user ?
					<div class="mt-4">
						<v-btn
							color="primary"
							@click="resetUserPassword()"
							class="white--text"
							:loading="loadingFlags.resetPassword"
						>
							Reset
						</v-btn>
						<v-btn color="secondary" text @click="resetModalStates()">
							Cancel
						</v-btn>
					</div>
				</v-card-text>
			</v-card>
		</v-dialog>
		<v-dialog persistent max-width="550px" v-model="modalFlags.resetPassword">
			<v-card>
				<v-card-title>
					<span class="headline">Password has been reset successfully</span>
				</v-card-title>
				<v-card-text>
					New Password is: {{ resetPasswordValue }}
					<div class="mt-4">
						<v-btn color="secondary" text @click="resetModalStates()">
							Close
						</v-btn>
					</div>
				</v-card-text>
			</v-card>
		</v-dialog>
		<v-btn
			dark
			class="floating--add primary"
			elevation="5"
			fab
			icon
			large
			raised
			v-on:click="modalFlags.create = true"
			v-tooltip="'Add New User'"
			><v-icon>mdi-plus</v-icon></v-btn
		>
		<AddUser
			v-bind:showDialog="modalFlags.create"
			@closed="modalClosed('create')"
		/>
		<EditUser v-bind:id="editId" @closed="modalClosed('edit')" />
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import AddUser from "../components/users/AddUser";
import EditUser from "../components/users/EditUser";
export default {
	name: "Users",
	components: { AddUser, EditUser },
	data: () => ({
		search: "",
		headers: [
			{ text: "Username", value: "username" },
			{ text: "Name", value: "first_name", sortable: false },
			{ text: "Is Active", value: "is_active", sortable: false },
			{ text: "Is Staff", value: "is_staff", sortable: false },
			{ text: "Actions", value: "actions", sortable: false },
		],
		options: {},
		modalFlags: {
			create: false,
			deletion: false,
			reset: false,
			resetPassword: false,
		},
		editId: null,
		deleteId: null,
		resetId: null,
    releaseLockId: null,
		resetPasswordValue: "",
		loadingFlags: {
			edit: false,
			delete: false,
			resetPassword: false,
      reset:false,
      releaseLock:false
		},
	}),
	watch: {
		options: {
			handler() {
				this.fetchAllUsers();
			},
			deep: true,
		},
	},
	computed: mapGetters(["getUsers"]),
	created() {
		this.fetchAllUsers();
    this.$store.commit("useDarkTheme", false);
	},
	methods: {
		fetchAllUsers() {
			this.options.search = this.search;
			this.$store.dispatch("fetchAllUsers", this.options);
		},
		confirmUserDeletion(id) {
			this.deleteId = id;
			this.modalFlags.deletion = true;
		},
		deleteUser() {
			this.loadingFlags.delete = true;
			this.$store
				.dispatch("deleteUser", this.deleteId)
				.then(() => {
					this.$store.commit(
						"showNotification",
						"User successfully deleted"
					);
					this.fetchAllUsers();
				})
				.finally(() => {
					this.deleteId = null;
					this.modalFlags.deletion = false;
					this.loadingFlags.delete = false;
				});
		},
		confirmResetUserPassword(id) {
			this.resetId = id;
			this.modalFlags.reset = true;
		},
		resetUserPassword() {
			this.loadingFlags.resetPassword = true;
			this.$store
				.dispatch("resetUserPassword", this.resetId)
				.then((data) => {
					this.modalFlags.resetPassword = true;
					this.resetPasswordValue = data.new_password;
					this.closeDialog();
					this.clear();
					this.$store.commit(
						"showNotification",
						"User password has been reset"
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
					this.modalFlags.reset = false;
					this.loadingFlags.resetPassword = false;
				});
		},
		modalClosed(modalType) {
			if (modalType == "create") {
				this.modalFlags.create = false;
			} else {
				this.editId = null;
			}
			this.fetchAllUsers();
		},
		resetModalStates() {
			this.modalFlags = {
				create: false,
				deletion: false,
				reset: false,
				resetPassword: false,
			};
			this.editId = null;
			this.deleteId = null;
			this.resetId = null;
		},
	},
};
</script>
<style scoped>

</style>
