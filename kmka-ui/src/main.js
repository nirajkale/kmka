import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import { ValidationProvider, extend } from 'vee-validate';
import { required, max } from 'vee-validate/dist/rules';
import VTooltip from "v-tooltip";
import './styles/tooltip.css'
import './styles/main.css'
import './styles/services.css'
import './styles/contacts.css'
import './styles/profiles.css'
import './styles/approach.css'

import { localdatetime_fn } from './filters'

Vue.config.productionTip = false
Vue.use(VTooltip);
Vue.filter('localdatetime', localdatetime_fn)

extend('required', {
  ...required,
  message: 'This field is required'
});

extend('max', {
  ...max,
  message: 'Max allowed character count exceeded'
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
