<template>
  <div class="villagers villager-card">
    <div class="villager-card__image">
      <img
        :src="getImages(villager.id)"
        alt="IMG"
        class="villager-card__image--img"
      />
    </div>
    <div class="villager-card__content">
      <span>Name</span>
      <div class="villager-card__name">
        <div class="villager-card__name__spanish">
          {{ villager.name["name-sp"] }}
        </div>
        <div class="villager-card__name__english">
          {{ villager.name["name-en"] }}
        </div>
        <div class="villager-card__name__japanish">
          {{ villager.name["name-jp"] }}
        </div>
      </div>
      <span>Personality</span>
      <div class="villager-card__personality">
        {{ villager.personality }}
      </div>
      <span>Birthday</span>
      <div class="villager-card__birthday">
        {{ villager["birthday-string"] }}
      </div>
      <span>Species</span>
      <div class="villager-card__species">
        {{ villager.species }}
      </div>
      <span>Gender</span>
      <div class="villager-card__gender">
        {{ villager.gender }}
      </div>
      <span>Catch phrase</span>
      <div class="villager-card__phrase">
        {{ villager["catch-phrase"] }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Villager",
  computed: {
    ...mapState(["villager"]),
  },
  methods: {
    ...mapActions(["getVillager"]),
    getImages(id) {
      return `https://acnhapi.com/images/villagers/${id}`;
    },
  },
  created() {
    this.getVillager(this.$route.params.id);
  },
};
</script>
