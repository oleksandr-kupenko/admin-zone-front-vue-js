<template>
  <div class="result-block">
    <div class="result-block__head">
      <router-link to="/search/map" class="card__link"> SHOW MAP </router-link>
      <div class="people-bloc_icons">
        <div class="signal">
          <img
            :src="require('../../../assets/img/signal.svg')"
            alt="Signal level"
          />
        </div>
        <div class="sort">
          <label class="container"
            >by price
            <input
              v-model="valueForSort"
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
      <div v-for="u in sortedUsers" :key="u.id" class="card-one">
        <div class="card-one__photo">
          <img
            :src="require(`../../../assets/img/cards-photo/${u.avatar}`)"
            alt="Nane"
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
          <p class="card-one__location">Vancouver, Canada</p>
          <p class="card-one__stack">
            <span class="card-one__line-name">Stack:</span> Python, Django,
            Sketch
            <a :href="`/profile/${u.id}`">More</a>
          </p>
          <p class="card-one__rate">
            <span class="card-one__line-name"> Base Daily Rate:</span>
            $ {{ u.pricing }} USD
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultUsersList",
  data() {
    return {
      usersList: [
        {
          id: 1,
          fname: "Richard",
          lname: "Thompson",
          location: "Vancouver, Canada",
          stack: "Python, Django, Sketch",
          pricing: 1800,
          rating: "3",
          avatar: "face-1.png",
        },
        {
          id: 2,
          fname: "Richard",
          lname: "Thompson",
          location: "Vancouver, Canada",
          stack: "Python, Django, Sketch",
          pricing: 800,
          rating: "2",
          avatar: "face-2.png",
        },
        {
          id: 3,
          fname: "Richard",
          lname: "Thompson",
          location: "Vancouver, Canada",
          stack: "Python, Django, Sketch",
          pricing: 1230,
          rating: "1",
          avatar: "face-3.png",
        },
        {
          id: 4,
          fname: "Richard",
          lname: "Thompson",
          location: "Vancouver, Canada",
          stack: "Python, Django, Sketch",
          pricing: 1200,
          rating: "1",
          avatar: "face-4.png",
        },
      ],
      valueForSort: "",
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
    showRating(ratingLevel) {
      const icons = ["star-bronze", "star-silver", "star-gold"];
      return icons[ratingLevel - 1];
    },
  },
};
</script>
