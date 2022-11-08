import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const axiosConfig = {
  baseURL: 'https://odoo-scrapper-api.herokuapp.com/api/v1',
  timeout: 30000,
};

const $axios = axios.create(axiosConfig);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {},
  },
  getters: {
    data: (state) => state.data,
  },
  actions: {
    async fetch({ commit }) {
      const { data, message, success } = await $axios.get('/clients')
        .then((response) => response.data)
        .catch((error) => {
          console.error('There was an error!', error);
        });

      if (success) {
        commit('SET_DATA', data);
      }

      return { data, message };
    },
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    },
  },
});
