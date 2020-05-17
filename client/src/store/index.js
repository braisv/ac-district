import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

axios.defaults.baseURL = "http://acnhapi.com";

export default new Vuex.Store({
  state: {
    villagers: []
  },
  mutations: {
    villagersAPI(state, payload) {
      state.villagers = payload
    }
  },
  actions: {
    getVillagers({ commit }) {
      axios
        .get("/villagers")
        .then((res) => {
          commit('villagersAPI', res.data)
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  },
  modules: {
  }
})
