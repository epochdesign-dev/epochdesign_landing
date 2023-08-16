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
                                <option value="small business">Small Business</option> 
                                <option value="large business">Large Business</option> 
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
                                User Account
                            </div>
                            <div class="tag" @mouseover="getTagDescription" @click="selectTag">
                                Intake Page
                            </div>
                            <div class="tag" @mouseover="getTagDescription" @click="selectTag">
                                Portfolio
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
                        </div>
                        <button class="submit_button" @click = "submitData" v-if="!submitted">
                            Submit
                        </button>
                        <button class="submit_button" v-if="submitted">
                            Done!
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
    import { v4 as uuidv4 } from 'uuid';
    
    export default {
        props: {
        },
        async setup(){
            useHead({
                title: 'Epoch | Start Your Project',
                meta: [
                    {name: 'description', content: 'start your project'}
                ]
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
                    project_description: "",
                },
                astronauts: [astronaut1, astronaut2, astronaut3, astronaut4, astronaut5],
                astronautSrc: astronaut1,
                submitted: false,
            }
        },
        methods: {
            // description for who are you
            showDescription(event){
                if(event.target.value === "default"){
                    this.who_are_you_description = "An astronaut.";
                }
                else if(event.target.value === "individual"){
                    this.who_are_you_description = "A strong and independent person.";
                }
                else if(event.target.value === "small business"){
                    this.who_are_you_description = "A business with less than 25 employees.";
                }
                else if(event.target.value === "large business"){
                    this.who_are_you_description = "A business with more than 25 employees and incorporated.";
                }
            },

            // tag description
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

            // when a tag is selected
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
                else if(event.target.innerText === "User Account"){
                    this.user_input.user_account = !this.user_input.user_account;
                }
                else if(event.target.innerText === "Intake Page"){
                    this.user_input.intake_page = !this.user_input.intake_page;
                }
                else if(event.target.innerText === "Portfolio"){
                    this.user_input.portfolio = !this.user_input.portfolio;
                }
            },

            // astheatics; change the astronaut image
            changeAstronaut(num){
                this.astronautSrc = this.astronauts[num];
            },

            // submit data when submit is clicked
            async submitData(){
                const supabase = useSupabaseClient();

                let id = uuidv4();
                
                const { error: clientError } = await supabase
                    .from('clients')
                    .insert({id: id,
                        type: this.user_input.who_are_you, 
                        phone: this.user_input.phone_num, 
                        email: this.user_input.email, 
                        business_name: this.user_input.business_name, 
                        name: this.user_input.full_name});

                let project_title;
                if(this.user_input.who_are_you === "individual"){
                    project_title = this.user_input.full_name;
                }
                else{
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
                };

                const { error:projectError } = await supabase
                    .from('projects')
                    .insert({ client: id, 
                        status: 'startYourProject form submitted', 
                        project_title: project_title, 
                        project_breadth: project_breadth, 
                        project_description: this.user_input.project_description});

                this.submitted = true;
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
    width: 90vw;
    height: 40.5vw;
    /* border: solid var(--light-periwinkle-purple) 4px; */
    border-radius: 2vw;

    /* font */
    font-family: Helvetica-Neue-LT-Pro-Medium;
}

@media screen and (max-width: 740px){
    .form{
        /* position */
        position: absolute;
        top: 10vw;
        left: 50%;
        transform: translateX(-50%);

        /* inner shape */
        display: flex;

        /* shape */
        width: 90vw;
        height: 40.5vw;
        border-radius: 2vw;

        /* font */
        font-family: Helvetica-Neue-LT-Pro-Medium;
    }
}

.form_left{
    /* shape */
    height: 100%;
    width: 33%;
    /* border-right: solid var(--light-periwinkle-purple) 4px; */

    /* inner shape */
    display: flex;
    align-items: center;
}

@media screen and (max-width: 1024px){
    .form_left{
        display: none;
    }
}

.astronaut{
    /* shape */
    clip-path: inset(0 0 20px 0);

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
    /* grid-template-columns: [line1] 1fr [line2] 1fr [end]; */
    display: flex;
    gap: 5%;
    /* display: grid; */
}

@media screen and (max-width: 1024px){
    .form_right{
        width: 100%;
    }
}

@media screen and (max-width: 740px){
    .form_right{
        width: 100%;
        flex-direction: column;
        height: 350vw;
    }
}

.form_col1{
    /* position */
    /* grid-column: line1 / line2; */

    /* shape */
    flex: 1;
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
    font-size: clamp(1rem, 1.2vw, 4rem);

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
    font-size: clamp(1rem, 0.7vw, 3rem);

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
    font-size: clamp(1rem, 0.7vw, 3rem);
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
    flex: 1;
    max-height: 90vw;
    overflow: hidden;

    /* inner shape */
    display: grid;
    grid-template-rows: [line1] 4.5vw [line2] 1fr [line3] 4.5vw [line4] 1fr [line5] 4.5vw [end];;
    row-gap: 3%;
}

@media screen and (max-width: 740px){
    .form_col2{
        /* position */
        grid-column: line2 / end;

        /* shape */
        flex: 1;
        max-height: 250vw;
        overflow: hidden;

        /* inner shape */
        display: grid;
        grid-template-rows: [line1] 13vw [line2] 1fr [line3] 13vw [line4] 1fr [line5] 12vw [end];;
        row-gap: 3%;
    }
}

.project_breadth{
    /* font */
    color: white;
    font-size: clamp(1rem, 1.2vw, 4rem);

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
    margin-top: 0.4vw;
}

.project_breadth_tags{
    /* position */
    grid-row: line2/line3;
    
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
    font-size: clamp(1rem, 0.7vw, 3rem);

    /* interaction */
    cursor: pointer;

    /* animation */
    transition: color 0.5s;
}

@media screen and (max-width: 740px){
    .tag{
        /* shape */
        border: solid white 1px;
        border-radius: 5vw;
        width: max-content;
        height: min-content;

        /* inner shape */
        padding-left: 1vw;
        padding-right: 1vw;

        /* position */
        margin-bottom: 2vw;
        margin-right: 2vw;
        position: relative;
        display: inline-block;

        /* font */
        font-size: clamp(1rem, 0.7vw, 3rem);

        /* interaction */
        cursor: pointer;

        /* animation */
        transition: color 0.5s;
    }
}

.selectedTag{
    color: var(--dandelion-yellow);
    transition: color 0.5s;
}

.tag_description{
    /* shape */
    display: inline-block;
    border-top: solid var(--light-periwinkle-purple) 1px;
    width: 100%;

    /* inside shape */
    padding-top: 0.5vw;

    /* font */
    color: white;
    font-size: clamp(1rem, 0.7vw, 3rem);
}

.project_description{
    /* font */
    color: white;
    font-size: clamp(1rem, 1.2vw, 4rem);

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
    grid-row: line3/line4;
}

.project_description_textbox{
    /* inner shape */
    display: flex;
    flex-direction:column;
    
    /* position */
    grid-row: line4/line5;

    /* shape */
    height: 90%;
}

.project_description_textbox textarea{
    /* shape */
    border-left: solid var(--light-periwinkle-purple) 1px;
    width: 100%;
    height: 100%;
        
    /* inner shape */
    background-color: var(--onyx-black);
    padding: 0.5vw;

    /* font */
    color: white;
    font-size: clamp(1rem, 0.7vw, 3rem);
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
    margin-bottom: 0.5vw;

    /* inner shape */
    background-color: var(--light-periwinkle-purple);

    /* font */
    color: var(--onyx-black);
    font-size: clamp(1rem, 1.2vw, 3rem);
}
</style>