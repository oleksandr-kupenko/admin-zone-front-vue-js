<template>
  <nav class="nav">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/sign-1">Sign1</router-link></li>
      <li><router-link to="/sign-2">Sign2</router-link></li>
      <li><router-link to="/sign-3">Sign3</router-link></li>
      <li><router-link to="/sign-4">Sign4</router-link></li>
      <li><router-link to="/sign-up-1">SignUp1</router-link></li>
      <li><router-link to="/sign-up-2">SignUp3</router-link></li>
      <li><router-link to="/sign-up-6">SignUp6</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
    </ul>
  </nav>
  <router-view />
</template>

<style lang="scss" src="./assets/sass/main.scss"></style>
<style scoped>
nav ul {
  list-style-type: none;
  padding-left: 0;
  padding-bottom: 1rem;
  max-width: 90%;
}
li {
  display: inline;
  padding-left: 0.3rem;
  font-size: 10px;
}
</style>
