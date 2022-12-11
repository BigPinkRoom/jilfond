import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    currentUser: {},
    loading: false,
  },
  mutations: {
    SET_USERS(state, payload) {
      state.users = payload;
    },
    SET_CURRENT_USER(state, payload) {
      state.currentUser = payload;
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    async getUsers({ commit }, payload) {
      let response;
      try {
        commit('SET_LOADING', true);
        if (!payload) {
          commit('SET_USERS', []);
          commit('SET_LOADING', false);
          return false;
        }
        if (payload.includes(',')) {
          let request = `https://jsonplaceholder.typicode.com/users/?`;
          let arrayPayload = payload.split(',').map((item) => {
            return item.trim();
          });

          arrayPayload.forEach((item) => {
            if (!isNaN(parseFloat(item)) && isFinite(item)) {
              request += `&id=${item}`;
            } else {
              if (item) {
                item = item[0].toUpperCase() + item.slice(1);
                request += `&username=${item}`;
              }
            }
          });
          response = await axios.get(request);
        } else if (!isNaN(parseFloat(payload)) && isFinite(payload)) {
          response = await axios.get(
            `https://jsonplaceholder.typicode.com/users/?id=${payload}`
          );
        } else {
          payload = payload[0].toUpperCase() + payload.slice(1);
          response = await axios.get(
            `https://jsonplaceholder.typicode.com/users/?username=${payload}`
          );
        }
        // console.log('response data', response.data);
        commit('SET_LOADING', false);
        commit('SET_USERS', response.data);
      } catch (error) {
        commit('SET_LOADING', false);
        console.error(error);
      }
    },
    setUser({ commit }, payload) {
      commit('SET_CURRENT_USER', payload);
    },
  },
  modules: {},
});
