<script setup lang="ts">
import data from "../../data/data.json";

useHead({
  title: "Space Travel",
});
</script>

<template>
  <div
    class="h-screen md:h-full lg:h-screen bg-background-home-mobile md:bg-background-home-tablet lg:bg-background-home-desktop bg-no-repeat bg-cover"
  >
    <SharedTheHeader />
    <main
      class="flex justify-between xl:justify-around items-center md:!mt-24 lg:!mt-36 md:mx-0 lg:mx-28 xl:mx-52 md:flex-col lg:flex-row"
    >
      <div class="md:w-full lg:w-[35%]">
        <p class="md:text-center lg:text-left font-barlow text-h5 text-blueish">
          {{ "So, you want to travel to".toUpperCase() }}
        </p>
        <h1 class="md:text-center lg:text-left font-bellefair text-[80px] lg:text-h1">
          {{ "Space".toUpperCase() }}
        </h1>
        <p
          class="md:text-center lg:text-left font-barlow text-lg md:w-2/3 mx-auto lg:w-full text-blueish"
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
