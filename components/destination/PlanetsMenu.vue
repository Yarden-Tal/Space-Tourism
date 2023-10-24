<script setup lang="ts">
import { Planet } from "~/models/models";
import data from "../../data/data.json";
const { destinations } = data;
const props = defineProps(["currentPlanet"]);

const emits = defineEmits(["currentPlanetChange"]);

const changeCurrentPlanet = (planet: Planet) => {
  emits("currentPlanetChange", planet);
};
</script>

<template>
  <div class="md:mt-10 lg:mt-0">
    <ul class="md:justify-center lg:justify-start flex gap-9">
      <button
        class="font-barlow text-blueish cursor-pointer"
        v-for="(planet, i) in destinations"
        :class="{ selected: props.currentPlanet.name === planet.name }"
        :key="i"
        @click="changeCurrentPlanet(planet)"
      >
        {{ planet.name.toUpperCase() }}
      </button>
    </ul>
  </div>
</template>

<style scoped>
button {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-bottom: 3px solid transparent;
  border-radius: 1px;
  padding-bottom: 6px;
}
.selected {
  border-bottom-color: #fff !important;
}
button:hover {
  border-bottom-color: #979797;
}
</style>
