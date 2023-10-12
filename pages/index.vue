<template>
  <div class="main">
    <!--Canvas-->
    <div class="canvas">
      <!--Introduction-->
      <section>
        <div class="intro_title" id="intro_title">{{ epoch }}</div>
        <div class="intro_text">
          Flourish in the
          <h2
            class="inline-block glitch layers"
            style="filter: drop-shadow(0 1px 3px)"
            :data-text="epoch_subtitle"
          >
            {{ epoch_subtitle }}
          </h2>
          epoch
        </div>
        <img class="intro_img" src="../assets/donut.png" alt="donut" />
      </section>

      <!--Projects-->
      <section>
        <!-- <h3 class="projects_title">Projects</h3> -->

        <!--Computer Only-->
        <!-- <Carousel1 class="carousel1"/>
                <Carousel2 class="carousel2"/> -->

        <!--Mobile Only-->
        <!-- <MobileProjectCard class="mobile_project_card"/>
                <MobileProjectCard class="mobile_project_card"/>
                <MobileProjectCard class="mobile_project_card"/> -->
      </section>

      <!--Who We Are-->
      <section class="">
        <!-- computer only -->
        <h3 class="whoweare_title">Who We Are</h3>

        <!-- mobile only -->
        <h3 class="mobile_whoweare_title">
          Who We Are
          <!-- <div class="mobile_whoweare_underline">ho We A</div> -->
        </h3>

        <!--mobile and computer-->
        <div class="flex flex-col justify-center items-center">
          <!-- text-lg md:text-5xl -->
          <p
            class="whoweare_description px-4 md:px-24 w-full md:w-[65%] leading-relaxed md:leading-relaxed text-center text-white pt-4 md:pt-8"
          >
            A full-service design and development firm comprised of diverse
            minds who have a passion for creating digital experiences.
          </p>
          <p class="text-white w-full text-center underline pt-8" style="3vw">
            <a href="aboutus">Read more</a>
          </p>
        </div>
      </section>

      <!-- Desktop: Consultation -->
      <div
        class="consultation fixed hidden md:flex right-0 pl-4 rounded-l-full bg-black text-black bottom-12"
        id="booking"
        @mouseleave="closeBooking"
      >
        <div class="w-full">
          <div class="py-2">
            <div
              class="text-lg pl-3 pr-6 py-2 md:py-3 text-white flex flex-row items-center gap-6 text-center"
            >
              <img
                class="w-7 md:w-12"
                style="transition: rotate 0.5s, right 0.5s;"
                id="booking_arrow"
                src="../assets/arrow-circle2.png"
                alt="arrow circle"
                @mouseover="openBooking"
                @click="bookingClicked"
              />
              <!-- href="https://calendar.app.google/oh2k9cK9txq97biM6"
                target="_blank" -->
              <a href="/schedule">
                <p class="font-bold text-sm md:text-2xl">
                  Questions about your project?
                </p>
                Book a free consultation with our CEO
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile: Consultation -->
      <div class="w-full pt-24 flex flex-row justify-center md:hidden">
        <div class="rounded-2xl border">
          <a
            class="text-sm pl-6 pr-6 py-4 text-white flex flex-row items-center gap-6 text-center"
            href="/schedule"
          >
            <div>
              <p class="font-bold text-sm md:text-2xl">
                Questions about your project?
              </p>
              Book a free consultation with our CEO
            </div>
            <img
              class="w-7"
              src="../assets/arrow-circle2.png"
              alt="arrow circle"
            />
          </a>
        </div>
      </div>

      <!--Services-->
      <section>
        <h3 class="services_title pt-24 md:pt-0" id="services">What We Do</h3>

        <p class="whoweare_description px-4 md:px-24 w-full md:w-[65%] leading-relaxed md:leading-relaxed text-center text-white pt-4 md:pt-8">
          We build stunning websites for your business, art, or ideas.
        </p>

        <div class="services">
          <ServiceCard
            title="Business Solutions"
            description="Elevate your business with our tailored website design service. We craft visually stunning, responsive websites that leave a lasting impact."
            :tags="['Online Presence', 'Digital Marketing']"
            link="/start"
            id="service1"
          />

          <ServiceCard
            title="Web Portfolios"
            description="Transform your artistic vision into a compelling online showcase of your creativity."
            :tags="['Artistic Expression', 'Creative Design']"
            link="/start"
            id="service2"
          />

          <ServiceCard
            title="Online Stores"
            description="Embrace the digital revolution with our specialized service, guiding businesses smoothly into the online realm."
            :tags="['Digital Shift', 'Landing Page', 'Cloud Database']"
            link="/start"
            id="service3"
          />
        </div>
      </section>

      <!--Get in Touch-->
      <section class="get_in_touch">
        <div class="get_in_touch_text">Got An Idea?<br />Let's See It!</div>
        <a class="get_in_touch_button" href="/start">
          <img
            class="get_in_touch_arrow"
            src="../assets/arrow-circle2.png"
            alt="arrow circle"
          />
          Start Now
        </a>
      </section>

      <!--Footer-->
      <section>
        <MainFooter class="main_footer" id="main_footer"/>
      </section>

      <!--Mobile: Contact Button-->
      <section>
        <a class="contact_button" href="/start">Start</a>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    // page head
    useHead({
      title: 'Epoch Design & Development',
      meta: [
        {name: 'description', content: 'Epoch Design & Development - Flourish in The Digital Epoch. Stunning Online Stores. Gorgeous Web Portfolios. Remarkable Landing Pages. Custom Web Solutions.'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1.0'}
      ],
      link: [
        {rel: 'icon', href: '/favicon.ico'}
      ]
    });
  },
  data() {
    return {
      epoch: "Algorithm",
      epoch_subtitle: "830~",
      epochs: [
        ["830~", "Algorithm"],
        ["1670~", "Symbolic Logic"],
        ["1822", "Difference Engine"],
        ["1847", "Boolean Logic"],
        ["1936", "Lambda Calculus"],
        ["1937", "Information Theory"],
        ["1950", "Error Correcting"],
        ["1953", "Dynamic Programming"],
        ["1967", "Unix"],
        ["1970~", "AI"],
        ["1976", "Cryptography"],
        ["1989", "WWW"],
        ["1990~", "Complexity"],
        ["1991", "Linux Kernel"],
        ["1997", "Deep Blue"],
        ["2004", "Web 2.0"],
        ["2008", "Deep Neural Networks"],
        ["digital", "epoch"],
      ],
    };
  },

  mounted() {
    // setTimeout(() => {
    //   this.epoch = "Symbolic Logic";
    //   this.epoch_subtitle = "1670~";
    // }, 500);
    // setTimeout(() => {
    //   this.epoch = "Difference Machine";
    //   this.epoch_subtitle = "1822";
    // }, 900);
    // setTimeout(() => {
    //   this.epoch = "Boolean Logic";
    //   this.epoch_subtitle = "1847";
    // }, 1200);
    // setTimeout(() => {
    //   this.epoch = "Lambda Calculus";
    //   this.epoch_subtitle = "1936";
    // }, 1400);
    // setTimeout(() => {
    //   for (let index = 5; index < this.epochs.length; index++) {
    //     setTimeout(() => {
    //       this.epoch = this.epochs[index][1];
    //       this.epoch_subtitle = this.epochs[index][0];
    //     }, 100*index)
    //   }
    // }, 1500);
    // setTimeout(() => {
    //   let epoch_title = document.getElementById("intro_title");
    //   if (window.innerWidth > 740) {
    //     epoch_title.style.fontSize = "20vw";
    //   }
    //   else{
    //     epoch_title.style.fontSize = "22.5vw";
    //   }
    // }, 3300);
    for (let index = 0; index < this.epochs.length - 5; index++) {
      setTimeout(() => {
        this.epoch = this.epochs[index][1];
        this.epoch_subtitle = this.epochs[index][0];
      }, 100 * (index + 1));
    }
    setTimeout(() => {
      this.epoch = "Linus Kernel";
      this.epoch_subtitle = "1991";
    }, 1400);
    setTimeout(() => {
      this.epoch = "Deep Blue";
      this.epoch_subtitle = "1997";
    }, 1600);
    setTimeout(() => {
      this.epoch = "Web 2.0";
      this.epoch_subtitle = "2004";
    }, 1900);
    setTimeout(() => {
      this.epoch = "Deep Neural Networks";
      this.epoch_subtitle = "2008";
    }, 2300);
    setTimeout(() => {
      this.epoch = "epoch";
      this.epoch_subtitle = "digital";
      let epoch_title = document.getElementById("intro_title");
      if (window.innerWidth > 740) {
        epoch_title.style.fontSize = "20vw";
      } else {
        epoch_title.style.fontSize = "22.5vw";
      }
    }, 2800);

    setTimeout(() => {
      let booking = document.getElementById("booking");
      let booking_arrow = document.getElementById("booking_arrow");
      booking.style.right = "-390px";
      booking_arrow.style.rotate = "-180deg";
    }, 5000);
  },

  methods: {
    openBooking(){
      let booking = document.getElementById("booking");
      let booking_arrow = document.getElementById("booking_arrow");
      booking.style.right = "0px";
      booking_arrow.style.rotate = "0deg";
    },
    closeBooking(){
      let booking = document.getElementById("booking");
      let booking_arrow = document.getElementById("booking_arrow");
      booking.style.right = "-390px";
      booking_arrow.style.rotate = "-180deg";
    },
    bookingClicked(){
      let booking = document.getElementById("booking");
      let booking_arrow = document.getElementById("booking_arrow");
      if(booking.style.right == "-390px"){
        booking.style.right = "0";
      }
      else{
        booking.style.right = "-390px";
      }

      if(booking_arrow.style.rotate == "-180deg"){
        booking_arrow.style.rotate = "0deg";
      }
      else{
        booking_arrow.style.rotate = "-180deg";
      }
    }
  },
};
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
.main {
  --onyx-black: #121212;
  --dandelion-yellow: #e8e92b;
  --light-periwinkle-purple: #c0c7ff;
  /* #FFFFFF (white) */
}

/* Canvas */
.canvas {
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
.position_center_absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.position_center_flex {
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
/* ***************************Glitch Animation************************* */
/* ******************************************************************** */

.layers {
  position: relative;
}

.layers::before,
.layers::after {
  content: attr(data-text);
  position: absolute;
  width: 110%;
  z-index: -1;
}

.layers::before {
  top: 10px;
  left: 15px;
  color: #e0287d;
}

.layers::after {
  top: 5px;
  left: -10px;
  color: #1bc7fb;
}

.single-path {
  clip-path: polygon(
    0% 12%,
    53% 12%,
    53% 26%,
    25% 26%,
    25% 86%,
    31% 86%,
    31% 0%,
    53% 0%,
    53% 84%,
    92% 84%,
    92% 82%,
    70% 82%,
    70% 29%,
    78% 29%,
    78% 65%,
    69% 65%,
    69% 66%,
    77% 66%,
    77% 45%,
    85% 45%,
    85% 26%,
    97% 26%,
    97% 28%,
    84% 28%,
    84% 34%,
    54% 34%,
    54% 89%,
    30% 89%,
    30% 58%,
    83% 58%,
    83% 5%,
    68% 5%,
    68% 36%,
    62% 36%,
    62% 1%,
    12% 1%,
    12% 34%,
    60% 34%,
    60% 57%,
    98% 57%,
    98% 83%,
    1% 83%,
    1% 53%,
    91% 53%,
    91% 84%,
    8% 84%,
    8% 83%,
    4% 83%
  );
}

.paths {
  animation: paths 5s step-end infinite;
}

@keyframes paths {
  0% {
    clip-path: polygon(
      0% 43%,
      83% 43%,
      83% 22%,
      23% 22%,
      23% 24%,
      91% 24%,
      91% 26%,
      18% 26%,
      18% 83%,
      29% 83%,
      29% 17%,
      41% 17%,
      41% 39%,
      18% 39%,
      18% 82%,
      54% 82%,
      54% 88%,
      19% 88%,
      19% 4%,
      39% 4%,
      39% 14%,
      76% 14%,
      76% 52%,
      23% 52%,
      23% 35%,
      19% 35%,
      19% 8%,
      36% 8%,
      36% 31%,
      73% 31%,
      73% 16%,
      1% 16%,
      1% 56%,
      50% 56%,
      50% 8%
    );
  }

  5% {
    clip-path: polygon(
      0% 29%,
      44% 29%,
      44% 83%,
      94% 83%,
      94% 56%,
      11% 56%,
      11% 64%,
      94% 64%,
      94% 70%,
      88% 70%,
      88% 32%,
      18% 32%,
      18% 96%,
      10% 96%,
      10% 62%,
      9% 62%,
      9% 84%,
      68% 84%,
      68% 50%,
      52% 50%,
      52% 55%,
      35% 55%,
      35% 87%,
      25% 87%,
      25% 39%,
      15% 39%,
      15% 88%,
      52% 88%
    );
  }

  30% {
    clip-path: polygon(
      0% 53%,
      93% 53%,
      93% 62%,
      68% 62%,
      68% 37%,
      97% 37%,
      97% 89%,
      13% 89%,
      13% 45%,
      51% 45%,
      51% 88%,
      17% 88%,
      17% 54%,
      81% 54%,
      81% 75%,
      79% 75%,
      79% 76%,
      38% 76%,
      38% 28%,
      61% 28%,
      61% 12%,
      55% 12%,
      55% 62%,
      68% 62%,
      68% 51%,
      0% 51%,
      0% 92%,
      63% 92%,
      63% 4%,
      65% 4%
    );
  }

  45% {
    clip-path: polygon(
      0% 33%,
      2% 33%,
      2% 69%,
      58% 69%,
      58% 94%,
      55% 94%,
      55% 25%,
      33% 25%,
      33% 85%,
      16% 85%,
      16% 19%,
      5% 19%,
      5% 20%,
      79% 20%,
      79% 96%,
      93% 96%,
      93% 50%,
      5% 50%,
      5% 74%,
      55% 74%,
      55% 57%,
      96% 57%,
      96% 59%,
      87% 59%,
      87% 65%,
      82% 65%,
      82% 39%,
      63% 39%,
      63% 92%,
      4% 92%,
      4% 36%,
      24% 36%,
      24% 70%,
      1% 70%,
      1% 43%,
      15% 43%,
      15% 28%,
      23% 28%,
      23% 71%,
      90% 71%,
      90% 86%,
      97% 86%,
      97% 1%,
      60% 1%,
      60% 67%,
      71% 67%,
      71% 91%,
      17% 91%,
      17% 14%,
      39% 14%,
      39% 30%,
      58% 30%,
      58% 11%,
      52% 11%,
      52% 83%,
      68% 83%
    );
  }

  76% {
    clip-path: polygon(
      0% 26%,
      15% 26%,
      15% 73%,
      72% 73%,
      72% 70%,
      77% 70%,
      77% 75%,
      8% 75%,
      8% 42%,
      4% 42%,
      4% 61%,
      17% 61%,
      17% 12%,
      26% 12%,
      26% 63%,
      73% 63%,
      73% 43%,
      90% 43%,
      90% 67%,
      50% 67%,
      50% 41%,
      42% 41%,
      42% 46%,
      50% 46%,
      50% 84%,
      96% 84%,
      96% 78%,
      49% 78%,
      49% 25%,
      63% 25%,
      63% 14%
    );
  }

  90% {
    clip-path: polygon(
      0% 41%,
      13% 41%,
      13% 6%,
      87% 6%,
      87% 93%,
      10% 93%,
      10% 13%,
      89% 13%,
      89% 6%,
      3% 6%,
      3% 8%,
      16% 8%,
      16% 79%,
      0% 79%,
      0% 99%,
      92% 99%,
      92% 90%,
      5% 90%,
      5% 60%,
      0% 60%,
      0% 48%,
      89% 48%,
      89% 13%,
      80% 13%,
      80% 43%,
      95% 43%,
      95% 19%,
      80% 19%,
      80% 85%,
      38% 85%,
      38% 62%
    );
  }

  1%,
  7%,
  33%,
  47%,
  78%,
  93% {
    clip-path: none;
  }
}

.movement {
  position: relative;
  animation: movement 8s step-end infinite;
}

@keyframes movement {
  0% {
    top: 0px;
    left: -20px;
  }

  15% {
    top: 10px;
    left: 10px;
  }

  60% {
    top: 5px;
    left: -10px;
  }

  75% {
    top: -5px;
    left: 20px;
  }

  100% {
    top: 10px;
    left: 5px;
  }
}

.opacity {
  animation: opacity 5s step-end infinite;
}

@keyframes opacity {
  0% {
    opacity: 0.1;
  }

  5% {
    opacity: 0.7;
  }

  30% {
    opacity: 0.4;
  }

  45% {
    opacity: 0.6;
  }

  76% {
    opacity: 0.4;
  }

  90% {
    opacity: 0.8;
  }

  1%,
  7%,
  33%,
  47%,
  78%,
  93% {
    opacity: 0;
  }
}

.font {
  animation: font 7s step-end infinite;
}

@keyframes font {
  0% {
    font-weight: 100;
    color: #e0287d;
    filter: blur(3px);
  }

  20% {
    font-weight: 500;
    color: #fff;
    filter: blur(0);
  }

  50% {
    font-weight: 300;
    color: #1bc7fb;
    filter: blur(2px);
  }

  60% {
    font-weight: 700;
    color: #fff;
    filter: blur(0);
  }

  90% {
    font-weight: 500;
    color: #e0287d;
    filter: blur(6px);
  }
}

.glitch span {
  animation: paths 5s step-end infinite;
}

.glitch::before {
  animation: paths 5s step-end infinite, opacity 5s step-end infinite,
    font 8s step-end infinite, movement 10s step-end infinite;
}

.glitch::after {
  animation: paths 5s step-end infinite, opacity 5s step-end infinite,
    font 7s step-end infinite, movement 8s step-end infinite;
}

.hero-container {
  position: relative;
  padding: 200px 0;
  text-align: center;
}

/* ******************************************************************** */
/* ****************************Introduction**************************** */
/* ******************************************************************** */
.intro_img {
  /* shape */
  object-fit: contain;
  width: 70vw;

  /* position */
  position: absolute;
  top: 6vw;
  left: 50%;
  transform: translateX(-50%);

  /* interaction */
  z-index: -1;
}

.intro_title {
  /* position */
  margin-top: 8vw;
  margin-left: auto;
  margin-right: auto;

  /* font */
  color: var(--dandelion-yellow);
  font-family: KronaOne;
  /* font-size: 20vw; */
  font-size: 6vw;

  /* interaction */
  user-select: none;
  z-index: 1;

  /* shape */
  width: max-content;
  height: 30vw;

  /* inner shape */
  display: flex;
  align-items: center;
  justify-content: center;

  /* animation */
  transition: font-size 0.5s;
}

.intro_text {
  /* font */
  font-family: Helvetica-Neue;
  font-size: 2.75vw;
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
  .intro_img {
    /* shape */
    width: 164.62vw;
    height: 90vw;
    object-fit: cover;
    max-width: none;
    max-height: none;

    /* position */
    position: absolute;
    top: 15vw;
    left: 50%;
    transform: translateX(-50%);
  }

  .intro_title {
    /* position */
    margin-top: 35vw;

    /* font */
    /* font-size: 22.5vw; */
    font-size: 7vw;
  }

  .intro_text {
    /* font */
    font-family: Helvetica-Neue;
    font-size: 4vw;
    color: white;

    /* Inner Shape */
    text-align: center;
    width: 93.47vw;

    /* position */
    margin-top: 2vw;
  }
}

/* ******************************************************************** */
/* ****************************Projects******************************** */
/* ******************************************************************** */
.projects_title {
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

.carousel1 {
  /* position: relative; */
  margin-top: 2vw;
}

/* for mobile */
@media screen and (max-width: 740px) {
  .projects_title {
    /* position */
    margin-top: 15vw;
    margin-bottom: 5vw;

    /* font */
    font-size: 7vw;

    /* shape */
    padding-bottom: 0.4vw;
    border-bottom: solid 1px;
  }

  .mobile_project_card {
    margin-bottom: 0.26vw;
  }
}

/* ******************************************************************** */
/* ****************************Who We Are****************************** */
/* ******************************************************************** */
.whoweare_title {
  /* position */
  display: block;
  /* margin-top: 5vw; */
  margin-top: 15vw;
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

.mobile_whoweare_title {
  display: none;
}

.whoweare_description {
  /* position */
  margin: auto;

  /* font */
  font-family: Helvetica-Neue;
  font-size: 2vw;
  color: white;

  /* Inner Shape */
  text-align: center;
  width: 60vw;
}

.whoweare_text {
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

.oval {
  /* shape */
  width: 64.58vw;
  height: 9.56vw;
  border-radius: 50%;
  border: solid var(--dandelion-yellow) 1.5px;
  opacity: 70%;
}

.oval1_pos {
  /* position */
  position: absolute;
  /* top: 135vw; */
  top: 62vw;
  left: 50%;
  transform: translateX(-50%);
}

.oval2_pos {
  /* position */
  position: absolute;
  /* top: 137.71vw; */
  top: 64.71vw;
  left: 50%;
  transform: translateX(-50%);
}

.oval3_pos {
  /* position */
  position: absolute;
  /* top: 140.42vw; */
  top: 67.42vw;
  left: 50%;
  transform: translateX(-50%);
}

/* for mobile */
@media screen and (max-width: 740px) {
  .whoweare_title {
    /* interaction */
    display: none;
  }

  .mobile_whoweare_title {
    /* position */
    margin-left: auto;
    margin-right: auto;
    /* margin-top: 10vw; */
    margin-top: 50vw;

    /* font */
    color: white;
    font-family: Helvetica-Neue;
    font-size: 7vw;

    /* interaction */
    user-select: none;
    display: block;

    /* shape */
    padding-bottom: 0.4vw;
    width: max-content;
    border-bottom: solid 1px;
  }

  .mobile_whoweare_underline {
    border-bottom: solid 1px;
    display: inline-block;
  }

  .whoweare_description {
    /* font */
    font-family: Helvetica-Neue;
    font-size: 4vw;
    color: white;

    /* Inner Shape */
    text-align: center;
    width: 75vw;
  }

  .whoweare_text {
    /* font */
    font-family: Helvetica-Neue;
    font-size: 4vw;
    color: white;

    /* Inner Shape */
    text-align: center;
    width: 63vw;

    /* position */
    margin-top: 7vw;
    margin-left: auto;
    margin-right: auto;

    /* interaction */
    z-index: 1;
  }

  .oval {
    /* shape */
    width: 95.09vw;
    height: 7.89vh;
  }

  .oval1_pos {
    /* position */
    /* top: 352vw; */
    top: 130vw;
  }

  .oval2_pos {
    /* position */
    /* top: 357vw; */
    top: 135vw;
  }

  .oval3_pos {
    /* position */
    /* top: 362vw; */
    top: 140vw;
  }
}



/* ******************************************************************** */
/* ****************************Consultation**************************** */
/* ******************************************************************** */
/* .consultation:hover img{
  rotate: 0deg;
} */

.consultation img{
  rotate: 0deg;
}

/* .consultation:hover{
  right: 0;
} */

.consultation{
  right: 0;
  transition: all 0.5s;

  opacity: 0;
  animation: consultation_appear forwards 1s;
  animation-delay: 4s;
}


@keyframes consultation_appear {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}

.glow {
  /* color: hsl(186 100% 69%); */
  border: 0.2em solid hsl(186 100% 69%);
  border-radius: 50%;
  perspective: 2em;

  -webkit-box-shadow: inset 0px 0px 0.5em 0px hsl(186 100% 69%),
    0px 0px 0.5em 0px hsl(186 100% 69%);
  -moz-box-shadow: inset 0px 0px 0.5em 0px hsl(186 100% 69%),
    0px 0px 0.5em 0px hsl(186 100% 69%);
  box-shadow: inset 0px 0px 0.5em 0px hsl(186 100% 69%),
    0px 0px 0.5em 0px hsl(186 100% 69%);
  animation: border-flicker 2s linear infinite;
}

@keyframes border-flicker {
  0% {
    opacity: 0.1;
  }
  2% {
    opacity: 1;
  }
  4% {
    opacity: 0.1;
  }

  8% {
    opacity: 1;
  }
  70% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}

/* ******************************************************************** */
/* ****************************Services******************************** */
/* ******************************************************************** */
.services_title {
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

.services {
  /* inner shape */
  display: flex;
  /* grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 0.5208vw; */

  /* shape */
  min-height: 18.7vw;
  width: 89.84vw;

  /* position */
  margin-top: 2.5vw;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (max-width: 740px) {
  .services_title {
    /* position */
    margin-top: 10vw;

    /* font */
    font-size: 7vw;
  }

  .services {
    /* inner shape */
    display: block;

    /* shape */
    height: auto;
    width: 87.69vw;

    /* position */
    margin-top: 5vw;
    transform: none;
    margin-left: auto;
    margin-right: auto;
  }
}

/* ******************************************************************** */
/* ****************************Get In Touch**************************** */
/* ******************************************************************** */
.get_in_touch {
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

.get_in_touch_text {
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

.get_in_touch_button {
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

.get_in_touch_arrow {
  /* shape */
  width: 2.86vw;
  height: 2.86vw;

  /* position */
  display: inline;
}

@media screen and (max-width: 740px) {
  .get_in_touch {
    display: none;
  }
}

/* ******************************************************************** */
/* ****************************Footer********************************** */
/* ******************************************************************** */
.main_footer {
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
  .main_footer {
    /* position */
    margin-top: 10vw;

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
  .contact_button {
    /* position */
    position: fixed;
    right: 8px;
    bottom: 8px;
    color: black;

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
    font-family: Helvetica-Neue-LT-Pro-Medium;
    font-size: clamp(1rem, 1.2vw, 3rem);

    /* interaction */
    z-index: 1;
    cursor: pointer;
    user-select: none;
  }
}
</style>
