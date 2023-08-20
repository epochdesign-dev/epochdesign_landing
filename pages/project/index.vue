<template>
    <div class="main">
        <div class="canvas" id="project_index">
          <!--Intro-->
          <section>
            <!-- cube -->
            <div class="cube_container">
              <img class="cube" src="../../assets/project_index_page/glass_cube.png" alt="cube">
            </div>

            <!-- project title -->
            <div class="project_title main_title_position">
              <div class="project_main_title">
                Project Name
              </div>
              <div class="project_subtitle">
                Project Brief: Lorem ipsum dolor sit amet consectetur. Lacus lacinia blandit gravida praesent feugiat.
              </div>
            </div>

            <!-- project data -->
            <div class="project_data">
              <div class="data_section">
                <div class="data_title">Date</div>
                <div class="data_description">2023</div>
              </div>
              <div class="data_section">
                <div class="data_title">Industry</div>
                <div class="data_description">Industry</div>
              </div>
              <div class="data_section">
                <div class="data_title">Involvement</div>
                <div class="data_description">Web Design<br>Web Development</div>
              </div>
              <div class="data_section">
                <div class="data_title">Visit</div>
                <div class="data_description">url</div>
              </div>
            </div>
          </section>

          <!-- Project Floating Presentation -->
          <section>
            <div class="project_floating_present">
              <img class="float_col2_card1 float_card col2hide" src="../../assets/project_index_page/project_demo_2.png" alt="floating demo col2 card1">
              <img class="float_col1_card1 float_card col1_3_hide" src="../../assets/project_index_page/project_demo_4.png" alt="floating demo col1 card1">
              <img class="float_col2_card2 float_card col2hide" src="../../assets/project_index_page/project_demo_1.png" alt="floating demo col2 card2">
              <img class="float_col2_card3 float_card col2hide" src="../../assets/project_index_page/project_demo_3.png" alt="floating demo col2 card3">
              <img class="float_col3_card1 float_card col1_3_hide" src="../../assets/project_index_page/project_demo_5.png" alt="floating demo col3 card1">
            </div>
          </section>

          <!-- Design and Development -->
          <section>
            <!-- design title -->
            <div class="project_title design_title_position">
              <div class="project_main_title">
                Design
              </div>
              <div class="project_subtitle">
                Project Brief: Lorem ipsum dolor sit amet consectetur. Lacus lacinia blandit gravida praesent feugiat.
              </div>
            </div>

            <!-- development title -->
            <div class="project_title dev_title_position">
              <div class="project_main_title">
                Development
              </div>
              <div class="project_subtitle">
                Project Brief: Lorem ipsum dolor sit amet consectetur. Lacus lacinia blandit gravida praesent feugiat.
              </div>
            </div>
          </section>

          <!-- Project Before & After Presentation -->
          <section>
            <BeforeAfter />
          </section>

          <!-- Client Review -->
          <section>
            <img class="client_review_demo1" src="../../assets/project_index_page/project_demo_1.png" alt="project demo 1">
            <img class="client_review_demo2" src="../../assets/project_index_page/project_demo_1.png" alt="project demo 2">
            <div class="client_review">
              “Client Review : Lorem ipsum dolor sit amet consectetur. Lacus lacinia blandit gravida praesent feugiat.”
            </div>
          </section>

          <!-- Get in Touch -->
          <section class="get_in_touch">
              <div class="get_in_touch_text">Have An Idea?<br>Let's Build And Scale It!</div>
              <a class="get_in_touch_button" href="/start">
                  <img class="get_in_touch_arrow" src="../../assets/arrow-circle2.png" alt="arrow circle">
                  Start Now
              </a>
          </section>

            <!--footer-->
            <section>
                <footer class="footer">
                </footer>
            </section>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";

// floating presentation animation
if (typeof process !== "undefined" && process.browser) {
  require("IntersectionObserver");
}

onMounted(() => {
  const hiddenCol2Elements = document.querySelectorAll(".col2hide");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        hiddenCol2Elements.forEach((element) => {
          element.classList.add("col2show");
        });
      } else {
        hiddenCol2Elements.forEach((element) => {
          element.classList.remove("col2show");
        });
      }
    });
  });

  hiddenCol2Elements.forEach((element) => {
    observer.observe(element);
  });

  const hiddenCol13Elements = document.querySelectorAll(".col1_3_hide");

  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        hiddenCol13Elements.forEach((element) => {
          element.classList.add("col1_3_show");
        });
      } else {
        hiddenCol13Elements.forEach((element) => {
          element.classList.remove("col1_3_show");
        });
      }
    });
  });

  hiddenCol13Elements.forEach((element) => {
    observer2.observe(element);
  });
});
</script>

<style scoped>
/* ******************************************************************** */
/* ****************************General Classes************************* */
/* ******************************************************************** */
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

    /* font */
    font-size: 16px;
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



/* ******************************************************************** */
/* ****************************Introduction**************************** */
/* ******************************************************************** */
.cube_container{
  margin-top: 114px;

  width: 100%;
  padding-top: 2.24vw;
  padding-bottom: 0.6771vw;
}

.cube{
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.main_title_position{
  margin-top: 174px;
  margin-left: min(172px, 8.9583vw);
  margin-right: min(172px, 8.9583vw);
}

.project_title{
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 33px;
}

.project_main_title{
  color: white;
  font-family: Helvetica-Neue;
  font-size: 128px;
  font-style: normal;
  font-weight: 500;
  line-height: 123px; /* 96.094% */
}

.project_subtitle{
  color: white;
  font-family: Helvetica-Neue;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  max-width: 62.86vw;
}

.project_data{
  display: flex;
  width: calc(100vw - 2*min(174px, 9.0625vw));
  /* 81.04vw */
  padding: 48px 0px;
  justify-content: space-between;
  align-items: flex-start;

  border-top: 1px solid var(--dandelion-yellow);

  margin-top: 166px;
  margin-left: min(174px, 9.0625vw);
}

.data_section{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 26px;
}

.data_title{
  color: #FFF;
  font-family: Helvetica-Neue-LT-Pro-Medium;
  font-size: 2em;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.data_description{
  color: white;
  font-family: Helvetica-Light-Medium;
  font-size: 2em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}



/* ******************************************************************** */
/* ****************************Floating Presentation******************* */
/* ******************************************************************** */
.project_floating_present{
  /* shape */
  width: 100vw;
  height: 56.25vw;
  border: solid transparent 1px;

  /* inner shape */
  background: var(--onyx-black);
  overflow: clip;

  /* position */
  margin-top: 78px;
}

.float_card{
  /* shape */
  width: 55.03vw;
  height: 30.95vw;
  transform: rotate(-30deg);
  border-radius: 2.083vw;
  border: 1px solid rgba(166, 166, 166, 0.40);
  box-shadow: -29px 84px 59px 0px rgba(0, 0, 0, 0.25);
}

.float_col1_card1{
  margin-left: -30.5vw;
  margin-top: 28vw;
}

.float_col2_card1{
  margin-left: 3vw;
  margin-top: -16vw;
}

.float_col2_card2{
  margin-left: 20.3vw;
  margin-top: -60.2vw;
}

.float_col2_card3{
  margin-left: 37.6vw;
  margin-top: -1vw;
}

.float_col3_card1{
  margin-left: 71vw;
  margin-top: -90vw;
}

.col2hide {
  opacity: 0;
  filter: blur(10px);
  transition: all 1s;
}
  
.col2show {
  opacity: 1;
  filter: blur(0);
  transition: all 1s;
  animation: float forwards 3s;
}

.col1_3_hide {
  opacity: 0;
  filter: blur(10px);
  transition: all 1s;
}
  
.col1_3_show {
  opacity: 1;
  filter: blur(0);
  transition: all 1s;
  animation: reverse-float forwards 3s;
}

@keyframes float {
  from {transform: translate(100px, 173.2px) rotate(-30deg);}
  to {transform: translate(0, 0) rotate(-30deg);}
}

@keyframes reverse-float {
  from {transform: translate(-100px, -173.2px) rotate(-30deg);}
  to {transform: translate(0, 0) rotate(-30deg);}
}


/* ******************************************************************** */
/* **************************Design & Development********************** */
/* ******************************************************************** */
.design_title_position{
  margin-top: 254px;
  margin-left: min(174px, 9.0625vw);
  margin-right: min(174px, 9.0625vw);
}

.dev_title_position{
  margin-top: 375px;
  margin-left: min(174px, 9.0625vw);
  margin-right: min(174px, 9.0625vw);

  word-break: break-word;
}



/* ******************************************************************** */
/* *******************************Client Review************************ */
/* ******************************************************************** */
.client_review_demo1{
  width: 55.03vw;
  height: 30.955vw;
  border-radius: 2.083vw;
  border: 1px solid rgba(166, 166, 166, 0.40);
  box-shadow: -29px 84px 59px 0px rgba(0, 0, 0, 0.25);

  margin-top: 263px;
  margin-left: min(145px, 7.552vw);
}

.client_review_demo2{
  width: 55.03vw;
  height: 30.955vw;
  border-radius: 2.083vw;
  border: 1px solid rgba(166, 166, 166, 0.40);
  box-shadow: -29px 84px 59px 0px rgba(0, 0, 0, 0.25);

  margin-top: -13.25vw;
  margin-right: min(82.42px, 4.2927vw);
  margin-left: auto;

  z-index: 1;
}

.client_review{
  /* width: 1207px; */
  width: 62.86vw;

  display: block;
  margin-top: 22.12vw;
  margin-left: auto;
  margin-right: auto;

  color: #FFF;
  text-align: center;
  font-family: Helvetica-Neue-LT-Pro-Medium;
  font-size: 2vw;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}



/* ******************************************************************** */
/* *****************************Get in Touch*************************** */
/* ******************************************************************** */
.get_in_touch{
    /* position */
    margin-top: 22.12vw;
    margin-left: 7.917vw;

    /* shape */
    width: 81.7vw;
    height: 11.46vw;
    border-top: 1px solid #FFF;

    /* inner shape */
    display: inline-flex;
    padding: 1.25vw;
    align-items: center;
    gap: 10.52vw;
}

.get_in_touch_text{
    /* font */
    color: var(--light-periwinkle-purple);
    font-family: Helvetica-Neue-LT-Pro-Medium;
    font-size: 3.75vw;

    /* inner shape */
    font-style: normal;
    font-weight: 500;
    line-height: 152.8%; /* 110.016px */
    letter-spacing: 0.36px;
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



/* ******************************************************************** */
/* ****************************Footer********************************** */
/* ******************************************************************** */
.footer{
    /* position */
    margin-top: 7.97vw;

    /* shape */
    width: 100vw;
    height: 16.25vw;
    border-top: solid 3px white;
}
</style>