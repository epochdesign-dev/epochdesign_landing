<template>
  <div class="main">
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperScrollbar]"
      :slides-per-view="3"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :scrollbar="{
        hide: false,
        draggable: true,
      }"
      :spaceBetween="20"
    >
      <SwiperSlide v-for="slide in 10" :key="slide">
      <SwiperCard class="card"
        projectName="Project Name"
        projectLink="http://localhost:3000/"
      />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style>
.main {
  /* Colour Variables */
  --onyx-black: #121212;
  --dandelion-yellow: #e8e92b;
  --light-periwinkle-purple: #c0c7ff;
  /* #FFFFFF (white) */

  /* text */
  color: var(--onyx-black);
  width: 100%;

}

.swiper {
  width: 100vw;
  max-width: 1920px;
  height: 50vw;
  max-height: 1000px;
  overflow: visible;
}

.swiper-slide {
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  display: block;
  object-fit: cover;
}

.swiper-horizontal > .swiper-scrollbar {
  position: relative;
  width: 100%;
  height: 2em;
  left: 0px;
  bottom: 0px;
  background-color: rgba(255, 255, 255, 0.5);
}

.swiper-scrollbar-drag {
  cursor: pointer;
  border-radius: 100vw;
  background-color: var(--dandelion-yellow);
}

@media screen and (max-width: 700px){
  .swiper-horizontal > .swiper-scrollbar-horizontal{
    height: 0.5em;
  }
}
</style>