<template>
    <div class="main">
        <!--navigation bar-->
        <header>
            <nav class="navigation">
                <div class="heading">epoch</div>
                <div class="central-links">
                    <div class="link border-right"><NuxtLink to="/">About Us</NuxtLink></div>
                    <div class="link border-right"><NuxtLink to="/projects">Projects</NuxtLink></div>
                    <div class="link"><NuxtLink to="/">Services</NuxtLink></div>
                </div>
                <div class="contact-button">Contact</div>
            </nav>

        </header>

        <!--slot displays the rest of the page-->
        <div>
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
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
.main{
    --onyx-black: #121212;
    --dandelion-yellow: #E8E92B;
    --light-periwinkle-purple: #C0C7FF;
    /* #FFFFFF (white) */
}

.navigation{
    /* Position */
    position:fixed;

    /* Interaction */
    z-index: 4;

    /* Inner Shape */
    display: grid;
    grid-template-columns: [line1] 8.85% [line2] auto [line3] 25% [line4] auto [line5] 9.47% [end];
    background-image: linear-gradient(var(--onyx-black), transparent);

    /* Shape */
    width: 100%;
    height:10.56%;
}

.heading{
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

}

.central-links{
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

.link{
    /* Shape */
    height: 100%;
    flex: 1;

    /* Inner Shape */
    display: flex;
    justify-content: center;
    align-items: center;
}

.border-right{
    /* Shape */
    border-right-style: solid;
}

.contact-button{
    /* Position */
    grid-column: line5 / end;

    /* Font */
    color: var(--onyx-black);
    font-family: Helvetica-Neue;
    font-size: 0.9vw;

    /* Shape */
    border-radius: 25px;
    height: 37.7%;

    /* Position */
    margin-top: 32px;
    margin-right: 32px;

    /* Inner Shape */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--dandelion-yellow);

    /* Interaction */
    cursor: pointer;
    user-select: none;
}
</style>