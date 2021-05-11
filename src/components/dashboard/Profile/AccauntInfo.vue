<template>
  <div class="card__content">
    <div class="fields-block">
      <div class="admin-field fields-block__item">
        <h3 class="card__input-title">USERNAME</h3>
        <input v-model="username" type="text" class="input-base" />
      </div>

      <div class="admin-field fields-block__item">
        <h3 class="card__input-title">E-MAIL</h3>
        <input v-model="email" type="text" class="input-base" />
      </div>

      <div class="admin-field admin-field_right" style="flex-basis: 50%"></div>

      <div class="admin-field admin-field_right">
        <router-link to="/sign-2" class="card__link"
          >CHANGE PASSWORD</router-link
        >
      </div>
      <div class="admin-field fields-block__item fields-block__item_right">
        <big-button @click="onSubmit" :isLoading="isLoading" title="SAVE" />
      </div>
    </div>
  </div>
</template>

<script>
import { usersAPI } from "@/api/api";
import BigButton from "@/components/BigButton.vue";

export default {
  components: { BigButton },
  name: "AccauntInfo",
  props: {
    userInfoData: Object,
  },
  data() {
    return {
      isLoading: false,
      username: this.userInfoData.username,
      email: this.userInfoData.email,
    };
  },
  methods: {
    async onSubmit() {
      this.isLoading = true;
      let checkIs = (value) => {
        if (this[value] && this[value] !== "null") {
          return this[value];
        }
        return "";
      };
      const userUpdateData = {
        fname: this.userInfoData.fname,
        lname: this.userInfoData.lname,
        gender: this.userInfoData.gender,
        username: checkIs("username"),
        categoryId: this.userInfoData.categoryId,
        country: this.userInfoData.country,
        email: checkIs("email"),
        phone: this.userInfoData.phone,
        stack: this.userInfoData.stack,
        rate: this.userInfoData.rate,
      };
      usersAPI.updateProfile(userUpdateData);

      setTimeout(() => (this.isLoading = false), 500);
    },
  },
};
</script>
