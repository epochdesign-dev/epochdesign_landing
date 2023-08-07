<template>
    <div id="carousel2"> <!--@mouseover="handlerIn()" @mouseleave="handlerOut()"-->
        <!-- Project Cards -->
        <div class="project_card" id="project4">
            <img class="project_pic" src="../assets/project_card.png" alt="project_card">
            <div class="project_footer">
                <p class="project_name">PROJECT NAME1</p>
                <img class="arrow" src="../assets/arrow.png" alt="arrow">
            </div>
        </div>
        <div class="project_card" id="project5">
            <img class="project_pic" src="../assets/project_card.png" alt="project_card">
            <div class="project_footer">
                <p class="project_name">PROJECT NAME2</p>
                <img class="arrow" src="../assets/arrow.png" alt="arrow">
            </div>
        </div>
        <div class="project_card" id="project6">
            <img class="project_pic" src="../assets/project_card.png" alt="project_card">
            <div class="project_footer">
                <p class="project_name">PROJECT NAME3</p>
                <img class="arrow" src="../assets/arrow.png" alt="arrow">
            </div>
        </div>
    </div>
</template>

<script setup>
// for calculating the time the mouse hovers on the carousel
// var startTime, endTime, seconds;

// function handlerIn() {
//     if(startTime == null){
//         startTime = new Date();
//     }
// }

// function handlerOut() {
//     startTime = null;
// }

import { onMounted } from 'vue';

onMounted(() => {
    // Allows horizontal scrolling on carousel
    const scrollContainer2 = document.querySelector("#carousel2");

    /*
    scrollContainer.addEventListener("wheel", (evt) => {
        // calculating the time the mouse hovers on the carousel
        endTime = new Date();
        var timeDiff = endTime - startTime; // in ms
        timeDiff /= 1000; // strip the ms
        seconds = timeDiff % 60; // get seconds

        // if mouse hovered >= 0.5s, now allow horizontal scrolling
        if(seconds >= 0.5){
            var oldScrollLeft = scrollContainer.scrollLeft

            // if user scrolled to the furthest left, allow them to scroll up
            if(!(evt.deltaY < 0 && scrollContainer.scrollLeft === 0)){
                // allow user to scroll horizontally
                scrollContainer.scrollLeft += evt.deltaY;

                // if user scrolled to the furthest right, allow them to scroll down
                if(oldScrollLeft != scrollContainer.scrollLeft){
                    evt.preventDefault();
                }

            }
        }
    });*/

    scrollContainer2.scrollLeft = 4000;

    // horizontal scrolling
    // https://codepen.io/alvarotrigo/pen/gOmgRzL

    // scrollbar positioning
    // https://stackoverflow.com/questions/2481350/how-can-i-get-the-scrollbar-position-with-javascript

    // moving elements around in DOM
    // https://gomakethings.com/how-to-move-elements-around-in-the-dom-with-vanilla-javascript/
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/after

    // scroll into view
    // https://stackoverflow.com/questions/17722497/scroll-smoothly-to-specific-element-on-page

    // auto scroll code
    let projects = ["#project4", "#project5", "#project6"]
    let firstElem = document.querySelector(projects[0]);
    let lastElem = document.querySelector(projects[projects.length - 1]);
    let tempElem;

    function pageScroll2() {
        scrollContainer2.scrollLeft -= 1;
        if (scrollContainer2.scrollLeft === 0) {
            firstElem.before(lastElem);

            tempElem = projects.pop();
            projects.unshift(tempElem);

            firstElem = document.querySelector(projects[0]);
            lastElem = document.querySelector(projects[projects.length - 1]);

            scrollContainer2.scrollLeft += lastElem.offsetWidth;
        }

        if (window.innerWidth > 740) {
            setTimeout(pageScroll2, 10);
        }
    }

    if (window.innerWidth > 740) {
        pageScroll2();   
    }
})



</script>

<style scoped>
#carousel2 {
    /* inner shape */
    overflow-x: hidden;
    display: flex;
}

.project_card {
    /* interaction */
    z-index: 1;

    /* shape */
    height: 42.34vw;
}

.project_card:nth-child(n+2) {
    /* position */
    padding-left: 1vw;
}

.project_pic{
    /* shape */
    max-width: 70.98vw;
    max-height: 39.22vw;
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
    font-weight: normal;
    font-size: 2vw;
}

.arrow{
    /* shape */
    height: 1.7vw;
    width: 1.7vw;

    /* position */
    margin-left: auto;
    margin-right: 0.5vw;
    margin-top: 0.5vw;
}

/* for mobile */
@media screen and (max-width: 740px) {
    #carousel2{
        display: none;
    }
}

</style>