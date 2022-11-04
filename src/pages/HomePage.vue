<template>
  <div class="home">
    <h1 class="text-pink-400 font-bold">The app is working</h1>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'HomePage',
  data() {
    return {};
  },
  computed: {
    ...mapState('clients', { clientsData: 'data' }),
  },
  methods: {
    ...mapActions('clients', { fetchClients: 'fetch' }),
  },
  async mounted() {
    await this.fetchClients;
    console.log(this.clientsData);
  },
};
</script>
