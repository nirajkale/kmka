import { APIClient } from './axio-api';

function retriveUserObject() {
    if (localStorage.getItem('authUser') != null) {
        try {
            return JSON.parse(localStorage.getItem('authUser'))
        }
        catch {
            return null;
        }
    }
    return null;
}

const state = {
  authToken: localStorage.getItem('authToken') || null,
  authUser: retriveUserObject(),
};

const getters = {
    getAuthHeaders(state) {
        return {
            headers: {
                Authorization: 'token ' + state.authToken,
            }
        };
    },
    isAuthenticated: state => !(state.authToken == null || state.authToken == ''),
    userObj: state => state.authUser
};

const mutations = {
    SET_TOKEN(state, authToken) {
      state.authToken = authToken;
      localStorage.setItem('authToken', authToken);
    },
    SET_USER(state, authUser) {
      state.authUser = authUser;
      if (authUser == null)
          localStorage.removeItem('authUser');
      else
          localStorage.setItem('authUser', JSON.stringify(authUser));
    }
};

const actions = {
  login({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      APIClient.post('users/token-auth',
        {
          username: credentials.username,
          password: credentials.password
        }
      ).then(function (reponse) {      
        commit('SET_TOKEN', reponse.data.token);
        commit('SET_USER', reponse.data.user);
        resolve(reponse.data);
      }).catch(function (error) {
        console.log(error);
        reject(error);
      });
    })
  },

};

export default {
    state,
    getters,
    actions,
    mutations
}