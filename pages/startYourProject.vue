<template>
    <div class="main">
        <div class="canvas">
            <div class="form">
                <div class="form_left">
                    <img class="astronaut" src="../assets/start_your_project/astronaut1.png" alt="">
                </div>
                <div class="form_right"></div>
            </div>
            <!-- <SubpageTitle title="Contact" subtitle="If you'd like to learn more about<br>how we can help evolve your brand, get in touch."/> -->
            
            <!-- <ContactUsForm class="contact_form"/> -->
        </div>
    </div>
</template>

<script setup>
    useHead({
        title: 'Epoch | Start Your Project',
        meta: [
            {name: 'description', content: 'start your project'}
        ]
    })
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

@font-face {
    font-family: "Helvetica-Neue-LT-Pro-Medium";
    src: local("Helvetica-Neue-LT-Pro-Medium"),
    url("../assets/Helvetica-Neue-LT-Pro-Medium.otf") format("opentype");
}

@font-face {
    font-family: "Helvetica-Light-Medium";
    src: local("Helvetica-Light-Medium"),
    url("../assets/Helvetica-Light-Medium.otf") format("opentype");
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

/* .contact_form{
    position: absolute;
    top: 65vh;
    left: 50%;
    transform: translateX(-50%);
} */



/* ******************************************************************** */
/* *************************Start Project Form************************* */
/* ******************************************************************** */
.form{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    gap: 0.72vw;

    width: 72vw;
    height: 40.5vw;
    border: solid var(--light-periwinkle-purple) 4px;
    border-radius: 2vw;
}

.form_left{
    height: 100%;
    width: 33%;
    border-right: solid white 1px;

    display: flex;
    align-items: center;
}

.astronaut{
    clip-path: inset(0 0 10px 0);
}

.form_right{
    height: 100%;
    width: 66%;
    border-left: solid white 1px;
}

</style>