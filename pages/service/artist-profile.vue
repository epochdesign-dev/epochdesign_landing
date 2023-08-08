<template>
    <div class="main">
      <div class="canvas">
        <div class="title selected">
          <SubpageTitle2 class="subpagetite" title="Artist Profile"
            subtitle="Transform your artistic vision into a compelling online showcase of your creativity.
            " />
        </div>
        <div class="demos">
            <ImgsDisplay class="demos-content"/>
        </div>
  
        <div class="content">
          <div class="content-title">
            Aesthetically pleasing websites that evoke that wow reaction
          </div>
          <div class="content-description">
            A brand's website, no matter big or small, is an opportunity for them
            to stand out. So why settle for something boring and unoriginal? At
            Epoch, our clients benefit from beautifully designed websites that are
            carefully crafted and custom-made.Our main goal is for our client's
            site is to resonate with its customers and create a smooth user
            experience. As your dedicated web design agency, you can depend on our
            highly educated and experienced team to create a digital experience
            that evokes that wow factor.
          </div>
          <div class="skill-sets">
            <div class="skill-row">
              <div class="skill-tag">Figma</div>
              <div class="skill-tag">Adobe XD</div>
              <div class="skill-tag">Graphics</div>
            </div>
            <div class="skill-row">
              <div class="skill-tag">UI/UX</div>
              <div class="skill-tag">Landing pages</div>
              <div class="skill-tag">Wireframes</div>
              <div class="skill-tag">Redesign</div>
            </div>
          </div>
        </div>
  
        <div class="why-epoch">
          <div class="why-epoch-grid">
            <div class="sub-title why-epoch-grid-left">WHY EPOCH</div>
            <img src="../../assets/Q-line.png" alt="Q" class="why-epoch-grid-mid" />
            <div class="why-epoch-grid-right">
              <div class="why-title">Originality</div>
              <div class="why-description">
                Your new website will be hand-crafted and unique to your brand and
                its target audience. We pride ourselves in designing one-of-a-kind
                websites.
              </div>
              <div class="why-title">Creativity</div>
              <div class="why-description">
                Each design we create combines our creativity and deep
                understanding of your brand\'s user needs to deliver a meaningful
                digital experience.
              </div>
              <div class="why-title">Impactful</div>
              <div class="why-description">
                Your website’s the centrepiece of your visual identity. We make
                every click count through creative design and UX that converts.
              </div>
            </div>
          </div>
        </div>
  
        <div class="featured-projects">
          <div class="sub-title">FEATURED PROJECTS</div>
          <div class="scroll-swiper">
          </div>
        </div>
  
        <div class="contact">
          <GetInTouch />
        </div>
  
        <div class="footer">
          <MainFooter />
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup>
  useHead({
    title: "Epoch Design | Artist Profile",
    meta: [{ name: "description", content: "Artist Profile" }],
  });
  </script>

  <style scoped>
  /* Fonts */
@font-face {
  font-family: "Helvetica-Neue";
  src: local("Helvetica-Neue"),
    url("../../assets/Helvetica.ttf") format("truetype");
}

/* Color Variables */
.main {
  --onyx-black: #121212;
  --dandelion-yellow: #e8e92b;
  --light-periwinkle-purple: #c0c7ff;
  /* #FFFFFF (white) */

  --large: 0.8;
  --medium: 0.4;
  --small: 0.25;
}

/* Canvas */
.canvas {
  /* inner shape */
  background-color: var(--onyx-black);

  /* position */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  /* interaction */
  overflow-y: scroll;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.canvas > *:not(.footer) {
  margin-bottom: 20vw;
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

.title {
  min-width: min-content;
  position: relative;
  margin-top: 400px;
  /* Ensures that the element takes the full width of its parent */
}

.demos {
  position: relative;
  top: auto;
}

/*The typeface might be a different one ?? the font size is not match the design*/
.content {
  /* position */
  position: relative;
  top: auto;
  margin: 0 auto;

  /* font global */
  font-family: "Helvetica-Neue";
  color: white;
  /*centering*/
  text-align: center;

  /*inner shape*/
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1920px;
}

.content-title {
  /* font */
  font-size: 38pt;
  font-weight: bold;
  letter-spacing: -1.5%;
  padding-bottom: 50px;
}

.content-description {
  /* font */
  font-size: 15pt;
  font-weight: 300;
  letter-spacing: 0.5%;
  line-height: 2;
  padding: 0 1em;
  padding-bottom: 50px;
}

.skill-sets {
  width: 50%;

  /* inner shape */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.skill-row {
  /* Set the minimum width of the row to fit its contents */
  min-width: 450px;
}

.skill-tag {
  /* font */
  font-size: 15pt;

  /* inner shape */
  border-radius: 5rem;
  border: solid 1px var(--dandelion-yellow);
  padding: 0.5rem 1.5rem;

  display: inline-block;
  width: fit-content;

  margin: 0.3rem;
}

.why-epoch {
  position: relative;
  top: auto;
  padding: 0 2rem;
  max-width: 1920px;
  min-width: min-content;
}

.why-epoch-grid {
  /* grid */
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  /* Define three columns with equal width */
  grid-gap: 40px;
  /* Add a gap between grid items */
}

.sub-title {
  /* font */
  font-family: "Helvetica-Neue";
  font-size: 70pt;
  color: white;
  white-space: nowrap;
}

.why-title {
  /* font */
  font-size: 38pt;
  font-weight: bold;
  letter-spacing: -1.5%;
  font-family: "Helvetica-Neue";
  color: var(--dandelion-yellow);
}

.why-description {
  /* font */
  font-size: 25pt;
  font-weight: 300;
  letter-spacing: 5%;
  line-height: 1.38;
  font-family: "Helvetica-Neue";
  color: white;
  margin-bottom: 20px;
}

.why-epoch-grid-left {
  grid-column: 1;
  /* Place the element in the first column (left) */
  text-align: end;
}

.why-epoch-grid-mid {
  grid-column: 2;
  /* Place the image in the second column (middle) */
  min-width: min-content;
}

.why-epoch-grid-right {
  padding-top: 3rem;
  grid-column: 3;
  /* Place the element in the third column (right) */
  text-align: start;
}

.featured-projects {
  /* position */
  position: relative;
  top: auto;
  max-width: 1920px;
}

.contact {
  /* position */
  position: relative;
  top: auto;
  display: flex;
  justify-content: center;
}

.footer {
  /* position */
  position: relative;
  top: auto;
}

@media screen and (max-width: 1500px) {
  /*why epoch*/
  .why-epoch-grid {
    gap: 20px;
  }

  .sub-title {
    font-size: calc(70pt * var(--large));
  }

  .why-title {
    font-size: calc(38pt * var(--large));
  }

  .why-description {
    font-size: calc(25pt * var(--large));
  }
}

@media screen and (max-width: 1200px) {
  /*content*/
  .content-title {
    font-size: calc(48pt * var(--medium));
  }

  .content-description {
    font-size: calc(18pt * var(--large));
  }

  .skill-tag {
    font-size: calc(21pt * var(--large));
    padding: 0.1rem 1rem;
  }

  .skill-row {
    min-width: 400px;
  }

  /*why epoch*/
  .why-epoch-grid {
    gap: 20px;
  }

  .sub-title {
    font-size: calc(70pt * var(--medium) * 1.5);
    white-space: inherit;
  }

  .why-title {
    font-size: calc(38pt * var(--medium) * 1.5);
  }

  .why-description {
    font-size: calc(25pt * var(--medium));
  }

  .why-epoch-grid-mid > img {
    width: 100%;
    height: 50%;
  }
}

@media screen and (max-width: 700px) {
  .content-title {
    font-size: calc(48pt * var(--medium));
  }

  .content-description {
    font-size: calc(19pt * var(--large));
  }

  .skill-tag {
    font-size: calc(21pt * var(--medium)* 1.5);
    padding: 0.1rem 1rem;
  }

  .skill-row {
    min-width: 400px;
  }

  .sub-title {
    font-size: calc(70pt * var(--small)* 1.5);
  }

  .why-epoch-grid {
    grid-gap: 0px;
    /* Add a gap between grid items */
  }

  .why-epoch-grid-mid {
    text-align: center;
  }

  .why-epoch-grid-mid {
    display: none;
  }
}

  </style>
  