<template>
  <div class="villagers">
    <div
      class="villagers__grid"
      v-for="(villager, index) in filteredResults"
      :key="index"
    >
      <div class="villagers__grid-image">
        <img
          :src="getImages(villager.id)"
          alt="IMG"
          class="villagers__grid-image--img"
        />
      </div>
      <div class="villagers__grid-content">
        <div class="villagers__grid-name">
          <div class="villagers__grid-name__spanish">
            {{ villager.name["name-sp"] }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "VillagersGrid",
  computed: {
    ...mapState(["villagers", "filteredResults"]),
  },
  methods: {
    getImages(id) {
      return `https://acnhapi.com/images/villagers/${id}`;
    },
  },
};
</script>
