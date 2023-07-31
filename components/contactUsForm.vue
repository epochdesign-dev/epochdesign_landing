<template>
    <div class="main">
        <div class="form">
            <p class="form_title">Name:</p>
            <input class="text-input" v-model="name" placeholder="Type your name">
            <p class="form_title">Email:</p>
            <input class="text-input" v-model="email" placeholder="Type your email">
            <p class="form_title">Service Needed:</p>

            <input type="checkbox" id="service 1" value="service 1" v-model="checkedServices">
            <label class="checkbox_label" for="service 1">Service 1</label><br>

            <input type="checkbox" id="service 2" value="service 2" v-model="checkedServices">
            <label class="checkbox_label" for="service 2">Service 2</label><br>

            <input type="checkbox" id="service 3" value="service 3" v-model="checkedServices">
            <label class="checkbox_label" for="service 3">Service 3</label><br>

            <p class="form_title">Message:</p>
            <textarea class="message-input" v-model="message" ></textarea>

            <button class="submit-button" @click="submitForm">SUBMIT</button>
        </div>
    </div>
</template>


<script setup>
</script>

<style scoped>
.main {
    --onyx-black: #121212;
    --dandelion-yellow: #E8E92B;
    --light-periwinkle-purple: #C0C7FF;
    /* #FFFFFF (white) */
}

.form {
    
    /* font */
    font-family: Helvetica-Neue;
    /* inner shape */
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 41.6vw;
    padding: 20px;
}

.form_title {
    /* font */
    color: white;
    font-size: 21pt;

    /* inner shape */
    margin-bottom: 0.5rem;
    align-self: flex-start;
}

/* text input */
.text-input{
     /* font */
    font-size: 18pt;

    /* inner shape */
    width: 41.6vw; 
    height: 60px; 
    border-radius: 50px;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    margin-bottom: 2rem;
}

::placeholder {
     /* font */
    color: black;
}

/* message input */
.message-input{
    /* inner shape */
    width: 41.6vw; 
    height: 192px; 
    border-radius: 50px;
    padding: 2.5rem;
    margin-bottom: 3rem;
    
    /* hide the default y-scroll */
    overflow-y: hidden;
}



/* checkbox to toggle button */

/*hide default checkbox*/
input[type="checkbox"] {
    display: none;
  }

/*style label*/
.checkbox_label {
    /* font */
    color: black;
    font-size: 18pt;

    /* inner shape */
    display: inline-block;
    width: 41.6vw;
    height: 60px;
    border-radius: 50px;

    background-color: white;
    padding-left: 2.5rem;
    padding-top: 0.8rem;


    /* interaction */

    cursor: pointer;
}

/*style label when checked*/
input[type="checkbox"]:checked + .checkbox_label {
    background-color: var(--dandelion-yellow);
    color: black;
}

/* submit button */
.submit-button {
    /* font */
    font-size: 18pt;
    font-weight: 400;

    /* inner shape */
    width: 41.6vw; 
    height: 60px; 
    border-radius: 50px;
    padding-left: 2.5rem;
    padding-right: 2.5rem; 
    margin-bottom: 2rem;

    /* interaction */
    cursor: pointer;
    border: none;
    background-color: var(--dandelion-yellow);
    color: black;
}

</style>
