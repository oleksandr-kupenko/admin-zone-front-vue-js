<template>
  <div class="phone-block">
    <div class="custom-select custom-select-flag">
      <vue-select
        v-model="currentCode"
        close-on-select
        :options="options"
        placeholder=""
        hide-selected
        :selected="showModel()"
      >
        <template #dropdown-item="{ option }">
          <img
            :src="'./img/flags/' + option.src + '.png'"
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
  },
  data() {
    return {
      currentCode: { code: "+380", src: "ukraine" },
      code: "",
    };
  },
  mounted() {
    this.showModel();
  },
  methods: {
    showModel() {
      const inputBlock = document.querySelector(
        ".custom-select-flag .vue-input"
      );
      const flagDiv = document.createElement("div");
      flagDiv.className = "custom-select-flag__input";
      const flagImg = document.createElement("img");
      flagImg.className = "custom-select-flag__img";
      if (this.currentCode) {
        flagImg.src = "./img/flags/" + this.currentCode.src + ".png";
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
      if (this.currentCode) {
        if (!this.code.includes(this.currentCode.code)) {
          this.code = this.currentCode.code;
        }
      }
    },
    handleChange(event) {
      console.log(isFinite(event.key));
      if (isFinite(event.key)) {
        this.code = this.code.includes
          ? event.target.value
          : this.currentCode.code + event.target.value;
      } else {
        event.preventDefault();
      }
    },
  },
};
</script>
