<template>
  <div class="custom-select custom-select-stack">
    <Preloader v-if="isLoading" />
    <vue-select
      v-model="selectValues"
      v-bind:selected="selected"
      v-if="!isLoading"
      :options="languages"
      :max="+max"
      group-by="select staks"
      multiple
      taggable
      searchable
      @update:modelValue="() => $emit('update:modelValue', selectValues)"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import VueSelect from "vue-next-select";
import Preloader from "@/components/Preloader";

export default defineComponent({
  name: "MultiSelectList",
  components: {
    VueSelect,
    Preloader,
  },
  props: {
    options: Array,
    selected: {
      type: Array,
      default() {
        return [];
      },
    },
    max: String,
  },
  data() {
    const languages = "";
    return {
      languages,
      selectValues: ref(this.selected),
      isLoading: true,
    };
  },
  async created() {
    this.languages = await ref(this.options);
    this.isLoading = false;
  },
});
</script>
