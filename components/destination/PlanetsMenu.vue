<script setup lang="ts">
import data from "../../data/data.json";
const { destinations } = data;
const props = defineProps(["currentPlanet"]);
</script>

<template>
  <div>
    <ul class="flex gap-9">
      <li class="font-barlow" v-for="(planet, i) in destinations" :key="i">
        {{ planet.name.toUpperCase() }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-bottom: 3px solid transparent;
  border-radius: 1px;
  padding-bottom: 6px;
}
.selected {
  border-bottom-color: #fff !important;
}
li:hover {
  border-bottom-color: #979797;
}
</style>
