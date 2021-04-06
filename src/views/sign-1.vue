<template>
  <Header title="Sign in" question="Do not have an account?" offer="Sign up" />

  <div class="content">
    <form action="#" class="form sm-form">
      <div class="sm-form__content">
        <div class="sm-form__title">Sign in</div>
        <input type="text" class="input-base" placeholder="Login" />
        <input type="password" class="input-base" placeholder="Password" />
        <div class="sm-form__pass-help">
          <a href="/sign-2">Forgot password?</a>
        </div>
        <button class="btn">Sign in</button>
      </div>
    </form>
  </div>

  <Footer />
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "Sign1",
  components: {
    Header,
    Footer,
  },
};
</script>
