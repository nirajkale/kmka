import { APIClient } from './axio-api';
import * as utils from './utils'

const state = {
    users: null,
    user: null,
}

const getters = {
    getUsers: state => state.users
}
const mutations = {
    SET_USERS: (state, users) => (state.users = users),
    SET_USER: (state, user) => (state.user = user),
}

const actions = {
    fetchAllUsers({ commit, rootGetters }, options) {
        return new Promise((resolve, reject) => {
            var baseUrl = utils.prepareURL(`users/?`, options);
            APIClient.get(baseUrl, rootGetters.getAuthHeaders
            ).then(function (response) {
                commit('SET_USERS', response.data);
                resolve(response.data);
            }).catch(function (error) {
                console.log(error);
                reject(error);
            });

        });
    },
    deleteUser({ rootGetters }, deleteUserId) {
        return new Promise((resolve, reject) => {
            APIClient.delete(`users/${deleteUserId}`, rootGetters.getAuthHeaders
            ).then(function (reponse) {
                resolve(reponse);
            }).catch(function (error) {
                console.log(error);
                reject(error);
            });
        });
    },
    fetchUserById({ rootGetters }, userId) {
        return new Promise((resolve, reject) => {
            APIClient.get(`users/${userId}`, rootGetters.getAuthHeaders
            ).then(function (response) {
                resolve(response.data);
            }).catch(function (error) {
                console.log(error);
                reject(error);
            });
        });
    },
    editUserDetail({ rootGetters }, user) {
        return new Promise((resolve, reject) => {
            APIClient.put(`users/${user.id}`,
                user.data, rootGetters.getAuthHeaders,
            ).then(function (reponse) {
                resolve(reponse);
            }).catch(function (error) {
                console.log(error);
                reject(error);
            });
        });
    },
    createNewUser({ rootGetters }, addUser) {
        return new Promise((resolve, reject) => {
            APIClient.post(`users/`,
                addUser, rootGetters.getAuthHeaders,
            ).then(function (reponse) {
                resolve(reponse.data);
            }).catch(function (error) {
                console.log(error);
                reject(error);
            });
        });
    },
    resetUserPassword({ rootGetters }, userId) {
        return new Promise((resolve, reject) => {
            APIClient.post(`users/${userId}/reset_password`, userId, rootGetters.getAuthHeaders,
            ).then(function (reponse) {
                resolve(reponse.data);
            }).catch(function (error) {
                console.log(error);
                reject(error);
            });
        });
    },
    changePassword({ rootGetters }, user) {
    return new Promise((resolve, reject) => {
      APIClient.post(`users/${user.uri.id}/change_password`,
        {
          "username": user.username,
          "existing_password": user.existing_password,
          "new_password": user.new_password,
          "confirm_password": user.confirm_password
        }, rootGetters.getAuthHeaders,
          ).then(function (reponse) {
            resolve(reponse.data);
          }).catch(function (error) {
            console.log(error);
                reject(error);
          });
        });
    },
};
export default {
    state,
    getters,
    actions,
    mutations,
}