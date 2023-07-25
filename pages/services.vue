<template>
    <div class="main">
        <div class="canvas">
            <SubpageTitle title="Web Design" subtitle="Designing & Developing standout websites and branding using sound strategic thinking. See our full range of agency services below."/>
        </div>
    </div>
</template>

<script setup>
    useHead({
        title: 'Epoch Design | Services',
        meta: [
            {name: 'description', content: 'services'}
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
}
</style>