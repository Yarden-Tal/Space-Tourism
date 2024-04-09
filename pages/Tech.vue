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
    class="tech md:h-full lg:h-screen md:bg-background-technology-tablet lg:bg-background-technology-desktop bg-no-repeat bg-cover"
  >
    <SharedTheHeader />
    <main>
      <SharedPageTitle num="03" txt="Space launch 101" />
      <section
        class="flex md:flex-col lg:flex-row gap-16 justify-around mt-14 lg:pl-inner"
      >
      <TechImg class="sm:block lg:hidden" :current-step="currentTech" />
        <!-- Step buttons -->
        <div
          class="flex md:flex-row lg:flex-col gap-10 items-start md:justify-center lg:justify-start md:w-full lg:w-[10%]"
        >
          <button
            class="rounded-full p-8 md:text-2xl lg:text-h4 font-bellefair border border-opacity-25 hover:border-opacity-100 border-white md:w-16 lg:w-20 md:h-16 lg:h-20 flex items-center justify-center"
            :class="{ selected: currentTech.name === t.name }"
            v-for="(t, i) in technology"
            @click="handleStepChange(i)"
          >
            <span>{{ i + 1 }}</span>
          </button>
        </div>

        <!-- Info -->
        <div class="md:text-center lg:text-left md:w-full lg:w-[40%]">
          <div class="opacity-50 md:text-base lg:text-h4 font-bellefair">
            {{ "The technology...".toUpperCase() }}
          </div>
          <h1 class="font-bellefair md:text-[40px] lg:text-h3">
            {{ currentTech.name.toUpperCase() }}
          </h1>
          <p class="inline-block font-barlow text-blueish md:text-center md:mb-20 lg:mb-0 lg:text-left md:text-base lg:text-lg md:w-1/2 lg:w-3/4">
            {{ currentTech.description }}
          </p>
        </div>

        <!-- Placeholder div -->
        <div class="sm:hidden lg:block lg:w-[30%]"></div>

        <TechImg class="sm:hidden lg:block" :current-step="currentTech" />
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
