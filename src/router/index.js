import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/HomePage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
