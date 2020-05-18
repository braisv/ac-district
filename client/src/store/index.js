import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

axios.defaults.baseURL = "http://acnhapi.com";

export default new Vuex.Store({
  state: {
    villagers: [],
    filteredResults: [],
    filterSearch: {
      name: "",
      personality: [],
      species: [],
    },
  },
  mutations: {
    villagersAPI(state, payload) {
      state.villagers = payload;
    },
    filterUpdate(state, payload) {
      state.filteredResults = payload;
    },
    updateSearch(state, payload) {
      state.filterSearch = payload;
    },
  },
  actions: {
    getVillagers({ commit }) {
      axios
        .get("/villagers")
        .then((res) => {
          commit("villagersAPI", res.data);
          commit("filterUpdate", res.data);
        })
        .catch((err) => console.log(err));
    },
    filterVillagers({ commit, dispatch }, payload) {
      let result = this.state.filterSearch;
      if (payload.target.id === "name") {
        result.name = payload.target.value;
        // for (let item in this.state.villagers) {
        //   if (
        //     this.state.villagers[item].name["name-sp"]
        //       .toLowerCase()
        //       .includes(payload.target.value.toLowerCase())
        //   )
        //     result.push(this.state.villagers[item]);
        // }
      }
      if (payload.target.id === "personality") {
        result.personality.push(payload.target.value);
        // for (let item in this.state.villagers) {
        //   if (
        //     this.state.villagers[item].personality
        //       .toLowerCase()
        //       .includes(payload.target.value.toLowerCase())
        //   )
        //     result.push(this.state.villagers[item]);
        // }
      }
      if (payload.target.id === "species") {
        result.species.push(payload.target.value);
        // for (let item in this.state.villagers) {
        //   if (
        //     this.state.villagers[item].species
        //       .toLowerCase()
        //       .includes(payload.target.value.toLowerCase())
        //   )
        //     result.push(this.state.villagers[item]);
        // }
      }
      commit("updateSearch", result);
      dispatch("findResults");
    },
    findResults({ commit }) {
      let result = [];
      const search = this.state.filterSearch;
      for (let item in this.state.villagers) {
        if (
          this.state.villagers[item].name["name-sp"]
            .toLowerCase()
            .includes(search.name.toLowerCase())
        ) {
          if (
            search.personality.includes(
              this.state.villagers[item].personality
            ) ||
            search.personality.length === 0
          ) {
            if (
              search.species.includes(this.state.villagers[item].species) ||
              search.species.length === 0
            ) {
              result.push(this.state.villagers[item]);
            }
          }
        }
      }
      commit("filterUpdate", result);
    },
  },
  modules: {},
});
