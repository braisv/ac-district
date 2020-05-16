<template>
  <div class="villagers">
    <div
      class="villagers__grid"
      v-for="(villager, index) in villagers"
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
export default {
  name: "Villagers",
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
    getImages(id) {
      return `https://acnhapi.com/images/villagers/${id}`
      }
  },
};
</script>
