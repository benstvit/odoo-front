import Vue from 'vue';
import store from './store';
import App from './App.vue';
import router from './router';
import './index.css';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
