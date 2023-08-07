<template>
    <div class="img-tray">
        <img
        :src="`../assets/demo-imgs/${imgFileName0}`"
        alt="demo-img"
        class="img hidden"
        >
        <img
        :src="`../assets/demo-imgs/${imgFileName1}`"
        alt="demo-img"
        class="img hidden"
        >
        <img
        :src="`../assets/demo-imgs/${imgFileName2}`"
        alt="demo-img"
        class="img hidden"
        >
        <img
        :src="`../assets/demo-imgs/${imgFileName3}`"
        alt="demo-img"
        class="img hidden"
        >
        <img
        :src="`../assets/demo-imgs/${imgFileName4}`"
        alt="demo-img"
        class="img hidden"
        >
        <img
        :src="`../assets/demo-imgs/${imgFileName5}`"
        alt="demo-img"
        class="img hidden"
        >
        <img
        :src="`../assets/demo-imgs/${imgFileName6}`"
        alt="demo-img"
        class="img hidden"
        >
        <img
        :src="`../assets/demo-imgs/${imgFileName7}`"
        alt="demo-img"
        class="img hidden"
        >
    </div>
</template>

<script setup>

const props = defineProps({
  imgFileName0: {
    type: String,
    required: true,
  },
  imgFileName1: {
    type: String,
    required: true,
  },
  imgFileName2: {
    type: String,
    required: true,
  },
  imgFileName3: {
    type: String,
    required: true,
  },
  imgFileName4: {
    type: String,
    required: true,
  },
  imgFileName5: {
    type: String,
    required: true,
  },
  imgFileName6: {
    type: String,
    required: true,
  },
  imgFileName7: {
    type: String,
    required: true,
  },
})

// get an array of image srcs
// function getImgSrc(imgFileName) {
//   if(!imgFileName) return;
//   return new URL(`../assets/demo-imgs/${imgFileName}`, import.meta.url);
// }


if (process.browser) {
  require("IntersectionObserver");
}

  onMounted(() => {
    
    if (process.client) {
      
      const canvasElement = document.querySelector(".canvas");
  
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
  });

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
</style>


<style>

.img-tray {
    position: relative;
    width: 100vw; /* Adjust this to your needs */
    aspect-ratio: 16 / 9; /* Adjust this to your needs */
    max-width: 1920px;
    overflow: hidden;
    padding-top: 56.25%
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