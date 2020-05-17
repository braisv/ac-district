import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

axios.defaults.baseURL = "http://acnhapi.com";

export default new Vuex.Store({
  state: {
    villagers: [],
    filteredResults: []
  },
  mutations: {
    villagersAPI(state, payload) {
      state.villagers = payload
    },
    filterUpdate(state, payload) {
      state.filteredResults = payload
      console.log("FILTER RESULTS: ", state.filteredResults)
    }
  },
  actions: {
    getVillagers({ commit }) {
      axios
        .get("/villagers")
        .then((res) => {
          commit('villagersAPI', res.data)
        })
        .catch((err) => console.log(err));
    },
    filterVillagers({ commit }, payload) {
      console.log("FILTER PAYLOAD: ", payload.target.value)
      for (let item in this.state.villagers) {
        console.log("VILLAGER: ")
          if (this.state.villagers[item].name["name-sp"].includes(payload.target.value))
          commit('filterUpdate', this.state.villagers[item])
      }
    }
  },
  modules: {
  }
})
