<template>
  <div class="card">
    <div class="card__content">
      <div class="block-narrow">
        <div class="admin-field">
          <h3 class="card__input-title">LOCATION</h3>
          <SelectList
            v-model="chekedCountry"
            :options="countriesList"
            icon="marker"
          />
        </div>

        <div class="admin-field">
          <h3 class="card__input-title">SEARCH</h3>
          <input
            type="text"
            class="input-base"
            placeholder="Type your query..."
            tabindex="1"
          />
        </div>

        <div class="admin-field">
          <h3 class="card__input-title">Category</h3>
          <SelectList v-model="chekedCategory" :options="categoriesList" />
        </div>

        <div class="admin-field">
          <h3 class="card__input-title">STACK</h3>
          <input type="text" class="input-base" v-model="stack" />
        </div>
        <div class="admin-field">
          <h3 class="card__input-title">PERIOD</h3>
          <span class="calendar-icon"></span>
          <DataPicker v-model="dataRange" />
        </div>
        <button @click="onSubmit()" class="btn btn_lg">SEARCH</button>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import DataPicker from "../CustomFields/DataPicker";
import SelectList from "../CustomFields/SelectList";
import ResultUsersList from "./ResultUsersList";
import ResultMap from "./ResultMap";

export default {
  name: "Search",
  components: {
    SelectList,
    DataPicker,
    ResultUsersList,
    ResultMap,
  },
  data() {
    return {
      chekedCategory: "",
      chekedCountry: "",
      showingBlock: "usersList",
      countriesList: ["Ukraine", "Tourkey", "Egypt"],
      categoriesList: ["Junior", "Middle", "Senior"],
      stack: "",
      dataRange: "",
    };
  },
  computed: {
    sortedUsers() {
      let sortedUsersList = this.usersList.slice();
      return sortedUsersList.sort((a, b) => {
        if (a[this.valueForSort] === b[this.valueForSort]) return 0;
        return a[this.valueForSort] < b[this.valueForSort] ? 1 : -1;
      });
    },
  },
  methods: {
    onSubmit() {
      console.log(this.dataRange[0]);
    },
  },
};
</script>
