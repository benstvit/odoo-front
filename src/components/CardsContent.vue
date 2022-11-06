<template>
 <section>
    <div class="grid grid-cols-6 gap-2">
      <div id="card"
          class="col-span-6 md:col-span-3 lg:col-span-2 flex flex-col p-4 m-4 shadow-md rounded-md bg-gray-50"
          v-for="client in attributes"
          :key="client.id">
        <h2 class="font-bold my-2 text-emerald-600">{{ client.name }}</h2>
        <p v-if="client.email">📧 {{client.email}}</p>
        <p v-if="client.street">🏡 {{client.street}}</p>
        <p v-if="client.zip">📫 {{client.zip}}</p>
      </div>
    </div>
 </section>
</template>

<script>
export default {
  name: 'CardsContent',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    attributes() {
      return this.data.map((e) => e.attributes);
    },
  },
};
</script>
