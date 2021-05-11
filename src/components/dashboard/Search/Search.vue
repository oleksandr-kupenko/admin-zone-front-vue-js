<template>
  <div class="card">
    <div class="card__content">
      <div class="block-narrow">
        <div class="admin-field">
          <h3 class="card__input-title">LOCATION</h3>
          <SelectList
            v-model="country"
            :options="countriesList"
            icon="marker"
          />
        </div>

        <div class="admin-field">
          <h3 class="card__input-title">SEARCH</h3>
          <input
            v-model="search"
            v-on:keydown.enter="onSubmit()"
            type="text"
            class="input-base"
            placeholder="Type your query..."
            tabindex="1"
          />
        </div>

        <div class="admin-field">
          <h3 class="card__input-title">CATEGORY</h3>
          <SelectList
            v-model="category"
            :selected="category"
            :options="categoriesList"
            nameOption="name"
            valueOption="id"
          />
        </div>

        <div class="admin-field">
          <h3 class="card__input-title">STACK</h3>
          <MultiSelectList
            v-model="stack"
            :options="stackList"
            searchable="true"
          />
        </div>
        <div class="admin-field">
          <h3 class="card__input-title">PERIOD</h3>
          <span class="calendar-icon"></span>
          <DataPicker v-model="dataRange" />
        </div>
        <button @click="onSubmit()" class="btn btn_lg">SEARCH</button>
      </div>
      <template v-if="showingBlockUsers && !isLoading">
        <ResultUsersList
          :usersList="usersList"
          @checkSort="checkSort"
          @intersect="intersect"
        />
      </template>
    </div>
  </div>
</template>

<script>
import DataPicker from "../CustomFields/DataPicker";
import SelectList from "../CustomFields/SelectList";
import MultiSelectList from "../CustomFields/MultiSelectList";
import ResultUsersList from "./ResultUsersList";
import ResultMap from "./ResultMap";
import { usersAPI } from "@/api/api";
import stacklist from "@/data/stackList";

export default {
  name: "Search",
  components: {
    SelectList,
    DataPicker,
    ResultUsersList,
    ResultMap,
    MultiSelectList,
  },
  data() {
    return {
      category: "",
      country: "",
      search: "",
      stackList: stacklist(),
      countriesList: ["Ukraine", "Tourkey", "Egypt"],
      categoriesList: [],
      stack: "",
      dataRange: "",
      usersList: "",
      showingBlockUsers: true,
      isLoading: true,
      sortByPrice: true,
      min: 0,
      max: 6,
    };
  },
  async created() {
    this.isLoading = true;
    await this.downloadMoreUsers();
    this.categoriesList = await usersAPI.getAllCategories();
    this.isLoading = false;
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
    getUsers() {
      const response = usersAPI.getUsersList(
        this.min,
        this.max,
        this.search,
        this.country ? this.country : "",
        this.category ? this.category : "",
        this.stack.length === 0 ? "" : this.stack,
        this.sortByPrice
      );
      console.log("response", response);
      return response;
    },
    async downloadMoreUsers() {
      const newUsers = await this.getUsers();
      console.log("before", this.usersList);
      console.log("plus", this.newUsers);
      this.usersList = [...this.usersList, ...newUsers];
    },
    async searchUsers() {
      this.min = 0;
      this.usersList = await this.getUsers();
    },
    async onSubmit() {
      this.searchUsers();
    },
    async intersect() {
      this.min = this.min + this.max;
      this.downloadMoreUsers();
    },
    checkSort(value) {
      value === "pricing"
        ? (this.sortByPrice = true)
        : (this.sortByPrice = false);

      this.searchUsers();
    },
  },
};
</script>
