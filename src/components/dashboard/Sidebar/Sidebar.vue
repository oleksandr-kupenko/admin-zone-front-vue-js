<template>
  <aside class="sidebar" :class="{ sidebar_active: isOpenMenu }">
    <div class="wrapper-column">
      <div class="sidebar-logo">
        <router-link to="/"
          ><img src="../../../assets/img/logo-light.svg" alt="myFixer logo"
        /></router-link>
      </div>
      <nav class="sidebar-menu">
        <div
          v-for="item in menuItems"
          :key="item.icon"
          @click="changeCurrentUrl()"
          class="sidebar-menu__item"
          :class="{
            'sidebar-menu__item_active': item.link === currentPage,
          }"
        >
          <div class="sidebar-menu__icon">
            <router-link
              :to="item.link"
              :class="{ 'sidebar-menu__icon_close': item.close == true }"
              ><img
                :src="require(`../../../assets/img/sidebar/${item.icon}.svg`)"
                alt="item.icon"
            /></router-link>
          </div>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    isOpenMenu: Boolean,
  },
  data() {
    return {
      currentPage: "",
      menuItems: [
        { icon: "loupe", link: "/search" },
        { icon: "bust", link: "/profile" },
        { icon: "messages", link: "/", close: true },
        { icon: "calendar", link: "/admin" },
      ],
    };
  },
  mounted() {
    this.changeCurrentUrl();
  },
  methods: {
    changeCurrentUrl() {
      this.currentPage = this.$route.path;
    },
  },
};
</script>
