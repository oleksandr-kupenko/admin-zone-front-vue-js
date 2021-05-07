<template>
  <div class="preloader">
    <img src="../assets/img/preloader.gif" alt="preloader" />
  </div>
</template>

<script>
export default {
  name: "Preloader",
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
