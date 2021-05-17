<template>
  <div class="result-block map-block">
    <div class="result-block__head">
      <router-link to="/search" class="card__link"> SHOW RESULT </router-link>
    </div>
    <l-map style="height: 100%" v-model:zoom="zoom" :center="center">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker :lat-lng="marker" draggable> </l-marker>
    </l-map>
  </div>
</template>

<script>
import { Icon } from "leaflet";

// The following helps to avoid "net::ERR_INVALID_URL" errors in Chromium-like browsers without the need to unnecessarily import the files.
Icon.Default.prototype.options.imagePath = ".";
Icon.Default.prototype.options.iconUrl = "";
Icon.Default.prototype.options.shadowUrl = "";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
export default {
  name: "ResultMap",
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      zoom: 11,
      center: [50.44619, 30.41633],
      marker: [50.44619, 30.41633],
    };
  },
};
</script>
