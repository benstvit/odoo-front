<template>
  <div class="home">
    <h1 class="text-green-400 font-bold">The app is working</h1>
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
    ...mapState({ clientsData: 'data' }),
  },
  methods: {
    ...mapActions({ fetchClients: 'fetch' }),
  },
  async mounted() {
    await this.fetchClients();
    console.log(this.clientsData);
  },
};
</script>
