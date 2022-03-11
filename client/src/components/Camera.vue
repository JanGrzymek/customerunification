<template>
  <div>
    <v-easy-camera
      v-model="picture"
      :fullscreen="fullscreen"
      :mustApprove="approved"
      output="blob"
      @approve="sendpicture()"
      @close="backToInsert()"
    ></v-easy-camera>
  </div>
</template>

<script>
import EasyCamera from 'easy-vue-camera';

export default {
  components: {
    'v-easy-camera': EasyCamera,
  },
  data() {
    return {
      picture: Blob,
      picturebase64: '',
      fullscreen: true,
      approved: true,
      exit: true,
    };
  },
  methods: {
    async sendpicture() {
      await {};
      const reader = new FileReader();
      reader.readAsDataURL(this.picture);
      // eslint-disable-next-line
      reader.onloadend = () => {
        const base64data = reader.result;
        this.picturebase64 = base64data;
        this.$emit('img', this.picturebase64);
      };
    },
    backToInsert() {
      this.$emit('close');
    },
  },
  props: {
    hidden: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped></style>
