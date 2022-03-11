<template>
  <div>
    <v-row class="mx-5">
      <v-card
        class="mx-auto my-12 primary"
        v-for="(c, c_id) in customers"
        :key="c_id"
        max-width="250"
      >
        <v-img height="250" :src="c.bild"></v-img>
        <v-card-title class="accent--text">{{ c.name }}</v-card-title>

        <v-card-text class="accent--text">
          <span>E-Mail: {{ c.email }}</span
          ><br />
          <span>Adresse: {{ c.adresse }}</span>
        </v-card-text>
        <v-card-actions>
          <v-btn class="primary" @click="deleteCustomer(c.c_id)"
            ><v-icon>mdi-trash-can</v-icon></v-btn
          >
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Home',

  props: {
    customers: {
      type: Array,
    },
  },
  methods: {
    deleteCustomer(id) {
      this.$emit('deleteId', id);
    },
  },

  async created() {
    console.log(this.customers);
  },
};
</script>
