<template>
  <form action="#" class="form sm-form">
    <div class="sm-form__content">
      <div class="sm-form__title">Sign in</div>
      <div class="field-wrapp">
        <input
          v-model="login"
          name="login"
          type="text"
          class="input-base"
          placeholder="Login"
        />
        <div v-if="userExist" class="sm-form__warn">User does not exist</div>
      </div>
      <div class="field-wrapp">
        <input
          v-model="password"
          name="password"
          type="password"
          class="input-base"
          placeholder="Password"
          autocomplete="off"
        />
        <div v-if="incorectPass" class="sm-form__warn">Incorect password</div>
      </div>
      <div class="sm-form__pass-help">
        <a href="/sign-2">Forgot password?</a>
      </div>
      <button @click="onSubmit" class="btn">Sign in</button>
    </div>
  </form>
</template>

<script>
import { usersAPI } from "@/api/api";
import { saveTokens } from "@/services/tokensHandling";
import router from "@/router";

export default {
  name: "Sign1",
  components: {},
  data() {
    return {
      login: "",
      password: "",
      userExist: false,
      incorectPass: false,
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      this.userExist = false;
      this.incorectPass = false;

      let response = await usersAPI.login(this.login, this.password);
      console.log(response);
      if (response.tokens) {
        saveTokens(response.tokens);
        console.log("new roken", response.tokens);
        return router.push("/profile");
      } else {
        if (
          response?.error?.message ===
          `User with email ${this.login} does not exist`
        ) {
          return (this.userExist = true);
        }
        if (
          response === '"password" length must be at least 4 characters long' ||
          response?.error?.message === "Incorect password"
        ) {
          return (this.incorectPass = true);
        }
      }
    },
  },
};
</script>
