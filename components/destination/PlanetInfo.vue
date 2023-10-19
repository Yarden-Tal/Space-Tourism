<script setup lang="ts">
import { Planet } from "~/models/models";
import data from "../../data/data.json";
const { destinations } = data;

const currentPlanet = ref<Planet>(destinations[0]);

const changePlanet = (planet: Planet) => (currentPlanet.value = planet);
</script>

<template>
  <section class="px-44 flex justify-center items-center">
    <DestinationPlanetImg :currentPlanet="currentPlanet" class="w-[28%]" />
    <div class="w-[15%]"></div>
    <div class="w-[37%]">
      <DestinationPlanetsMenu
        @current-planet-change="changePlanet"
        :currentPlanet="currentPlanet"
      />
      <h1 class="text-h2 font-bellefair">
        {{ currentPlanet.name.toUpperCase() }}
      </h1>
      <p class="text-lg font-barlow text-blueish">
        {{ currentPlanet.description }}
      </p>
      <hr class="opacity-25 mt-10 mb-5" />
      <div class="flex gap-20">
        <div>
          <div class="text-blueish font-barlow mb-1 text-sm">AVG. DISTANCE</div>
          <div class="font-bellefair text-subh1 over">
            {{ currentPlanet.distance.toUpperCase() }}
          </div>
        </div>
        <div>
          <div class="text-blueish font-barlow mb-1 text-sm">
            EST. TRAVEL TIME
          </div>
          <div class="font-bellefair text-subh1 over">
            {{ currentPlanet.travel.toUpperCase() }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
