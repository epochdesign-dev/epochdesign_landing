<template>
    <div class="main">
        <div class="canvas">
            <!-- title -->
            <SubpageTitle title="Projects" subtitle="Selected Works"/>

            <!-- projects carousel -->
            <Carousel3 />  
            
            <!--subtitle-->
            <div class="sub-title">Our Process</div>

            <div class="sub-title-line">
                <p class="process"> to be implemented...</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    useHead({
        title: 'Epoch | Projects',
        meta: [
            {name: 'description', content: 'projects'}
        ]
    })
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


/* subtitle */
.sub-title{
    /* font */
    font-family: "Helvetica-Neue";
    font-size: 2vw;
    color: var(--dandelion-yellow);

    /* position */
    position: absolute;
    top: 80vw;
    left: 50%;
    transform: translateX(-50%);
}

.sub-title-line{

    /* font */
    font-family: "Helvetica-Neue";
    font-size: 1vw;
    color: white;

    /* position */
    position: absolute;
    top: 85vw;
    left: 50%;
    transform: translateX(-50%);

    /* inner shape */
    padding-bottom: 500px;
}
</style>