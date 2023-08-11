<template>
    <div class="main">
        <div class="canvas">
            <div class="form">
                <!-- astronaut section -->
                <div class="form_left">
                    <img class="astronaut" :src="astronautSrc" alt="astronaut">
                </div>

                <!-- form -->
                <div class="form_right">
                    <!-- form col1: client info -->
                    <div class="form_col1">
                        <div class="who_are_you">
                            <select @change="showDescription($event)" v-model="user_input.who_are_you" class="who_are_you_selection" @click="changeAstronaut(3)"> 
                                <option value="default">Who Are You?</option> 
                                <option value="individual">Individual</option> 
                                <option value="small_business">Small Business</option> 
                                <option value="large_business">Large Business</option> 
                            </select>
                        </div>

                        <div class="who_are_you_description">
                            {{who_are_you_description}}
                        </div>

                        <div class="form_input_container">
                            <input type="text" class="form_input" placeholder="Business Name" v-model="user_input.business_name" @click="changeAstronaut(4)">
                        </div>

                        <div class="form_input_container">
                            <input type="text" class="form_input" placeholder="Full Name" v-model="user_input.full_name" @click="changeAstronaut(4)">
                        </div>

                        <div class="form_input_container">
                            <input type="text" class="form_input" placeholder="Email" v-model="user_input.email" @click="changeAstronaut(4)">
                        </div>

                        <div class="form_input_container">
                            <input type="text" class="form_input" placeholder="Phone Number" v-model="user_input.phone_num" @click="changeAstronaut(4)">
                        </div>
                    </div>

                    <!-- form col2: project info -->
                    <div class="form_col2">
                        <div class="project_breadth">
                            Project Breadth
                        </div>
                        <div class="project_breadth_tags" @click="changeAstronaut(2)">
                            <div class="tag" @mouseover="getTagDescription" @click="selectTag">
                                Landing Page
                            </div>
                            <div class="tag" @mouseover="getTagDescription" @click="selectTag">
                                Online Store
                            </div>
                            <div class="tag" @mouseover="getTagDescription" @click="selectTag">
                                Management Page
                            </div>
                            <div class="tag" @mouseover="getTagDescription" @click="selectTag">
                                Internal Software
                            </div>
                            <div class="tag" @mouseover="getTagDescription" @click="selectTag">
                                User Profiles
                            </div>
                            <div class="tag" @mouseover="getTagDescription" @click="selectTag">
                                Intake Page
                            </div>
                            <div class="tag_description">
                                {{ tag_description }}
                            </div>
                        </div>
                        <div class="project_description">
                            Project Description
                        </div>
                        <div class="project_description_textbox" @click="changeAstronaut(1)">
                            <textarea name="project_description_input" id="project_description_input" 
                            placeholder="A website about my astronaut experience in the deep space!"
                            v-model="user_input.project_description"></textarea>
                            <button class="submit_button">
                                Submit
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <!-- <SubpageTitle title="Contact" subtitle="If you'd like to learn more about<br>how we can help evolve your brand, get in touch."/> -->
            
            <!-- <ContactUsForm class="contact_form"/> -->
        </div>
    </div>
</template>

<script>
    import astronaut1 from "../assets/start_your_project/astronaut1.png";
    import astronaut2 from "../assets/start_your_project/astronaut2.png";
    import astronaut3 from "../assets/start_your_project/astronaut3.png";
    import astronaut4 from "../assets/start_your_project/astronaut4.png";
    import astronaut5 from "../assets/start_your_project/astronaut5.png";
    
    export default {
        props: {
        },
        setup(){
            useHead({
                title: 'Epoch | Start Your Project',
                meta: [
                    {name: 'description', content: 'start your project'}
                ]
            })
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
                    user_profiles: false,
                    intake_page: false,
                    project_description: "",
                },
                astronauts: [astronaut1, astronaut2, astronaut3, astronaut4, astronaut5],
                astronautSrc: astronaut1,
            }
        },
        methods: {
            showDescription(event){
                if(event.target.value === "default"){
                    this.who_are_you_description = "An astronaut.";
                }
                else if(event.target.value === "individual"){
                    this.who_are_you_description = "A strong and independent person.";
                }
                else if(event.target.value === "small_business"){
                    this.who_are_you_description = "A business with less than 25 employees.";
                }
                else if(event.target.value === "large_business"){
                    this.who_are_you_description = "A business with more than 25 employees and incorporated.";
                }
            },
            getTagDescription(event){
                // change tag description
                if(event.target.innerText === "Management Page"){
                    this.tag_description = "Remotely manage product availability, see sales data, process and see orders, get client information.";
                }
                else if(event.target.innerText === "Internal Software"){
                    this.tag_description = "Webpages and server software for employees only, with an advanced range of possible features.";
                }
                else if(event.target.innerText === "Intake Page"){
                    this.tag_description = "Advanced contact page for gathering more information, preventing long email exchanges.";
                }
                else{
                    this.tag_description = "From the depth of black hole to Earth.";
                }
            },
            selectTag(event){
                // change tag color
                if(event.target.classList.contains("selectedTag")){
                    event.target.classList.remove("selectedTag");
                }
                else{
                    event.target.classList.add("selectedTag");
                }

                // update user input
                if(event.target.innerText === "Landing Page"){
                    this.user_input.landing_page = !this.user_input.landing_page;
                }
                else if(event.target.innerText === "Online Store"){
                    this.user_input.online_store = !this.user_input.online_store;
                }
                else if(event.target.innerText === "Management Page"){
                    this.user_input.management_page = !this.user_input.management_page;
                }
                else if(event.target.innerText === "Internal Software"){
                    this.user_input.internal_software = !this.user_input.internal_software;
                }
                else if(event.target.innerText === "User Profiles"){
                    this.user_input.user_profiles = !this.user_input.user_profiles;
                }
                else if(event.target.innerText === "Intake Page"){
                    this.user_input.intake_page = !this.user_input.management_page;
                }
            },
            changeAstronaut(num){
                this.astronautSrc = this.astronauts[num];
            }
        }
    }
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

/* .contact_form{
    position: absolute;
    top: 65vh;
    left: 50%;
    transform: translateX(-50%);
} */



/* ******************************************************************** */
/* *************************Start Project Form************************* */
/* ******************************************************************** */
.form{
    /* position */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    /* inner shape */
    display: flex;

    /* shape */
    width: 72vw;
    height: 40.5vw;
    border: solid var(--light-periwinkle-purple) 4px;
    border-radius: 2vw;

    /* font */
    font-family: Helvetica-Neue-LT-Pro-Medium;
}

.form_left{
    /* shape */
    height: 100%;
    width: 33%;
    border-right: solid var(--light-periwinkle-purple) 4px;

    /* inner shape */
    display: flex;
    align-items: center;
}

.astronaut{
    /* shape */
    clip-path: inset(0 0 10px 0);

    /* interaction */
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-select: none;

    /* animation */
    animation: appear forwards 2s, floating 3s infinite;
}

@keyframes appear{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}

@keyframes floating{
    0%{
        transform: translateY(0.5vw);
    }
    50%{
        transform: translateY(0);
    }
    100%{
        transform: translateY(0.5vw);
    }
}

.form_right{
    /* shape */
    height: 100%;
    width: 67%;
    
    /* inner shape */
    padding: 5vw;
    grid-template-columns: [line1] 1fr [line2] 1fr [end];
    column-gap: 5%;
    display: grid;
}

.form_col1{
    /* position */
    grid-column: line1 / line2;

    /* shape */
    
    max-height: 90vw;
    overflow: hidden;

    /* inner shape */
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    row-gap: 3%;
}

.who_are_you{
    /* position */
    grid-row: 1/ 2;

    /* shape */
    

    /* inner shape */
    display: flex;
    align-items: center;
    justify-content: center;
}

.who_are_you_selection{
    /* inner shape */
    background-color: var(--onyx-black);
    text-align: center;

    /* font */
    color: white;
    font-size: 1.2vw;

    /* shape */
    width: 100%;
    height: 80%;
    border: solid var(--light-periwinkle-purple) 4px;
    border-radius: 0.5vw;

    /* interaction */
    cursor: pointer;
}

.who_are_you_selection:focus {
    /* shape */
    outline: none !important;
    border:4px solid white;
    border-radius: 0.5vw;
}

.who_are_you_description{
    /* position */
    grid-row: 2/ 3;

    /* shape */
    height: 4vw;

    /* font */
    color: white;
    font-size: 0.7vw;

    /* inner shape */
    padding: 0.5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: auto;
}

.form_input_container{
    /* inner shape */
    display: flex;
    align-items: center;
    justify-content: center;

    
    
}

.form_input{
    /* shape */
    width: 100%;
    height: 80%;
    border-left: solid var(--light-periwinkle-purple) 2px;

    /* inner shape */
    background-color: var(--onyx-black);
    padding: 0.5vw;

    /* font */
    color: white;
    font-size: 0.7vw;
}

.form_input:focus{
    outline: none;
}

.form_input::placeholder{
    color: white;
}

.form_col2{
    /* position */
    grid-column: line2 / end;

    /* shape */
    
    max-height: 90vw;
    overflow: hidden;

    /* inner shape */
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    row-gap: 3%;
}

.project_breadth{
    /* font */
    color: white;
    font-size: 1.2vw;

    /* inner shape */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    /* shape */
    border: solid var(--light-periwinkle-purple) 4px;
    border-radius: 0.5vw;
    height: 80%;

    /* position */
    margin-top: 0.5vw;
}

.project_breadth_tags{
    /* position */
    grid-row: 2/4;
    
    /* shape */
    border-left: solid var(--light-periwinkle-purple) 1px;
    height: 95%;

    /* inner shape */
    padding-left: 0.5vw;
    padding-top: 0.5vw;
    color: white;
    overflow: auto;
}

.tag{
    /* shape */
    border: solid white 1px;
    border-radius: 1vw;
    width: max-content;
    height: min-content;

    /* inner shape */
    padding-left: 0.5vw;
    padding-right: 0.5vw;

    /* position */
    margin-bottom: 0.4vw;
    margin-right:0.5vw;
    position: relative;
    display: inline-block;

    /* font */
    font-size: 0.7vw;

    /* interaction */
    cursor: pointer;

    /* animation */
    transition: color 0.5s;
}

.selectedTag{
    color: var(--dandelion-yellow);
    transition: color 0.5s;
}

.tag_description{
    /* shape */
    display: inline-block;
    border-top: solid var(--light-periwinkle-purple) 1px;

    /* inside shape */
    padding-top: 0.5vw;

    /* font */
    color: white;
    font-size: 0.7vw;
}

.project_description{
    /* font */
    color: white;
    font-size: 1.2vw;

    /* inner shape */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    /* shape */
    border: solid var(--light-periwinkle-purple) 4px;
    border-radius: 0.5vw;
    height: 80%;

    /* position */
    margin-top: 0.5vw;
}

.project_description_textbox{
    /* position */
    grid-row: 5/-1;

    /* position */
    margin-top: 0.5vw;

    /* inner shape */
    display: flex;
    flex-direction:column;
}

.project_description_textbox textarea{
    /* shape */
    border-left: solid var(--light-periwinkle-purple) 1px;
    width: 100%;
        
    /* inner shape */
    background-color: var(--onyx-black);
    padding: 0.5vw;

    /* font */
    color: white;
    font-size: 0.7vw;
}

.project_description_textbox textarea::placeholder{
    /* font */
    color: white;
}

.project_description_textbox textarea:focus{
    /* shape */
    outline: none;
}

.submit_button{
    /* shape */
    width: 100%;
    flex: 1;
    border-radius: 0.5vw;

    /* position */
    margin-top: 2vw;

    /* inner shape */
    background-color: var(--light-periwinkle-purple);

    /* font */
    color: var(--onyx-black);
    font-size: 1.2vw;
}
</style>