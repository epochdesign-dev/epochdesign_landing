<template>
    <div class="card">
        <div class="card_inner">
            <div class="card_logo_section">
                <img class="card_logo" src="../assets/member_logos/daniel_logo.png" alt="">
            </div>
            <div class="card_description">
                <div class="card_name">
                    Daniel<br>Liu
                </div>
                <div class="card_position">
                    Full Stack Developer
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    useHead({
        title: 'Epoch Design | About Us',
        meta: [
            {name: 'description', content: 'about us'}
        ]
    })
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

/* ******************************************************************** */
/* ****************************Cards*********************************** */
/* ******************************************************************** */
.card{
    width: 400px;
    height: 650px;
    border-radius: 20px;
    border: 2px solid white;
    background: var(--background, --onyx-black);
    display: flex;
    align-items: center;
    justify-content: center;
}

.card_inner{
    width: 100%;
    height: 95.38%;
    border-top: 2px solid var(--text, white);
    border-bottom: 2px solid var(--text, white);

    display: flex;
    flex-direction: column;
    align-items: center;
}

.card_logo_section{
    width: 100%;
    min-height: 70%;
    max-height: 70%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.card_logo{
    width: 80%;
}

.card_description{
    margin-top: 2rem;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 68.25%;
    height: 21.13%;
}

.card_name{
    display: flex;
    width: 100%;
    height: 74.81%;
    flex-direction: column;
    justify-content: center;
    color: white;
    text-align: center;
    font-family: Helvetica-Neue-LT-Pro-Medium;
    font-size: 1.75rem;
    line-height: 2.03rem;

}

.card_position{
    color: white;
    text-align: center;
    font-family: Helvetica;
    font-size: 1.3125rem;

    font-weight: 400;
    line-height: 2.03rem;
}
</style>