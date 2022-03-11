<template>
  <div>
    <h1
      class="primary--text pa-6"
      align="center"
      style="font-family: Segoe UI; font-weight: lighter"
    >
      Add a new customer!
    </h1>
    <v-divider class="pa-1"></v-divider>
    <v-row>
      <v-col>
        <div class="ma-16">
          <div max-width="250" class="ma-6">
            <v-text-field label="Name" hide-details="auto" v-model="inputName"></v-text-field>
          </div>
          <div max-width="250" class="pa-6">
            <v-text-field label="Adresse" hide-details="auto" v-model="inputAdress"></v-text-field>
          </div>
          <div max-width="250" class="ma-6">
            <v-text-field label="E-Mail" hide-details="auto" v-model="inputMail"></v-text-field>
          </div>
          <div class="ma-6 pt-6">
            <span style="font-family: Segoe UI; font-weight: lighter">Bild:</span>
            <v-btn class="primary accent--text mx-3" @click="openCamera()"
              ><v-icon>mdi-camera</v-icon></v-btn
            >
          </div>
          <camera v-if="hidden" @img="getImage" @close="closeCamera" />
          <v-btn
            class="primary accent--text mx-6"
            align="center"
            @click="postCustomer(inputName, inputAdress, inputMail)"
            :disabled="checked"
            >Insert Customer</v-btn
          >
        </div>
      </v-col>
      <v-col>
        <v-card
          class="primary mt-12 d-none d-lg-block"
          max-width="250"
          min-width="250"
          min-height="400"
          max-height="400"
        >
          <v-img height="250" :src="this.image"></v-img>
          <v-card-title class="accent--text">{{ inputName }}</v-card-title>

          <v-card-text class="accent--text">
            <span>{{ inputMail }}</span
            ><br />
            <span>{{ inputAdress }}</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';
import camera from '../components/Camera';

export default {
  data: () => ({
    inputName: '',
    inputAdress: '',
    inputMail: '',
    hidden: false,
    image: '',
    checked: false,
  }),
  methods: {
    async postCustomer(name, adress, mail) {
      await axios({
        url: 'http://localhost:3000/customers',
        method: 'POST',
        'content-type': 'appplication/json',
        data: {
          name: name,
          adresse: adress,
          email: mail,
          bild: this.image,
        },
      });
      this.$router.push({ name: 'Home' });
      location.reload();
    },
    openCamera() {
      this.hidden = true;
    },
    getImage(img) {
      this.image = img;
      this.hidden = false;
    },
    closeCamera() {
      this.hidden = false;
    },
  },

  props: {
    img: {
      type: String,
    },
  },
  components: {
    camera,
  },
};
</script>

<style scoped>
/deep/ .v-text-field {
  width: 400px;
}
</style>
