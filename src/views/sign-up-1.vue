<template>
  <Header title="Sign up" question="Already have an account?" offer="Log In" />
  <div class="content">
    <form action="#" class="form sm-form">
      <div class="sm-form__content">
        <div class="sm-form__title">Sign up</div>
        <input
          type="text"
          class="input-base input-base_sm"
          placeholder="First name"
        />
        <input
          type="text"
          class="input-base input-base_sm"
          placeholder="Last name"
        />
        <input type="text" class="input-base" placeholder="Username" />
        <input type="text" class="input-base" placeholder="Email" />
        <button class="btn btn_todown">Get started</button>
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
