<template>
  <div class="bg-gray-50 m-4 my-8 rounded-lg shadow-lg">
    <table class="table-auto w-full">
      <thead class="bg-gray-200">
        <tr>
          <th v-for="title in titles"
            :key="title"
            class="p-3 text-center"
            :class="title === 'Name' && 'pl-0 text-left'">
            {{ title }}
          </th>
        </tr>
      </thead>
      <tbody
      v-for="client in data"
      :key="client.id">
        <tr>
          <td class="text-left pl-4 font-bold border">{{client.attributes.name}}</td>
          <td class="text-center py-2 border">{{client.attributes.email}}</td>
          <td class="text-center py-2 border">{{client.attributes.street || '/'}}</td>
          <td class="text-center py-2 border">{{client.attributes.zip || '/'}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableContent',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    titles() {
      const array = Object.keys(this.data[0].attributes);
      return array.map((a) => (a === 'zip' ? 'Zip Code' : a[0].toUpperCase() + a.substring(1)));
    },
  },
};
</script>
