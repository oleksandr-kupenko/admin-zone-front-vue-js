<template>
  <div class="result-block">
    <div class="result-block__head">
      <router-link to="/search/map" class="card__link"> SHOW MAP </router-link>
      <div class="people-bloc_icons">
        <div class="signal">
          <img :src="require('@/assets/img/signal.svg')" alt="Signal level" />
        </div>
        <div class="sort">
          <label class="container"
            >by price
            <input
              v-model="valueForSort"
              @change="(e) => $emit('checkSort', e.target.value)"
              type="radio"
              checked="checed"
              name="filter-people"
              value="pricing"
            />
            <span class="checkmark"></span>
          </label>

          <label class="container"
            >by rating
            <input
              v-model="valueForSort"
              @change="(e) => $emit('checkSort', e.target.value)"
              type="radio"
              name="filter-people"
              value="rating"
            />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
    </div>
    <div class="people-cards">
      <div v-for="u in usersList" :key="u.id" class="card-one">
        <div class="card-one__photo">
          <img
            :src="u.photo || require('@/assets/img/cards-photo/noavatar.png')"
          />
        </div>
        <div class="card-one__text">
          <h3 class="card-one__name">
            {{ u.fname }} {{ u.lname }}
            <span class="icon-star"
              ><img
                :src="
                  require(`../../../assets/img/stars-icon/${showRating(
                    u.rating
                  )}.svg`)
                "
                alt="Level rating"
            /></span>
          </h3>
          <p class="card-one__location">{{ u.country }}</p>
          <p class="card-one__stack">
            <span class="card-one__line-name">Stack:</span>
            {{ getStack(u.stack) }}
            <a :href="`/profile/${u.id}`">More</a>
          </p>
          <p class="card-one__rate">
            <span class="card-one__line-name"> Base Daily Rate:</span>
            $ {{ rateLocaled(u.rate) }} USD
          </p>
        </div>
      </div>
      <Observer @intersect="intersect" />
    </div>
  </div>
</template>

<script>
import Observer from "@/components/Observer";

export default {
  name: "Resultusers",
  components: {
    Observer,
  },
  props: {
    usersList: Array,
  },
  emits: ["checkSort"],
  data() {
    return {
      valueForSort: "",
    };
  },
  created() {
    this.users = this.usersList;
  },

  methods: {
    getStack(userStack) {
      if (userStack) {
        return userStack.split(",").slice(0, 3).join(", ");
      }
    },
    showRating(ratingLevel) {
      const icons = ["star-bronze", "star-silver", "star-gold"];
      return icons[ratingLevel - 1];
    },
    rateLocaled(rate) {
      return new Intl.NumberFormat("en-US", {
        style: "decimal",
      }).format(rate);
    },
    async intersect() {
      this.$emit("intersect");
    },
  },
};
</script>
