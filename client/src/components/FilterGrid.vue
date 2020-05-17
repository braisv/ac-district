<template>
  <div class="filter-grid">
    <form class="form">
      <div class="form__group">
        <label for="name" class="form__label">Name of the villager</label>
        <input
          type="text"
          class="form__input"
          id="name"
          placeholder="Villager name"
        />
      </div>
      <div class="form__group">
        <label for="personality" class="form__label">Personality</label>
        <select name="personality" id="personality" class="form__select">
          <option value="" default>Cualquiera</option>
          <option
            v-for="(personality, index) in personalities"
            :key="index"
            :value="personality"
            >{{ personality }}</option
          >
        </select>
      </div>
      <div class="form__group">
        <label for="species" class="form__label">Species</label>
        <select name="species" id="species" class="form__select">
          <option value="" default>Cualquiera</option>
          <option
            v-for="(animal, index) in species"
            :key="index"
            :value="animal"
            >{{ animal }}</option
          >
        </select>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "FilterGrid",
  data() {
    return {
      personalities: [],
      species: [],
    };
  },
  created() {
    this.getPersonalities();
    this.getSpecies();
  },
  methods: {
    getPersonalities() {
      for (let item in this.villagers) {
        if (this.personalities.indexOf(this.villagers[item].personality) === -1)
          this.personalities.push(this.villagers[item].personality);
      }
    },
    getSpecies() {
      for (let item in this.villagers) {
        if (this.species.indexOf(this.villagers[item].species) === -1)
          this.species.push(this.villagers[item].species);
      }
    },
  },
  computed: {
    ...mapState(["villagers"]),
  },
};
</script>
