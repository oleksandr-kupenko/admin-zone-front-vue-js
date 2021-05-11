<template>
  <div class="card__content">
    <div class="profphoto-wrapp">
      <div class="profphoto-wrapp__img">
        <img :src="getNewImage" alt="Profile photo" />
        <div class="profphoto-wrapp__change">
          <label for="photo"
            ><span class="profphoto-wrapp__pen">&#9999;</span>Change
            photo</label
          >
          <input
            @change="photoDownload"
            style="display: none"
            type="file"
            id="photo"
            name="photo"
          />
        </div>
      </div>
    </div>
    <div class="fields-block">
      <div class="admin-field fields-block__item">
        <h3 class="card__input-title">First name</h3>
        <input type="text" class="input-base" v-model="fname" />
      </div>

      <div class="admin-field fields-block__item">
        <h3 class="card__input-title">Last name</h3>
        <input type="text" class="input-base" v-model="lname" />
      </div>

      <div class="admin-field fields-block__item">
        <h3 class="card__input-title">Gender</h3>
        <select-list
          :selected="gender"
          v-model="gender"
          :options="gendersList"
        />
      </div>

      <div class="admin-field fields-block__item">
        <h3 class="card__input-title">MOBILE PHONE</h3>
        <select-phone
          v-model="phone"
          :selected="phone"
          :options="phoneCodesList"
        />
      </div>

      <div class="admin-field fields-block__item">
        <h3 class="card__input-title">COUNTRY</h3>
        <select-list
          v-model="country"
          :selected="country"
          :options="countriesList"
          icon="marker"
        />
      </div>

      <div class="admin-field fields-block__item">
        <h3 class="card__input-title">CATEGORY</h3>
        <select-list
          v-model="categoryId"
          :selected="categoryId"
          :options="categoriesList"
          nameOption="name"
          valueOption="id"
        />
      </div>
      <div class="admin-field fields-block__item">
        <h3 class="card__input-title">STACK</h3>
        <multi-select-list
          v-if="stackList"
          v-model="stack"
          :options="stackList"
          max="5"
          :selected="stack"
        />
      </div>
      <div class="admin-field fields-block__item">
        <h3 class="card__input-title">RATE</h3>
        <input type="text" class="input-base" v-model="rate" />
      </div>

      <div class="admin-field fields-block__item fields-block__item_right">
        <big-button @click="onSubmit" :isLoading="isLoading" title="SAVE" />
      </div>
    </div>
  </div>
</template>

<script>
import SelectList from "@/components/dashboard/CustomFields/SelectList";
import SelectPhone from "@/components/dashboard/CustomFields/SelectPhone";
import MultiSelectList from "@/components/dashboard/CustomFields/MultiSelectList";
import Preloader from "@/components/Preloader";
import BigButton from "@/components/BigButton";
import { usersAPI } from "@/api/api";
import noavatar from "@/assets/img/cards-photo/noavatar.png";

export default {
  name: "PersonalInfo",
  components: {
    SelectList,
    SelectPhone,
    MultiSelectList,
    Preloader,
    BigButton,
  },
  props: {
    userInfoData: Object,
    categoriesList: Array,
    stackList: Array,
  },
  data() {
    return {
      isLoading: false,
      fname: this.userInfoData.fname,
      lname: this.userInfoData.lname,
      phone: this.userInfoData.phone,
      gender: this.userInfoData.gender,
      country: this.userInfoData.country,
      categoryId: this.userInfoData.categoryId,
      rate: this.userInfoData.rate,
      email: this.userInfoData.email,
      username: this.userInfoData.username,
      stack: this.userInfoData.stack ? this.userInfoData.stack.split(",") : "",
      gendersList: ["Mr", "Ms", "Girl", "Boy", "Other"],
      countriesList: ["Ukraine", "Tourkey", "Egypt"],
      phoneCodesList: [
        { code: "+380 ", src: "ukraine" },
        { code: "+20 ", src: "egypt" },
        { code: "+90 ", src: "turkey" },
      ],
      photo: this.userInfoData.photo,
      noavatar: noavatar,
    };
  },
  computed: {
    getNewImage() {
      return this.photo ? this.photo : noavatar;
    },
  },

  methods: {
    async photoDownload(e) {
      if (this.$router.currentRoute.value.params.id) {
        const response = await usersAPI.updatePhoto(
          e.target.files[0],
          this.userInfoData.email
        );
        this.photo = response.photoUrl;
        this.$emit("updatedPhoto", response.photoUrl);
      } else {
        const response = await usersAPI.updatePhoto(e.target.files[0]);
        this.photo = response.photoUrl;
        this.$emit("updatedPhoto", response.photoUrl);
      }
    },
    async onSubmit() {
      this.isLoading = true;
      let checkIs = (value) => {
        if (this[value] && this[value] !== "null") {
          return this[value];
        }
        return "";
      };

      const userUpdateData = {
        fname: checkIs("fname"),
        lname: checkIs("lname"),
        gender: checkIs("gender"),
        username: checkIs("username"),
        categoryId: checkIs("categoryId"),
        country: checkIs("country"),
        email: checkIs("email"),
        phone: checkIs("phone"),
        stack: checkIs("stack"),
        rate: checkIs("rate"),
      };
      await usersAPI.updateProfile(userUpdateData);
      setTimeout(() => (this.isLoading = false), 500);
    },
  },
};
</script>
