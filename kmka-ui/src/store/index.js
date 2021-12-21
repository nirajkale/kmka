import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './authentication'
import users from './users';
import { APIClient } from './axio-api';
import router from '../router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    notificationText: "",
    darkMaster: true,
    globalLoading: false,
  },
  getters:{
    useDarkTheme: state => state.darkMaster
  },
  mutations: {
    showNotification(state, text) {
      state.notificationText = text;
    },
    setGlobalLoading(state, flag) {
      state.globalLoading = flag
    },
    useDarkTheme(state, flag) {
      state.darkMaster = flag
    },
  },
  actions: {
  },
  modules: {
    authentication,
    users
  }
})

export default store;

const requestHandler = (request) => {
  if (request.method == "get") store.commit("setGlobalLoading", true);
  return request;
}

const errorHandler = (error) => {
  if(error.response.status==401){
    store.commit("showNotification", "Looks like you're logged out!");
    router.push({ name: "login" });
  }
  else if(error.response.status!=400){
      store.commit("showNotification", "Something went wrong");
  }
  store.commit("setGlobalLoading", false);
  return Promise.reject({ ...error });
}

const successHandler = (response) => {
  store.commit("setGlobalLoading", false);
  return response;
}

APIClient.interceptors.request.use(
  request => requestHandler(request)
);

APIClient.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
);