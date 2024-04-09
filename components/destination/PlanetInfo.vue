<script setup lang="ts">
import { Planet } from "~/models/models";
import data from "../../data/data.json";
const { destinations } = data;

const currentPlanet = ref<Planet>(destinations[0]);
let currentIndex: number = 0;
let planetChangeInterval: NodeJS.Timeout | null = null;

const startplanetChangeInterval = (): void => {
  if (planetChangeInterval) clearInterval(planetChangeInterval);

  planetChangeInterval = setInterval(() => {
    currentIndex++;
    if (currentIndex >= destinations.length) currentIndex = 0;
    changePlanet(destinations[currentIndex]);
  }, 8000);
};

startplanetChangeInterval();

const changePlanet = (planet: Planet): void => {
  currentIndex = destinations.findIndex(p => p.name === planet.name);
  currentPlanet.value = planet;
  startplanetChangeInterval();
};

onBeforeUnmount(() => {
  if (planetChangeInterval) clearInterval(planetChangeInterval);
});
</script>

<template>
  <section
    class="px-32 flex md:flex-col lg:flex-row md:items-center lg:items-start md:text-center lg:text-left justify-center items-center"
  >
    <DestinationPlanetImg
      :currentPlanet="currentPlanet"
      class="md:w-1/2 lg:w-[28%]"
    />
    <div class="md:hidden lg:block lg:w-[15%]"></div>
    <div class="md:w-full lg:w-[37%]">
      <DestinationPlanetsMenu
        @current-planet-change="changePlanet"
        :currentPlanet="currentPlanet"
      />
      <h1 class="md:mt-8 lg:mt-0 md:text-[5rem] lg:text-h2 font-bellefair">
        {{ currentPlanet.name.toUpperCase() }}
      </h1>
      <p class="text-lg font-barlow text-blueish">
        {{ currentPlanet.description }}
      </p>
      <hr class="opacity-25 mt-10 mb-5" />
      <div class="flex gap-20 md:justify-center lg:justify-start">
        <div>
          <div class="text-blueish font-barlow mb-1 text-sm">AVG. DISTANCE</div>
          <div class="font-bellefair text-subh1 over whitespace-nowrap">
            {{ currentPlanet.distance.toUpperCase() }}
          </div>
        </div>
        <div>
          <div class="text-blueish font-barlow mb-1 text-sm">
            EST. TRAVEL TIME
          </div>
          <div class="font-bellefair text-subh1 over md:mb-12 lg:mb-0 whitespace-nowrap">
            {{ currentPlanet.travel.toUpperCase() }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
