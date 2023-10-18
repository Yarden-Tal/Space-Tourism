<script setup lang="ts">
import { Planet } from "~/models/models";
import data from "../../data/data.json";
const { destinations } = data;

const currentPlanet = ref<Planet>(destinations[0]);
</script>

<template>
  <section class="px-inner flex justify-center items-center gap-24">
    <DestinationPlanetImg :currentPlanet="currentPlanet" class="w-1/2" />
    <div class="w-1/2">
      <DestinationPlanetsMenu :currentPlanet="currentPlanet" />
      <h1 class="text-h2 font-bellefair">
        {{ currentPlanet.name.toUpperCase() }}
      </h1>
      <p class="text-lg font-barlow text-blueish">
        {{ currentPlanet.description }}
      </p>
      <hr class="opacity-25 mt-10 mb-5" />
      <div class="flex gap-20">
        <div>
          <div class="text-blueish font-barlow mb-1">AVG. DISTANCE</div>
          <div class="font-bellefair">
            {{ currentPlanet.distance.toUpperCase() }}
          </div>
        </div>
        <div>
          <div class="text-blueish font-barlow mb-1">EST. TRAVEL TIME</div>
          <div class="font-bellefair">
            {{ currentPlanet.travel.toUpperCase() }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
