<template>
  <div class="admin-block">
    <div class="search-table">
      <span class="search-table__ico"
        ><img src="/img/search-icon.svg" alt="search-icon"
      /></span>
      <input
        v-model="searchValue"
        @focusout="search"
        type="text"
        class="search-table__input"
        placeholder="Type here to search..."
      />
    </div>
    <div class="wrap-table-admin">
      <div class="thegrid">
        <!-- [HEAD] -->
        <div class="thegrid__head thegrid__first">FIRST NAME</div>
        <div class="thegrid__head">LAST NAME</div>
        <div class="thegrid__head">COUNTRY</div>
        <div class="thegrid__head">STATUS</div>
        <div class="thegrid__head">LEVEL</div>
        <div class="thegrid__head">E-MAIL</div>
        <div class="thegrid__head thegrid__close"></div>
        <!-- [ROWS] -->
        <template v-for="u in usersList" :key="u.id">
          <div class="thegrid__cell thegrid__cell-name">
            <router-link :to="`/profile/${u.id}`">{{ u.fname }}</router-link>
          </div>
          <div class="thegrid__cell thegrid__cell-name">
            <router-link :to="`/profile/${u.id}`">{{ u.lname }}</router-link>
          </div>
          <div class="thegrid__cell">{{ u.country }}</div>
          <div class="thegrid__cell">
            {{ u.isRequested ? "Expected" : "Completed" }}
          </div>
          <div class="thegrid__cell">
            <select name="level" class="thegrid-select">
              <option value="">Gold</option>
              <option value="">Silver</option>
              <option value="">Bronze</option>
            </select>
          </div>
          <div class="thegrid__cell">{{ u.email }}</div>
          <div @click="deleteUser(u.id)" class="thegrid__cell thegrid__close">
            <p>&#10006;</p>
          </div>
        </template>
      </div>
    </div>
    <div class="pagination">
      <button :disabled="page < 1" @click="prevPage()" class="pag-bt">
        &#8592;
      </button>
      <div class="pagination_pagesList">
        <div
          @click="clickPaginationPage(index)"
          class="pagination_page"
          v-for="(p, index) in countPages()"
          :key="index"
          :class="{ 'pag-bt__active': currentPage == index + 1 }"
        >
          {{ index + 1 }}
        </div>
      </div>

      <button
        :disabled="this.countUsers < this.endIndex"
        @click="nextPage()"
        class="pag-bt"
      >
        &#8594;
      </button>
    </div>
  </div>
</template>

<script>
import { usersAPI } from "@/api/api";
import router from "@/router";
export default {
  name: "AdminZone",
  data() {
    return {
      usersList: "",
      countUsers: "",
      currentPage: 1,
      startIndex: "",
      endIndex: "",
      limitUsers: 5,
      searchValue: "",
    };
  },
  async created() {
    if (this.$router.currentRoute.value.query.search) {
      this.searchValue = this.$router.currentRoute.value.query.search;
    }
    if (this.$router.currentRoute.value.params.page) {
      this.currentPage = this.$router.currentRoute.value.params.page;
    }
    this.downloadPage();
  },
  methods: {
    async downloadPage() {
      this.startIndex = (this.currentPage - 1) * this.limitUsers;
      this.endIndex = this.currentPage * this.limitUsers;
      this.usersList = await usersAPI.getUsersList(
        this.startIndex,
        this.limitUsers,
        this.searchValue
      );
      const countUsersRequest = await usersAPI.getCountUsers();
      this.countUsers = countUsersRequest.count;
    },
    prevPage() {
      --this.currentPage;
      this.changeUrl();
      this.downloadPage();
    },
    nextPage() {
      ++this.currentPage;
      this.changeUrl();
      this.downloadPage();
    },
    countPages() {
      return Math.ceil(this.countUsers / this.limitUsers);
    },
    clickPaginationPage(index) {
      this.currentPage = index + 1;
      this.changeUrl();
      this.downloadPage();
    },

    changeUrl() {
      this.searchValue
        ? router.push(`/admin/${this.currentPage}?search=${this.searchValue}`)
        : router.push(`/admin/${this.currentPage}`);
    },
    async search() {
      router.push(`/admin/${this.currentPage}?search=${this.searchValue}`);
      this.usersList = await usersAPI.getUsersList(
        this.startIndex,
        this.limitUsers,
        this.searchValue
      );
    },
    async deleteUser(id) {
      const response = await usersAPI.deleteUser(id);
      const countUsersRequest = await usersAPI.getCountUsers();
      this.countUsers = countUsersRequest.count;
      if (this.countPages() < this.currentPage) {
        this.currentPage = this.currentPage - 1;
        console.log(this.countPages(), this.currentPage);
      }
      this.changeUrl();
      this.downloadPage();
    },
  },
};
</script>
