import Vue from 'vue';
import Vuex, { createStore } from 'vuex';
import axios from 'axios';
import clients from './clients/index';

const axiosConfig = {
  baseURL: 'http://localhost:3000/api/v1',
  timeout: 30000,
};

Vue.prototype.$axios = axios.create(axiosConfig);
Vue.use(Vuex);

export default createStore({
  modules: {
    clients,
  },
});
