<template>
  <div class="main">
    <!--navigation bar-->
    <header>
      <!-- for computer -->
      <nav class="navigation">
        <div class="heading"><a href="/">epoch</a></div>
        <div class="central-links">
          <div class="link border-right"><a href="/aboutus">About Us</a></div>
          <div @click="highlightConsultOptions" class="link border-right">
            <!-- <a href="mailto:contact@epochdesign.dev" target="_blank">Contact Us</a> -->
            <a href="/#main_footer">Consult Us</a>
          </div>
          <div class="link">
            <a href="/#services">Services</a>
          </div>
        </div>
        <div class="contact-button"><a href="/start">Get Started</a></div>
      </nav>

      <!-- For Mobile -->
      <nav class="mobile_navigation">
        <a href="/">
          <div class="mobile_heading">epoch</div>
        </a>
        <!-- <img class="mobile_button" src="../assets/plus-circle.png" alt="plus circle"> -->
      </nav>
    </header>

    <!--slot displays the rest of the page-->
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    // page head
    useHead({
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-865TJJ73PD",
          type: "text/javascript",
          async: true,
        },
        {
          children:
            "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-865TJJ73PD');",
        },
      ],
    });
  },
  methods: {
    highlightConsultOptions(){
      let bookingArrow = document.getElementById("booking_arrow");
      bookingArrow.classList.add("glow");
      console.log(bookingArrow.classList);

      let email = document.getElementById("email");
      email.classList.add("glow2");
      console.log(email.classList);

      setTimeout(() => {
        bookingArrow.classList.remove("glow");
        email.classList.remove("glow2");
      }, 5000);
    }
  }
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

/* Colour Variables */
.main {
  --onyx-black: #121212;
  --dandelion-yellow: #e8e92b;
  --light-periwinkle-purple: #c0c7ff;
  /* #FFFFFF (white) */
}

/* ******************************************************************** */
/* ****************************Computer Screen************************* */
/* ******************************************************************** */
.navigation {
  /* Position */
  position: fixed;

  /* Interaction */
  z-index: 4;

  /* Inner Shape */
  display: grid;
  grid-template-columns: [line1] 8.85% [line2] auto [line3] 25% [line4] auto [line5] 9.47% [end];
  background-image: linear-gradient(var(--onyx-black), transparent);

  /* Shape */
  width: 100%;
  height: 10.56%;
}

.heading {
  /* Position */
  grid-column: line1 / line2;
  margin-left: 32px;
  margin-top: 32px;

  /* Font */
  color: white;
  font-family: KronaOne;
  font-size: 1.8vw;

  /* Shape */
  height: 37.7%;

  /* Inner Shape */
  display: flex;
  justify-content: center;
  align-items: center;

  /* interaction */
  user-select: none;
}

.central-links {
  /* Position */
  grid-column: line3 / line4;
  margin-top: 32px;

  /* Font */
  color: white;
  font-family: Helvetica-Neue;
  font-size: 0.9vw;

  /* Shape */
  height: 37.7%;

  /* Inner Shape */
  display: flex;
}

.link {
  /* Shape */
  height: 100%;
  flex: 1;

  /* Inner Shape */
  display: flex;
  justify-content: center;
  align-items: center;
}

.border-right {
  /* Shape */
  border-right-style: solid;
}

.contact-button {
  /* Position */
  grid-column: line5 / end;

  /* Font */
  color: var(--onyx-black);
  font-family: Helvetica-Neue;
  font-size: 0.9vw;

  /* Shape */
  border-radius: 25px;
  height: 37.7%;
  min-width: 8vw;

  /* Position */
  margin-top: 32px;
  margin-right: 32px;

  /* Inner Shape */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--dandelion-yellow);
  text-align: center;

  /* Interaction */
  cursor: pointer;
  user-select: none;
}

/* ******************************************************************** */
/* ****************************Mobile Screen*************************** */
/* ******************************************************************** */
.mobile_navigation {
  display: none;
}

/* for mobile */
@media screen and (max-width: 740px) {
  .navigation {
    /* Interaction */
    display: none;
  }

  .mobile_navigation {
    /* Position */
    position: fixed;

    /* Interaction */
    z-index: 4;

    /* Inner Shape */
    background-image: linear-gradient(var(--onyx-black), transparent);

    /* Shape */
    width: 100%;
    height: 60px;
    display: block;
  }

  .mobile_heading {
    /* Position */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    /* Font */
    color: white;
    font-family: KronaOne;
    font-size: 5vw;

    /* interaction */
    user-select: none;
  }

  .mobile_button {
    /* Position */
    position: absolute;
    top: 50%;
    right: 4.1vw;
    transform: translateY(-50%);
  }
}
</style>
