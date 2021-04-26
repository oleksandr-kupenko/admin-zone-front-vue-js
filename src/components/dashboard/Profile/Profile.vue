<template>
  <div class="card">
    <div class="card-title">
      <h2 class="card-title__h2">
        <router-link
          to="/profile"
          class="card-title__link"
          :class="{
            'card-title__link_active': this.$route.path === '/profile',
          }"
        >
          PERSONAL INFORMATION
        </router-link>
      </h2>
      <h2 class="card-title__h2">
        <router-link
          to="/profile/accaunt-info"
          class="card-title__link"
          :class="{
            'card-title__link_active':
              this.$route.path === '/profile/accaunt-info',
          }"
          >ACCOUNT INFORMATION</router-link
        >
      </h2>
    </div>
    <router-view> </router-view>
  </div>
</template>

<script>
import PersonalInfo from "./PersonalInfo";
import AccauntInfo from "./AccauntInfo";

export default {
  name: "Profile",
  components: {
    PersonalInfo,
    AccauntInfo,
  },

  data() {
    return {
      showingBlock: "personal",
    };
  },
  methods: {
    changeInfoBlock() {
      this.showingBlock === "personal"
        ? (this.showingBlock = "accaunt")
        : (this.showingBlock = "personal");
    },
  },
};
</script>
