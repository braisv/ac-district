<template>
  <div class="section-villagers">
    <div v-if="loading" class="loader">
      <bounce-loader
        :loading="loading"
        :color="color"
        :size = "size"
      ></bounce-loader>
    </div>
    <FilterGrid v-if="!loading" />
    <VillagersGrid v-if="!loading" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import VillagersGrid from "@/components/VillagersGrid.vue";
import FilterGrid from "@/components/FilterGrid.vue";
import BounceLoader from "vue-spinner/src/BounceLoader.vue";

export default {
  name: "Villagers",
  data() { 
    return {
      color: "#fff",
      size: "25vw"
    }
  },
  components: {
    FilterGrid,
    VillagersGrid,
    BounceLoader,
  },
  computed: {
    ...mapState(["villagers", "filteredResults", "loading"]),
  },
  methods: {
    ...mapActions(["getVillagers"]),
  },
  created() {
    this.getVillagers();
  },
};
</script>
