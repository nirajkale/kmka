<template>
  <v-snackbar v-model="show">
    {{ message }}
    <!-- <v-btn text @click="show = false">Close</v-btn> -->
    <template v-slot:action="{ attrs }">
      <v-btn color="pink" text v-bind="attrs" @click="show = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: "",
      color: "",
    };
  },

  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "showNotification") {
        this.message = state.notificationText;
        this.show = true;
      }
    });
  },
};
</script>
