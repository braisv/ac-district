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
  },
  mutations: {
    villagersAPI(state, payload) {
      state.villagers = payload;
    },
    filterUpdate(state, payload) {
      state.filteredResults = payload;
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
    filterVillagers({ commit }, payload) {
      let result = [];
      for (let item in this.state.villagers) {
        if (
          this.state.villagers[item].name["name-sp"]
            .toLowerCase()
            .includes(payload.target.value.toLowerCase())
        )
          result.push(this.state.villagers[item]);
      }
      commit("filterUpdate", result);
    },
    findPersonality({ commit }, payload) {
      let result = [];
      for (let item in this.state.villagers) {
        if (
          this.state.villagers[item].personality
            .toLowerCase()
            .includes(payload.target.value.toLowerCase())
        )
          result.push(this.state.villagers[item]);
      }
      commit("filterUpdate", result);
    },
    findSpecies({ commit }, payload) {
      let result = [];
      for (let item in this.state.villagers) {
        if (
          this.state.villagers[item].species
            .toLowerCase()
            .includes(payload.target.value.toLowerCase())
        )
          result.push(this.state.villagers[item]);
      }
      commit("filterUpdate", result);
    },
  },
  modules: {},
});
