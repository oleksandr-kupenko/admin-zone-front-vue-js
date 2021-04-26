<template>
  <div class="card__content">
    <div class="profphoto-wrapp">
      <div class="profphoto-wrapp__img">
        <img src="../../../assets/img/profile.jpg" alt="Profile photo" />
        <div class="profphoto-wrapp__change">
          <p><span class="profphoto-wrapp__pen">&#9999;</span> Change photo</p>
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
        <SelectList v-model="chekedGender" :options="gendersList" />
      </div>

      <div class="admin-field fields-block__item">
        <h3 class="card__input-title">MOBILE PHONE</h3>
        <SelectPhone v-model="phone" :options="phoneCodesList" />
      </div>

      <div class="admin-field fields-block__item">
        <h3 class="card__input-title">COUNTRY</h3>
        <SelectList
          v-model="chekedCountry"
          :options="countriesList"
          icon="marker"
        />
      </div>

      <div class="admin-field fields-block__item">
        <h3 class="card__input-title">CATEGORY</h3>
        <SelectList v-model="chekedCategory" :options="categoriesList" />
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
export default {
  name: "PersonalInfo",
  components: {
    SelectList,
    SelectPhone,
  },

  data() {
    return {
      fname: "",
      lname: "",
      phone: "",
      chekedGender: "",
      chekedCountry: "",
      chekedCategory: "",
      categoriesList: ["Junior", "Middle", "Senior"],
      gendersList: ["Mr", "Ms", "Girl", "Boy", "Other"],
      countriesList: ["Ukraine", "Tourkey", "Egypt"],
      phoneCodesList: [
        { code: "+380 ", src: "ukraine" },
        { code: "+20 ", src: "egypt" },
        { code: "+90 ", src: "turkey" },
      ],
    };
  },
  methods: {
    onSubmit() {
      console.log(
        this.fname,
        this.lname,
        this.chekedGender,
        this.chekedCategory,
        this.chekedCountry,
        this.phone
      );
    },
  },
};
</script>
