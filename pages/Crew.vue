<script setup lang="ts">
useHead({
  title: "Space Travel | Crew",
});
</script>
<template>
  <div class="h-screen bg-background-crew-desktop bg-no-repeat bg-cover">
    <SharedTheHeader />
    <main>
      <SharedPageTitle num="02" txt="Meet your crew" />
      <section class="flex px-inner">
        <CrewSlider class="w-[60%]" />
        <div class="w-[40%]"></div>
        <div class="absolute bottom-0 right-20 h-[572px]">
          <img
            class="h-full"
            src="../assets/images/crew/image-douglas-hurley.png"
            alt=""
          />
        </div>
      </section>
    </main>
  </div>
</template>
