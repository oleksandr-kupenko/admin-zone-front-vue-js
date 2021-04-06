<template>
  <Header
    title="Sign up 2"
    question="Already have an account?"
    offer="Log In"
  />
  <div class="content">
    <div class="circle">
      <div class="circle__text">
        <div class="circle__title">You are almost ready to go!</div>
        <div class="circle__descr">
          Please check your email to reset your password
        </div>
      </div>
      <div class="circle__3">
        <div class="circle__2">
          <div class="circle__1">
            <div class="circle__img">
              <img src="../assets/img/email.svg" alt="email" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "Sign6",
  components: {
    Header,
    Footer,
  },
};
</script>
