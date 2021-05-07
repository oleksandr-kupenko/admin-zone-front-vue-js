<template>
  <div class="card">
    <div class="card-title">
      <h2 class="card-title__h2">
        <div
          @click="changeInfoBlock()"
          class="card-title__link"
          :class="{
            'card-title__link_active': showingBlockPersonal,
          }"
        >
          PERSONAL INFORMATION
        </div>
      </h2>
      <h2 class="card-title__h2">
        <div
          @click="changeInfoBlock()"
          to="/profile/accaunt-info"
          class="card-title__link"
          :class="{
            'card-title__link_active': !showingBlockPersonal,
          }"
        >
          ACCOUNT INFORMATION
        </div>
      </h2>
    </div>
    <Preloader v-if="isLoading" />
    <template v-if="showingBlockPersonal && !isLoading">
      <PersonalInfo
        :userInfoData="userInfoData"
        :categoriesList="categoriesList"
    /></template>
    <template v-if="!showingBlockPersonal && !isLoading"
      ><AccauntInfo :userInfoData="userInfoData"
    /></template>
  </div>
</template>

<script>
import Preloader from "../../Preloader";
import PersonalInfo from "./PersonalInfo";
import AccauntInfo from "./AccauntInfo";
import { usersAPI } from "@/api/api";

export default {
  name: "Profile",
  components: {
    PersonalInfo,
    AccauntInfo,
    Preloader,
  },

  data() {
    return {
      isLoading: true,
      showingBlockPersonal: true,
      userInfoData: "",
      categoriesList: "",
      userId: this.$router.currentRoute.value.params.id,
    };
  },
  async beforeCreate() {
    console.log("id222", this.$router.currentRoute.value.params);
    if (this.$router.currentRoute.value.params.id) {
      this.userId = this.$router.currentRoute.value.params.id;
      this.userInfoData = await usersAPI.getUser(this.userId);
    } else {
      this.userId = "";
      this.userInfoData = await usersAPI.getProfile();
    }
    this.categoriesList = await usersAPI.getAllCategories();
    this.isLoading = false;
  },
  methods: {
    changeInfoBlock() {
      this.showingBlockPersonal = !this.showingBlockPersonal;
    },
  },
  watch: {
    async $route() {
      this.isLoading = true;
      this.userInfoData = await usersAPI.getProfile();
      this.isLoading = false;
    },
  },
};
</script>
