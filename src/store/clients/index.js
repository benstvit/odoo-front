export default {
  state: {
    data: {},
  },
  getters: {
    data: (state) => state.data,
  },
  actions: {
    async fetch({ commit }) {
      const { data, success } = await this.$axios.get('/clients')
        .catch((error) => {
          console.error('There was an error!', error);
        });

      if (success) {
        commit('SET_DATA', await data);
      }
    },
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    },
  },
};
