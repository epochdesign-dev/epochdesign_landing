<template>
    <div class="before_after_container" id="before_after_container">
        <div class="mouse" id="mouse">
        </div>
        <img @click="showImage" @mouseover="brightCursor" @mouseleave="dimCursor" class="component hover:cursor-pointer" id="component" src="../assets/project_index_page/blackhole.webp" alt="blackhole">
    </div>
</template>

<script>
    export default {
        props: {
        },
        mounted(){
            // have mouse div follow mouse position
            let container = document.getElementById("before_after_container");
            let mouse = document.getElementById("mouse");
            let mousePos = { x: undefined, y: undefined };

            container.addEventListener('mousemove', (event) => {
                mousePos = { x: event.clientX, y: event.pageY };
                mouse.style.left = `${mousePos.x - 5}px`;
                mouse.style.top = `${document.getElementById("project_index").scrollTop + event.clientY - 5}px`;
            });
        },
        data() {
            return {
            }
        },
        methods: {
            showImage(){
                document.getElementById("component").classList.add("componentShow");
            },
            brightCursor(){
                document.getElementById("mouse").classList.remove("dimcursor");
                document.getElementById("mouse").classList.add("brightcursor");
                console.log("hey");
            },
            dimCursor(){
                document.getElementById("mouse").classList.remove("brightcursor");
                document.getElementById("mouse").classList.add("dimcursor");
                console.log("bye");
            }
        }
    }
</script>

<style scoped>
.before_after_container{
    /* position */
    margin-top: 371px;

    /* shape */
    width: 100vw;
    height: 56.25vw;
    overflow: clip;

    /* inner shape */
    background: var(--onyx-black);
}

.mouse{
    /* position */
    position: absolute;
    left: 0;
    top: 0;

    /* shape */
    width: 10px;
    height: 10px;
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1),
    0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 1);

    /* inner shape */
    background: white;
}

.brightcursor{
    /* animation */
    width: 30px;
    height: 30px;
    transition: width 1s, height 1s;
}

.dimcursor{
    width: 10px;
    height: 10px;
    transition: width 1s, height 1s;
}

.component{
    /* position */
    position: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 8vw;

    /* shape */
    width: 50vw;

    /* animation */
    opacity: 0;
    transition: all 1s;
}

.componentShow{
    /* animation */
    opacity: 100%;
    transition: all 1s;
}
</style>