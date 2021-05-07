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
        <button @click="onSubmit" class="btn btn_lg">SAVE</button>
      </div>
    </div>
  </div>
</template>

<script>
import { usersAPI } from "@/api/api";

export default {
  name: "AccauntInfo",
  props: {
    userInfoData: Object,
  },
  data() {
    return {
      username: this.userInfoData.username,
      email: this.userInfoData.email,
    };
  },
  methods: {
    async onSubmit() {
      let checkIs = (value) => {
        const result = this[value] ? this[value] : this.userInfoData[value];
        console.log(result);
        return result;
      };
      const userUpdateData = {
        fname: checkIs("fname"),
        lname: checkIs("lname"),
        username: checkIs("username"),
        categoryId: checkIs("categoryId"),
        country: checkIs("country"),
        email: checkIs("email"),
        phone: checkIs("phone"),
      };

      const response = await usersAPI.updateProfile(userUpdateData);
    },
  },
};
</script>
