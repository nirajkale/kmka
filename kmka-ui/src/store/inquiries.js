import { APIClient } from './axio-api';
import * as utils from './utils'

const state = {
  inquiry: null,
  inquiries: null
}

const getters = {
  getInquiry: state => state.inquiry,
  getInquiries: state => state.inquiries
}

const mutations = {
  SET_INQUIRY: (state, inquiry) => (state.inquiry = inquiry),
  SET_INQUIRIES: (state, inquiries) => (state.inquiries = inquiries)
}

const actions = {
  fetchAllInquiries({ commit, rootGetters }, options){
    return new Promise((resolve, reject) => {
      var baseUrl = utils.prepareURL(`inquiries/?`, options);
      APIClient.get(baseUrl, rootGetters.getAuthHeaders
      ).then(function (response) {
        commit('SET_INQUIRIES', response.data);
        resolve(response.data);
      }).catch(function (error) {
        console.log(error);
        reject(error);
      });

    });
  },
  fetchInquiry({ commit, rootGetters }, id){
    return new Promise((resolve, reject) => {
      APIClient.get(`inquiries/${id}`, rootGetters.getAuthHeaders
      ).then(function (response) {
        resolve(response.data);
        commit('SET_INQUIRY', response.data)
      }).catch(function (error) {
        console.log(error);
        reject(error);
      });
    });
  },
  createInquiry({ rootGetters }, inquiry){
    return new Promise((resolve, reject) => {
      APIClient.post('inquiries/', inquiry, rootGetters.getAuthHeaders
      ).then(function (response) {
        resolve(response.data);
      }).catch(function (error) {
        console.log(error);
        reject(error);
      });
    });
  },
  updateInquiry({ rootGetters }, inquiry){
    return new Promise((resolve, reject) => {
      APIClient.patch(`inquiries/${inquiry.id}`, inquiry, rootGetters.getAuthHeaders
      ).then(function (response) {
        resolve(response.data);
      }).catch(function (error) {
        console.log(error);
        reject(error);
      });
    });
  },
  downloadBrochure({ rootGetters },){
    return new Promise((resolve, reject)=>{
      APIClient.get('inquiries/download-brochure',
      rootGetters.getAuthHeaders)
      .then((response) => resolve(response.data)).catch(()=> reject());
    })
  }
}

export default {
    state,
    getters,
    actions,
    mutations,
}