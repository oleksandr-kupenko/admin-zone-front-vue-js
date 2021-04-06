<template>
  <Header title="Enter e-mail" question="Back to" offer="Sign in" />

  <div class="content">
    <form action="#" class="form sm-form">
      <div class="sm-form__content">
        <div class="sm-form__title">
          Enter your e-mail to reset your password
        </div>
        <input type="text" class="input-base" placeholder="E-mail" />
        <button class="btn btn_todown">Send</button>
      </div>
    </form>
  </div>

  <Footer />
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
export default { name: "Sign2", components: { Header, Footer } };
</script>
