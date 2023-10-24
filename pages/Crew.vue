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
  <div
    class="crew h-screen md:bg-background-crew-tablet lg:bg-background-crew-desktop bg-no-repeat bg-cover"
  >
    <SharedTheHeader />
    <main>
      <SharedPageTitle num="02" txt="Meet your crew" />
      <section class="flex md:flex-col lg:flex-row px-inner">
        <div class="md:w-[100%] lg:w-[65%]">
          <Swiper
            class="cursor-grab"
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
              <div
                class="opacity-50 md:mt-4 lg:mt-14 md:text-2xl lg:text-h4 font-bellefair md:text-center lg:text-left"
              >
                {{ member.role.toUpperCase() }}
              </div>
              <h1
                class="font-bellefair md:text-[2.5rem] lg:text-h3 md:text-center lg:text-left"
              >
                {{ member.name.toUpperCase() }}
              </h1>
              <p
                class="mb-10 font-barlow text-blueish md:text-base lg:text-lg md:w-full lg:w-3/4 md:text-center lg:text-left"
              >
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

.crew .swiper-pagination-bullets {
  text-align: center;
  margin-top: 8px;
}

.crew .swiper-pagination-bullet {
  background-color: #979797;
}

.crew .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: #fff !important;
}

.crew .swiper-pagination-bullet,
.crew .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: #979797;
  width: 0.6rem;
  height: 0.6rem;
  margin-right: 0.5rem !important;
}

@media (min-width: 1024px) {
  .crew .swiper-pagination-bullets {
    text-align: left;
    margin-top: 0;
  }

  .crew .swiper-pagination-bullet,
  .crew .swiper-pagination-bullet.swiper-pagination-bullet-active {
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 1rem !important;
  }
}
</style>
