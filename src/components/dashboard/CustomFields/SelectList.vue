<template>
  <div class="custom-select" :class="{ 'country-selector': icon }">
    <vue-select
      v-model="selectedValue"
      :modelValue="true"
      close-on-select
      :options="options"
      :label-by="nameOption"
      :value-by="nameOption"
      @selected="(option) => $emit('update:modelValue', option)"
    ></vue-select>
  </div>
</template>

<script>
import VueSelect from "vue-next-select";

export default {
  name: "SelectList",
  components: {
    VueSelect,
  },
  props: ["options", "nameOption", "icon", "selected"],
  data() {
    return {
      selectedValue: this.selected,
    };
  },
  methods: {},
};
</script>
