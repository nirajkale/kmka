import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import VTooltip from "v-tooltip";
import './styles/tooltip.css'
import './styles/main.css'
import './styles/contacts.css'
import './styles/profiles.css'

Vue.config.productionTip = false
Vue.use(VTooltip);

extend('required', {
  ...required,
  message: 'This field is required'
});

new Vue({
  components:{
    ValidationProvider
  },
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
