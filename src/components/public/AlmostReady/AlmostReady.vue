<template>
  <div class="circle">
    <div class="circle__text">
      <div class="circle__title">You are almost ready to go!</div>
      <div class="circle__descr">
        {{ message }}
      </div>
    </div>
    <div class="circle__3">
      <div class="circle__2">
        <div class="circle__1">
          <div class="circle__img">
            <img src="@/assets/img/email.svg" alt="email" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "AlmostReady",
  components: {},
  props: {
    message: String,
  },
  beforeMount() {
    if (JSON.parse(localStorage.getItem("idUserForChangePass"))) {
      setTimeout(() => router.push("/sign-4"), 5000);
    } else {
      setTimeout(() => router.push("/"), 5000);
    }
  },
};
</script>
