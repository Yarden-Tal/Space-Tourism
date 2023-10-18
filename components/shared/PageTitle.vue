<script setup lang="ts">
const props = defineProps(["num", "txt"]);
</script>

<template>
  <section class="font-barlow text-h5 flex h-full p-inner pb-10">
    <div class="mr-4 opacity-25">{{ props.num }}</div>
    <div>{{ props.txt.toUpperCase() }}</div>
  </section>
</template>
