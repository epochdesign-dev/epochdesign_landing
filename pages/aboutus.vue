<template>
    <div class="main">
        <div class="canvas">
            <!-- section 1: title -->
            <section>
                <SubpageTitle title="About Us" subtitle="A full-service design agency comprised of diverse minds who have a passion for creating digital experiences."/>
            </section>

            <!-- section 2: member cards -->
            <section>
                <MemberCard @click="card1Description" class="card1" id="card1" img_index="0"/>
                <MemberCard @click="card2Description" class="card2" id="card2" img_index="1"/>
                <MemberCard @click="card3Description" class="card3" id="card3" img_index="2"/>
                <MemberCard @click="card4Description" class="card4" id="card4" img_index="3"/>

                <div class="member_description">
                    <div class="member_name">
                        {{ member_name }}
                    </div>
                    <div class="member_pos">
                        {{member_position}}
                    </div>
                    <div class="member_brief">
                        {{ member_brief }}    
                    </div>
                </div>
            </section>

            <!-- section 3: our value -->
            <section>
                <!-- title -->
                <div class="oval oval1_pos"></div>
                <div class="oval oval2_pos"></div>
                <div class="oval oval3_pos"></div>
                <div class="our_value_title">Our Value</div>

                <!-- value descriptions -->
                <div class="values">
                    <!-- evolve -->
                    <div class="value1 value">
                        <img class="value1_title" src="../assets/values_svg/evolve.svg" alt="evolve">
                        <div class="value1_description value_description">
                            At Epoch, we believe in constant growth and evolution. We stay at the forefront of design trends, technologies, and strategies to ensure our clients receive cutting-edge solutions that keep their businesses ahead of the competition.
                        </div>
                    </div>

                    <!-- purpose -->
                    <div class="value2 value">
                        <img class="value2_title" src="../assets/values_svg/purpose.svg" alt="purpose">
                        <div class="value2_description value_description">
                            Every design we create at Epoch serves a clear purpose. Whether it's enhancing brand identity, driving conversions, or improving user experiences, our designs are always guided by the specific goals and visions of our clients.
                        </div>
                    </div>

                    <!-- outsanding -->
                    <div class="value3 value">
                        <img class="value3_title" src="../assets/values_svg/outstanding.svg" alt="outstanding">
                        <div class="value3_description value_description">
                            Epoch is committed to delivering outstanding results. Our designs stand out for their creativity, attention to detail, and ability to achieve measurable success, leaving a lasting impact on our clients and their target audience.                        </div>
                    </div>

                    <!-- creativity -->
                    <div class="value4 value">
                        <img class="value4_title" src="../assets/values_svg/creativity.svg" alt="creativity">
                        <div class="value4_description value_description">
                            Creativity is the heart of our agency. We pride ourselves on unleashing innovative ideas and crafting unique designs that tell captivating stories, sparking emotions, and effectively communicating our clients' brand messages.                        </div>
                    </div>

                    <!-- human centric -->
                    <div class="value5 value">
                        <img class="value5_title" src="../assets/values_svg/human-centric.svg" alt="human-centric">
                        <div class="value5_description value_description">
                            People are at the core of what we do. Epoch's human-centric approach places the needs and preferences of our clients and their audience at the forefront, resulting in designs that resonate, connect, and leave a positive, lasting impression.                        </div>
                    </div>
                </div>
            </section>

            <!--section 4: footer-->
            <section>
                <footer class="footer">
                </footer>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        img_index: String,
    },
    setup() {
        // page head
        useHead({
            title: 'Epoch Design | About Us',
            meta: [
                {name: 'description', content: 'about us'}
            ]
        })
    },
    data() {
        return { 
            member_name: "Finn Williams",
            member_position: "Team Lead",
            member_brief: "Lorem ipsum dolor sit amet consectetur. Et velit imperdiet consequat sed sem vitae ipsum eu augue. Dignissim metus est neque consequat non odio et. Lorem nulla nec mi et sapien adipiscing volutpat donec. Sit urna nunc eget ac pellentesque sit egestas.",
        }
    },
    methods: {
        card1Description(){
            this.member_name = "Finn Williams";
            this.member_position = "Team Lead";
            this.member_brief = "Lorem ipsum dolor sit amet consectetur. Et velit imperdiet consequat sed sem vitae ipsum eu augue. Dignissim metus est neque consequat non odio et. Lorem nulla nec mi et sapien adipiscing volutpat donec. Sit urna nunc eget ac pellentesque sit egestas.";
        },

        card2Description(){
            this.member_name = "Jinny Byeon";
            this.member_position = "Designer";
            this.member_brief = "Lorem ipsum dolor sit amet consectetur. Et velit imperdiet consequat sed sem vitae ipsum eu augue. Dignissim metus est neque consequat non odio et. Lorem nulla nec mi et sapien adipiscing volutpat donec. Sit urna nunc eget ac pellentesque sit egestas.";
        },

        card3Description(){
            this.member_name = "Robby Chen";
            this.member_position = "Web Developer";
            this.member_brief = "Lorem ipsum dolor sit amet consectetur. Et velit imperdiet consequat sed sem vitae ipsum eu augue. Dignissim metus est neque consequat non odio et. Lorem nulla nec mi et sapien adipiscing volutpat donec. Sit urna nunc eget ac pellentesque sit egestas.";
        },

        card4Description(){
            this.member_name = "Daniel Liu";
            this.member_position = "Full Stack Developer";
            this.member_brief = "Lorem ipsum dolor sit amet consectetur. Et velit imperdiet consequat sed sem vitae ipsum eu augue. Dignissim metus est neque consequat non odio et. Lorem nulla nec mi et sapien adipiscing volutpat donec. Sit urna nunc eget ac pellentesque sit egestas.";
        },
    }
}
</script>

<style scoped>
/* ******************************************************************** */
/* ****************************General Classes************************* */
/* ******************************************************************** */
/* Fonts */
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

    /* font 16pt in 1920 screen*/
    font-size: 1.14583vw; 
}

/* Two ways of positioning elements in the center of parent element */
.position_center_absolute{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.position_center_flex{
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
/* ****************************Member Cards**************************** */
/* ******************************************************************** */
.card1{
    /* position */
    position: absolute;
    left: 10vw;
    top: 47vw;

    /* shape */
    transform: rotate(-30deg);

    /* interaction */
    cursor: pointer;
}

.card2{
    /* position */
    position: absolute;
    left: 30vw;
    top: 39vw;

    /* shape */
    transform: rotate(-10deg);

    /* interaction */
    cursor: pointer;
}

.card3{
    /* position */
    position: absolute;
    left: 50vw;
    top: 39vw;

    /* shape */
    transform: rotate(10deg);

    /* interaction */
    cursor: pointer;
}
.card4{
    /* position */
    position: absolute;
    left: 70vw;
    top: 47vw;

    /* shape */
    transform: rotateZ(30deg);

    /* interaction */
    cursor: pointer;
}

.member_description{
    /* inner shape */
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 0.416666vw;

    /* position */
    position: absolute;
    top: 84vw;
    left: 50%;
    transform: translateX(-50%);

    /* shape */
    width: 37.55vw;
}

.member_name{
    /* font */
    color: white;
    font-family: Helvetica-Neue-LT-Pro-Medium;
    font-size: 3em;
    font-style: normal;
    font-weight: 500;

}

.member_pos{
    /* font */
    color: white;
    font-family: Helvetica-Neue-LT-Pro-Medium;
    font-size: 1.5em;
    font-style: normal;
    font-weight: 500;
    line-height: 1.75em; /* 164.286% */
    letter-spacing: 0.14px;
}

.member_brief{
    /* shape */
    width: 100%;

    /* font */
    color: white;
    text-align: center;
    font-family: Helvetica-Neue-LT-Pro;
    font-size: 0.9em;
    font-style: normal;
    font-weight: 500;
    line-height: 2.675em; /* 255.556% */
    letter-spacing: 0.09px;
}



/* ******************************************************************** */
/* ****************************Our Value******************************* */
/* ******************************************************************** */
.oval{
    /* position */
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    /* shape */
    width: 64.58vw;
    height: 9.8958vw;
    border-radius: 50%;
    border: 1px solid rgba(230, 232, 41, 0.60);
}

.oval1_pos{
    /* position */
    top: 110.8vw;
}

.oval2_pos{
    /* position */
    top: 113.51vw;
}

.oval3_pos{
    /* position */
    top: 116.22vw;
}

.our_value_title{
    /* position */
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 110.8vw;

    /* shape */
    width: 47.66vw;
    height: 10.78vw;

    /* inner shape */
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* font */
    color: var(--dandelion-yellow);
    text-align: center;
    font-family: Helvetica-Neue-LT-Pro;
    font-size: 4em;
    font-style: normal;
    font-weight: 500;
}

.values{
    /* inner shape */
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5.1042vw;

    /* shape */
    width: 81.04vw;

    /* position */
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 130.54vw;
}

.value{
    /* shape */
    width: 100%;

    /* inner shape */
    display: flex;
    align-items: center;
}

.value_description{
    /* font */
    color: white;
    font-family: Helvetica-Neue-LT-Pro-Medium;
    font-size: 1em;
    font-style: normal;
    font-weight: 500;
    line-height: 2em;
}

.value1{
    /* inner shape */
    gap: 2.396vw;
}

.value1_title{
    /* shape */
    width: 14.32vw;
    height: 4.826666vw;
}

.value1_description{
    /* shape */
    width: 64.3229vw;
}

.value2{
    /* inner shape */
    gap: 3.229vw;
}

.value2_title{
    /* shape */
    width: 17.697vw;
    height: 5.433vw;
}

.value2_description{
    /* shape */
    width: 60.1vw;
}
.value3{
    /* inner shape */
    gap: 2.552vw;
}

.value3_title{
    /* shape */
    width: 25.66vw;
    height: 5.627vw;
}

.value3_description{
    /* shape */
    width: 52.81vw;
}
.value4{
    /* inner shape */
    gap: 7.604vw;
}

.value4_title{
    /* shape */
    width: 20.62vw;
    height: 5.57vw;
}

.value4_description{
    /* shape */
    width: 52.81vw;
}
.value5{
    /* inner shape */
    gap: 2.24vw;
}

.value5_title{
    /* shape */
    width: 30.69vw;
    height: 4.827vw;
}

.value5_description{
    /* shape */
    width: 48.125vw;
}



/* ******************************************************************** */
/* ****************************Footer********************************** */
/* ******************************************************************** */
.footer{
    /* position */
    position: absolute;
    top: 198.72vw;

    /* shape */
    width: 100vw;
    height: 28.89vh;
    border-top: solid 3px white;
}
</style>