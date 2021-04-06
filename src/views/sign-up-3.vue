<template>
  <Header
    title="Sign up 3"
    question="Already have an account?"
    offer="Log In"
  />

  <div class="content">
    <form action="#" class="form sm-form">
      <div class="sm-form__content">
        <div class="sm-form__title sm-form__title_dark">
          Complete your account
        </div>
        <input
          v-model="passText"
          @input="clearingWarnPass"
          type="password"
          class="input-base m-0"
          placeholder="Create a password"
        />
        <div class="pass-indicator">
          <span
            v-for="(item, index) in passStrengthChecker()"
            :key="index"
            class="pass-indicator__item"
            :class="{
              'pass-indicator__red': passStrengthChecker() === 1,
              'pass-indicator__orange': passStrengthChecker() === 2,
              'pass-indicator__green': passStrengthChecker() === 3,
            }"
          ></span>
        </div>
        <input
          v-model="passConfirmText"
          type="password"
          class="input-base"
          placeholder="Confirm password"
        />
        <div class="sm-form__warn" v-if="!isPassMatch">
          Your password and confirmation password do not match
        </div>
        <div class="confirm">
          <ul>
            <li v-for="confirm in confirms" :key="confirm.nameLink">
              <label class="confirm__lable">
                {{ confirm.title }}
                <a :href="`${confirm.link}`">{{ confirm.nameLink }}</a>
                <input
                  @input="clearingWarnAgreements"
                  v-model="confirm.checked"
                  type="checkbox"
                  name="terms"
                  checked
                />
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
          <div class="sm-form__warn" v-if="!isConfirmed">
            You must accept all agreements
          </div>
        </div>

        <div
          class="g-recaptcha"
          data-sitekey="6Lds_W4aAAAAAMqoq26rXADQ0jlhnJDXkcKSx5ZE"
        ></div>

        <button @click="send" class="btn btn_todown" size="compact ">
          Done!
        </button>
      </div>
    </form>
  </div>

  <Footer />
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "Sign3",
  components: {
    Header,
    Footer,
  },
  data: function () {
    return {
      passText: "",
      passConfirmText: "",
      isPassMatch: true,
      isConfirmed: true,
      confirms: [
        {
          title: "I agree to the myFixer.com",
          nameLink: "Terms of Service",
          link: "#",
          checked: false,
        },
        {
          title: "I agree to the myFixer.com",
          nameLink: "Privacy Policy",
          link: "#",
          checked: false,
        },
      ],
    };
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://www.google.com/recaptcha/api.js?hl=en"
    );
    document.head.appendChild(recaptchaScript);
  },
  methods: {
    clearingWarnPass() {
      this.isPassMatch = true;
    },
    clearingWarnAgreements() {
      this.isConfirmed = true;
    },
    passStrengthChecker() {
      let mediumPassword = new RegExp(
        "((?=.*[a-z])(?=.*[0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.{6,}))"
      );
      let strongPassword = new RegExp(
        "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
      );
      if (strongPassword.test(this.passText)) {
        return 3;
      }
      if (mediumPassword.test(this.passText)) {
        return 2;
      }
      if (this.passText) {
        return 1;
      }
    },
    passConfirmChecker() {
      this.isPassMatch = this.passText == this.passConfirmText;
      return this.isPassMatch;
    },
    agreeChecker() {
      this.isConfirmed = this.confirms.every((confirm) => confirm.checked);
      return this.isConfirmed;
    },
    send(e) {
      e.preventDefault();
      this.passConfirmChecker();
      this.agreeChecker();
    },
  },
};
</script>
