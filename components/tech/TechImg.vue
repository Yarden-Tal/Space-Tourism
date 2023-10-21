<script setup lang="ts">
const props = defineProps(["currentStep"]);
</script>

<template>
  <div class="absolute right-0 top-52 w-[32%]">
    <Transition mode="out-in">
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
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active {
  animation: swirlAdded 0.7s;
}
.v-leave-active {
  animation: swirlAdded 0.7s reverse;
}
@keyframes swirlAdded {
  from {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
}
</style>
