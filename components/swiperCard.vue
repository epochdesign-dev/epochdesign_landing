<template>
    <div class="card-wrapper">
      <img
        src="../assets/defult-fearture-card.png"
        alt="feature-card"
        class="base"
      />
      <span class="project-name">{{ projectName }}</span>
      <NuxtLink :to="projectLink" class="link">
        <img src="../assets/link-arrow.svg" alt="link-arrow" class="link-arrow" />
      </NuxtLink>
    </div>
  </template>
  
  <script setup>
  
  // Define props you want to use in your component
  const {projectName, projectLink } = defineProps({
    projectName: String,
    projectLink: String
  });
  </script>



../assets/link-arrow.svg
<style scoped>
@font-face {
  font-family: "Helvetica-Neue";
  src: local("Helvetica-Neue"),
    url("../assets/Helvetica.ttf") format("truetype");
}

.card-wrapper {
  position: relative;
  max-width: min-content;
  display: inline-block; /* Make wrapper fit the image size */
}

.base {
  max-width: 608px;
  max-height: 773px;
  width: 31.7vw;
  position: relative;
  display: block;
}
.card-wrapper > *:not(.base) {
  position: absolute;
}

.project-name {
  z-index: 1;
  bottom: 8%;
  left: 6%;

  /* font */
  color: white;
  font-size: 20pt;
  font-family: Helvetica-Neue;
}

.link{
    z-index: 1;
    bottom: 10%;
    right: 10%;
}
.link-arrow {
  height: 2vw;
  max-height: 40px;
  min-height: 10px;
}

@media screen and (max-width: 1500px) {
  .project-name {
    /* font */
    font-size: 15pt;
  }
}

@media screen and (max-width: 900px) {
  .project-name {
    /* font */
    font-size: 8pt;
    top: 10%;
  }
}
</style>
