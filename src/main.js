import Vue from 'vue';
import axios from 'axios';
import store from './store';
import App from './App.vue';
import router from './router';
import './index.css';
import vuetify from './plugins/vuetify';

const axiosConfig = {
  baseURL: 'http://localhost:3000/api/v1',
  timeout: 30000,
};

Vue.prototype.$axios = axios.create(axiosConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
