import Vue from 'vue';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';
import './index.css';
import { securedAxiosInstance, plainAxiosInstance } from './backend/axios';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(VueAxios, {
  secured: securedAxiosInstance,
  plain: plainAxiosInstance,
});

new Vue({
  plainAxiosInstance,
  router,
  securedAxiosInstance,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
