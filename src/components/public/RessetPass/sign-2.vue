<template>
  <VForm @submit="onSubmit" class="form sm-form">
    <div class="sm-form__content">
      <div class="sm-form__title">Enter your e-mail to reset your password</div>
      <div class="field-wrapp">
        <VField
          v-model="email"
          rules="required|email"
          v-on:change="clearUserExist"
          name="email"
          type="text"
          class="input-base"
          placeholder="E-mail"
        />
        <ErrorMessage name="email" class="sm-form__warn" />
        <div v-if="userExist" class="sm-form__warn">User does not exist</div>
      </div>
      <button class="btn btn_todown">Send</button>
    </div>
  </VForm>
</template>

<script>
import * as VeeValidate from "vee-validate";
import { defineRule } from "vee-validate";
import { required, email } from "../../../services/validators";
import { usersAPI } from "@/api/api";
import router from "@/router";

defineRule("required", required);
defineRule("email", email);

export default {
  name: "Sign2",
  components: {
    VForm: VeeValidate.Form,
    VField: VeeValidate.Field,
    ErrorMessage: VeeValidate.ErrorMessage,
  },
  data: function () {
    return {
      email: "",
      userExist: false,
    };
  },
  methods: {
    async onSubmit() {
      const response = await usersAPI.checkUserEmail(this.email);
      if (response.id) {
        localStorage.setItem(
          "idUserForChangePass",
          JSON.stringify(response.id)
        );
        return router.push("/sign-3");
      }
      if (response === `User with email ${this.email} does not exist`) {
        return (this.userExist = true);
      }
    },
    clearUserExist() {
      if (this.userExist) this.userExist = false;
    },
  },
};
</script>
