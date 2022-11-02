import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './index.css';
import vuetify from './plugins/vuetify';
import axios from 'axios';

Vue.config.productionTip = false;

// fetch data from localStorage
const token = localStorage.getItem('token');

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
