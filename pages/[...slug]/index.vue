<script setup lang="ts">
useHead({
  title: "Space Travel",
});
</script>

<template>
  <SharedTheHeader />
  <main class="flex bg-background-home-desktop">
    <div>
      <p>So, you want to travel to</p>
      <h1>Space</h1>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
    <NuxtLink :to="'/destination'">Explore</NuxtLink>
  </main>
</template>
