<template>
  <div class="card__content">
    <div class="profphoto-wrapp">
      <div class="profphoto-wrapp__img">
        <img :src="getNewImage" alt="Profile photo" />
        <div class="profphoto-wrapp__change">
          <label for="photo"
            ><span class="profphoto-wrapp__pen">&#9999;</span> Change
            photo</label
          >
          <input
            v-on:change="photoDownload"
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
        <h3 class="card__input-title" @click="showModel">Gender</h3>
        <SelectList
          :selected="gender"
          v-model="gender"
          :options="gendersList"
        />
      </div>

      <div class="admin-field fields-block__item">
        <h3 class="card__input-title">MOBILE PHONE</h3>
        <SelectPhone
          v-model="phone"
          :selected="phone"
          :options="phoneCodesList"
        />
      </div>

      <div class="admin-field fields-block__item">
        <h3 class="card__input-title">COUNTRY</h3>
        <SelectList
          v-model="country"
          :selected="country"
          :options="countriesList"
          icon="marker"
        />
      </div>

      <div class="admin-field fields-block__item">
        <h3 class="card__input-title">CATEGORY</h3>
        <SelectList
          v-model="category"
          :selected="category"
          :options="categoriesList"
          nameOption="name"
        />
      </div>
      <div class="admin-field fields-block__item fields-block__item_right">
        <button @click="onSubmit" class="btn btn_lg">SAVE</button>
      </div>
    </div>
  </div>
</template>

<script>
import SelectList from "../CustomFields/SelectList";
import SelectPhone from "../CustomFields/SelectPhone";
import { usersAPI } from "@/api/api";

export default {
  name: "PersonalInfo",
  components: {
    SelectList,
    SelectPhone,
  },
  props: {
    userInfoData: Object,
    categoriesList: Array,
  },
  data() {
    return {
      fname: this.userInfoData.fname,
      lname: this.userInfoData.lname,
      phone: this.userInfoData.phone,
      gender: this.userInfoData.gender,
      country: this.userInfoData.country,
      category: this.userInfoData.categoryName,

      gendersList: ["Mr", "Ms", "Girl", "Boy", "Other"],
      countriesList: ["Ukraine", "Tourkey", "Egypt"],
      phoneCodesList: [
        { code: "+380 ", src: "ukraine" },
        { code: "+20 ", src: "egypt" },
        { code: "+90 ", src: "turkey" },
      ],
      photo: this.userInfoData.photo,
    };
  },

  computed: {
    getNewImage() {
      return this.photo;
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
      } else {
        const response = await usersAPI.updatePhoto(e.target.files[0]);
        this.photo = response.photoUrl;
      }
    },
    async onSubmit() {
      let checkIs = (value) => {
        const result = this[value] ? this[value] : this.userInfoData[value];
        console.log(result);
        return result;
      };
      const userUpdateData = {
        fname: checkIs("fname"),
        lname: checkIs("lname"),
        gender: checkIs("gender"),
        username: checkIs("username"),
        categoryId: this.category.id
          ? this.category.id
          : this.userInfoData.categoryId,
        country: checkIs("country"),
        email: checkIs("email"),
        phone: checkIs("phone"),
      };

      const response = await usersAPI.updateProfile(userUpdateData);
    },
  },
};
</script>
