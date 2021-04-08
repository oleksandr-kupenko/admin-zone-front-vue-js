<template>
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
</template>

<script>
import vueRecaptcha from "vue3-recaptcha2";

export default {
  name: "Captcha",
  components: {
    vueRecaptcha,
  },
  data: function () {
    return {
      show: 1,
      isCaptchaVerifie: false,
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
  },
};
</script>
