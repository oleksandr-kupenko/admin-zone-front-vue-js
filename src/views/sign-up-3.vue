<template>
  <Header
    title="Sign up 3"
    question="Already have an account?"
    offer="Log In"
  />

  <div class="content">
    <VForm @submit="onSubmit" :validation-schema="schema" class="form sm-form">
      <div class="sm-form__content">
        <div class="sm-form__title sm-form__title_dark">
          Complete your account
        </div>

        <VField
          v-model="password"
          name="password"
          rules="required"
          type="password"
          class="input-base m-0"
          placeholder="Create a password"
        />
        <ErrorMessage name="password" class="sm-form__warn" />
        <div class="pass-indicator">
          <span
            v-for="(item, index) in passStrengthShowing()"
            :key="index"
            class="pass-indicator__item"
            :class="{
              'pass-indicator__red': passStrengthShowing() === 1,
              'pass-indicator__orange': passStrengthShowing() === 2,
              'pass-indicator__green': passStrengthShowing() === 3,
            }"
          ></span>
        </div>

        <VField
          v-model="passConfirmText"
          name="passwordConfirm"
          rules="required|confirmed:password|passStronged"
          type="password"
          class="input-base"
          placeholder="Confirm password"
        />
        <ErrorMessage name="passwordConfirm" class="sm-form__warn" />

        <div class="confirm">
          <ul>
            <li v-for="confirm in confirms" :key="confirm.nameLink">
              <label class="confirm__lable">
                <VField
                  name="confirm"
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
          <ErrorMessage name="confirm" class="sm-form__warn" />
        </div>
        <Captcha />
        <!-- <div class="g-recaptcha">
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
        </div> -->

        <button
          @click="onSubmit"
          class="btn btn_todown"
          :class="isCaptchaVerifie ? '' : 'btn_disabled'"
          :disabled="!isCaptchaVerifie"
        >
          Done!
        </button>
      </div>
    </VForm>
  </div>

  <Footer />
</template>

<script>
import Captcha from "../components/captcha/Captcha";
import vueRecaptcha from "vue3-recaptcha2";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import * as VeeValidate from "vee-validate";
import { defineRule } from "vee-validate";
import { required, confirmed, passStronged } from "../services/validators";

defineRule("required", required);
defineRule("confirmed", confirmed);
defineRule("passStronged", passStronged);

export default {
  name: "Sign3",
  components: {
    Captcha,
    vueRecaptcha,
    Header,
    Footer,
    VForm: VeeValidate.Form,
    VField: VeeValidate.Field,
    ErrorMessage: VeeValidate.ErrorMessage,
  },
  data: function () {
    const schema = {
      confirm(value) {
        if (value) {
          if (value?.length === 2) {
            return true;
          }
        }
        return "You must accept all agreements";
      },
    };
    return {
      show: 1,
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
    clearingAllFields() {
      this.password = "";
      this.passConfirmText = "";
      this.confirms.forEach((confirm) => (confirm.checked = false));
    },
    passStrengthShowing() {
      const mediumPassword = new RegExp(
        "((?=.*[a-z])(?=.*[0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.{6,}))"
      );
      const strongPassword = new RegExp(
        "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
      );
      if (strongPassword.test(this.password)) {
        return 3;
      }
      if (mediumPassword.test(this.password)) {
        return 2;
      }
      if (this.password) {
        return 1;
      }
    },
    onSubmit(e) {
      console.log("тут в будушем надо сделать передачу и clearingAllFields");
    },
  },
};
</script>
