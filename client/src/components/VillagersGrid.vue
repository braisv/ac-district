<template>
  <div class="villagers">
    <router-link
      :to="{ name: 'Villager', params: { id: villager.id } }"
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
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "VillagersGrid",
  computed: {
    ...mapState(["filteredResults"]),
  },
  methods: {
    getImages(id) {
      console.log('FISHES IMAGES: ', this.filteredResults.anchovy)
      if (this.filteredResults.anchovy) return `https://acnhapi.com/images/fish/${id}`;
      if (!this.filteredResults.anchovy) return `https://acnhapi.com/images/villagers/${id}`;
    },
  },
};
</script>
