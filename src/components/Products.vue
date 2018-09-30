<template>
    <div class="sub-container">
        <div class="products">
            <header class="header center">
                <h1>Products</h1>
                <h3>MAADD'S Enterprise created something different that will make people like yema more. The difference between   <b> Yemanicious</b> from ordinary yema is MAADD'S Enterprise has a healthy organic ingredients.</h3>
            </header>
            <div class="bind f-col">
                <div class="products-slideshow">
                    <div class="slide">
                        <img src="../assets/images/slide1.jpg" alt="">
                    </div>
                    <div class="slide">
                        <img src="../assets/images/slide2.jpg" alt="">
                    </div>
                    <div class="slide">
                        <img src="../assets/images/slide3.jpg" alt="">
                    </div>
                    <div class="slide">
                        <img src="../assets/images/slide4.jpg" alt="">
                    </div>
                    <div class="slide">
                        <img src="../assets/images/slide5.jpg" alt="">
                    </div>
                    <div class="slide">
                        <img src="../assets/images/slide6.jpg" alt="">
                    </div>
                    <div class="slide">
                        <img src="../assets/images/slide7.jpg" alt="">
                    </div>
                    <div class="slide-marker f-row">
                        <div class="mark" v-on:click="currentSlide(0)">
                            <div class="mark-fill"></div>
                        </div>
                        <div class="mark" v-on:click="currentSlide(1)">
                            <div class="mark-fill"></div>
                        </div>
                        <div class="mark" v-on:click="currentSlide(2)">
                            <div class="mark-fill"></div>
                        </div>
                        <div class="mark" v-on:click="currentSlide(3)">
                            <div class="mark-fill"></div>
                        </div>
                        <div class="mark" v-on:click="currentSlide(4)">
                            <div class="mark-fill"></div>
                        </div>
                        <div class="mark" v-on:click="currentSlide(5)">
                            <div class="mark-fill"></div>
                        </div>
                        <div class="mark" v-on:click="currentSlide(6)">
                            <div class="mark-fill"></div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <p>
                        <span class="marginalize"></span> <b>MAADD’S Enterprise</b> will give a new face for yema product because it’s just not milk and eggs we also added
                        sweet potato. Sweet potatoes (Ipomoea batatas) are high in vitamin B6, good source of vitamin C, 
                        and vitamin D, which helps build healthy bones, it also contains iron and support a healthy immune system,
                        it is a source of magnesium, which is the relaxation and anti-stress mineral, potassium, it doesn’t cause 
                        blood sugar spike, it helps ward off cancer and protect against the effects of aging. Carrots 
                        (Daucuscarota subsp. Sativus) High Source of Antioxidants (Especially Beta Carotene), Decreases Risk for Heart 
                        Disease and Stroke, Boosts Skin Health and Wound Healing, Protects Brain Health &amp; Cognitive Function. Peanuts 
                        (Arachishypogaea) are rich in energy, good source of dietary protein, and resveratrol, another 
                        polyphenolic antioxidant. Condensed milk is can be a natural moisturizer, Enhances complexion, 
                        Gives glowing and flawless skin. Eggs are a very good source of protein, vitamin B2, selenium, vitamin D, B6, B12 
                        and minerals. Margarine has high levels of Tran’s fats, which increase LDL cholesterol similarly to saturated fat 
                        and lower HDL, or good cholesterol.
                    </p>
                </div>
            </div>
        </div>
        <div class="price-list f-row">
            <div class="product-item">
                <div class="product-img">
                    <img src="../assets/images/slide4.jpg" alt="">
                    <div class="item-price f-col">
                        <p>&#8369; 50.00</p>
                    </div>
                </div>
                <div class="product-item-description center">
                    <p>1 box Yemanicious (10-pcs) </p>
                </div>
            </div>
            <div class="product-item">
                <div class="product-img">
                    <img src="../assets/images/product2.jpeg" alt="">
                    <div class="item-price f-col">
                        <p>&#8369; 5.00</p>
                    </div>
                </div>
                <div class="product-item-description center">
                    <p>1-pc Yemanicious</p>
                </div>
            </div>
        </div>
        <div class="proceed-to-order">
            <router-link to="order">Proceed to order</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'product',
    data() {
        return {
            timer: null,
            slideIndex: 0,
            slides:document.getElementsByClassName("slide"),
            marker: document.getElementsByClassName("mark"),
            i: 0
        }
    },
    mounted() {
        this.showSlides()
    },
    methods: {
        showSlides() {
            for (this.i = 0; this.i < this.slides.length; this.i++) {
                this.slides[this.i].style.display = "none"
            }

            this.slideIndex++;

            if(this.slideIndex > this.slides.length) {
                this.slideIndex = 1
            }

            for(this.i = 0; this.i < this.marker.length; this.i++) {
                this.marker[this.i].className = this.marker[this.i].className.replace(" active", "")
            }

            this.timer = setTimeout(this.showSlides, 3000)
            this.slides[this.slideIndex-1].style.display = "block"
            this.marker[this.slideIndex-1].className += " active"
        },
        currentSlide(n) {
            clearTimeout(this.timer)
            this.showSlides(this.slideIndex = n) 
        }
    }
}
</script>
<style scoped>
.header h1 {
    padding: 10px;
}
.header h3 {
    font-weight: normal;
    font-size: 12pt;
    padding: 10px;
}
.content {
    margin: 10px auto;
    margin-right: 0;
    text-align: justify;
    line-height: 1.5em;
}
.proceed-to-order {
    text-align: center;
}
.proceed-to-order a {
    text-decoration: none;
    background: #0066FF;
    color: #fff;
    border-radius: 3px;
    box-shadow: 3px 3px 8px #ccc;
    padding: 12px 15px;
    display: inline-block;
    transition: background 0.5s;
}
.proceed-to-order a:hover {
    background: #0000FF;
}
</style>
