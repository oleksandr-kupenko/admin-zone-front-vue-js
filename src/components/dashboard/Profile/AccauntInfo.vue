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

      <div class="admin-field admin-field_right">
        <router-link to="/sign-2" class="card__link"
          >CHANGE PASSWORD</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccauntInfo",
  data() {
    return {
      username: "",
      email: "",
    };
  },
};
</script>
