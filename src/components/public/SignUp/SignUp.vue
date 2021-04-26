<template>
  <VForm @submit="onSubmit" class="form sm-form">
    <div class="sm-form__content">
      <div class="sm-form__title">Sign up</div>
      <div class="field-wrapp field-wrapp_sm">
        <VField
          v-model="fname"
          rules="required|minMaxLength:2,100|name"
          name="fname"
          type="text"
          class="input-base input-base_sm"
          placeholder="First name"
        />
        <ErrorMessage name="fname" class="sm-form__warn" />
      </div>
      <div class="field-wrapp field-wrapp_sm">
        <VField
          v-model="lname"
          rules="required|minMaxLength:2,100|name"
          name="lname"
          type="text"
          class="input-base input-base_sm"
          placeholder="Last name"
        />
        <ErrorMessage name="lname" class="sm-form__warn" />
      </div>
      <div class="field-wrapp">
        <VField
          v-model="username"
          rules="required|minMaxLength:3,20|username"
          name="username"
          type="text"
          class="input-base"
          placeholder="Username"
        />
        <ErrorMessage name="username" class="sm-form__warn" />
      </div>
      <div class="field-wrapp">
        <VField
          v-model="email"
          rules="required|email"
          name="email"
          type="text"
          class="input-base"
          placeholder="Email"
        />
        <ErrorMessage name="email" class="sm-form__warn" />
      </div>
      <button class="btn btn_todown">Get started</button>
    </div>
  </VForm>
</template>

<script>
import * as VeeValidate from "vee-validate";
import { defineRule } from "vee-validate";
import {
  required,
  email,
  username,
  name,
  minMaxLength,
} from "../../../services/validators";
import router from "@/router";

defineRule("required", required);
defineRule("email", email);
defineRule("username", username);
defineRule("name", name);
defineRule("minMaxLength", minMaxLength);

export default {
  name: "Sign1",
  components: {
    VForm: VeeValidate.Form,
    VField: VeeValidate.Field,
    ErrorMessage: VeeValidate.ErrorMessage,
  },
  data: function () {
    return {
      fname: "",
      lname: "",
      username: "",
      email: "",
      firstPage: true,
    };
  },
  methods: {
    onSubmit() {
      console.log(this.fname, this.lname, this.username, this.email);
      let newUser = {
        fname: this.fname,
        lname: this.lname,
        username: this.username,
        email: this.email,
      };
      localStorage.setItem("newUser", JSON.stringify(newUser));
      console.log(localStorage.getItem("newUser"));
      this.firstPage = false;
      router.push("/sign-up-2");
    },
  },
};
</script>
