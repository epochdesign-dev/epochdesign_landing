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
        <div class="wrapper">
          <img src="../assets/defult-fearture-card.png" alt="defult-fearture-card">
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>



<style>
.main {
   /* Colour Variables */
   --onyx-black: #121212;
   --dandelion-yellow: #E8E92B;
   --light-periwinkle-purple: #C0C7FF;
   /* #FFFFFF (white) */


   /* text */
   color: var(--onyx-black);

   /* shape */
   height: 100%;
}



.swiper {
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

.wrapper {
  background-color: white;
  border-radius: 50px;
}

.swiper-slide img {
  display: block;
  object-fit: cover;
}

.swiper-horizontal>.swiper-scrollbar {
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



</style>
