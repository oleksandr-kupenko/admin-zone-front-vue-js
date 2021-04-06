<template>
  <Header
    title="Sign up 2"
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
          type="password"
          class="input-base"
          placeholder="Create a password"
        />
        <input
          type="password"
          class="input-base"
          placeholder="Confirm password"
        />
        <div class="confirm">
          <li>
            <label class="confirm__lable">
              I agree to the myFixer.com <a href="#">Terms of Service</a>
              <input type="checkbox" name="terms" checked />
              <span class="checkmark"></span>
            </label>
          </li>
          <li>
            <label class="confirm__lable">
              I agree to the myFixer.com <a href="#">Privacy Policy</a>
              <input type="checkbox" name="policy" />
              <span class="checkmark"></span>
            </label>
          </li>
        </div>

        <div
          class="g-recaptcha"
          data-sitekey="6Lds_W4aAAAAAMqoq26rXADQ0jlhnJDXkcKSx5ZE"
          l
        ></div>

        <button class="btn btn_todown" size="compact ">Done!</button>
      </div>
    </form>
  </div>

  <Footer />
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "Sign2",
  components: {
    Header,
    Footer,
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://www.google.com/recaptcha/api.js?hl=en"
    );
    document.head.appendChild(recaptchaScript);
  },
};
</script>
