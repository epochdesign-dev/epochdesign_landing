<template>
    <div>
        <!--Carousel Positions-->
        <div id="project1"><img class="position1" src="../assets/project_card.png" alt="project_card"></div>
        <div id="project2"><img class="position2" src="../assets/project_card.png" alt="project_card"></div>
        <div id="project3"><img class="position3" src="../assets/project_card.png" alt="project_card"></div>
        <div id="project4"><img class="position4" src="../assets/project_card.png" alt="project_card"></div>
        <div id="project5"><img class="position5" src="../assets/project_card.png" alt="project_card"></div>

        <!--Project Description-->
        <!--binding has some weird errors-->
        <div class="project_description">
            <div id="project_title">PROJECT NAME3</div>
            <div id="project_subtitle">WEB DESIGN</div>
            <div id="project_year">2023</div>
        </div>

        <!--Carousel Control-->
        <div @click="slideRight">
            <img class="right_arrow" src="../assets/right-arrow.png" alt="right_arrow">
        </div>
        <div @click="slideLeft">
            <img class="left_arrow" src="../assets/right-arrow.png" alt="left_arrow">
        </div>
    </div>
</template>

<script>
// add class/romove class in element
// https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript

export default {
    data() {
        return { 
            // Carousel Data
            startIndex: 0,
            projects: [
                {id: "#project1",
                title: "PROJECT NAME1",
                subtitle: "WEB DESIGN",
                year: "2023"},
                {id: "#project2",
                title: "PROJECT NAME2",
                subtitle: "WEB DESIGN",
                year: "2023"},
                {id: "#project3",
                title: "PROJECT NAME3",
                subtitle: "WEB DESIGN",
                year: "2023"},
                {id: "#project4",
                title: "PROJECT NAME4",
                subtitle: "WEB DESIGN",
                year: "2023"},
                {id: "#project5",
                title: "PROJECT NAME5",
                subtitle: "WEB DESIGN",
                year: "2023"},
            ],
        }
    },
    methods: {
        // carousel slide right
        slideRight(){
            // the upperbound of the carousel
            if(this.startIndex >= (this.projects.length - 3)){
                return;
            }

            // updating the starting index for projectList
            this.startIndex += 1;

            // render project description
            document.getElementById("project_title").textContent = `${this.projects[this.startIndex + 2].title}`;
            document.getElementById("project_subtitle").textContent = `${this.projects[this.startIndex + 2].subtitle}`;
            document.getElementById("project_year").textContent = `${this.projects[this.startIndex + 2].year}`;

            // render the projects with a new starting index
            for (let index = 0; index < 5; index++) {
                // ignore it if the starting index is -1 (results from slideleft)
                if((this.startIndex + index) === -1){
                    continue;
                }
                // if we finish rendering all the projects, end function 
                else if((this.startIndex + index) >= this.projects.length){
                    return;
                }
                
                // render the project with a new position
                const projectImg = document.querySelector(`${this.projects[this.startIndex + index].id} img`);
                projectImg.className = '';
                projectImg.classList.add(`position${index + 1}`);
            }
        },
        // carousel slide left
        slideLeft(){
            // updating the starting index for projectList
            this.startIndex -= 1;

            // render project description
            document.getElementById("project_title").textContent = `${this.projects[this.startIndex + 2].title}`;
            document.getElementById("project_subtitle").textContent = `${this.projects[this.startIndex + 2].subtitle}`;
            document.getElementById("project_year").textContent = `${this.projects[this.startIndex + 2].year}`;

            for (let index = 0; index < 5; index++) {
                // ignore it if the starting index is -1 or -2
                if((this.startIndex + index) === -1 || (this.startIndex + index) === -2){
                    continue;
                }
                // if the starting index is <-2, carousel displays incorrectly, so end function
                else if((this.startIndex + index) < -2){
                    this.startIndex += 1;
                    return;
                }
                // if we finish rendering all the projects, end function 
                else if((this.startIndex + index) >= this.projects.length){
                    return;
                }
                
                // render the project with a new position
                const projectImg = document.querySelector(`${this.projects[this.startIndex + index].id} img`);
                projectImg.className = '';
                projectImg.classList.add(`position${index + 1}`);
                
            }
        },
    }
}
</script>

<style scoped>
/* font */
@font-face {
    font-family: "Helvetica-Neue";
    src: local("Helvetica-Neue"),
    url("../assets/Helvetica.ttf") format("truetype");
}

.position1{
    /* position */
    position: absolute;
    top: 86.2vh;
    left: -6.09vw;

    /* shape */
    width: 29.53vw;
    height: 28.98vh;
    object-fit: contain;

    /* interaction */
    z-index: 1;

    /* inner shape */
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
}

.position2{
    /* position */
    position: absolute;
    top: 82.5vh;
    left: 6.09vw;

    /* shape */
    width: 38.54vw;
    height: 37.87vh;
    object-fit: contain;

    /* interaction */
    z-index: 2;

    /* inner shape */
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
}

.position3{
    /* position */
    position: absolute;
    top: 78.8vh;
    left: 50%;
    transform: translateX(-50%);

    /* shape */
    width: 48.1vw;
    height: 43.9vh;
    object-fit: contain;

    /* interaction */
    z-index: 3;
}

.position4{
    /* position */
    position: absolute;
    top: 82.5vh;
    right: 6.09vw;

    /* shape */
    width: 38.54vw;
    height: 37.87vh;
    object-fit: contain;

    /* interaction */
    z-index: 2;

    /* inner shape */
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
}

.position5{
    /* position */
    position: absolute;
    top: 86.2vh;
    right: -6.09vw;

    /* shape */
    width: 29.53vw;
    height: 28.98vh;
    object-fit: contain;

    /* inner shape */
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);

    /* interaction */
    z-index: 1;
}

.right_arrow{
    /* position */
    position: absolute;
    top: 127.87vh;
    right: 19.9vw;

    /* interaction */
    z-index: 1;
    cursor: pointer;

    /* shape */
    height: 3.125vw;
    width: 3.125vw;
}

.left_arrow{
    /* position */
    position: absolute;
    top: 127.87vh;
    left: 19.9vw;

    /* interaction */
    z-index: 1;
    cursor: pointer;

    /* shape */
    height: 3.125vw;
    width: 3.125vw;
    transform: rotate(180deg);
}

.project_description{
    /* position */
    position: absolute;
    top: 124.62vh;
    left: 50%;
    transform: translateX(-50%);

    /* inner shape */
    text-align: center;

    /* interaction */
    z-index: 1;

    /* font */
    color: white;
}

#project_title{
    /* font */
    font-family: Helvetica;
    font-size: 1.8vw;
}

#project_subtitle{
    /* font */
    font-family: Helvetica-Neue;
    font-size: 1.1vw;
}

#project_year{
    /* font */
    font-family: Helvetica-Neue;
    font-size: 1.1vw;
}
</style>