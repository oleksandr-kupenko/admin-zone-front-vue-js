<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/sign-1">Sign1</router-link>
    <router-link to="/sign-2">Sign2</router-link>
    <router-link to="/sign-3">Sign3</router-link>
    <router-link to="/sign-4">Sign4</router-link>
    <router-link to="/sign-up-1">SignUp1</router-link>
    <router-link to="/sign-up-2">SignUp2</router-link>
    <router-link to="/sign-up-3">SignUp3</router-link>
    <router-link to="/sign-up-4">SignUp4</router-link>
    <router-link to="/sign-up-5">SignUp5</router-link>
    <router-link to="/sign-up-6">SignUp6</router-link>
  </div>
  <router-view />
</template>

<style lang="scss" src="./assets/sass/main.scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
