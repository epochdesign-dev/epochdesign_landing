<template>
    <div class="main">
        <!--Canvas-->
        <div class="canvas">
            <!--Introduction-->
            <section>
                <h1 class="intro_title">epoch</h1>
                <p class="intro_text">At Epoch Design, we develop eye-catching brands, design beautiful websites, and deliver campaigns that stand out from the norm.</p>
                <img class="intro_img position_center_absolute" src="../assets/donut.png" alt="donut">
            </section>

            <!--Projects-->
            <section>
                <h3 class="projects_title">Projects</h3>
                <Carousel1 class="carousel1"/>
                <Carousel2 class="carousel2"/>
            </section>

            <!--Who We Are-->
            <section>
                <h3 class="whoweare_title">Who We Are</h3>
                <p class="whoweare_text">A full-service design agency comprised of diverse minds who have a passion for creating digital experiences.</p>
                <div class="oval oval1_pos"></div>
                <div class="oval oval2_pos"></div>
                <div class="oval oval3_pos"></div>
            </section>

            <!--Services-->
            <section>
                <h3 class="services_title">Services</h3>
            </section>

            <!--Get in Touch-->

            <!--Footer-->
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
/* ******************************************************************** */
/* ****************************General Classes************************* */
/* ******************************************************************** */
/* Fonts */
@font-face {
    font-family: "KronaOne";
    src: local("KronaOne"),
    url("../assets/KronaOne-Regular.ttf") format("truetype");
}

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

/* Two ways of positioning elements in the center of parent element */
.position_center_absolute{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.position_center_flex{
    display: flex;
    justify-content: center;
    align-items: center;
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



/* ******************************************************************** */
/* ****************************Introduction**************************** */
/* ******************************************************************** */
.intro_img{
    /* shape */
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    width: 78%;
    height: 78.1%;
    
}

.intro_title{
    /* position */
    position:absolute;
    top: 32%;
    left: 50%;
    transform: translate(-50%, -32%);

    /* font */
    color: var(--dandelion-yellow); 
    font-family: KronaOne;
    font-size: 20vw;
    font-weight: 400;

    /* interaction */
    user-select: none;
    z-index: 1;
}

.intro_text{
    /* font */
    font-family: Helvetica-Neue;
    font-size: 1.6vw;
    color: white;

    /* Inner Shape */
    text-align: center;
    width: 50vw;

    /* position */
    position:absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -85%);

    /* interaction */
    z-index: 1;
}

/* Sets specific styles for viewport ~16:9 */
@media (min-aspect-ratio: 173/100) and (max-aspect-ratio: 183/100){
    .intro_title{
        /* position */
        top: 34%;
        transform: translate(-50%, -34%);

        /* font */
        font-size: 22vw;
    }

    .intro_text{
        /* font */
        font-size: 1.8vw;

        /* position */
        top: 84%;
        transform: translate(-50%, -84%);

        /* shape */
        width: 55vw;
    }
}



/* ******************************************************************** */
/* ****************************Projects******************************** */
/* ******************************************************************** */
.projects_title{
    /* position */
    position:absolute;
    top: 100vh;
    left: 50%;
    transform: translateX(-50%);

    /* font */
    color: white; 
    font-family: Helvetica-Neue;
    font-size: 2.6vw;

    /* interaction */
    user-select: none;

    /* shape */
    padding-bottom: 0.4vw;
    border-bottom: solid 1px;
}

.carousel1{
    position: relative;
    top: 112vh;
}

.carousel2{
    position: relative;
    top: 114vh;
}



/* ******************************************************************** */
/* ****************************Who We Are****************************** */
/* ******************************************************************** */
.whoweare_title{
    /* position */
    position:absolute;
    top: 275vh;
    left: 50%;
    transform: translateX(-50%);

    /* font */
    color: white; 
    font-family: Helvetica-Neue;
    font-size: 2.6vw;

    /* interaction */
    user-select: none;

    /* shape */
    padding-bottom: 0.4vw;
    border-bottom: solid 1px;
}

.whoweare_text{
    /* font */
    font-family: Helvetica-Neue;
    font-size: 1.6vw;
    color: white;

    /* Inner Shape */
    text-align: center;
    width: 60vw;

    /* position */
    position:absolute;
    top: 293vh;
    left: 50%;
    transform: translateX(-50%);

    /* interaction */
    z-index: 1;
}

.oval{
    /* shape */
    width: 64.58vw;
    height: 17vh;
    border-radius: 50%;
    border: solid var(--dandelion-yellow) 1.5px;
    opacity: 70%;
}

.oval1_pos{
    /* position */
    position:absolute;
    top: 287vh;
    left: 50%;
    transform: translateX(-50%);
}

.oval2_pos{
    /* position */
    position:absolute;
    top: 292vh;
    left: 50%;
    transform: translateX(-50%);
}

.oval3_pos{
    /* position */
    position:absolute;
    top: 297vh;
    left: 50%;
    transform: translateX(-50%);
}



/* ******************************************************************** */
/* ****************************Services******************************** */
/* ******************************************************************** */
.services_title{
    /* position */
    position:absolute;
    top: 327vh;
    left: 50%;
    transform: translateX(-50%);

    /* font */
    color: white; 
    font-family: Helvetica-Neue;
    font-size: 2.6vw;

    /* interaction */
    user-select: none;

    /* shape */
    padding-bottom: 0.4vw;
    border-bottom: solid 1px;
}
</style>