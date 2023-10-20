<script setup lang="ts">
useHead({
  title: "Space Travel | Tech",
});

import data from "./../data/data.json";
const { technology } = data;

const currentTech = ref(technology[0]);

const handleStepChange = (i: number): void => {
  currentTech.value = technology[i];
};
</script>

<template>
  <div
    class="tech h-screen bg-background-technology-desktop bg-no-repeat bg-cover"
  >
    <SharedTheHeader />
    <main>
      <SharedPageTitle num="03" txt="Space launch 101" />
      <section class="flex gap-16 mt-14 px-inner">
        <!-- Step buttons -->
        <div class="flex flex-col gap-10 items-start justify-center">
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
        <div>
          <div class="opacity-50 text-h4 font-bellefair">
            {{ "The technology...".toUpperCase() }}
          </div>
          <h1 class="font-bellefair text-h3">
            {{ currentTech.name.toUpperCase() }}
          </h1>
          <p class="mb-10 font-barlow text-blueish text-lg w-3/4">
            {{ currentTech.description }}
          </p>
        </div>
        <div>
          <img :src="currentTech.images.portrait" :alt="currentTech.name" />
        </div>
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
