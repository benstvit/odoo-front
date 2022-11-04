<template>
  <div class="home">
    <h1 class="text-green-400 font-bold">The app is working</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HomePage',
  data() {
    return {};
  },
  computed: {
    ...mapState({ clientsData: 'data' }),
  },
  // methods: {
  //   ...mapActions(['fetch']),
  // },
  async mounted() {
    console.log(this.$store);
    // await this.$store.dispatch('fetch');
  },
};
</script>
