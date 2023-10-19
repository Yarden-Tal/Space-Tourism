<script setup lang="ts">
useHead({
  title: "Space Travel | Crew",
});

import data from "./../data/data.json";
const { crew } = data;

const currentSlide = ref<number>(0);

const handleSlideChange = (e: number) => {
  currentSlide.value = e;
};
</script>

<template>
  <div class="h-screen bg-background-crew-desktop bg-no-repeat bg-cover">
    <SharedTheHeader />
    <main>
      <SharedPageTitle num="02" txt="Meet your crew" />
      <section class="flex px-inner">
        <div class="w-[65%]">
          <Swiper
            :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
            :pagination="{
              clickable: true,
            }"
            :slides-per-view="1"
            :loop="false"
            :autoplay="{
              delay: 8000,
              disableOnInteraction: true,
            }"
            :onSlideChange="
              swiper => {
                handleSlideChange(swiper.activeIndex);
              }
            "
          >
            <SwiperSlide v-for="(member, i) in crew" :key="i">
              <div class="opacity-50 mt-14 text-h4 font-bellefair">
                {{ member.role.toUpperCase() }}
              </div>
              <h1 class="font-bellefair text-h3">
                {{ member.name.toUpperCase() }}
              </h1>
              <p class="mb-10 font-barlow text-blueish text-lg w-3/4">
                {{ member.bio }}
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
        <CrewImage :member="crew[currentSlide]" />
      </section>
    </main>
  </div>
</template>

<style>
/* Swiper styles */

.swiper-pagination-bullets {
  text-align: left;
}

.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: #fff;
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 1rem !important;
}

.swiper-pagination-bullet {
  background-color: #979797;
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 1rem !important;
}
</style>
