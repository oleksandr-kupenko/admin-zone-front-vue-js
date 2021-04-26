<template>
  <form action="#" class="form sm-form">
    <div class="sm-form__content">
      <div class="sm-form__title">Sign in</div>
      <input
        v-model="login"
        name="login"
        type="text"
        class="input-base"
        placeholder="Login"
      />
      <input
        v-model="password"
        name="password"
        type="password"
        class="input-base"
        placeholder="Password"
        autocomplete="off"
      />
      <div class="sm-form__pass-help">
        <a href="/sign-2">Forgot password?</a>
      </div>
      <button @click="onSubmit" class="btn">Sign in</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "Sign1",
  components: {},
  data() {
    return {
      login: "",
      password: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      console.log(this.login, this.password);
    },
  },
};
</script>
