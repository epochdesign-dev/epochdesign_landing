<template>
    <div class="main">
        <div class="oval"></div>
        <h1 class="title">{{title}}</h1>
        <p class="subtitle" v-html="subtitle"></p>
    </div>
</template>

<script setup>
    const { title, subtitle } = defineProps(['title','subtitle']);
</script>

<style scoped>
@font-face {
    font-family: "Helvetica-Neue";
    src: local("Helvetica-Neue"),
    url("../assets/Helvetica.ttf") format("truetype");
}

/* Colour Variables */
.main{
    --onyx-black: #121212;
    --dandelion-yellow: #E8E92B;
    --light-periwinkle-purple: #C0C7FF;
    /* #FFFFFF (white) */
}

.oval{
    /* shape */
    width: 45.73vw;
    height: 7.19vw;
    border-radius: 50%;
    border: solid white 2px;

    /* position */
    position:absolute;
    top: 8.5vw;
    left: 50%;
    transform: translateX(-50%);
}

.title{
    /* position */
    position:absolute;
    top: 9vw;
    left: 50%;
    transform: translateX(-50%);

    /* font */
    color: var(--dandelion-yellow); 
    font-family: Helvetica-Neue;
    font-size: 4vw;
    font-weight: 400;

    /* interaction */
    user-select: none;
    z-index: 1;
}

.subtitle{
    /* position */
    position:absolute;
    top: 17vw;
    left: 50%;
    transform: translateX(-50%);

    /* font */
    color: white;
    font-family: Helvetica-Neue;
    font-size: 1.13vw;

    /* inner shape */
    text-align: center;
    white-space: pre-wrap;

    /* shape */
    width: 40vw;
}


</style>