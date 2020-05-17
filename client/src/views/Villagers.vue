<template>
  <div class="section-villagers">
    <FilterGrid />
    <VillagersGrid />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import VillagersGrid from "@/components/VillagersGrid.vue";
import FilterGrid from "@/components/FilterGrid.vue";

export default {
  name: "Villagers",
  components: {
    FilterGrid,
    VillagersGrid,
  },
};
</script>
