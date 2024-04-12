<script setup lang="ts">
import { links } from "~/data/miscData";
import { HeaderLink } from "~/models/models";

const homePageLink: string = links[0].link;
const route = useRoute();
const menuIsOpen = ref<boolean>(false);
const selectedItem = ref<string>(homePageLink);

links.forEach((l: HeaderLink) => {
  if (route.path.includes(l.link)) selectedItem.value = l.link;
});

const toggleMenu = () => (menuIsOpen.value = !menuIsOpen.value);

</script>

<template>
  <header @keydown.esc="() => menuIsOpen = false" class="flex items-center justify-between mt-5 md:pt-0 lg:pt-12 pl-6 md:pl-10 pr-10 md:pr-0">
    <NuxtLink to="/" class="justify-start w-10 md:min-w-[48px]">
      <img src="../../assets/icons/header-star.svg" alt="Star" />
    </NuxtLink>
    <!-- MOBILE NAV -->
    <div class="block md:hidden">
      <button @click="toggleMenu" >
        <img v-if="!menuIsOpen" src="../../assets/icons/icon-hamburger.svg" alt="Menu" />
      </button>
      <nav v-if="menuIsOpen" class="md:hidden backdrop-blur-2xl absolute top-0 right-0 h-screen">
        <button @click="toggleMenu" class="w-full pr-9 pt-7">
          <img class="ml-auto" v-if="menuIsOpen" src="../../assets/icons/icon-close.svg" alt="Close">
        </button>
        <ul class="flex flex-col gap-1 pr-24 pt-10 pl-8">
          <li v-for="(l, i) in links" :key="i">
            <NuxtLink
              @click="toggleMenu"
              :to="l.link"
              class="font-barlow flex h-full pb-5"
              :class="{ selected: selectedItem === l.link }"
            >
              <div class="mr-2">{{ l.num }}</div>
              <div>{{ l.title.toUpperCase() }}</div>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="relative left-9 z-10 w-full hidden xl:block">
      <img class="w-full" src="../../assets/icons/header-line.svg" alt="line" />
    </div>
    <HeaderNavbar />
  </header>
</template>
