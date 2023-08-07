<template>
    <div class="main">
        <div class="canvas">
            <SubpageTitle title="Contact" subtitle="If you'd like to learn more about<br>how we can help evolve your brand, get in touch."/>
            <ContactUsForm class="contact_form"/>
        </div>
    </div>
</template>

<script setup>
    useHead({
        title: 'Epoch Design | Contact Us',
        meta: [
            {name: 'description', content: 'contact us'}
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

.contact_form{
    /* position */
    position: absolute;
    top: 65vh;
    left: 50%;
    transform: translateX(-50%);
}

</style>