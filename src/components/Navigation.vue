<template>
    <div class="navigation" id="navigation">
        <div class="nav-wrap f-row">
            <div class="brand f-row">
                <div class="logo background-image"></div>
                <header class="header f-col">
                    <router-link to="/"><h1>MAADDS Enterprise</h1></router-link>
                </header>
            </div>
            <div class="nav-links f-col">
                <ul>
                    <li>
                        <a href="#" v-on:click="toAbout">About Us <span class="underline"></span> </a>
                    </li>
                    <li>
                        <a href="#" v-on:click="toProducts">Products <span class="underline"></span></a>
                    </li>
                    <li>
                        <a href="#" v-on:click="toTeam">Our Team <span class="underline"></span></a>
                    </li>
                    <li>
                        <a href="#" v-on:click="toContacts">Contacts <span class="underline"></span></a>
                    </li>
                    <li>
                        <router-link to="/order">Order Now <span class="underline"></span></router-link>
                    </li>
                </ul>
            </div>
            <!-- Mobile Devices -->
            <button v-on:click="showNav = !showNav" class="responsive"><i class="fas fa-bars"></i></button>
            <div v-if="showNav" class="nav-links-m">
                <ul>
                    <li>
                        <a href="#" v-on:click="toAbout">About Us <span class="underline"></span> </a>
                    </li>
                    <li>
                        <a href="#" v-on:click="toProducts">Products <span class="underline"></span></a>
                    </li>
                    <li>
                        <a href="#" v-on:click="toTeam">Our Team <span class="underline"></span></a>
                    </li>
                    <li>
                        <a href="#" v-on:click="toContacts">Contacts <span class="underline"></span></a>
                    </li>
                    <li>
                        <router-link to="/order">Order Now <span class="underline"></span></router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navigation',
    data() {
        return {
            scrollPosition: null,
            showNav: false
        }
    },
    mounted() {
        window.addEventListener("scroll", this.navScroll)
    },
    methods: {
        navScroll () {
            this.scrollPosition = window.scrollY

            if(this.scrollPosition > 100) {

                document.getElementById("navigation").classList.add("visible")

            } else {

                document.getElementById("navigation").classList.remove("visible")
            }
        },
        toAbout() {
             $('html,body').animate({
            scrollTop: $("#about").offset().top - 75},
            'slow');
        },
        toProducts() {
             $('html,body').animate({
            scrollTop: $("#products").offset().top - 20},
            'slow');
        },
        toTeam() {
             $('html,body').animate({
            scrollTop: $("#team").offset().top - 75},
            'slow');
        },
        toContacts() {
             $('html,body').animate({
            scrollTop: $("#contacts").offset().top - 75},
            'slow');
        },
    },
    destroyed() {
        window.removeEventListener("scroll", this.navScroll)
    }
}
</script>

<style scoped>
.logo {
    background-image: url(../assets/images/logo.png);
}
.header, .nav-links {
    justify-content: center;
}
.header a {
    text-decoration: none;
}
.header h1 {
    font-size: 18pt;
    color: #fff;
    font-weight: 600;
}
.visible .header h1 {
    font-size: 12pt;
    color: #444;
    transition: all 0.5s;
}

</style>
