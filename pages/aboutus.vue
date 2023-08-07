<template>
    <div class="main">
        <div class="canvas">
            <SubpageTitle title="About Us" subtitle="A full-service design agency comprised of diverse minds who have a passion for creating digital experiences."/>
            <MemberCard class="card4"/>
        </div>
    </div>
</template>

<script setup>
    useHead({
        title: 'Epoch Design | About Us',
        meta: [
            {name: 'description', content: 'about us'}
        ]
    })
</script>

<style scoped>
/* ******************************************************************** */
/* ****************************General Classes************************* */
/* ******************************************************************** */
/* Fonts */
@font-face {
    font-family: "Helvetica-Neue";
    src: local("Helvetica-Neue"),
    url("../assets/Helvetica.ttf") format("truetype");
}

@font-face {
    font-family: "Helvetica-Neue-LT-Pro-Medium";
    src: local("Helvetica-Neue-LT-Pro-Medium"),
    url("../assets/Helvetica-Neue-LT-Pro-Medium.otf") format("opentype");
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

    /* font */
    font-size: 16px;
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

/* for mobile */
@media screen and (max-width: 740px) {
    /* scrollbar*/
    ::-webkit-scrollbar {
        display: none;
    }
}

/* ******************************************************************** */
/* ****************************Cards*********************************** */
/* ******************************************************************** */

/* 
    margin-left: 70vw;
    margin-top: 40vw;
        transform: rotate(30deg);
*/

.card4{
    margin-left: 70vw;
    margin-top: 40vw;
    transform: rotate(30deg);
}
</style>