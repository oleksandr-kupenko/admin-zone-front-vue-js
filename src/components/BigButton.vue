<template>
  <Preloader v-if="isLoading" top="10%" />
  <button
    class="btn btn_lg"
    @click="() => $emit('click')"
    :class="{ btn_loading: isLoading }"
  >
    {{ title }}
  </button>
</template>

<script>
import Preloader from "@/components/Preloader";

export default {
  name: "BigButton",
  components: {
    Preloader,
  },
  props: {
    isLoading: Boolean,
    title: String,
  },
};
</script>
