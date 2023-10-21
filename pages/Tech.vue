<script setup lang="ts">
useHead({
  title: "Space Travel | Tech",
});

import { Tech } from "~/models/models";
import data from "./../data/data.json";
const { technology } = data;

const currentTech = ref<Tech>(technology[0]);
let currentIndex: number = 0;
let techChangeInterval: NodeJS.Timeout | null = null;

const startTechChangeInterval = (): void => {
  if (techChangeInterval) clearInterval(techChangeInterval);

  techChangeInterval = setInterval(() => {
    currentIndex++;
    if (currentIndex >= technology.length) currentIndex = 0;
    handleStepChange(currentIndex);
  }, 8000);
};

startTechChangeInterval();

const handleStepChange = (i: number): void => {
  currentIndex = i;
  currentTech.value = technology[i];
  startTechChangeInterval();
};

onBeforeUnmount(() => {
  if (techChangeInterval) clearInterval(techChangeInterval);
});
</script>

<template>
  <div
    class="tech h-screen bg-background-technology-desktop bg-no-repeat bg-cover"
  >
    <SharedTheHeader />
    <main>
      <SharedPageTitle num="03" txt="Space launch 101" />
      <section class="flex gap-16 justify-around mt-14 pl-inner">
        <!-- Step buttons -->
        <div class="flex flex-col gap-10 items-start w-[10%]">
          <button
            class="rounded-full p-8 text-h4 font-bellefair border border-opacity-25 hover:border-opacity-100 border-white w-20 h-20 flex items-center justify-center"
            :class="{ selected: currentTech.name === t.name }"
            v-for="(t, i) in technology"
            @click="handleStepChange(i)"
          >
            <span>{{ i + 1 }}</span>
          </button>
        </div>

        <!-- Info -->
        <div class="w-[40%]">
          <div class="opacity-50 text-h4 font-bellefair">
            {{ "The technology...".toUpperCase() }}
          </div>
          <h1 class="font-bellefair text-h3">
            {{ currentTech.name.toUpperCase() }}
          </h1>
          <p class="font-barlow text-blueish text-lg w-3/4">
            {{ currentTech.description }}
          </p>
        </div>

        <!-- Placeholder div -->
        <div class="w-[30%]"></div>

        <TechImg :current-step="currentTech" />
      </section>
    </main>
  </div>
</template>

<style scoped>
.selected {
  background-color: #fff;
  color: #0b0d17;
}
</style>
