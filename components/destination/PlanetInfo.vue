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
      <p>{{ currentPlanet.description }}</p>
      <hr class="opacity-25 mt-10 mb-5" />
      <div class="flex gap-20">
        <div>
          <div>AVG. DISTANCE</div>
          <div>{{ currentPlanet.distance.toUpperCase() }}</div>
        </div>
        <div>
          <div>EST. TRAVEL TIME</div>
          <div>{{ currentPlanet.travel.toUpperCase() }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
