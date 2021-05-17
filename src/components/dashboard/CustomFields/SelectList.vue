<template>
  <div
    v-if="options"
    class="custom-select"
    :class="{ 'country-selector': icon }"
  >
    <vue-select
      v-model="selectedValue"
      :modelValue="true"
      close-on-select
      clear-on-close
      :options="options"
      :label-by="nameOption"
      :value-by="valueOption"
      searchable
      @update:modelValue="(option) => $emit('update:modelValue', option)"
    ></vue-select>
  </div>
</template>

<script>
import { ref } from "vue";
import VueSelect from "vue-next-select";

export default {
  name: "SelectList",
  components: {
    VueSelect,
  },
  props: [
    "options",
    "nameOption",
    "valueOption",
    "icon",
    "selected",
    "searchable",
  ],
  data() {
    return {
      selectedValue: this.selected,
    };
  },
  methods: {},
};
</script>
