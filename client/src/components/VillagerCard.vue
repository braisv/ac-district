<template>
  <div class="villagers__card">
    <div class="villagers__card-image">
      <img
        :src="getImages(villager.id)"
        alt="IMG"
        class="villagers__card-image--img"
      />
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
</template>

<script>
export default {
    data() {
        return {
            villager: ""
        }
    }
}
</script>
