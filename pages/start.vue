<template>
  <div class="main">
    <div class="canvas">
      <div class="grid h-screen w-full bg-[#121212]">
        <!-- Mobile Consultation -->
        <div
          class="w-full md:fixed md:bottom-6 md:left-12 pt-20 flex flex-row justify-center"
        >
          <div class="rounded-2xl border-none">
            <a
              class="text-sm pl-6 pr-6 py-4 text-white flex flex-row items-center gap-6 text-center"
              href="https://calendar.app.google/oh2k9cK9txq97biM6"
              target="_blank"
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

        <div
          class="mt-[15vw] lg:mt-[3vw] mx-auto lg:w-[65rem] min-[1450px]:w-[90rem] flex-grow grid lg:grid-cols-3 min-[1450px]:grid-cols-4 place-content-center gap-8"
        >
          <!-- astronaut section -->
          <div
            class="col-span-1 h-full items-center justify-center hidden min-[1450px]:flex"
          >
            <img class="astronaut" :src="astronautSrc" alt="astronaut" />
            <h1 class="lg_start_title">Start Your Project</h1>
          </div>

          <div class="flex flex-col col-span-2 gap-8 h-full">
            <!-- Project Breadth -->
            <div
              class="max-md:mx-2 flex flex-col gap-4 border-2 border-indigo-500 rounded-xl p-8 h-min"
              @click="changeAstronaut(0)"
            >
              <div class="pb-4">
                <h2 class="font-bold text-4xl uppercase text-indigo-500">
                  Project Breadth
                </h2>
                <h3 class="text-white text-lg pt-2">
                  Select the components that make up your project
                </h3>
              </div>
              <div class="flex flew-row flex-wrap gap-2 font-normal">
                <div
                  class="tooltip tooltip-accent tooltip-bottom font-bold"
                  data-tip="The home of your site, the first thing people see."
                >
                  <button
                    class="rounded-lg px-2 md:px-4 py-2 bg-base-100"
                    @click="selectTag"
                  >
                    Landing Page
                  </button>
                </div>
                <div
                  class="tooltip tooltip-accent tooltip-bottom font-bold"
                  data-tip="Every backend/frontend program you need."
                >
                  <button
                    class="rounded-lg px-2 md:px-4 py-2 bg-base-100"
                    @click="selectTag"
                  >
                    Internal Software
                  </button>
                </div>
                <div
                  class="tooltip tooltip-accent tooltip-bottom font-bold"
                  data-tip="Fast and efficient online store in any style you want."
                >
                  <button
                    class="rounded-lg px-2 md:px-4 py-2 bg-base-100"
                    @click="selectTag"
                  >
                    Online Store
                  </button>
                </div>
                <div
                  class="tooltip tooltip-accent tooltip-bottom font-bold"
                  data-tip="An admin panel for all your management purposes."
                >
                  <button
                    class="rounded-lg px-2 md:px-4 py-2 bg-base-100"
                    @click="selectTag"
                  >
                    Management Page
                  </button>
                </div>
                <div
                  class="tooltip tooltip-accent tooltip-bottom font-bold"
                  data-tip="From user authentication/login to managing tiered users."
                >
                  <button
                    class="rounded-lg px-2 md:px-4 py-2 bg-base-100"
                    @click="selectTag"
                  >
                    User Accounts
                  </button>
                </div>
                <div
                  class="tooltip tooltip-accent tooltip-bottom font-bold"
                  data-tip="A form for collecting client information."
                >
                  <button
                    class="rounded-lg px-2 md:px-4 py-2 bg-base-100"
                    @click="selectTag"
                  >
                    Intake Page
                  </button>
                </div>
                <div
                  class="tooltip tooltip-accent tooltip-bottom font-bold"
                  data-tip="A stylised personal presentation."
                >
                  <button
                    class="rounded-lg px-2 md:px-4 py-2 bg-base-100"
                    @click="selectTag"
                  >
                    Portfolio
                  </button>
                </div>
                <div
                  class="tooltip tooltip-accent tooltip-bottom font-bold"
                  data-tip="A page for booking all type of services."
                >
                  <button
                    class="rounded-lg px-2 md:px-4 py-2 bg-base-100"
                    @click="selectTag"
                  >
                    Booking Page
                  </button>
                </div>
                <div
                  class="tooltip tooltip-accent tooltip-bottom font-bold"
                  data-tip="Release your product on IOS and Andriod."
                >
                  <button
                    class="rounded-lg px-2 md:px-4 py-2 bg-base-100"
                    @click="selectTag"
                  >
                    Mobile App
                  </button>
                </div>
              </div>
            </div>
            <!-- Project Description -->
            <div
              @click="changeAstronaut(4)"
              class="max-md:mx-2 flex flex-col gap-4 border-2 border-violet-500 rounded-xl p-8 h-min flex-grow"
            >
              <div class="pb-4">
                <h2 class="font-bold text-4xl uppercase text-violet-500">
                  Project Description
                </h2>
                <h3 class="text-white text-lg pt-2">
                  Describe the project you want to build. What do you want your
                  project to do?
                </h3>
              </div>
              <textarea
                v-model="user_input.project_description"
                class="textarea h-full"
                placeholder="Blog of my trip to Pluto with large high resolution images and videos..."
              ></textarea>
            </div>
          </div>
          <div class="flex flex-col col-span-2 lg:col-span-1 gap-8">
            <!-- About you -->
            <div
              class="max-md:mx-2 flex flex-col gap-4 border-2 border-purple-500 rounded-xl p-8 flex-grow justify-center"
            >
              <h2 class="font-bold text-4xl uppercase text-purple-500 pb-4">
                About You
              </h2>
              <div class="mx-auto form-control w-full lg:max-w-xs">
                <select
                  class="select select-bordered rounded-lg"
                  v-model="user_input.who_are_you"
                  @click="changeAstronaut(3)"
                >
                  <option value="default" disabled selected>
                    Who are you?
                  </option>
                  <option value="individual">Individual</option>
                  <option value="small business">Small Business</option>
                  <option value="large business">Bigger Business</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="Business Name"
                class="input w-full lg:max-w-xs mx-auto"
                v-model="user_input.business_name"
                @click="changeAstronaut(3)"
              />
              <input
                type="text"
                placeholder="Full Name"
                class="input w-full lg:max-w-xs mx-auto"
                v-model="user_input.full_name"
                @click="changeAstronaut(3)"
              />
              <input
                type="text"
                placeholder="Email Address"
                class="input w-full lg:max-w-xs mx-auto"
                v-model="user_input.email"
                @click="changeAstronaut(3)"
              />
              <input
                type="text"
                placeholder="Phone Number"
                class="input w-full lg:max-w-xs mx-auto"
                v-model="user_input.phone_num"
                @click="changeAstronaut(3)"
              />
            </div>
            <!-- Submit -->
            <button
              @click="submitData"
              v-if="!submitted"
              class="max-md:mx-2 mb-8 lg:mb-0 flex flex-col gap-4 bg-gradient-to-r from-purple-500 bg-pink-500 hover:from-pink-500 hover:to-red-500 hover:bg-gradient-to-r transition-colors duration-200 rounded-xl p-8"
            >
              <h2
                class="font-bold text-4xl uppercase text-black text-center w-full"
              >
                Submit
              </h2>
            </button>
            <button
              v-if="submitted"
              class="max-md:mx-2 mb-8 lg:mb-0 flex flex-col gap-4 bg-gradient-to-r from-purple-500 bg-pink-500 hover:from-pink-500 hover:to-red-500 hover:bg-gradient-to-r transition-colors duration-200 rounded-xl p-8"
            >
              <h2
                class="font-bold text-4xl uppercase text-black text-center w-full"
              >
                Submitted
              </h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// image assets
import astronaut1 from "../assets/start_your_project/astronaut1.png";
import astronaut2 from "../assets/start_your_project/astronaut2.png";
import astronaut3 from "../assets/start_your_project/astronaut3.png";
import astronaut4 from "../assets/start_your_project/astronaut4.png";
import astronaut5 from "../assets/start_your_project/astronaut5.png";

// supabase
// import { createClient } from '@supabase/supabase-js';

// uuid
import { v4 as uuidv4 } from "uuid";

export default {
  props: {},
  async setup() {
    useHead({
      title: "Epoch | Start Your Project",
      meta: [{ name: "description", content: "start your project" }],
    });

    // Documentation of using supabase in nuxt
    // Do not delete:

    // Using Supabase way 1:
    // const { data, error } = await useFetch('/api/getSupabase');
    // console.log(data);
    // console.log(error);

    // Using Supabase way 2:
    // const config = useRuntimeConfig();
    // const supabase = createClient(config.public.url, config.public.key);
    // let { data: clients, error } = await supabase
    //     .from('clients')
    //     .select('*');
    // console.log(clients);

    // Using Supabase way 3
    // const client = useSupabaseClient()
    // const { data: clients } = await useAsyncData('images', async () => client.from('clients').select('*').order('created_at'),  { transform: result => result.data });

    // console.log(clients);
  },
  data() {
    return {
      who_are_you_description: "An astronaut.",
      tag_description: "From the depth of black hole to Earth.",
      user_input: {
        who_are_you: "default",
        business_name: "",
        full_name: "",
        email: "",
        phone_num: "",
        landing_page: false,
        online_store: false,
        management_page: false,
        internal_software: false,
        user_account: false,
        intake_page: false,
        portfolio: false,
        booking_page: false,
        mobile_app: false,
        project_description: "",
      },
      astronauts: [astronaut1, astronaut2, astronaut3, astronaut4, astronaut5],
      astronautSrc: astronaut1,
      submitted: false,
    };
  },
  methods: {
    // description for who are you
    showDescription(event) {
      if (event.target.value === "default") {
        this.who_are_you_description = "An astronaut.";
      } else if (event.target.value === "individual") {
        this.who_are_you_description = "A strong and independent person.";
      } else if (event.target.value === "small business") {
        this.who_are_you_description =
          "A business with less than 25 employees.";
      } else if (event.target.value === "large business") {
        this.who_are_you_description =
          "A business with more than 25 employees and incorporated.";
      }
    },

    // tag description
    getTagDescription(event) {
      // change tag description
      if (event.target.innerText === "Management Page") {
        this.tag_description =
          "Remotely manage product availability, see sales data, process and see orders, get client information.";
      } else if (event.target.innerText === "Internal Software") {
        this.tag_description =
          "Webpages and server software for employees only, with an advanced range of possible features.";
      } else if (event.target.innerText === "Intake Page") {
        this.tag_description =
          "Advanced contact page for gathering more information, preventing long email exchanges.";
      } else {
        this.tag_description = "";
      }
    },

    // when a tag is selected
    selectTag(event) {
      // change tag color
      if (event.target.classList.contains("selectedTag")) {
        event.target.classList.remove("selectedTag");
      } else {
        event.target.classList.add("selectedTag");
      }

      // update user input
      if (event.target.innerText === "LANDING PAGE") {
        this.user_input.landing_page = !this.user_input.landing_page;
      } else if (event.target.innerText === "ONLINE STORE") {
        this.user_input.online_store = !this.user_input.online_store;
      } else if (event.target.innerText === "MANAGEMENT PAGE") {
        this.user_input.management_page = !this.user_input.management_page;
      } else if (event.target.innerText === "INTERNAL SOFTWARE") {
        this.user_input.internal_software = !this.user_input.internal_software;
      } else if (event.target.innerText === "USER ACCOUNTS") {
        this.user_input.user_account = !this.user_input.user_account;
      } else if (event.target.innerText === "INTAKE PAGE") {
        this.user_input.intake_page = !this.user_input.intake_page;
      } else if (event.target.innerText === "PORTFOLIO") {
        this.user_input.portfolio = !this.user_input.portfolio;
      } else if (event.target.innerText === "BOOKING PAGE") {
        this.user_input.booking_page = !this.user_input.booking_page;
      } else if (event.target.innerText === "MOBILE APP") {
        this.user_input.mobile_app = !this.user_input.mobile_app;
      }
    },

    // astheatics; change the astronaut image
    changeAstronaut(num) {
      this.astronautSrc = this.astronauts[num];
    },

    // submit data when submit is clicked
    async submitData() {
      const supabase = useSupabaseClient();

      let id = uuidv4();

      const { error: clientError } = await supabase.from("clients").insert({
        id: id,
        type: this.user_input.who_are_you,
        phone: this.user_input.phone_num,
        email: this.user_input.email,
        business_name: this.user_input.business_name,
        name: this.user_input.full_name,
      });

      let project_title;
      if (this.user_input.who_are_you === "individual") {
        project_title = this.user_input.full_name;
      } else {
        project_title = this.user_input.business_name;
      }

      let project_breadth = {
        landing_page: this.user_input.landing_page,
        online_store: this.user_input.online_store,
        management_page: this.user_input.management_page,
        internal_software: this.user_input.internal_software,
        user_account: this.user_input.user_account,
        intake_page: this.user_input.intake_page,
        portfolio: this.user_input.portfolio,
        booking_page: this.user_input.booking_page,
      };

      const { error: projectError } = await supabase.from("projects").insert({
        client: id,
        status: "startYourProject form submitted",
        project_title: project_title,
        project_breadth: project_breadth,
        project_description: this.user_input.project_description,
      });

      this.submitted = true;
      setTimeout(() => {
        navigateTo("/start-submission");
      }, 1000);
    },
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
/* **************************Astronaut Section************************* */
/* ******************************************************************** */
.start_title {
  /* position */
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vw;
  /* margin-bottom: 3vw; */
  width: max-content;

  /* font */
  font-family: KronaOne;
  font-size: 5vw;
  color: white;
}

/* for mobile */
@media screen and (max-width: 740px) {
  .start_title {
    /* position */
    margin-left: auto;
    margin-right: auto;
    margin-top: 25vw;
    margin-bottom: 3vw;
    width: max-content;

    /* font */
    font-family: KronaOne;
    font-size: 8vw;
    color: white;

    /* shape */
    display: block;
  }
}

/* ******************************************************************** */
/* **************************Astronaut Section************************* */
/* ******************************************************************** */

.astronaut {
  /* shape */
  width: 70%;

  /* interaction */
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-select: none;

  /* animation */
  animation: appear forwards 4s, floating 3s infinite;
}

@keyframes appear {
  0% {
    opacity: 0;
    display: none;
  }
  50% {
    opacity: 0;
    display: none;
  }
  100% {
    opacity: 1;
    display: block;
  }
}

@keyframes floating {
  0% {
    transform: translateY(0.5vw);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0.5vw);
  }
}

.lg_start_title {
  /* inner shape */
  width: min-content;
  text-align: center;

  /* font */
  color: white;
  font-family: KronaOne;
  font-size: min(4vw, 60px);

  /* animation */
  animation: disappear forwards 2s;

  /* display: block; */
}

@keyframes disappear {
  0% {
    opacity: 1;
    display: block;
  }
  50% {
    opacity: 1;
    display: block;
  }
  100% {
    opacity: 0;
    display: none;
  }
}

/* ******************************************************************** */
/* ***********************************Tags***************************** */
/* ******************************************************************** */

.selectedTag {
  background-color: var(--dandelion-yellow);
  color: var(--onyx-black);
  transition: background-color 0.5s, color 0.5s;
}
</style>
