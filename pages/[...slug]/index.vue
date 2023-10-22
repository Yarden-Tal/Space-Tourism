<script setup lang="ts">
import data from "../../data/data.json";

useHead({
  title: "Space Travel",
});
</script>

<template>
  <div
    class="md:h-full lg:h-screen md:bg-background-home-tablet lg:bg-background-home-desktop bg-no-repeat bg-cover"
  >
    <SharedTheHeader />
    <main
      class="flex justify-between items-center md:!mt-24 lg:!mt-36 mx-28 md:flex-col lg:flex-row"
    >
      <div class="md:w-full lg:w-[35%]">
        <p class="text-center font-barlow text-h5 text-blueish">
          {{ "So, you want to travel to".toUpperCase() }}
        </p>
        <h1 class="text-center font-bellefair text-h1">
          {{ "Space".toUpperCase() }}
        </h1>
        <p
          class="text-center font-barlow text-lg md:w-2/3 mx-auto lg:w-full text-blueish"
        >
          {{ data.homepageTxt }}
        </p>
      </div>
      <NuxtLink class="w-1/3 md:mt-40 md:mb-20 lg:m-0" :to="'/destination'"
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
