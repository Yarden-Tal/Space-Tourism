<script setup lang="ts">
useHead({
  title: "Space Travel | Destination",
});
</script>
<template>
  <div
    class="h-full md:bg-background-destination-tablet lg:bg-background-destination-desktop bg-no-repeat bg-cover"
  >
    <SharedTheHeader />
    <main>
      <SharedPageTitle num="01" txt="Pick your destination" />
      <DestinationPlanetInfo />
    </main>
  </div>
</template>
