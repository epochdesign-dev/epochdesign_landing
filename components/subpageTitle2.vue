<template>
    <div class="main">
        <div class="oval-container">    
            <div class="oval">
                <h1 class="title">{{title}}</h1>
            </div>
        </div>
        <div class="text-box">   
            <p class="subtitle" v-html="subtitle"></p>
        </div>
    </div>
</template>

<script setup>
    const { title, subtitle } = defineProps(['title','subtitle']);


    

</script>

<style scoped>
@font-face {
    font-family: "Helvetica-Neue";
    src: local("Helvetica-Neue"),
    url("../assets/Helvetica.ttf") format("truetype");
}

/* Colour Variables */
.main{
    --onyx-black: #121212;
    --dandelion-yellow: #E8E92B;
    --light-periwinkle-purple: #C0C7FF;
}

.main{
    width: min-content;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    /*unselectable*/
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    user-select: none;
}

.main> *:not(.oval-container,.text-box){
    position: absolute;
}

.oval-container{
    display: flex;
    justify-content: center;
    position: relative;
}

.oval {
    width: 68.59vw; /* Original width */
    height: 10.781vw; /* Calculate height based on width */
    border-radius: 50%;
    border: solid white 2px;
    
}
.title {
    /* position */
    margin: 0; /* This ensures no margin */
    padding: 0; /* This ensures no padding */

    text-align: center;

    /* font */
    white-space: nowrap;
    color: var(--dandelion-yellow); 
    font-family: Helvetica-Neue;
    font-size: 6vw;

    /* Your other styles */
}


.text-box{
    display: flex;
    justify-content: center;
    margin: 0 auto;
}


.subtitle{
    margin-top: 20px;
    /* font */
    color: white;
    font-family: Helvetica-Neue;
    font-size: 1.25vw;
    letter-spacing: 0.01em;
    line-height: 1.38em;


    /* inner shape */
    text-align: center;
    white-space: pre-wrap;

}




@media only screen and (max-width: 1000px){
    
    .oval{
        width: calc(1317px * var(--medium));
        height: calc(207px * var(--medium));
    }
    .title{
        font-size: calc(128px * var(--medium));
    }
    .text-box{
        width: calc(1317px * var(--medium));
        min-width: calc(1317px * var(--medium));
    }
    .subtitle{
        font-size: calc(32pt * var(--medium));
    }

    
}

@media only screen and (max-width: 500px){
    
    .oval{
        width: calc(1317px * var(--small));
        height: calc(207px * var(--small));
    }
    .title{
        font-size: calc(128px * var(--small));
    }
    .text-box{
        width: calc(1317px * var(--small));
        min-width: calc(1317px * var(--small));
    }
    .subtitle{
        font-size: calc(32pt * var(--small*1.5));
    }

    
}
    



</style>