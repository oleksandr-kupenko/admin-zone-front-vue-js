<template>
  <div class="custom-select" :class="{ 'country-selector': icon }">
    <vue-select
      :modelValue="true"
      close-on-select
      :options="options"
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
  props: {
    options: Array,
    icon: String,
    modelValue: String,
  },
  data() {
    return {};
  },
  methods: {
    ok() {
      console.log("ok");
    },
  },
};
</script>
