import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

axios.defaults.baseURL = "http://acnhapi.com";

export default new Vuex.Store({
  state: {
    loading: false,
    villagers: [],
    villager: {},
    filteredResults: [],
    filterSearch: {
      name: "",
      personality: [],
      species: [],
    },
  },
  mutations: {
    loadData(state, payload) {
      state.loading = payload
    },
    getOneVillager(state, payload) {
      state.villager = payload;
    },
    villagersAPI(state, payload) {
      state.villagers = payload;
    },
    fishesAPI(state, payload) {
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
    getVillager({ commit }, id) {
      commit('loadData', true);
      axios
        .get(`/villagers/${id}`)
        .then((res) => {
          commit('loadData', false);
          commit("getOneVillager", res.data);
        })
        .catch((err) => console.log(err));
    },
    getVillagers({ commit }) {
      commit('loadData', true);
      axios
        .get("/villagers")
        .then((res) => {
          commit('loadData', false);
          commit("villagersAPI", res.data);
          commit("filterUpdate", res.data);
        })
        .catch((err) => console.log(err));
    },
    getFishes({ commit }) {
      commit('loadData', true);
      axios
        .get("/fish")
        .then((res) => {
          commit('loadData', false);
          commit("fishesAPI", res.data);
          commit("filterUpdate", res.data);
        })
        .catch((err) => console.log(err));
    },
    filterVillagers({ commit, dispatch }, payload) {
      let result = this.state.filterSearch;
      if (payload.target.id === "name") {
        result.name = payload.target.value;
      }
      if (payload.target.id === "personality") {
        result.personality = []
        result.personality.push(payload.target.value);
      }
      if (payload.target.id === "species") {
        result.species = []
        result.species.push(payload.target.value);
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
