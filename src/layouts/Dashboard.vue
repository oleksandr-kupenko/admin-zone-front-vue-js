<template>
  <div class="wrapper grid-2col" :class="{ 'grid-2col_active': isOpenMenu }">
    <header class="header admin-header">
      <div class="header-row">
        <div class="logomenu-wrapp">
          <div
            @click="openMenu()"
            class="header__burger"
            :class="{ header__burger_active: isOpenMenu }"
          >
            <span></span>
          </div>
          <div class="logo logo-sm">
            <router-link to="@/">
              <img src="@/assets/img/logo.svg" alt="myFixer logo" />
            </router-link>
          </div>
        </div>

        <div class="breadcrumbs">
          <router-link to="@/" class="breadcrums-element">Home</router-link>
          <a href="#" class="breadcrums-element">{{ pageName }}</a>
        </div>
        <details class="profile-detalis">
          <summary class="profile-detalis__summary">Faruh Bernandez</summary>
          <p>Some info and links.</p>
        </details>
      </div>
    </header>
    <Sidebar :isOpenMenu="isOpenMenu" />
    <main class="main main-lg">
      <div class="content">
        <section class="form lg-form">
          <router-view></router-view>
        </section>
      </div>
    </main>
  </div>
  <footer></footer>
</template>

<script>
import Sidebar from "../components/dashboard/Sidebar/Sidebar";
export default {
  components: { Sidebar },
  name: "DashboardLayout",
  data() {
    return {
      isOpenMenu: false,
      pageName: this.getTitle(),
    };
  },
  methods: {
    openMenu() {
      this.isOpenMenu = !this.isOpenMenu;
    },
    getTitle() {
      return this.$route.matched[1].meta.title;
    },
  },
  watch: {
    $route() {
      this.pageName = this.getTitle();
    },
  },
};
</script>
