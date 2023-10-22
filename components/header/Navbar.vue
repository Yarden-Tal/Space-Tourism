<script setup lang="ts">
import { links } from "~/data/miscData";
import { HeaderLink } from "~/models/models";

const homePageLink: string = links[0].link;
const route = useRoute();
const selectedItem = ref<string>(homePageLink);

links.forEach((l: HeaderLink) => {
  if (route.path.includes(l.link)) selectedItem.value = l.link;
});
</script>

<template>
  <nav>
    <ul class="flex gap-10">
      <li v-for="(l, i) in links" :key="i">
        <NuxtLink
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
</template>

<style scoped>
nav {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.774227142333984px);
  padding: 30px 167px 0 167px;
}
a {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
a {
  border-bottom: 2px solid transparent;
}
.selected {
  border-bottom-color: #fff !important;
}
a:hover {
  border-bottom-color: #979797;
}
@media (max-width: 1024px) {
  nav {
    padding: 30px 130px 0px 65px;
  }
}
</style>
