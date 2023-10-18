<script setup lang="ts">
import { links } from "~/data/miscData";
</script>

<template>
  <nav>
    <ul class="flex gap-10">
      <li v-for="(l, i) in links" :key="i">
        <NuxtLink :to="l.link" class="font-barlow flex h-full pb-5">
          <div class="mr-2">{{ l.num }}</div>
          <div>{{ l.title.toUpperCase() }}</div>
        </NuxtLink>
        <!-- <hr class="bg-[#979¿797] w-full relative top-[30px] h-1 rounded-[1px]" /> -->
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.774227142333984px);
  padding: 30px 167px 0 167px;
}

a {
  border-bottom: 2px solid #979797;
}
a:hover {
  border-bottom-color: #fff;
}
</style>
