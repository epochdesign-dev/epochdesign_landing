<template>
    <div class="main">
        <div class="canvas">
            <!-- title -->
            <SubpageTitle title="Web Design" subtitle="Designing & Developing standout websites and branding using sound strategic thinking. See our full range of agency services below."/>

            <!-- services -->
            <div class="services">
                <ServiceCard title="Small Business" 
                description="We specialize in developing interactive, scalable, brand-oriented, and business-ready customized web design." 
                :tags="['UI/UX', 'Redesigns', 'Landing Page']"/> 

                <ServiceCard title="Artist Profile" 
                description="We specialize in developing interactive, scalable, brand-oriented, and business-ready customized web design." 
                :tags="['UI/UX', 'Redesigns', 'Landing Page']"/> 

                <ServiceCard title="Moving Online" 
                description="We specialize in developing interactive, scalable, brand-oriented, and business-ready customized web design." 
                :tags="['UI/UX', 'Redesigns', 'Landing Page']"/> 
            </div>

            <!-- for positioning -->
            <div style="position: absolute; top: 130vh;">.</div>
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

/* service cards positioning */
.services{
    /* inner shape */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;

    /* shape */
    height: 37.4vh;
    width: 89.84vw;

    /* position */
    position: absolute;
    top: 78vh;
    left: 50%;
    transform: translateX(-50%);
}
</style>