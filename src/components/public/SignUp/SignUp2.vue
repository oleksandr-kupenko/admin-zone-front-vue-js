<template>
  <VForm
    @submit="onSubmit"
    :validation-schema="schema"
    class="form sm-form sm-form_tall"
  >
    <div class="sm-form__content">
      <div class="sm-form__title sm-form__title_dark">
        Complete your account
      </div>
      <div class="field-wrapp">
        <VField
          v-model="password"
          rules="required|passStronged|notCyrillic"
          name="password"
          :validateOnInput="true"
          autocomplete="off"
          type="password"
          class="input-base m-0"
          placeholder="Create a password"
        />

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
        <ErrorMessage name="password" class="sm-form__warn" />
      </div>
      <div class="field-wrapp">
        <VField
          v-model="passConfirmText"
          rules="required|confirmed:password"
          name="passwordConfirm"
          :validateOnInput="true"
          autocomplete="off"
          type="password"
          class="input-base"
          placeholder="Confirm password"
        />
        <ErrorMessage name="passwordConfirm" class="sm-form__warn" />
      </div>

      <div class="confirm">
        <ul>
          <li v-for="confirm in confirms" :key="confirm.nameLink">
            <label class="confirm__lable">
              <VField
                name="confirmedAgree"
                type="checkbox"
                :value="`${confirm.name}`"
              >
              </VField>

              {{ confirm.title }}
              <a :href="`${confirm.link}`">{{ confirm.nameLink }}</a>
              <span class="checkmark"></span>
            </label>
          </li>
        </ul>
        <ErrorMessage name="confirmedAgree" class="sm-form__warn" />
      </div>
      <div class="g-recaptcha">
        <vue-recaptcha
          siteKey="6Lds_W4aAAAAAMqoq26rXADQ0jlhnJDXkcKSx5ZE"
          :show="show"
          size="normal"
          theme="light"
          :tabindex="1"
          @verify="recaptchaVerified"
          @expire="recaptchaExpired"
          @fail="recaptchaFailed"
          ref="vueRecaptcha"
        >
        </vue-recaptcha>
      </div>
      <button
        class="btn btn_todown"
        :class="isCaptchaVerifie ? '' : 'btn_disabled'"
        :disabled="!isCaptchaVerifie"
      >
        Done!
      </button>
    </div>
  </VForm>
</template>

<script>
import vueRecaptcha from "@/services/recapcha.mjs";
import * as VeeValidate from "vee-validate";

import utils from "@/services/utils";
import {
  required,
  confirmed,
  passStronged,
  confirmedChecbox,
  notCyrillic,
} from "@/services/validators";
import router from "@/router";

import { usersAPI } from "@/api/api";

VeeValidate.defineRule("required", required);
VeeValidate.defineRule("confirmed", confirmed);
VeeValidate.defineRule("passStronged", passStronged);
VeeValidate.defineRule("notCyrillic", notCyrillic);

export default {
  name: "Sign3",
  components: {
    vueRecaptcha,
    VForm: VeeValidate.Form,
    VField: VeeValidate.Field,
    ErrorMessage: VeeValidate.ErrorMessage,
  },
  data: function () {
    const schema = {
      confirmedAgree: function (value) {
        return confirmedChecbox(value, 2);
      },
    };
    return {
      show: true,
      schema,
      password: "",
      passConfirmText: "",
      isCaptchaVerifie: false,
      confirms: [
        {
          title: "I agree to the myFixer.com",
          name: "terms",
          nameLink: "Terms of Service",
          link: "#",
          checked: false,
        },
        {
          title: "I agree to the myFixer.com",
          name: "polyci",
          nameLink: "Privacy Policy",
          link: "#",
          checked: false,
        },
      ],
    };
  },
  methods: {
    recaptchaVerified(response) {
      this.isCaptchaVerifie = true;
    },
    recaptchaExpired() {
      this.$refs.vueRecaptcha.reset();
      this.isCaptchaVerifie = false;
    },
    recaptchaFailed() {
      alert("Somthing was wrong with captcha");
    },
    passStrengthLevel: function () {
      return utils.passStrengthLevel(this.password);
    },

    async onSubmit(e) {
      let newUser = JSON.parse(localStorage.getItem("newUser"));
      if (!newUser) {
        router.push("/sign-up-1");
      } else {
        newUser.password = this.password;
        localStorage.setItem("newUser", JSON.stringify(newUser));
        const response = await usersAPI.createUser(newUser);
        router.push("/sign-up-6");
      }
    },
  },
};
</script>
