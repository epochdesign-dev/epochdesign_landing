<template>
    <div>
        <div class="project_card">
            <img class="project_pic" src="../assets/project_card.png" alt="project_card">
            <div class="project_footer">
                <p class="project_name">PROJECT NAME</p>
                <img class="arrow" src="../assets/arrow.png" alt="arrow">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.project_card {
    /* interaction */
    z-index: 1;

    /* shape */
    height: 35.8vh;
}

.project_pic{
    /* shape */
    max-width: 100vw;
    object-fit: contain;
}

.project_footer{
    /* inner shape */
    display: flex;

    /* shape */
    height: 5.8vh;
    width: 100vw;
}

.project_name{
    /* font */
    font-family: Helvetica;
    color: white;
    font-size: 4vw;

    /* position */
    margin-left: 4.1vw;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
}

.arrow{
    /* shape */
    height: 3.15vw;
    width: 3.15vw;

    /* position */
    margin-left: auto;
    margin-right: 4.1vw;
    margin-top: auto;
    margin-bottom: auto;
}

@media screen and (min-width: 740px) {
    .project_card{
        display: none;
    }
}
</style>