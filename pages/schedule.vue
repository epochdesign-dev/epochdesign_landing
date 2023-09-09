<template>
    <div class="main">
        <!--Canvas-->
        <div class="canvas">
            <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2HEPmgkHyL_nOmpmae-t46IWw6v3ANTQ-bv1Wah5fkgEtMvMcU9yDhifuka3vzrYIp5CeAKndn?gv=true" 
                frameborder="0"
                class="booking">
            </iframe>
        </div>
    </div>
</template>

<script setup>
    useHead({
      title: "Epoch | Schedule an Appointment",
      meta: [{ name: "description", content: "schedule an appointment with Finn Williams" }],
    });
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
.main {
  --onyx-black: #121212;
  --dandelion-yellow: #e8e92b;
  --light-periwinkle-purple: #c0c7ff;
  /* #FFFFFF (white) */
}

/* Canvas */
.canvas {
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

/* for mobile */
@media screen and (max-width: 740px) {
  /* scrollbar*/
  ::-webkit-scrollbar {
    display: none;
  }
}

.booking{
    /* position */
    margin-top: 6vw;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5vw;

    /* shape */
    width: 80vw;
    height: 45vw;
    border-radius: 1vw;
    filter: drop-shadow(0px 0px 4px white);

    /* inner shape */
    background-color: white;
}

/* for mobile */
@media screen and (max-width: 740px) {
    .booking{
        /* position */
        margin-top: 20vw;
        margin-left: auto;
        margin-right: auto;

        /* shape */
        width: 90vw;
        height: 150vw;

        /* inner shape */
        background-color: white;
    }
}

</style>