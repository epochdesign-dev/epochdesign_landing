<template>
    <div class="main">
        <div class="canvas">
            <SubpageTitle title="Web Design" subtitle="We pride ourselves on designing sites with a high level of design quality without compromising on user experience. We craft exceptional results that will make other brands want to model themselves after you." />
            <img src="../../assets/services_demos.png" alt="services-demos" class="services-demos">

            <div class="content">
                <div class="content-title">Aesthetically pleasing websites that evoke that wow reaction</div>
                <div class="content-description">A brand's website, no matter big or small, is an opportunity for them to
                    stand out. So why settle for something boring and unoriginal? At Epoch, our clients benefit from
                    beautifully designed websites that are carefully crafted and custom-made.Our main goal is for our
                    client's site is to resonate with its customers and create a smooth user experience. As your dedicated
                    web design agency, you can depend on our highly educated and experienced team to create a digital
                    experience that evokes that wow factor.</div>
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


            <div class="why-epoch-grid">
                <div class="sub-title why-epoch-grid-left">WHY EPOCH</div>
                <img src="../../assets/Q-line.png" alt="Q" class="why-epoch-grid-mid ">
                <div class="why-epoch-grid-right">
                    <div class="why-title">
                        Originality
                    </div>
                    <div class="why-description">
                        Your new website will be hand-crafted and unique to your brand and its target audience. We pride
                        ourselves in designing one-of-a-kind websites.
                    </div>
                    <div class="why-title">
                        Creativity
                    </div>
                    <div class="why-description">
                        Each design we create combines our creativity and deep understanding of your brand's user needs to
                        deliver a meaningful digital experience.
                    </div>
                    <div class="why-title">
                        Impactful
                    </div>
                    <div class="why-description">
                        Your website’s the centrepiece of your visual identity. We make every click count through creative
                        design and UX that converts.
                    </div>
                </div>
            </div>

            <div class="featured-projects">
                <div class="sub-title">FEATURED PROJECTS</div>
                <div class="scroll-swiper">
                    <ScrollSwiper/>
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
    title: 'Epoch Design | Web Design',
    meta: [
        { name: 'description', content: 'web design' }
    ]
})
</script>

<style scoped>
/* Fonts */
@font-face {
    font-family: "Helvetica-Neue";
    src: local("Helvetica-Neue"),
        url("../assets/Helvetica.ttf") format("truetype");
}

/* Color Variables */
.main {
    --onyx-black: #121212;
    --dandelion-yellow: #E8E92B;
    --light-periwinkle-purple: #C0C7FF;
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

.services-demos {
    /* position */
    position: absolute;
    top: 130vh;
    left: 50%;
    transform: translate(-50%, -50%);

    max-width: 1920px;
}

/*The typeface might be a different one ?? the font size is not match the design*/
.content {
    /* position */
    position: absolute;
    top: 220vh;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;

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
    font-size: 35pt;
    font-weight: bold;
    letter-spacing: -1.5%;

    padding-bottom: 50px;
}

.content-description {
    /* font */
    font-size: 12pt;
    font-weight: 300;
    letter-spacing: 0.5%;
    line-height: 2;

    padding-bottom: 50px;
}

.skill-sets {

    width: 50%;

    /* inner shape */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 50px;
}

.skill-row {
    /* Set the minimum width of the row to fit its contents */
    min-width: 450px;
}

.skill-tag {
    /* font */
    font-size: 14pt;

    /* inner shape */
    border-radius: 5rem;
    border: solid 1px var(--dandelion-yellow);
    padding: 0.5rem 1.5rem;

    display: inline-block;
    width: fit-content;

    margin: 0.3rem;
}

.sub-title {
    /* font */
    font-family: "Helvetica-Neue";
    font-size: 70pt;
    color: white;
}

.why-title {
    /* font */
    font-size: 38pt;
    font-weight: bold;
    letter-spacing: -1.5%;
    font-family: "Helvetica-Neue";
    color: var(--dandelion-yellow);


    padding-bottom: 2rem;
}

.why-description {
    /* font */
    font-size: 25pt;
    font-weight: 300;
    letter-spacing: 5%;
    line-height: 1.38;
    font-family: "Helvetica-Neue";
    color: white;

    padding-bottom: 2rem;
}

.why-epoch-grid {
    
    /* position */
    position: absolute;
    top: 300vh;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 1920px;

    /* grid */
    display: grid;
    grid-template-columns: 1fr auto 1fr; /* Define three columns with equal width */
    grid-gap: 40px; /* Add a gap between grid items */

    /* inner shape */
    padding-bottom: 50px;
}

.sub-title {
    /* Optionally, you can add styles for the sub-title if needed */
}

.why-epoch-grid-left {
    grid-column: 1; /* Place the element in the first column (left) */
    text-align: end;
}

.why-epoch-grid-mid {
    grid-column: 2; /* Place the image in the second column (middle) */
}

.why-epoch-grid-right {
    padding-top: 3rem;
    grid-column: 3; /* Place the element in the third column (right) */
    text-align: start;
}


.featured-projects {
    /* position */
    position: absolute;
    top: 400vh;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 1920px;
    height: 100%;
    
}

.contact {
    /* position */
    position: absolute;
    top: 460vh;
    left: 50%;
    transform: translate(-50%, -50%);
}
    

.footer{
    /* position */
    position: absolute;
    top: 500vh;
}

</style>