<script setup lang="ts">
import { links } from "~/data/miscData";
</script>

<template>
  <nav>
    <ul class="flex gap-4">
      <li v-for="(l, i) in links" :key="i">
        <NuxtLink :to="l.link">{{ l.title }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
