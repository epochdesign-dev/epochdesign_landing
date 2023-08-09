<template>
    <div class="card" @click="rotate">
        <div class="card_inner">
            <div class="card_logo_section">
                <img v-if="smallLogo()" class="card_logo_smaller" :src="images[ind]" alt="logo">
                <img v-if="!smallLogo()" class="card_logo_larger" :src="images[ind]" alt="logo">
                <img class="hidden" src="../assets/aboutus/member_photos/finn_photo.png" alt="member_photo">
            </div>
            <div class="card_description">
                <div class="card_name" v-html="names[ind]"></div>
                <div class="card_position">
                    {{positions[ind]}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import logo1 from "../assets/aboutus/member_logos/finn_logo.png";
import logo2 from "../assets/aboutus/member_logos/jinny_logo.png";
import logo3 from "../assets/aboutus/member_logos/robby_logo.png";
import logo4 from "../assets/aboutus/member_logos/daniel_logo.png";

import finn_photo from "../assets/aboutus/member_photos/finn_photo.png";

export default {
    props: {
        img_index: String,
    },
    mounted(){
        // when page starts, show card1's backside
        setTimeout(()=>{
            this.card1Rotate1();
            this.card1_click_counter += 1;
        }, 500)
    },
    data() {
        return { 
            images: [logo1, logo2, logo3, logo4],
            names: ["Finn<br>Williams", "Jinny<br>Byeon", "Robby<br>Chen", "Daniel<br>Liu"],
            positions: ["Team Lead", "Designer", "Web Developer", "Full Stack Developer"],
            ind: Number(this.img_index),
            card1_click_counter: 0,
            card2_click_counter: 0,
            card3_click_counter: 0,
            card4_click_counter: 0,
        }
    },
    methods: {
        // checks if we need to resize the image logo
        smallLogo(){
            if (this.ind === 1 || this.ind === 2) {
                return false;
            }
            return true;
        },

        // card rotating animation
        rotate(){
            if(this.ind === 0 && this.card1_click_counter%2 === 0){
                this.card1_click_counter += 1;
                this.card1Rotate1();
            }
            
            else if(this.ind === 0 && this.card1_click_counter%2 === 1){
                this.card1_click_counter += 1;
                this.card1Rotate2();
            }

            else if(this.ind === 1 && this.card2_click_counter%2 === 0){
                this.card2_click_counter += 1;
                this.card2Rotate1();
            }
            
            else if(this.ind === 1 && this.card2_click_counter%2 === 1){
                this.card2_click_counter += 1;
                this.card2Rotate2();
            }

            else if(this.ind === 2 && this.card3_click_counter%2 === 0){
                this.card3_click_counter += 1;
                this.card3Rotate1();
            }
            
            else if(this.ind === 2 && this.card3_click_counter%2 === 1){
                this.card3_click_counter += 1;
                this.card3Rotate2();
            }

            else if(this.ind === 3 && this.card4_click_counter%2 === 0){
                this.card4_click_counter += 1;
                this.card4Rotate1();
            }

            else if(this.ind === 3 && this.card4_click_counter%2 === 1){
                this.card4_click_counter += 1;
                this.card4Rotate2();
            }
        },

        // rotating animations for each card
        card1Rotate1(){
                // rotate card body
                const card1Rotate = [
                    { transform: "rotate3d(1, 1.732, 0, 0) rotateZ(-30deg)" },
                    { transform: "rotate3d(1, 1.732, 0, 180deg) rotateZ(-30deg)"},
                ];

                const card1RotateOptions = {
                    duration: 500,
                    iterations: 1,
                    fill: 'forwards',
                };

                const card1 = document.getElementById("card1");
                card1.animate(card1Rotate, card1RotateOptions);

                // change card image
                const card1Img = document.querySelector("#card1 img");
                setTimeout(() => {
                    card1Img.style.width = "100%";
                    card1Img.src = finn_photo;
                }, 240)

                // rotate card description
                const card1RotateDescription = [
                    {transform: "rotateY(0)", offset: 0},
                    {transform: "rotateY(0)", offset: 0.5},
                    {transform: "rotateY(180deg)", offset: 0.501},
                    {transform: "rotateY(180deg)"}
                ];

                const card1RotateDescriptioOptions = {
                    duration: 500,
                    iterations: 1,
                    fill: 'forwards',
                };

                const card1Description = document.querySelector("#card1 .card_description");
                card1Description.animate(card1RotateDescription, card1RotateDescriptioOptions);
            
        },

        card1Rotate2(){
                // rotate card body
                const card1Rotate = [
                    { transform: "rotate3d(1, 1.732, 0, 180deg) rotateZ(-30deg)" },
                    { transform: "rotate3d(1, 1.732, 0, 360deg) rotateZ(-30deg)"},
                ];

                const card1RotateOptions = {
                    duration: 500,
                    iterations: 1,
                    fill: 'forwards',
                };

                const card1 = document.getElementById("card1");
                card1.animate(card1Rotate, card1RotateOptions);

                // change card image
                const card1Img = document.querySelector("#card1 img");

                setTimeout(() => {
                    card1Img.style.width = "80%";
                    card1Img.src = logo1;
                }, 240)

                // rotate card description
                const card1RotateDescription = [
                    {transform: "rotateY(180deg)", offset: 0},
                    {transform: "rotateY(180deg)", offset: 0.5},
                    {transform: "rotateY(360deg)", offset: 0.501},
                    {transform: "rotateY(360deg)"}
                ];

                const card1RotateDescriptioOptions = {
                    duration: 500,
                    iterations: 1,
                    fill: 'forwards',
                };

                const card1Description = document.querySelector("#card1 .card_description");
                card1Description.animate(card1RotateDescription, card1RotateDescriptioOptions);
        },

        card2Rotate1(){
                // rotate card body
                const card2Rotate = [
                    { transform: "rotate3d(1, 5.67, 0, 0) rotateZ(-10deg)" },
                    { transform: "rotate3d(1, 5.67, 0, 180deg) rotateZ(-10deg)"},
                ];

                const card2RotateOptions = {
                    duration: 500,
                    iterations: 1,
                    fill: 'forwards',
                };

                const card2 = document.getElementById("card2");
                card2.animate(card2Rotate, card2RotateOptions);

                // change card image
                const card2ImgChange = [
                    {},
                    {content: "url('../assets/aboutus/member_photos/jinny_photo.png')"},
                    {content: "url('../assets/aboutus/member_photos/jinny_photo.png')"},
                ];

                const card2ImgChangeOptions = {
                    duration: 1000,
                    iterations: 1,
                    fill: 'forwards',
                };

                const card2Img = document.querySelector("#card2 img");
                setTimeout(() => {
                    card2Img.style.content = "url('../assets/aboutus/member_photos/jinny_photo.png')";
                }, 500)
                card2Img.animate(card2ImgChange, card2ImgChangeOptions);



                // rotate card description
                const card2RotateDescription = [
                    {transform: "rotateY(0)", offset: 0},
                    {transform: "rotateY(0)", offset: 0.5},
                    {transform: "rotateY(180deg)", offset: 0.501},
                    {transform: "rotateY(180deg)"}
                ];

                const card2RotateDescriptioOptions = {
                    duration: 500,
                    iterations: 1,
                    fill: 'forwards',
                };

                const card2Description = document.querySelector("#card2 .card_description");
                card2Description.animate(card2RotateDescription, card2RotateDescriptioOptions);
            
        },

        card2Rotate2(){
                // rotate card body
                const card2Rotate = [
                    { transform: "rotate3d(1, 5.67, 0, 180deg) rotateZ(-10deg)" },
                    { transform: "rotate3d(1, 5.67, 0, 360deg) rotateZ(-10deg)"},
                ];

                const card2RotateOptions = {
                    duration: 500,
                    iterations: 1,
                    fill: 'forwards',
                };

                const card2 = document.getElementById("card2");
                card2.animate(card2Rotate, card2RotateOptions);

                // change card image2
                const card2ImgChange = [
                    {},
                    {content: "url('../assets/aboutus/member_logos/jinny_logo.png')"},
                    {content: "url('../assets/aboutus/member_logos/jinny_logo.png')"},
                ];

                const card2ImgChangeOptions = {
                    duration: 1000,
                    iterations: 1,
                    fill: 'forwards',
                };

                const card2Img = document.querySelector("#card2 img");
                setTimeout(() => {
                    card2Img.style.content = "url('../assets/aboutus/member_logos/jinny_logo.png')";
                }, 500)
                card2Img.animate(card2ImgChange, card2ImgChangeOptions);

                // rotate card description
                const card2RotateDescription = [
                    {transform: "rotateY(180deg)", offset: 0},
                    {transform: "rotateY(180deg)", offset: 0.5},
                    {transform: "rotateY(360deg)", offset: 0.501},
                    {transform: "rotateY(360deg)"}
                ];

                const card2RotateDescriptioOptions = {
                    duration: 500,
                    iterations: 1,
                    fill: 'forwards',
                };

                const card2Description = document.querySelector("#card2 .card_description");
                card2Description.animate(card2RotateDescription, card2RotateDescriptioOptions);
        },

        card3Rotate1(){
                // rotate card body
                const card3Rotate = [
                    { transform: "rotate3d(1, -5.67, 0, 0) rotateZ(10deg)" },
                    { transform: "rotate3d(1, -5.67, 0, 180deg) rotateZ(10deg)"},
                ];

                const card3RotateOptions = {
                    duration: 500,
                    iterations: 1,
                    fill: 'forwards',
                };

                const card3 = document.getElementById("card3");
                card3.animate(card3Rotate, card3RotateOptions);

                // change card image
                const card3ImgChange = [
                    {},
                    {content: "url('../assets/aboutus/member_photos/robby_photo.png')"},
                    {content: "url('../assets/aboutus/member_photos/robby_photo.png')"},
                ];

                const card3ImgChangeOptions = {
                    duration: 1000,
                    iterations: 1,
                    fill: 'forwards',
                };

                const card3Img = document.querySelector("#card3 img");
                setTimeout(() => {
                    card3Img.style.content = "url('../assets/aboutus/member_photos/robby_photo.png')";
                }, 500)
                card3Img.animate(card3ImgChange, card3ImgChangeOptions);



                // rotate card description
                const card3RotateDescription = [
                    {transform: "rotateY(0)", offset: 0},
                    {transform: "rotateY(0)", offset: 0.5},
                    {transform: "rotateY(180deg)", offset: 0.501},
                    {transform: "rotateY(180deg)"}
                ];

                const card3RotateDescriptioOptions = {
                    duration: 500,
                    iterations: 1,
                    fill: 'forwards',
                };

                const card3Description = document.querySelector("#card3 .card_description");
                card3Description.animate(card3RotateDescription, card3RotateDescriptioOptions);
            
        },

        card3Rotate2(){
                // rotate card body
                const card3Rotate = [
                    { transform: "rotate3d(1, -5.67, 0, 180deg) rotateZ(10deg)" },
                    { transform: "rotate3d(1, -5.67, 0, 360deg) rotateZ(10deg)"},
                ];

                const card3RotateOptions = {
                    duration: 500,
                    iterations: 1,
                    fill: 'forwards',
                };

                const card3 = document.getElementById("card3");
                card3.animate(card3Rotate, card3RotateOptions);

                // change card image3
                const card3ImgChange = [
                    {},
                    {content: "url('../assets/aboutus/member_logos/robby_logo.png')"},
                    {content: "url('../assets/aboutus/member_logos/robby_logo.png')"},
                ];

                const card3ImgChangeOptions = {
                    duration: 1000,
                    iterations: 1,
                    fill: 'forwards',
                };

                const card3Img = document.querySelector("#card3 img");
                setTimeout(() => {
                    card3Img.style.content = "url('../assets/aboutus/member_logos/robby_logo.png')";
                }, 500)
                card3Img.animate(card3ImgChange, card3ImgChangeOptions);

                // rotate card description
                const card3RotateDescription = [
                    {transform: "rotateY(180deg)", offset: 0},
                    {transform: "rotateY(180deg)", offset: 0.5},
                    {transform: "rotateY(360deg)", offset: 0.501},
                    {transform: "rotateY(360deg)"}
                ];

                const card3RotateDescriptioOptions = {
                    duration: 500,
                    iterations: 1,
                    fill: 'forwards',
                };

                const card3Description = document.querySelector("#card3 .card_description");
                card3Description.animate(card3RotateDescription, card3RotateDescriptioOptions);
        },

        card4Rotate1(){
                // rotate card body
                const card4Rotate = [
                    { transform: "rotate3d(1, -1.732, 0, 0) rotateZ(30deg)" },
                    { transform: "rotate3d(1, -1.732, 0, 180deg) rotateZ(30deg)"},
                ];

                const card4RotateOptions = {
                    duration: 500,
                    iterations: 1,
                    fill: 'forwards',
                };

                const card4 = document.getElementById("card4");
                card4.animate(card4Rotate, card4RotateOptions);

                // change card image
                const card4ImgChange = [
                    {width: "80%"},
                    {width: "80%", offset: 0.25},
                    {width: "100%", offset: 0.251},
                    {width: "100%", content: "url('../assets/aboutus/member_photos/daniel_photo.png')", offset: 0.5},
                    {width: "100%", content: "url('../assets/aboutus/member_photos/daniel_photo.png')"},
                ];

                const card4ImgChangeOptions = {
                    duration: 1000,
                    iterations: 1,
                    fill: 'forwards',
                };

                const card4Img = document.querySelector("#card4 img");
                setTimeout(() => {
                    card4Img.style.width = "100%";
                    card4Img.style.content = "url('../assets/aboutus/member_photos/daniel_photo.png')";
                }, 500)
                card4Img.animate(card4ImgChange, card4ImgChangeOptions);

                // rotate card description
                const card4RotateDescription = [
                    {transform: "rotateY(0)", offset: 0},
                    {transform: "rotateY(0)", offset: 0.5},
                    {transform: "rotateY(180deg)", offset: 0.501},
                    {transform: "rotateY(180deg)"}
                ];

                const card4RotateDescriptioOptions = {
                    duration: 500,
                    iterations: 1,
                    fill: 'forwards',
                };

                const card4Description = document.querySelector("#card4 .card_description");
                card4Description.animate(card4RotateDescription, card4RotateDescriptioOptions);
            
        },

        card4Rotate2(){
                // rotate card body
                const card4Rotate = [
                    { transform: "rotate3d(1, -1.732, 0, 180deg) rotateZ(30deg)" },
                    { transform: "rotate3d(1, -1.732, 0, 360deg) rotateZ(30deg)"},
                ];

                const card4RotateOptions = {
                    duration: 500,
                    iterations: 1,
                    fill: 'forwards',
                };

                const card4 = document.getElementById("card4");
                card4.animate(card4Rotate, card4RotateOptions);

                // change card image
                const card4ImgChange = [
                    {width: "100%"},
                    {width: "100%", offset: 0.25},
                    {width: "80%", offset: 0.251},
                    {width: "80%", content: "url('../assets/aboutus/member_logos/daniel_logo.png')", offset: 0.5},
                    {width: "80%", content: "url('../assets/aboutus/member_logos/daniel_logo.png')"}
                ];

                const card4ImgChangeOptions = {
                    duration: 1000,
                    iterations: 1,
                    fill: 'forwards',
                };

                const card4Img = document.querySelector("#card4 img");
                setTimeout(() => {
                    card4Img.style.width = "80%";
                    card4Img.style.content = "url('../assets/aboutus/member_logos/daniel_logo.png')";
                }, 500)
                card4Img.animate(card4ImgChange, card4ImgChangeOptions);

                // rotate card description
                const card4RotateDescription = [
                    {transform: "rotateY(180deg)", offset: 0},
                    {transform: "rotateY(180deg)", offset: 0.5},
                    {transform: "rotateY(360deg)", offset: 0.501},
                    {transform: "rotateY(360deg)"}
                ];

                const card4RotateDescriptioOptions = {
                    duration: 500,
                    iterations: 1,
                    fill: 'forwards',
                };

                const card4Description = document.querySelector("#card4 .card_description");
                card4Description.animate(card4RotateDescription, card4RotateDescriptioOptions);
        },
    
    }
}
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

/* ******************************************************************** */
/* ****************************Card************************************ */
/* ******************************************************************** */
.card{
    /* shape */
    width: 20.83vw;
    height: 33.85vw;
    border-radius: 20px;
    border: 2px solid white;

    /* inner shape */
    background: var(--background, --onyx-black);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;

    /* font */
    font-size: 1.14583vw;
}

.card_inner{
    /* shape */
    width: 100%;
    height: 95.38%;
    border-top: 2px solid var(--text, white);
    border-bottom: 2px solid var(--text, white);

    /* inner shape */
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
}

.card_logo_section{
    /* shape */
    width: 100%;
    min-height: 75%;
    max-height: 75%;

    /* inner shape */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.card_logo_smaller{
    /* shape */
    width: 80%;
}

.card_logo_larger{
    /* shape */
    width: 100%;
}

.card_description{
    /* inner shape */
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* shape */
    width: 68.25%;
    height: 21.13%;
}

.card_name{
    /* shape */
    width: 100%;
    height: 74.81%;

    /* inner shape */
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* font */
    color: white;
    text-align: center;
    font-family: Helvetica-Neue-LT-Pro-Medium;
    font-size: 1.75em;
    line-height: 1.1em;
}

.card_position{
    /* font */
    color: white;
    text-align: center;
    font-family: Helvetica;
    font-size: 1em;
    font-weight: 400;
}
</style>