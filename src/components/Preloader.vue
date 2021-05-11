<template>
  <div class="preloader" v-bind:style="{ top: top }">
    <img src="../assets/img/preloader.gif" alt="preloader" />
  </div>
</template>

<script>
export default {
  name: "Preloader",
  props: {
    top: {
      type: String,
      default: "40%",
    },
  },
};
</script>

<style scoped>
.preloader {
  position: absolute;
  left: 40%;
  top: 40%;
  z-index: 99;
}
</style>
