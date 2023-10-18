<script setup lang="ts">
const props = defineProps(["currentPlanet"]);
</script>

<template>
  <div>
    <img
      class="w-full"
      :src="props.currentPlanet.images.png"
      :alt="props.currentPlanet.name"
    />
  </div>
</template>
