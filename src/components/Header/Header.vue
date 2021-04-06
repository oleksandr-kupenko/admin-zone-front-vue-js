<template>
  <header class="header">
    <div class="header-row">
      <div class="logo">
        <a href="/">
          <img src="../../assets/img/logo.svg" alt="myFixer logo" />
        </a>
      </div>
      <div class="sign-link">
        {{ question }} <a href="#">{{ offer }}</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    question: String,
    offer: String,
  },
};
</script>
<style scoped></style>
