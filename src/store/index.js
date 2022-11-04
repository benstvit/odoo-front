import Vue from 'vue';
import Vuex from 'vuex';

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
      // await this.$axios.get('/clients').then((response) => console.log(response));
      const { data } = await this.$axios.get('/clients');
      // .catch((error) => {
      //   console.error('There was an error!', error);
      // });
      commit('SET_DATA', data);

      // if (success) {
      //   commit('SET_DATA', data);
      // }
    },
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    },
  },
});
