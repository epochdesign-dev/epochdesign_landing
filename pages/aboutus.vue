<template>
    <div class="main">
        <div class="canvas">
            <SubpageTitle title="About Us" subtitle="A full-service design agency comprised of diverse minds who have a passion for creating digital experiences."/>
            <div class="card4">
                <div class="card4_inner"></div>
            </div>
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
}

.card4{
    width: 400px;
    height: 650px;
    transform: rotate(30deg);
    border-radius: 20px;
    border: 2px solid #FFF;
    background: var(--background, #121212);
    display: flex;
    align-items: center;
    justify-content: center;
}

.card4_inner{
    width: 400px;
    height: 620px;
    border-top: 2px solid var(--text, #FFF);
    border-bottom: 2px solid var(--text, #FFF);
}
</style>