<template>
    <div id="carousel1" @mouseover="handlerIn()" @mouseleave="handlerOut()">
        <!-- Project Cards -->
        <div class="project_card">
            <img class="project_pic" src="../assets/project_card.png" alt="project_card">
            <div class="project_footer">
                <p class="project_name">PROJECT NAME</p>
                <img class="arrow" src="../assets/arrow.png" alt="arrow">
            </div>
        </div>
        <div class="project_card">
            <img class="project_pic" src="../assets/project_card.png" alt="project_card">
            <div class="project_footer">
                <p class="project_name">PROJECT NAME</p>
                <img class="arrow" src="../assets/arrow.png" alt="arrow">
            </div>
        </div>
        <div class="project_card">
            <img class="project_pic" src="../assets/project_card.png" alt="project_card">
            <div class="project_footer">
                <p class="project_name">PROJECT NAME</p>
                <img class="arrow" src="../assets/arrow.png" alt="arrow">
            </div>
        </div>
    </div>
</template>

<script setup>
// for calculating the time the mouse hovers on the carousel
var startTime, endTime, seconds;

function handlerIn() {
    if(startTime == null){
        startTime = new Date();
    }
}

function handlerOut() {
    startTime = null;
}


import { onMounted } from 'vue';

onMounted(() => {
    // Allows horizontal scrolling on carousel
    const scrollContainer = document.querySelector("#carousel1");

    scrollContainer.addEventListener("wheel", (evt) => {
        // calculating the time the mouse hovers on the carousel
        endTime = new Date();
        var timeDiff = endTime - startTime; // in ms
        timeDiff /= 1000; // strip the ms
        seconds = timeDiff % 60; // get seconds

        // if mouse hovered >= 1s, now allow horizontal scrolling
        if(seconds >= 0.5){
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
        }
    });

    // horizontal scrolling
    // https://codepen.io/alvarotrigo/pen/gOmgRzL

    // scrollbar positioning
    // https://stackoverflow.com/questions/2481350/how-can-i-get-the-scrollbar-position-with-javascript

    // moving elements around in DOM
    // https://gomakethings.com/how-to-move-elements-around-in-the-dom-with-vanilla-javascript/

    // scroll into view
    // https://stackoverflow.com/questions/17722497/scroll-smoothly-to-specific-element-on-page

    // auto scroll code
    // function pageScroll() {
    //     scrollContainer.scrollLeft += 1;
    //     setTimeout(pageScroll,10);
    // }

    // pageScroll();
})
</script>

<style scoped>
#carousel1 {
    /* inner shape */
    overflow-x: hidden;
    display: flex;

    /* animation */
    animation: noBorder 0.5s forwards;
}

#carousel1:hover{
    animation: seeBorder 0.5s forwards;
}

@keyframes seeBorder {
    from {    
        border-top: solid transparent 1px;
        border-bottom: solid transparent 1px;
    }
    to {
        border-top: solid white 1px;
        border-bottom: solid white 1px;
    }
}

@keyframes noBorder {
    from {    
        border-top: solid white 1px;
        border-bottom: solid white 1px;
    }
    to {
        border-top: solid transparent 1px;
        border-bottom: solid transparent 1px;
    }
}

.project_card {
    /* interaction */
    z-index: 1;

    /* shape */
    height: 75.3vh;
}

.project_card:nth-child(n+2) {
    /* position */
    padding-left: 1vw;
}

.project_pic{
    /* shape */
    max-width: 70.98vw;
    max-height: 69.7vh;
    object-fit: contain;

    /* inner shape */
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);

    /* interaction */
    animation: decolourize 0.5s forwards;
}

/* interaction */
.project_pic:hover{
    animation: colourize 0.5s forwards;
}

@keyframes colourize {
    from {    
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
    }
    to {
        -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
        filter: grayscale(0%);
    }
}

@keyframes decolourize {
    from {    
        -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
        filter: grayscale(0%);
    }
    to {
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
    }
}

.project_footer{
    /* inner shape */
    display: flex;
}

.project_name{
    /* font */
    font-family: Helvetica;
    color: white;
    font-size: 1.5vw;
}

.arrow{
    /* shape */
    height: 1.25vw;
    width: 1.25vw;

    /* position */
    margin-left: auto;
    margin-right: 0.5vw;
    margin-top: 0.5vw;
}

</style>