<script setup lang="ts"></script>

<template>
  <header class="flex items-center justify-between md:pt-0 lg:pt-12 pl-10">
    <NuxtLink to="/" class="justify-start min-w-[48px]">
      <img class="" src="../../assets/icons/header-star.svg" alt="Star" />
    </NuxtLink>
    <div class="relative left-9 z-10 w-full lg:hidden xl:block">
      <img class="w-full" src="../../assets/icons/header-line.svg" alt="line" />
    </div>
    <HeaderNavbar />
  </header>
</template>
