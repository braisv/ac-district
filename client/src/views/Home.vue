<template>
  <div class="home">
    <h1>AC!</h1>
    <div class="villagers">
      <div
        class="villagers__card"
        v-for="(villager, index) in villagers"
        :key="index"
      >
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

        <div class="villagers__card-image">
          {{ villager.image }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      villagers: [],
    };
  },
  created() {
    this.getVillagers();
  },
  methods: {
    async getVillagers() {
      let doc = await this.axios
        .get("/villagers")
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.log(err));

      doc.map(async (el) => {
        let img = await this.axios
          .get(`/images/villagers/${el.id}`)
          .then((resp) => {
            return resp.data;
          })
          .catch((err) => {
            console.log(err);
          });
        el.img = img;
      });
      this.villagers = doc;
      console.log("VILLAGERS: ", this.villagers);
    },
  },
};
</script>
