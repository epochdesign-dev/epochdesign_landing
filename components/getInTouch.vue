<template>
    <div>
        <!--Get in Touch-->
        <section class="get_in_touch">
            <div class="get_in_touch_text">Have An Idea?<br>Let's Build And Scale It!</div>
            <div class="get_in_touch_button">
                <img class="get_in_touch_arrow" src="../assets/arrow-circle2.png" alt="arrow circle">
                Get in Touch
            </div>
        </section>

        <!--Footer-->
        <section>
            <footer class="main_footer">
            </footer>
        </section>

        <!--Mobile: Contact Button-->
        <section>
            <div class="contact_button">
                contact
            </div>
        </section>
    </div>
</template>

<script setup>

</script>

<style scoped>

.get_in_touch{

    /* shape */
    width: 81.7vw;
    height: 20.37vh;

    /* inner shape */
    display: flex;
}

.get_in_touch_text{
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

.get_in_touch_button{
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

.get_in_touch_arrow{
    /* shape */
    width: 2.86vw;
    height: 2.86vw;

    /* position */
    display: inline;

}

@media screen and (max-width: 640px) {
    .get_in_touch{
        display: none;
    }
}
</style>