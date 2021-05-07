<template>
  <div class="phone-block">
    <div class="custom-select custom-select-flag">
      <vue-select
        v-model="currentPhoneValue"
        close-on-select
        :options="options"
        placeholder=""
        hide-selected
        :selected="showModel()"
      >
        <template #dropdown-item="{ option }">
          <img
            :src="require('@/assets/img/flags/' + option.src + '.png')"
            style="width: 1.5rem; margin: 0px 25%; vertical-align: middle"
          />
        </template>
      </vue-select>
    </div>
    <div class="custom-select custom-select-phone">
      <input
        @change="(event) => $emit('update:modelValue', event.target.value)"
        type="text"
        @keypress="handleChange($event)"
        class="input-base"
        :value="code"
      />
    </div>
  </div>
</template>

<script>
import VueSelect from "vue-next-select";

export default {
  name: "SelectPhone",
  components: {
    VueSelect,
  },
  props: {
    options: Array,
    icon: String,
    selected: String,
  },
  data() {
    const code = this.selected ? this.selected : "+380";
    return {
      currentPhoneValue: { code: code, src: "ukraine" },
      code,
    };
  },
  mounted() {
    this.showModel();
  },
  methods: {
    showModel() {
      const getFlagImgUrl = (pic) => {
        return require("../../../assets/img/flags/" + pic + ".png");
      };

      const inputBlock = document.querySelector(
        ".custom-select-flag .vue-input"
      );
      const flagDiv = document.createElement("div");
      flagDiv.className = "custom-select-flag__input";
      const flagImg = document.createElement("img");
      flagImg.className = "custom-select-flag__img";
      if (this.currentPhoneValue) {
        flagImg.src = getFlagImgUrl(this.currentPhoneValue.src);
      }
      if (inputBlock) {
        if (document.querySelector(".custom-select-flag__input")) {
          document.querySelector(".custom-select-flag__input").remove();
        }
        inputBlock.appendChild(flagDiv);
        flagDiv.appendChild(flagImg);
        this.putPhoneNumber();
      }
    },
    putPhoneNumber() {
      if (
        this.currentPhoneValue &&
        !this.code.includes(this.currentPhoneValue.code)
      ) {
        this.code = this.currentPhoneValue.code;
      }
    },
    handleChange(event) {
      if (isFinite(event.key)) {
        this.code = this.code.includes
          ? event.target.value
          : this.currentPhoneValue.code + event.target.value;
      } else {
        event.preventDefault();
      }
    },
  },
};
</script>
