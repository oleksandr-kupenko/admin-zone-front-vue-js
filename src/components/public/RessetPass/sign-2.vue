<template>
  <VForm @submit="onSubmit" class="form sm-form">
    <div class="sm-form__content">
      <div class="sm-form__title">Enter your e-mail to reset your password</div>
      <div class="field-wrapp">
        <VField
          v-model="email"
          rules="required|email"
          name="email"
          type="text"
          class="input-base"
          placeholder="E-mail"
        />
        <ErrorMessage name="email" class="sm-form__warn" />
      </div>
      <button class="btn btn_todown">Send</button>
    </div>
  </VForm>
</template>

<script>
import * as VeeValidate from "vee-validate";
import { defineRule } from "vee-validate";
import { required, email } from "../../../services/validators";

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
    };
  },
  methods: {
    onSubmit() {
      console.log(this.email);
    },
  },
};
</script>
