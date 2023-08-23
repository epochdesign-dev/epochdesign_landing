<template>
  <div class="img-tray">
      <img
      src="../assets/demo-imgs/Group-demo-img-0.png"
      alt="demo-img0"
      class="img hidden"
      />
      <img
      src="../assets/demo-imgs/Group-demo-img-1.png"
      alt="demo-img1"
      class="img hidden"
      />

      <img
      src="../assets/demo-imgs/Group-demo-img-2.png"
      alt="demo-img2"
      class="img hidden"
      />

      <img
      src="../assets/demo-imgs/Group-demo-img-3.png"
      alt="demo-img3"
      class="img hidden"
      />

      <img
      src="../assets/demo-imgs/Group-demo-img-4.png"
      alt="demo-img4"
      class="img hidden"
      />

      <img
      src="../assets/demo-imgs/Group-demo-img-5.png"
      alt="demo-img5"
      class="img hidden"
      />

      <img
      src="../assets/demo-imgs/Group-demo-img-6.png"
      alt="demo-img6"
      class="img hidden"
      />

      <img
      src="../assets/demo-imgs/Group-demo-img-7.png"
      alt="demo-img7"
      class="img hidden"
      />
  </div>
</template>

<script setup>
import { onMounted } from "vue";

if (typeof process !== "undefined" && process.browser) {
require("IntersectionObserver");
}

onMounted(() => {
    const hiddenElements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    hiddenElements.forEach((element) => {
      observer.observe(element);
  });
  }
);
</script>


<style scoped>


.hidden {
  opacity: 0;
  filter: blur(10px);
  transform: translateY(80%);
  transition: all 1s;
  }
  
  .show {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0);
  transition: all 1s;
  }
  
  /* polite way to write code */
  @media (prefers-reduced-motion: reduce) {
  .hidden {
    transition: none;
  }
  }

.img-tray {
  position: relative;
  width: 100vw; /* Adjust this to your needs */
  aspect-ratio: 16 / 9; /* Adjust this to your needs */
  max-width: 1920px;
  overflow: hidden;
  padding-top: 56.25%;

  

    /*unselectable*/
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    user-select: none;
    pointer-events: none;
}

.img-tray> *{
  position: absolute;
  height: auto;
  display: inline-block;
}

.img:nth-child(1){
  top: 0;
  right: 45%;
  width: 45%;
}

.img:nth-child(2){
  top: 13%;
  right: 25%;
  width: 45%;
}

.img:nth-child(3){
  top: 30%;
  right: 3%;
  width: 45%;
}

.img:nth-child(4){
  top: 42%;
  left: 4%;
  width: 50%;
}

.img:nth-child(5){
  top:60%;
  left: 30%;
  width: 40%;
}

.img:nth-child(6){
  top: 10%;
  left: 0%;
  width: 10%;
}

.img:nth-child(7){
  top: 25%;
  left: 0%;
  width: 30%;
}

.img:nth-child(8){
  top: 50%;
  right: 0%;
  width: 25%;
}

</style>