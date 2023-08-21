<template>
    <div class="main" @mouseover="expand" @mouseleave="deexpand">
        <!-- tags, title, and description -->
        <section class="main_content">
            <div class="tags">
                <div class="tag" v-for="tag in tags">{{ tag }}</div>
            </div>
            <div class="title">{{ title }}</div>
            <!-- <div class="title vertical_title">{{ title }}</div> -->
            <div class="description">{{ description }}</div>
        </section>

        <!-- learn more button -->
        <section>
            <a href="" class="learn_more2">
                <img class="learn_more_image" src="../assets/arrow-circle.png" alt="arrow circle">
                <div class="learn_more_text">Learn More</div>
            </a>
            <a :href="link" class="learn_more">
                <img class="learn_more_image" src="../assets/arrow-circle.png" alt="arrow circle">
                <div class="learn_more_text">Learn More</div>
            </a>
        </section>
    </div>
</template>

<script>

    export default {
        props: {
            title: String,
            description: String,
            tags: Array,
            link: String,
        },
        setup(){
        },
        data() {
            return {
                descriptions: [
                    "Elevate your business with our tailored website design service. We craft visually stunning, responsive websites that leave a lasting impact.",
                    "Transform your artistic vision into a compelling online showcase of your creativity.",
                    "Embrace the digital revolution with our specialized service, guiding businesses smoothly into the online realm."
                ],
                detailed_descriptions: [
                    "Online stock availability and product management, custom internal software tailor-made to your needs, online storefronts directly connected to your database, and more. See your entire online presence in one place.",
                    "Feature your projects, talents, or artistic creations on a webpage uniquely and beautifully designed to match your taste and what you do. Include a commission or store page to sell your work online!",
                    "Bring your business to the national and even international level! Building your business's online presence sees the greatest return for your investment from any marketing and sales method. This also allows companies to diversify their income between their physical and online store which could enable them to weather another economic disaster like COVID-19.",
                ],
            }
        },
        methods: {
            // expand animation
            expand(){
                if (window.innerWidth > 740) {
                    if (this.title === "Business Solutions") {
                        this.changeInnerText(this.detailed_descriptions[0], 1);
                        this.expandService(1);
                        this.minimizeService(2);
                        this.minimizeService(3);
                    }
                    else if(this.title === "Web Portfolios"){
                        this.changeInnerText(this.detailed_descriptions[1], 2);
                        this.expandService(2);
                        this.minimizeService(1);
                        this.minimizeService(3);
                    }
                    else if(this.title === "Online Stores"){
                        this.changeInnerText(this.detailed_descriptions[2], 3);
                        this.expandService(3);
                        this.minimizeService(1);
                        this.minimizeService(2);
                    }
                }
            },

            // remove all expansion style changes
            deexpand(){
                if (window.innerWidth > 740) {
                    this.removeExpansion();
                }
            },

            // helper functions to the expansion animation
            changeInnerText(text, serviceNum){
                document.querySelector(`#service${serviceNum} .description`).innerHTML = text;
            },

            expandService(serviceNum){
                document.getElementById(`service${serviceNum}`).style.width = "500%";
            },

            minimizeService(serviceNum){
                document.querySelector(`#service${serviceNum} .tags`).style.display = "none";
                document.querySelector(`#service${serviceNum} .tags`).style.opacity = "0";
                document.querySelector(`#service${serviceNum} .description`).style.display = "none";
                document.querySelector(`#service${serviceNum} .description`).style.opacity = "0";
                document.querySelector(`#service${serviceNum} .learn_more`).style.display = "none";
                document.querySelector(`#service${serviceNum} .learn_more`).style.opacity = "0";
                document.querySelector(`#service${serviceNum} .title`).style.transform = "rotate(90deg) translateX(5vw)";
            },
            
            removeExpansion(){
                document.getElementById("service1").style.width = "100%";
                document.getElementById("service2").style.width = "100%";
                document.getElementById("service3").style.width = "100%";

                document.querySelector("#service1 .title").style.transform = "";
                document.querySelector("#service2 .title").style.transform = "";
                document.querySelector("#service3 .title").style.transform = "";

                document.querySelector("#service1 .tags").style.display = "flex";
                document.querySelector("#service1 .description").style.display = "block";
                document.querySelector("#service1 .learn_more").style.display = "flex";
                setTimeout(() => {
                    document.querySelector("#service1 .description").style.opacity = "1";
                    document.querySelector("#service1 .tags").style.opacity = "1";
                    document.querySelector("#service1 .learn_more").style.opacity = "1";
                }, 500)
                this.changeInnerText(this.descriptions[0], 1);

                document.querySelector("#service2 .tags").style.display = "flex";
                document.querySelector("#service2 .description").style.display = "block";
                document.querySelector("#service2 .learn_more").style.display = "flex";
                setTimeout(() => {
                    document.querySelector("#service2 .description").style.opacity = "1";
                    document.querySelector("#service2 .tags").style.opacity = "1";
                    document.querySelector("#service2 .learn_more").style.opacity = "1";
                }, 500)
                this.changeInnerText(this.descriptions[1], 2);

                document.querySelector("#service3 .tags").style.display = "flex";
                document.querySelector("#service3 .description").style.display = "block";
                document.querySelector("#service3 .learn_more").style.display = "flex";
                setTimeout(() => {
                    document.querySelector("#service3 .description").style.opacity = "1";
                    document.querySelector("#service3 .tags").style.opacity = "1";
                    document.querySelector("#service3 .learn_more").style.opacity = "1";
                }, 500)
                this.changeInnerText(this.descriptions[2], 3);
            },

        }
    }
</script>


<style scoped>
/* ******************************************************************** */
/* ****************************General Classes************************* */
/* ******************************************************************** */
@font-face {
    font-family: "Helvetica-Neue";
    src: local("Helvetica-Neue"),
    url("../assets/Helvetica.ttf") format("truetype");
}

@font-face {
    font-family: "Inter-Regular";
    src: local("Inter-Regular"),
    url("../assets/Inter-Regular.ttf") format("truetype");
}

@font-face {
    font-family: "Inter-Medium";
    src: local("Inter-Medium"),
    url("../assets/Inter-Medium.ttf") format("truetype");
}

@font-face {
    font-family: "Inter-SemiBold";
    src: local("Inter-SemiBold"),
    url("../assets/Inter-SemiBold.ttf") format("truetype");
}



/* ******************************************************************** */
/* ****************************Computer Screen************************* */
/* ******************************************************************** */
#service1{
    margin-right: 1vw;
}

#service2{
    margin-right: 1vw;
}

.expandWidth{
    width: 200%;
    transition: all 1s;
}

.main{
    /* Colour Variables */
    --onyx-black: #121212;
    --dandelion-yellow: #E8E92B;
    --light-periwinkle-purple: #C0C7FF;
    /* #FFFFFF (white) */

    /* inner shape */
    background-color: var(--dandelion-yellow);
    padding-bottom: 1.875vw;
    display: flex;
    flex-direction: column;

    /* text */
    color: var(--onyx-black);

    /* shape */
    min-height: 18.7vw;
    width: 100%;
    border-radius: 1vw;
    
    /* animation */
    transition: width 1s;
}

.main_content{
    /* position */
    margin-top: 1.875vw;
    margin-left: 1.875vw;
    margin-right: 1.875vw;
    margin-bottom: auto;

    /* shape */
    height: 15vw;
}

@media screen and (max-width: 1024px) {
    .main_content{
        /* position */
        margin-top: 1.875vw;
        margin-left: 1.875vw;
        margin-right: 1.875vw;
        margin-bottom: auto;

        /* shape */
        height: 20vw;
    }
}

.tags{
    /* inner shape */
    display: flex;
    flex-direction: row;

    /* position */
    margin-bottom: 1vw;

    /* animation */
    opacity: 1;
    transition: all 1s;
}

.tag{
    /* shape */
    border: solid var(--onyx-black) 1px;
    border-radius: 1vw;

    /* font */
    font-family: Inter-Medium;
    font-size: 0.8vw;

    /* inner shape */
    padding-left: 0.8vw;
    padding-right: 0.8vw;
    padding-top: 0.15vw;
    padding-bottom: 0.15vw;

    /* position */
    margin-right: 0.4vw;
}

.title{
    /* font */
    font-size: 2vw;
    font-family: Helvetica-Neue;

    /* position */
    margin-bottom: 1vw;
    transition: transform 0.5s;
}

.vertical_title{
    transform: rotate(90deg) translateX(5vw);
    display: none;
}

.description{
    /* font */
    font-size: 1.05vw;
    font-family: Inter-Regular;

    /* animation */
    opacity: 1;
    transition: opacity 1s;
}

.learn_more{
    /* position */
    margin-left: auto;
    margin-right: 1.875vw;

    /* shape */
    width: 8.26vw;
    height: 2.863vw;

    /* inner shape */
    text-align: right;
    display: flex;

    /* font */
    font-family: Inter-SemiBold;
    font-size: 0.8vw;

    /* interaction */
    cursor: pointer;

    /* animation */
    opacity: 1;
    transition: opacity 1s;
}

.learn_more2{
    display: none;
}

.learn_more_text{
    /* position */
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 0;
    margin-left: auto;
}

.learn_more_image{
    /* shape */
    object-fit: contain;
    width: 2.86vw;
}

/* ******************************************************************** */
/* ****************************Mobile Screen*************************** */
/* ******************************************************************** */
/* for mobile */
@media screen and (max-width: 740px) {
    .main{
        /* shape */
        height: 89.23vw;
        width: 87.69vw;
        border-radius: 5vw;

        /* inner shape */
        padding-top: 2.43vh;
        padding-left: 4.1vw;
        padding-right: 4.1vw;
        margin-bottom: 4vw;
        display: block;
    }

    .main_content{
        /* position */
        margin-top: auto;
        margin-left: auto;
        margin-right: auto;

        /* shape */
        height: 71vw;
    }

    .tags{
        /* inner shape */
        display: flex;
        flex-wrap: wrap;
        

        /* position */
        margin-bottom: 3vw;
    }

    .tag{
        /* shape */
        border: solid var(--onyx-black) 1px;
        border-radius: 4vw;

        /* font */
        font-family: Inter-Medium;
        font-size: 4vw;

        /* inner shape */
        padding-left: 5vw;
        padding-right: 5vw;
        padding-top: 1vw;
        padding-bottom: 1vw;
        white-space: nowrap;

        /* position */
        margin-right: 1vw;
        margin-bottom: 1vw;
    }

    .title{
        /* font */
        font-size: 7vw;
        font-family: Helvetica-Neue;

        /* position */
        margin-bottom: 4vw;
    }

    .description{
        /* font */
        font-size: 4vw;
        font-family: Inter-Regular;
    }

    .learn_more{
        /* position */
        margin-bottom: 0;
        margin-left: 0;
        margin-right: auto;

        /* shape */
        width: 36.84vw;
        height: 5.56vh;

        /* inner shape */
        text-align: left;
        display: flex;

        /* font */
        font-family: Inter-SemiBold;
        font-size: 4vw;

        /* interaction */
        cursor: pointer;
        display: none;
    }

    .learn_more2{
        /* position */
        margin-bottom: 0;
        margin-left: 0;
        margin-right: auto;

        /* shape */
        width: 36.84vw;
        height: 5.56vh;

        /* inner shape */
        text-align: left;
        display: flex;

        /* font */
        font-family: Inter-SemiBold;
        font-size: 4vw;

        /* interaction */
        cursor: pointer;
    }

    .learn_more_text{
        /* position */
        margin-top: auto;
        margin-bottom: auto;
        margin-right: 2vw;
        margin-left: auto;
    }

    .learn_more_image{
        /* shape */
        object-fit: contain;
        width: 10.26vw;
    }

}
</style>