<script setup lang="ts">
const props = defineProps(["currentStep"]);
const isLandscape = ref<boolean>();

onMounted(() => {
  if (window.innerWidth < 1024) isLandscape.value = true;
});
onUnmounted(() => isLandscape.value = false);
</script>

<template>
  <div class="lg:absolute lg:right-0 lg:top-52 lg:w-[32%]">
    <Transition mode="out-in">
      <img
        v-if="props.currentStep.name.toUpperCase() === 'LAUNCH VEHICLE' && !isLandscape"
        class="w-full md:h-[310px] lg:h-full object-cover"
        src="./../../assets/images/technology/image-launch-vehicle-portrait.jpg"
        :alt="props.currentStep.name"
      />
      <img
        v-else-if="props.currentStep.name.toUpperCase() === 'LAUNCH VEHICLE' && isLandscape"
        class="w-full md:h-[310px] lg:h-full object-cover"
        src="./../../assets/images/technology/image-launch-vehicle-landscape.jpg"
        :alt="props.currentStep.name"
      />
      <img
        v-else-if="props.currentStep.name.toUpperCase() === 'SPACEPORT' && !isLandscape"
        class="w-full"
        src="./../../assets/images/technology/image-spaceport-portrait.jpg"
        :alt="props.currentStep.name.toUpperCase()"
      />
      <img
        v-else-if="props.currentStep.name.toUpperCase() === 'SPACEPORT'  && isLandscape"
        class="w-full"
        src="./../../assets/images/technology/image-spaceport-landscape.jpg"
        :alt="props.currentStep.name.toUpperCase()"
      />
      <img
        v-else-if="props.currentStep.name.toUpperCase() === 'SPACE CAPSULE' && !isLandscape"
        class="w-full"
        src="./../../assets/images/technology/image-space-capsule-portrait.jpg"
        :alt="props.currentStep.name.toUpperCase()"
      />
      <img
        v-else-if="props.currentStep.name.toUpperCase() === 'SPACE CAPSULE'  && isLandscape"
        class="w-full"
        src="./../../assets/images/technology/image-space-capsule-landscape.jpg"
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
