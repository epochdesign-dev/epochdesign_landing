<template>
    <div class="main">
        <!--Canvas-->
        <div class="canvas">
            <!--Introduction-->
            <section>
                <div class="intro_title">epoch</div>
                <p class="intro_text">At Epoch Design, we develop eye-catching brands, design beautiful websites, and deliver campaigns that stand out from the norm.</p>
                <img class="intro_img" src="../assets/donut.png" alt="donut">
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
                    :tags="['Online Presence', 'Digital Marketing']"
                    link="/service/small-business"/> 

                    <ServiceCard title="Artist Profile" 
                    description="Transform your artistic vision into a compelling online showcase of your creativity." 
                    :tags="['Artistic Expression', 'Creative Design']"
                    link="/service/artist-profile"/> 

                    <ServiceCard title="Moving Online" 
                    description="Embrace the digital revolution with our specialized service, guiding businesses smoothly into the online realm." 
                    :tags="['Digital Shift', 'Landing Page', 'Cloud Database']"
                    link="/service/moving-online"/> 
                </div>
            </section>

            <!--Get in Touch-->
            <section class="get_in_touch">
                <div class="get_in_touch_text">Have An Idea?<br>Let's Build And Scale It!</div>
                <a class="get_in_touch_button" href="/startYourProject">
                    <img class="get_in_touch_arrow" src="../assets/arrow-circle2.png" alt="arrow circle">
                    Get in Touch
                </a>
            </section>

            <!--Footer-->
            <section>
                <MainFooter class="main_footer"/>
            </section>

            <!--Mobile: Contact Button-->
            <section>
                <a class="contact_button" href="/startYourProject">
                    contact
                </a>
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
    object-fit: contain;
    width: 70vw;

    /* position */
    position:absolute;
    top: 6vw;
    left: 50%;
    transform: translateX(-50%);

    /* interaction */
    z-index: -1;
    
}

.intro_title{
    /* position */
    display: block;
    margin-top: 8vw;
    margin-left: auto;
    margin-right: auto;

    /* font */
    color: var(--dandelion-yellow); 
    font-family: KronaOne;
    font-size: 20vw;

    /* interaction */
    user-select: none;
    z-index: 1;

    /* shape */
    width: max-content;
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
    display: block;
    margin-left: auto;
    margin-right: auto;

    /* interaction */
    z-index: 1;
}

/* for mobile */
@media screen and (max-width: 740px) {
    .intro_img{
        /* shape */
        width: 164.62vw;
        height: 90vw;
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
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5vw;

    /* font */
    color: white; 
    font-family: Helvetica-Neue;
    font-size: 2.6vw;

    /* interaction */
    user-select: none;

    /* shape */
    padding-bottom: 0.4vw;
    border-bottom: solid 1px;
    width: max-content;
}

.carousel1{
    /* position: relative; */
    margin-top: 2vw;
}

.carousel2{
    /* position: relative; */
    margin-top: 2vw;
}

/* for mobile */
@media screen and (max-width: 740px) {
    .projects_title{
        /* position */
        top: 108vw;

        /* font */
        font-size: 7vw;

        /* shape */
        padding-bottom: 0.4vw;
        border-bottom: solid 1px;
    }

    .mobile_project_card{
        position: relative;
        top: 122vw;
        margin-bottom: 5px;
    }
}



/* ******************************************************************** */
/* ****************************Who We Are****************************** */
/* ******************************************************************** */
.whoweare_title{
    /* position */
    display: block;
    margin-top: 5vw;
    margin-left: auto;
    margin-right: auto;

    /* font */
    color: white; 
    font-family: Helvetica-Neue;
    font-size: 2.6vw;

    /* interaction */
    user-select: none;

    /* shape */
    padding-bottom: 0.4vw;
    border-bottom: solid 1px;
    width: max-content;
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
    display: block;
    margin-top: 5vw;
    margin-left: auto;
    margin-right: auto;

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
    position: absolute;
    top: 155vw;
    left: 50%;
    transform: translateX(-50%);
}

.oval2_pos{
    /* position */
    position: absolute;
    top: 157.71vw;
    left: 50%;
    transform: translateX(-50%);
}

.oval3_pos{
    /* position */
    position: absolute;
    top: 160.42vw;
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
        top: 330vw;
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
        top: 348vw;
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
        top: 352vw;
    }

    .oval2_pos{
        /* position */
        top: 357vw;
    }

    .oval3_pos{
        /* position */
        top: 362vw;
    }
}



/* ******************************************************************** */
/* ****************************Services******************************** */
/* ******************************************************************** */
.services_title{
    /* position */
    display: block;
    margin-top: 14vw;
    margin-left: auto;
    margin-right: auto;

    /* font */
    color: white; 
    font-family: Helvetica-Neue;
    font-size: 2.6vw;

    /* interaction */
    user-select: none;

    /* shape */
    padding-bottom: 0.4vw;
    border-bottom: solid 1px;
    width: max-content;
}

.services{
    /* inner shape */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 0.5208vw;

    /* shape */
    min-height: 18.7vw;
    width: 89.84vw;

    /* position */
    margin-top: 2.5vw;
    margin-left: auto;
    margin-right: auto;
}

@media screen and (max-width: 740px) {
    .services_title{
        /* position */
        top: 395vw;

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
        top: 215vw;
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
    margin-top: 10vw;
    margin-left: auto;
    margin-right: auto;

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
    display: block;
    margin-top: 10vw;
    margin-left: auto;
    margin-right: auto;

    /* shape */
    width: 100vw;
    height: 28.89vh;
}

@media screen and (max-width: 740px) {
    .main_footer{
        /* position */
        position: absolute;
        top: 780vw;
        left: 50%;
        transform: translateX(-50%);

        /* shape */
        width: 95.9vw;
        height: 43.33vh;
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