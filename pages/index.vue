<template>
    <div class="main">
        <!--Canvas-->
        <div class="canvas">
            <!--Introduction-->
            <section>
                <div class="intro_title">epoch</div>
                <p class="intro_text">At Epoch Design, we develop eye-catching brands, design beautiful websites, and deliver campaigns that stand out from the norm.</p>
                <img class="intro_img position_center_absolute" src="../assets/donut.png" alt="donut">
            </section>

            <!--Projects-->
            <section>
                <h3 class="projects_title">Projects</h3>

                <!--Computer Only-->
                <Carousel1 class="carousel1"/>
                <Carousel2 class="carousel2"/>

                <!--Mobile Only-->
                <MobileProjectCard class="mobile_project_card"/>
                <MobileProjectCard class="mobile_project_card"/>
                <MobileProjectCard class="mobile_project_card"/>
            </section>

            <!--Who We Are-->
            <section>
                <!-- computer only -->
                <h3 class="whoweare_title">Who We Are</h3>

                <!-- mobile only -->
                <h3 class="mobile_whoweare_title">W<div class="mobile_whoweare_underline">ho We A</div>re</h3>

                <!--mobile and computer-->
                <p class="whoweare_text">A full-service design agency comprised of diverse minds who have a passion for creating digital experiences.</p>
                <div class="oval oval1_pos"></div>
                <div class="oval oval2_pos"></div>
                <div class="oval oval3_pos"></div>
            </section>

            <!--Services-->
            <section>
                <h3 class="services_title" id="services">Services</h3>

                <div class="services">
                    <ServiceCard title="Small Business" 
                    description="Elevate your business with our tailored website design service. We craft visually stunning, responsive websites that leave a lasting impact." 
                    :tags="['Online Presence', 'Digital Marketing']"/> 

                    <ServiceCard title="Artist Profile" 
                    description="Transform your artistic vision into a compelling online showcase of your creativity." 
                    :tags="['Artistic Expression', 'Creative Design']"/> 

                    <ServiceCard title="Moving Online" 
                    description="Embrace the digital revolution with our specialized service, guiding businesses smoothly into the online realm." 
                    :tags="['Digital Shift', 'Landing Page', 'Cloud Database']"/> 
                </div>
            </section>

            <!--Get in Touch-->
            <section class="get_in_touch">
                <div class="get_in_touch_text">Have An Idea?<br>Let's Build And Scale It!</div>
                <div class="get_in_touch_button">
                    <img class="get_in_touch_arrow" src="../assets/arrow-circle2.png" alt="arrow circle">
                    Get in Touch
                </div>
            </section>

            <!--Footer-->
            <section>
                <footer class="main_footer">

                </footer>
            </section>

            <!--Mobile: Contact Button-->
            <section>
                <div class="contact_button">
                    contact
                </div>
            </section>
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

/* for mobile */
@media screen and (max-width: 740px) {
    /* scrollbar*/
    ::-webkit-scrollbar {
        display: none;
    }
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

/* for mobile */
@media screen and (max-width: 740px) {
    .intro_img{
        /* shape */
        width: 164.62vw;
        height: 50.1vh;
        object-fit:cover;
        max-width: none;
        max-height: none;

        /* position */
        position: absolute;
        top:8.02%;
        left: 50%;
        transform: translateX(-50%);
    }

    .intro_title{
        /* position */
        position:absolute;
        top: 25.4%;

        /* font */
        font-size: 22.5vw;
    }

    .intro_text{
        /* font */
        font-family: Helvetica-Neue;
        font-size: 4vw;
        color: white;

        /* Inner Shape */
        text-align: center;
        width: 93.47vw;

        /* position */
        position:absolute;
        top: 39.86%;
        left: 50%;
        transform: translateX(-50%);
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

/* for mobile */
@media screen and (max-width: 740px) {
    .projects_title{
        /* position */
        top: 60vh;

        /* font */
        font-size: 7vw;

        /* shape */
        padding-bottom: 0.4vw;
        border-bottom: solid 1px;
    }

    .mobile_project_card{
        position: relative;
        top: 69vh;
        margin-bottom: 5px;
    }
}



/* ******************************************************************** */
/* ****************************Who We Are****************************** */
/* ******************************************************************** */
.whoweare_title{
    /* position */
    position:absolute;
    top: 305vh;
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

.mobile_whoweare_title{
    display: none;
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
    top: 323vh;
    left: 50%;
    transform: translateX(-50%);

    /* interaction */
    z-index: 1;
}

.oval{
    /* shape */
    width: 64.58vw;
    height: 9.56vw;
    border-radius: 50%;
    border: solid var(--dandelion-yellow) 1.5px;
    opacity: 70%;
}

.oval1_pos{
    /* position */
    position:absolute;
    top: 317vh;
    left: 50%;
    transform: translateX(-50%);
}

.oval2_pos{
    /* position */
    position:absolute;
    top: 323vh;
    left: 50%;
    transform: translateX(-50%);
}

.oval3_pos{
    /* position */
    position:absolute;
    top: 327vh;
    left: 50%;
    transform: translateX(-50%);
}

/* for mobile */
@media screen and (max-width: 740px) {    
    .whoweare_title{
        /* interaction */
        display: none;
    }

    .mobile_whoweare_title{
        /* position */
        position:absolute;
        top: 184.72vh;
        left: 50%;
        transform: translateX(-50%);

        /* font */
        color: white; 
        font-family: Helvetica-Neue;
        font-size: 7vw;

        /* interaction */
        user-select: none;
        display: block;

        /* shape */
        padding-bottom: 0.4vw;
    }

    .mobile_whoweare_underline{
        border-bottom: solid 1px;
        display: inline-block;
    }

    .whoweare_text{
        /* font */
        font-family: Helvetica-Neue;
        font-size: 4vw;
        color: white;

        /* Inner Shape */
        text-align: center;
        width: 63vw;

        /* position */
        position:absolute;
        top: 195.56vh;
        left: 50%;
        transform: translateX(-50%);

        /* interaction */
        z-index: 1;
    }

    .oval{
        /* shape */
        width: 95.09vw;
        height: 7.89vh;
    }

    .oval1_pos{
        /* position */
        top: 197.78vh;
    }

    .oval2_pos{
        /* position */
        top: 200.78vh;
    }

    .oval3_pos{
        /* position */
        top: 203.78vh;
    }
}



/* ******************************************************************** */
/* ****************************Services******************************** */
/* ******************************************************************** */
.services_title{
    /* position */
    position:absolute;
    top: 357vh;
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
    top: 369vh;
    left: 50%;
    transform: translateX(-50%);
}

@media screen and (max-width: 740px) {
    .services_title{
        /* position */
        top: 223.89vh;

        /* font */
        font-size: 7vw;
    }

    .services{
        /* inner shape */
        display: block;

        /* shape */
        height: auto;
        width: 87.69vw;

        /* position */
        position: relative;
        top: 125vh;
        left: auto;
        transform: none;
        margin-left: auto;
        margin-right: auto;
    }

}   



/* ******************************************************************** */
/* ****************************Get In Touch**************************** */
/* ******************************************************************** */
.get_in_touch{
    /* position */
    position: absolute;
    top: 420vh;
    left: 50%;
    transform: translateX(-50%);

    /* shape */
    width: 81.7vw;
    height: 20.37vh;

    /* inner shape */
    display: flex;
}

.get_in_touch_text{
    /* font */
    color: var(--light-periwinkle-purple);
    font-family: Helvetica-Neue;
    font-size: 3.6vw;

    /* shape */
    height: 20.37vh;
    width: 50.47vw;

    /* inner shape */
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
}

.get_in_touch_button{
    /* font */
    color: white;
    font-family: Helvetica-Neue;
    font-size: 1.5vw;

    /* inner shape */
    border-radius: 5vw;
    border: solid white 1px;
    padding: 1vw;

    /* interaction */
    cursor: pointer;

    /* position */
    margin-right: 0;
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
}

.get_in_touch_arrow{
    /* shape */
    width: 2.86vw;
    height: 2.86vw;

    /* position */
    display: inline;

}

@media screen and (max-width: 740px) {
    .get_in_touch{
        display: none;
    }
}



/* ******************************************************************** */
/* ****************************Footer********************************** */
/* ******************************************************************** */
.main_footer{
    /* position */
    position: absolute;
    top: 455vh;

    /* shape */
    width: 100vw;
    height: 28.89vh;
    border-top: solid 3px white;
}

@media screen and (max-width: 740px) {
    .main_footer{
        /* position */
        position: absolute;
        top: 400vh;
        left: 50%;
        transform: translateX(-50%);

        /* shape */
        width: 95.9vw;
        height: 43.33vh;
        border-top: solid 3px white;
    }
}



/* ******************************************************************** */
/* **********************Contact Button Mobile************************* */
/* ******************************************************************** */
/* for mobile */
@media screen and (max-width: 740px) {
    .contact_button{
        /* position */
        position: fixed;
        right: 8px;
        bottom: 8px;

        /* shape */
        height: 15.38vw;
        width: 15.38vw;
        border-radius: 50%;

        /* inside shape */
        background-color: var(--dandelion-yellow);
        display: flex;
        align-items: center; /* vertically center */
        justify-content: center; /* horizontally center */
        
        /* font */
        font-family: Helvetica-Neue;
        font-size: 1vw;

        /* interaction */
        z-index: 1;
        cursor: pointer;
        user-select: none;
    }
}
</style>