<template>
  <header class="header">
    <div class="header-row">
      <div class="logo">
        <a href="/">
          <img src="../assets/img/logo.svg" alt="myFixer logo" />
        </a>
      </div>
      <div class="sign-link">
        {{ question }} <a href="#">{{ offer }}</a>
      </div>
    </div>
  </header>
  <div class="content content-form">
    <router-view></router-view>
  </div>
  <footer></footer>
</template>

<script>
export default {
  name: "PublicLayout",
  data() {
    return {
      title: "",
      question: "",
      offer: "",
    };
  },
  mounted() {
    this.getChildProps();
  },
  methods: {
    getChildProps() {
      const puthCurrentChildren = this.$router.currentRoute.value.path;
      const arrChildrens = this.$router.options.routes[0].children;
      let childProps = arrChildrens.filter(
        (children) => children.path == puthCurrentChildren
      )[0]?.props;
      if (childProps) {
        this.question = childProps.question;
        this.offer = childProps.offer;
      } else {
        (this.question = ""), (this.offer = "");
      }
    },
  },
  watch: {
    $route(to, from) {
      this.getChildProps();
    },
  },
};
</script>
