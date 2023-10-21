<script setup lang="ts">
const props = defineProps(["member"]);
</script>

<template>
  <div class="absolute bottom-0 right-[10vw] h-[32rem]">
    <Transition mode="out-in">
      <img
        class="h-full"
        v-if="props.member.name === 'Douglas Hurley'"
        src="./../../assets/images/crew/image-douglas-hurley.png"
        :alt="props.member.name"
      />
      <img
        class="h-full"
        v-else-if="props.member.name === 'Mark Shuttleworth'"
        src="./../../assets/images/crew/image-mark-shuttleworth.png"
        :alt="props.member.name"
      />
      <img
        class="h-full"
        v-else-if="props.member.name === 'Victor Glover'"
        src="./../../assets/images/crew/image-victor-glover.png"
        :alt="props.member.name"
      />
      <img
        class="h-full"
        v-else-if="props.member.name === 'Anousheh Ansari'"
        src="./../../assets/images/crew/image-anousheh-ansari.png"
        :alt="props.member.name"
      />
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active {
  animation: swirlAdded 0.3s;
}
.v-leave-active {
  animation: swirlAdded 0.3s reverse;
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
