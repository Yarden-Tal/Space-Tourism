<script setup lang="ts">
const props = defineProps(["currentPlanet"]);
</script>

<template>
  <div>
    <img
      v-if="props.currentPlanet.name === 'Moon'"
      class="w-full"
      src="./../../assets/images/destination/image-moon.png"
      :alt="props.currentPlanet.name"
    />
    <img
      v-else-if="props.currentPlanet.name === 'Mars'"
      class="w-full"
      src="./../../assets/images/destination/image-mars.png"
      :alt="props.currentPlanet.name"
    />
    <img
      v-else-if="props.currentPlanet.name === 'Europa'"
      class="w-full"
      src="./../../assets/images/destination/image-europa.png"
      :alt="props.currentPlanet.name"
    />
    <img
      v-else-if="props.currentPlanet.name === 'Titan'"
      class="w-full"
      src="./../../assets/images/destination/image-titan.png"
      :alt="props.currentPlanet.name"
    />
  </div>
</template>
