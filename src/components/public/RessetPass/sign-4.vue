<template>
  <VForm @submit="onSubmit" class="form sm-form">
    <div class="sm-form__content">
      <div class="sm-form__title">Reset your password</div>
      <div class="field-wrapp">
        <VField
          v-model="password"
          rules="required|passStronged|notCyrillic"
          name="password"
          :validateOnInput="true"
          autocomplete="off"
          type="password"
          class="input-base m-0"
          placeholder="New password"
        />
        <ErrorMessage name="password" class="sm-form__warn" />

        <div class="pass-indicator">
          <span
            v-for="(item, index) in passStrengthLevel()"
            :key="index"
            class="pass-indicator__item"
            :class="{
              'pass-indicator__red': passStrengthLevel() === 1,
              'pass-indicator__orange': passStrengthLevel() === 2,
              'pass-indicator__green': passStrengthLevel() === 3,
            }"
          ></span>
        </div>
      </div>
      <div class="field-wrapp">
        <VField
          v-model="passConfirmText"
          rules="required|confirmed:password|passStronged"
          name="passwordConfirm"
          type="password"
          :validateOnInput="true"
          autocomplete="off"
          class="input-base"
          placeholder="Confirm password"
        />
        <ErrorMessage name="passwordConfirm" class="sm-form__warn" />
      </div>
      <button class="btn btn_todown">Reset</button>
    </div>
  </VForm>
</template>

<script>
import * as VeeValidate from "vee-validate";
import { defineRule } from "vee-validate";
import {
  required,
  confirmed,
  passStronged,
  notCyrillic,
} from "../../../services/validators";
import utils from "../../../services/utils";
import { usersAPI } from "@/api/api";
import router from "@/router";

defineRule("required", required);
defineRule("confirmed", confirmed);
defineRule("passStronged", passStronged);
defineRule("notCyrillic", notCyrillic);

export default {
  name: "Sign4",
  components: {
    VForm: VeeValidate.Form,
    VField: VeeValidate.Field,
    ErrorMessage: VeeValidate.ErrorMessage,
  },
  data: function () {
    return {
      password: "",
      passConfirmText: "",
    };
  },
  methods: {
    passStrengthLevel: function () {
      return utils.passStrengthLevel(this.password);
    },
    async onSubmit() {
      const idUser = JSON.parse(localStorage.getItem("idUserForChangePass"));
      let response = await usersAPI.resetPass(this.password, idUser);
      localStorage.removeItem("idUserForChangePass");
      router.push("/sign-1");
    },
  },
};
</script>
