<template>
    <div>
        <footer class="footer-box">
            <div class="footer-grid">
                <!-- computer & ipad -->
                <div class="pages">
                    <a href="/">Home</a>
                    <a href="/aboutus">About Us</a>
                    <a href="/#services">Services</a>
                    <a href="/">Projects</a>
                    <a href="/start">Start Your Project</a>
                </div>
                <div class="services">
                    <a href="https://www.tiktok.com/@epochdesign.dev">TikTok</a>
                    <a href="https://www.youtube.com/@epochdesign.develop">YouTube</a>
                    <a href="https://www.instagram.com/epochdesign.dev/">Instagram</a>
                </div>

                <!-- mobile -->
                <div class="pages2">
                    <a href="">Home</a>
                    <a href="">About Us</a>
                    <a href="/#services">Services</a>
                    <a href="">Projects</a>
                    <a href="/start">Start Your Project</a>
                </div>
                <div class="services2">
                    <a href="https://www.tiktok.com/@epochdesign.dev">TikTok</a>
                    <a href="https://www.youtube.com/@epochdesign.develop">YouTube</a>
                    <a href="https://www.instagram.com/epochdesign.dev/">Instagram</a>
                </div>

                <div class="contact">
                    <div class="footer-title">Contact:</div>
                    contact@epochdesign.dev

                </div>
                <div class="logo">
                    Epoch Design & Development
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    mounted(){},
    data() {
        return {}
    },
    computed: {
    },
    methods: {
    }
}
</script>

<style scoped>
.footer-box{
    margin-top: 100px;
    /* shape */
    width: 100vw;
    height: 28.89vh;
    border-top: solid 3px white;

    /*inner*/
    padding: 0 5vw 0 5vw;

    /* font */
    color: white;
    font-family: Helvetica-Neue;
    font-size: 14px;
    line-height: 30px;
    white-space: nowrap;
}

.footer-grid{
    padding-top: 25px;
    padding-bottom: 25px;

    display: grid;
    grid-column-gap: 37px;
    grid-row-gap: 0px;
    grid-template-rows: auto;
    grid-auto-columns: 3fr 5fr 5.75fr 5.75fr;
    grid-template-areas: "pages services contact logo";
    gap: 60px;

}

.pages{
    grid-area: pages;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.services{
    grid-area: services;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.pages2{
    display: none;
}

.services2{
    display: none;
}

.contact{
    grid-area: contact;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.logo{
    grid-area: logo;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
}

@media screen and (max-width: 840px) {
        .footer-box{
            margin-top: 0px;
            /* shape */
            width: 100vw;
            height: 28.89vh;
            border-top: solid 3px transparent;

            /*inner*/
            padding: 0 5vw 0 5vw;

            /* font */
            color: white;
            font-family: Helvetica-Neue;
            font-size: 14px;
            line-height: 30px;
            white-space: nowrap;
        }

    .main_footer{
        /* shape */
        width: 95.9vw;
        height: 43.33vh;
        border-top: solid 3px white;
    }
    
    .footer-grid{
        padding-top: 25px;
        padding-bottom: 25px;
    
        display: grid;
        grid-column-gap: 37px;
        grid-row-gap: 40px;
        grid-template-rows: auto;
        grid-auto-columns: 3fr 5fr 5.75fr 5.75fr;
        grid-template-areas: 
        "pages services"
        "contact logo";
    
    }

    @media screen and (max-width: 740px) {
        .pages{
            display: none;
        }

        .services{
            display: none;
        }

        .pages2{
            grid-area: pages;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
        }

        .services2{
            grid-area: services;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
        }

        .footer-box{
            margin-top: 0px;
            /* shape */
            width: 100vw;
            height: 28.89vh;
            border-top: solid 3px transparent;

            /*inner*/
            padding: 0 5vw 0 5vw;

            /* font */
            color: white;
            font-family: Helvetica-Neue;
            font-size: 14px;
            line-height: 30px;
            white-space: nowrap;
        }

        .footer-grid{
            padding-top: 25px;
            padding-bottom: 25px;
        
            display: grid;
            grid-column-gap: 37px;
            grid-row-gap: 40px;
            grid-template-rows: auto;
            grid-auto-columns: 3fr 5fr 5.75fr 5.75fr;
            grid-template-areas: 
            "pages "
            "services"
            "contact"
            "logo";

        }
    }

}
</style>