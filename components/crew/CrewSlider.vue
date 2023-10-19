<script setup lang="ts">
import data from "../../data/data.json";
const { crew } = data;
</script>

<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
    :pagination="{
      clickable: true,
    }"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
  >
    <SwiperSlide v-for="(member, i) in crew" :key="i">
      <div class="opacity-50 mt-14 text-h4 font-bellefair">
        {{ member.role.toUpperCase() }}
      </div>
      <h1 class="font-bellefair text-h3">{{ member.name.toUpperCase() }}</h1>
      <p class="mb-10 font-barlow text-blueish text-lg w-3/4">
        {{ member.bio }}
      </p>
    </SwiperSlide>
  </Swiper>
</template>
