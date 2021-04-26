<template>
  <div class="admin-block">
    <div class="search-table">
      <span class="search-table__ico"
        ><img src="/img/search-icon.svg" alt="search-icon"
      /></span>
      <input
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

        <div class="thegrid__cell">Richard</div>
        <div class="thegrid__cell">Richard</div>
        <div class="thegrid__cell">Australia</div>
        <div class="thegrid__cell">Requested</div>
        <div class="thegrid__cell">
          <select name="level" class="thegrid-select">
            <option value="">Gold</option>
            <option value="">Silver</option>
            <option value="">Bronze</option>
          </select>
        </div>
        <div class="thegrid__cell">rfrome@gmail.com</div>
        <div class="thegrid__cell thegrid__close"><p>&#10006;</p></div>
      </div>
    </div>
  </div>
</template>

<script>
import { usersAPI } from "@/api/api";
export default {
  name: "AdminZone",
  data() {},
  mounted() {
    console.log(usersAPI.getAllUsers());
  },
};
</script>
