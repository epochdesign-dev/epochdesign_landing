<template>
    <div class="main">
        <!--Introduction-->
        <section>
            <h1 class="intro_title">epoch</h1>
            <p class="intro_text">At Epoch Design, we develop eye-catching brands, design beautiful websites, and deliver campaigns that stand out from the norm.</p>
            <img class="intro_img position_center" src="../assets/donut.png" alt="donut">
        </section>

        
    </div>
</template>

<script setup>

</script>

<style scoped>
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

.main{
    --onyx-black: #121212;
    --dandelion-yellow: #E8E92B;
    --light-periwinkle-purple: #C0C7FF;
    /* #FFFFFF (white) */

    background-color: var(--onyx-black);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.position_center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
/* 
.position_horizontally_center{
    margin: auto;
} */

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
    z-index: 1;
    top: 32%;
    left: 50%;
    transform: translate(-50%, -32%);

    /* shape */
    color: var(--dandelion-yellow); 
    font-family: KronaOne;
    font-size: 20vw;
    font-weight: 400;

    /* interaction */
    user-select: none;
}

.intro_text{
    /* shape */
    font-family: Helvetica-Neue;
    font-size: 1.6vw;
    color: white;
    text-align: center;
    width: 50vw;

    /* position */
    position:absolute;
    z-index: 1;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -85%);
}

/* Sets specific styles for viewport ~16:9 */
@media (min-aspect-ratio: 173/100) and (max-aspect-ratio: 183/100){
    .intro_title{
        /* position */
        position:absolute;
        z-index: 1;
        top: 34%;
        left: 50%;
        transform: translate(-50%, -34%);

        /* shape */
        color: var(--dandelion-yellow); 
        font-family: KronaOne;
        font-size: 22vw;
    }

    .intro_text{
        /* position */
        font-family: Helvetica-Neue;
        font-size: 1.8vw;
        color: white;
        text-align: center;
        width: 55vw;

        /* shape */
        position:absolute;
        z-index: 1;
        top: 84%;
        left: 50%;
        transform: translate(-50%, -84%);
    }
}
</style>