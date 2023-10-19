<script setup lang="ts">
import data from "../../data/data.json";

useHead({
  title: "Space Travel",
});
</script>

<template>
  <div class="h-screen bg-background-home-desktop bg-no-repeat bg-cover">
    <SharedTheHeader />
    <main class="flex justify-between items-center !mt-36 mx-28">
      <div class="w-[35%]">
        <p class="font-barlow text-h5 text-blueish">
          {{ "So, you want to travel to".toUpperCase() }}
        </p>
        <h1 class="font-bellefair text-h1">{{ "Space".toUpperCase() }}</h1>
        <p class="font-barlow text-lg text-blueish">{{ data.homepageTxt }}</p>
      </div>
      <NuxtLink class="w-1/3" :to="'/destination'"
        ><div class="flex justify-center items-center">
          <img
            class="explore-img rounded-full"
            src="../../assets/icons/explore.svg"
            alt="Explore"
          /></div
      ></NuxtLink>
    </main>
  </div>
</template>

<style scoped>
.explore-img:hover {
  outline: 56px solid #ffffff2a;
}
</style>
