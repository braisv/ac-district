<template>
  <div class="home">
    <h1>AC!</h1>
    <div class="villagers">
      <div
        class="villagers__card"
        v-for="(villager, index) in villagers"
        :key="index"
      >
        <div class="villagers__card-image">
          <img :src="img" alt="IMG">
        </div>
        <div class="villagers__card-content">
          <div class="villagers__card-name">
            <div class="villagers__card-name__spanish">
              {{ villager.name["name-sp"] }}
            </div>
            <div class="villagers__card-name__english">
              {{ villager.name["name-en"] }}
            </div>
            <div class="villagers__card-name__japanish">
              {{ villager.name["name-jp"] }}
            </div>
          </div>
          <div class="villagers__card-personality">
            {{ villager.personality }}
          </div>
          <div class="villagers__card-birthday">
            {{ villager["birthday-string"] }}
          </div>
          <div class="villagers__card-species">
            {{ villager.species }}
          </div>
          <div class="villagers__card-gender">
            {{ villager.gender }}
          </div>
          <div class="villagers__card-phrase">
            {{ villager["catch-phrase"] }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import("@/assets/villagers.scss");
export default {
  name: "Home",
  data() {
    return {
      villagers: [],
      img: "https://acnhapi.com/images/villagers/4",
    };
  },
  created() {
    this.getVillagers();
  },
  methods: {
    getVillagers() {
      this.axios
        .get("/villagers")
        .then((res) => {
          this.villagers = res.data;
          console.log(res);
          console.log("VILLAGERS: ", this.villagers);
        })
        .catch((err) => console.log(err));
    },
    getImages() {
      if (!this.villagers[1]) {
        this.axios
          .get("/images/villagers/1")
          .then((res) => {
            console.log(res);
            this.img = res;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>
