<template>
    <div class="main">
        <div class="canvas">
            <t1 class="title">Service</t1>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
/* Fonts */
@font-face {
    font-family: "Helvetica-Neue";
    src: local("Helvetica-Neue"),
    url("../assets/Helvetica.ttf") format("truetype");
}

/* Color Variables */
.main{
    --onyx-black: #121212;
    --dandelion-yellow: #E8E92B;
    --light-periwinkle-purple: #C0C7FF;
    /* #FFFFFF (white) */
}

/* Canvas */
.canvas{
    /* inner shape */
    background-color: var(--onyx-black);

    /* position */
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    /* interaction */
    overflow-y: scroll;
    overflow-x: hidden;
}

/* scrollbar width */
::-webkit-scrollbar {
    width: 10px;
  }
  
  /* scrollbar Track */
  ::-webkit-scrollbar-track {
    background: var(--onyx-black);
  }
  
  /* scrollbar Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--dandelion-yellow);
  }

/* Title */
.title{
    /* font */
    font-family: "Helvetica-Neue";
    font-size: 400pt;
    color: white;

    /* position */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

</style>