<script setup lang="ts">
const props = defineProps(["currentStep"]);
</script>

<template>
  <div>
    <img
      v-if="props.currentStep.name.toUpperCase() === 'LAUNCH VEHICLE'"
      class="w-full"
      src="./../../assets/images/technology/image-launch-vehicle-portrait.jpg"
      :alt="props.currentStep.name"
    />
    <img
      v-else-if="props.currentStep.name.toUpperCase() === 'SPACEPORT'"
      class="w-full"
      src="./../../assets/images/technology/image-spaceport-portrait.jpg"
      :alt="props.currentStep.name.toUpperCase()"
    />
    <img
      v-else-if="props.currentStep.name.toUpperCase() === 'SPACE CAPSULE'"
      class="w-full"
      src="./../../assets/images/technology/image-space-capsule-portrait.jpg"
      :alt="props.currentStep.name.toUpperCase()"
    />
  </div>
</template>
