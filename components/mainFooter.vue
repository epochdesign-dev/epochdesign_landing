<template>
    <div>
        <footer class="footer-box">
            <div class="footer-grid">
                <div class="pages">
                    <a href="/">Home</a>
                    <a href="/aboutus">About Us</a>
                    <a href="/services">Services</a>
                    <a href="/projects">Projects</a>
                    <a href="/startYourProject">Start Your Project</a>
                </div>
                <div class="services">
                    <a href="/service/artist-profile">Artist Profile</a>
                    <a href="/service/small-business">Small Business</a>
                    <a href="/service/moving-online">Moving Online</a>
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

<script setup>

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