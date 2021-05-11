<template>
  <header class="header">
    <div class="header-row">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/img/logo.svg" alt="myFixer logo" />
        </router-link>
      </div>
      <div class="sign-link">
        {{ question }}
        <preloader v-if="isLoading" />
        <router-link v-if="!isLoading" :to="{ path: link }">{{
          offer
        }}</router-link>
      </div>
    </div>
  </header>
  <div class="content content-form">
    <router-view></router-view>
  </div>
  <footer></footer>
</template>

<script>
import Preloader from "@/components/Preloader.vue";
export default {
  components: { Preloader },
  name: "PublicLayout",
  data() {
    return {
      isLoading: false,
      title: "",
      question: "",
      link: "",
      offer: "",
    };
  },
  async created() {
    this.isLoading = true;
    await this.getChildProps();
    this.isLoading = false;
  },
  methods: {
    async getChildProps() {
      const puthCurrentChildren = await this.$router.currentRoute.value.path;
      const arrChildrens = await this.$router.options.routes[0].children;
      let childProps = arrChildrens.filter(
        (children) => children.path == puthCurrentChildren
      )[0]?.props;
      if (childProps) {
        this.question = await childProps.question;
        this.offer = await childProps.offer;
        this.link = await childProps.link;
      } else {
        (this.question = ""), (this.offer = "");
      }
    },
  },
  watch: {
    $route() {
      this.getChildProps();
    },
  },
};
</script>
