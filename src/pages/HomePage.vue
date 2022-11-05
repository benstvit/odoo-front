<template v-show="clientsData">
  <section>
    <div class="p-4 border-b-2">
      <h1 class="text-gray-800 text-5xl font-bold">📒 Clients</h1>
    </div>
    <div class="flex justify-start gap-2 items-center text-sm text-gray-800 my-2 mx-4">
      <div class="hover:bg-gray-200 p-1 cursor-pointer"
      :class="cardViewEnabled && 'text-bold text-black border-b-4 border-black'"
      @click="toggleView">
      <svg :is="TableSvg"></svg> Gallery View
      </div>
      <span
      class="hover:bg-gray-200 p-1 cursor-pointer"
      @click="toggleView"
      :class="!cardViewEnabled && 'text-bold text-black border-b-4 border-black'"
      >Table View</span>
    </div>
    <CardsContent v-if="cardViewEnabled" :data="clientsData"/>
    <TableContent v-else :data="clientsData"/>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import CardsContent from '../components/CardsContent.vue';
import TableContent from '../components/TableContent.vue';
import TableSvg from '../assets/svg/table.svg';

export default {
  name: 'HomePage',
  components: {
    CardsContent,
    TableContent,
    TableSvg,
  },
  data() {
    return {
      cardViewEnabled: true,
    };
  },
  computed: {
    ...mapState({ clientsData: 'data' }),

    titles() {
      const array = Object.keys(this.clientsData[0].attributes);
      return array.map((a) => (a === 'zip' ? 'Zip Code' : a[0].toUpperCase() + a.substring(1)));
    },
  },
  methods: {
    ...mapActions({ fetchClients: 'fetch' }),

    toggleView() {
      this.cardViewEnabled = !this.cardViewEnabled;
      console.log(this.cardViewEnabled);
    },
  },
  async mounted() {
    await this.fetchClients();
  },
};
</script>
