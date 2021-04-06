<template>
  <Header
    title="Reset pass"
    question="Do not have an account?"
    offer="Sign up"
  />
  <div class="content">
    <form action="#" class="form sm-form">
      <div class="sm-form__content">
        <div class="sm-form__title">Reset your password</div>
        <input type="password" class="input-base" placeholder="New password" />
        <input
          type="password"
          class="input-base"
          placeholder="Confirm password"
        />
        <button class="btn btn_todown">Reset</button>
      </div>
    </form>
  </div>

  <Footer />
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "Sign4",
  components: {
    Header,
    Footer,
  },
};
</script>
