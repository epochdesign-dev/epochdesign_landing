<template>
    <div class="main">
        <!-- tags, title, and description -->
        <section class="main_content">
            <div class="tags">
                <div class="tag" v-for="tag in tags">{{ tag }}</div>
            </div>
            <div class="title">{{ title }}</div>
            <div class="description">{{ description }}</div>
        </section>

        <!-- learn more button -->
        <section class="learn_more">
            <img class="learn_more_image" src="../assets/arrow-circle.png" alt="arrow circle">
            <div class="learn_more_text">Learn More</div>
        </section>
    </div>
</template>

<script setup>
    const { title, description, tags } = defineProps(['title','description', 'tags']);
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
.main{
    /* Colour Variables */
    --onyx-black: #121212;
    --dandelion-yellow: #E8E92B;
    --light-periwinkle-purple: #C0C7FF;
    /* #FFFFFF (white) */

    /* inner shape */
    background-color: var(--dandelion-yellow);

    /* text */
    color: var(--onyx-black);

    /* shape */
    height: 37.4vh;
    width: 28.7vw;
    border-radius: 1vw;
}

.main_content{
    /* position */
    margin-top: 1.875vw;
    margin-left: 1.875vw;
    margin-right: 1.875vw;

    /* shape */
    height: 25.65vh;
}

.tags{
    /* inner shape */
    display: flex;
    flex-direction: row;

    /* position */
    margin-bottom: 1vw;
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
}

.description{
    /* font */
    font-size: 1.05vw;
    font-family: Inter-Regular;
}

.learn_more{
    /* position */
    margin-bottom: 1.875vw;
    margin-left: auto;
    margin-right: 1.875vw;

    /* shape */
    width: 8.26vw;
    height: 5.09vh;

    /* inner shape */
    text-align: right;
    display: flex;

    /* font */
    font-family: Inter-SemiBold;
    font-size: 0.8vw;

    /* interaction */
    cursor: pointer;
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
@media screen and (max-width: 640px) {
    .main{
        /* shape */
        height: 48.33vh;
        width: 87.69vw;
        border-radius: 5vw;

        /* inner shape */
        padding-top: 2.43vh;
        padding-left: 4.1vw;
        padding-right: 4.1vw;

        margin-bottom: 4vw
    }

    .main_content{
        /* position */
        margin-top: auto;
        margin-left: auto;
        margin-right: auto;

        /* shape */
        height: 38.38vh;
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
        margin-bottom: 2.43vh;
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