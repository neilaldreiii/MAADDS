<template>
    <div class="sub-container">
        <div class="about f-row">
            <div class="about-description">
                <header class="header center">
                    <h1>About Us</h1>
                </header>
                <div class="content">
                    <p>
                        <span class="marginalize"></span>We at <b>MAADD’s Enterprise</b> has been perceived to become more resourceful advance critical thinking by using of knowledge, skills, ability, and perception. By a group of student coming from <i>Bachelor of Science in Business Administration Major in financial and Marketing management.</i> MAADD’s Enterprise aims to help the community in achieving and reaching economic upliftment that will contribute to the society.
                    </p>
                    <p class="center">
                        If you haven't tried our product yet. I suggest giving it a try.
                    </p>
                </div>
            </div>
            <div class="about-banner-container">
                <div class="about-banner background-image" id="aboutBanner" v-in-viewport></div>
            </div>
        </div>
        <div class="about-mission-vision f-row">
            <div class="mission">
                <header class="header center">
                    <h1>Our Mission</h1>
                </header>
                <div class="content">
                    <p>
                        <span class="marginalize"></span>To become one of the respected and well-known pastry 
                        businesses in Naga City that offers nutritious snack/dessert products.
                    </p>
                </div>
            </div>
            <div class="vision">
                <header class="header center">
                    <h1>Our Vision</h1>
                </header>
                <div class="content">
                    <p>
                        <span class="marginalize"></span>To provide the customer with a unique, healthy, affordable 
                        and high quality semi-organic products that will satisfy their 
                        wants.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'about'
}
</script>

<style scoped>
.about-description {
    width: 50%;
    padding: 20px;
}
.about-banner-container {
    width: 50%;
    height: 450px;
}
.about-banner {
    background-image: url(../assets/images/logo.png);
    background-size: cover;
    height: 450px;
    width: 450px;
    margin: auto;
}
.about-banner.in-viewport {
    animation: zoom 2s forwards ease-in-out;
}
.header {
    padding: 10px;
}
.content {
    text-align: justify;
}
@keyframes zoom {
    from {
        height: 0;
        width: 0;
    }
    to {
        height: 100%;
        width: 100%;
    }
}
</style>
