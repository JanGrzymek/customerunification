<template>
  <v-app>
    <v-app-bar app color="primary" height="100" dark>
      <img class="mx-4" src="./assets/logo.png" width="80" />
      <img class="mx-4 d-none d-lg-block" src="./assets/title.png" width="250" />
      <v-spacer></v-spacer>
      <v-btn
        class="mx-4 d-none d-lg-block justify-center"
        color="accent"
        text
        style="font-family: Segoe UI; font-weight: lighter"
        to="/"
        >Home</v-btn
      >
      <v-btn
        class="mx-4 d-none d-lg-block"
        color="accent"
        text
        style="font-family: Segoe UI; font-weight: lighter"
        to="/insert"
        >Insert Customer</v-btn
      >
      <v-btn
        class="mx-4 d-none d-lg-block"
        color="accent"
        text
        style="font-family: Segoe UI; font-weight: lighter"
        to="/about"
        >About</v-btn
      >

      <v-app-bar-nav-icon
        class="d-lg-none pr-6"
        color="accent"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary class="primary">
      <v-list>
        <v-list-item-group v-model="group">
          <v-list-item
            class="mx-4 accent--text"
            color="accent"
            text
            style="font-family: Segoe UI; font-weight: lighter"
            to="/"
            >Home
          </v-list-item>
          <v-list-item
            class="mx-4 accent--text"
            color="accent"
            text
            style="font-family: Segoe UI; font-weight: lighter"
            to="/insert"
            >Insert Customer</v-list-item
          >
          <v-list-item
            class="mx-4 accent--text"
            color="accent"
            text
            style="font-family: Segoe UI; font-weight: lighter"
            to="/about"
            >About
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main class="secondary">
      <router-view :customers="customers" :image="newimage" @deleteId="deleteCustomer($event)" />
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      customers: [],
      newimage: '',
      cid: '',
      drawer: false,
      group: null,
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },

  methods: {
    async getCustomers() {
      const res = await axios.get('http://localhost:3000/customers');
      this.customers = res.data;
      console.log(this.customers);
    },
    getImage(image) {
      this.newimage = image;
    },
    async deleteCustomer(cid) {
      console.log(cid);
      await axios({
        url: 'http://localhost:3000/customers/' + cid,
        method: 'DELETE',
      });
      this.getCustomers();
    },
  },

  created() {
    this.getCustomers();
    console.log(this.customers);
  },
};
</script>

<style lang="scss" scoped></style>
