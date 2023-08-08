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

<style scoped>
.main {
  /* Colour Variables */
  --onyx-black: #121212;
  --dandelion-yellow: #e8e92b;
  --light-periwinkle-purple: #c0c7ff;
  /* #FFFFFF (white) */

  /* text */
  color: var(--onyx-black);
}


.swiper {
  width: 100vw;
  max-width: 1920px;
  height: 40vw;
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


</style>>

<style>


.swiper-horizontal > .swiper-scrollbar {
  margin-top: 20px !important;
  position: relative !important;
  width: 50% !important;
  height: 1.5em !important;
  left: 25% !important;
  bottom: 0px !important;
  background-color: rgba(255, 255, 255, 0.5) !important;
}




.swiper-scrollbar-drag {
  cursor: pointer !important;
  border-radius: 100vw !important; 
  background-color: var(--dandelion-yellow) !important;
}

@media screen and (max-width: 700px){
  .swiper-horizontal > .swiper-scrollbar-horizontal{
    height: 0.5em !important;
  }
}
</style>