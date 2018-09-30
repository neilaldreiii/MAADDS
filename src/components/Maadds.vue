<template>
  <div class="app">
    <div class="banner background-image">
      <div class="banner-wrap f-col">
        <div class="introduction">
          <h1 class="viewport" v-in-viewport.once>Yemanicious</h1>
          <h3>The New King of Yema</h3>
        </div>
        <div class="contacts">
          <div class="contact-label">
            <p>Location</p>
          </div>
          <div class="contact-label">
            <p>Mobile</p>
          </div>
          <div class="contact-label">
            <p>Email</p>
          </div>
          <div class="contact-label">
            <p>Social</p>
          </div>
          <div class="contact-info">
            <p>MTV Lobby Naga College Foundation, Naga City, Camarines Sur</p>
          </div>
          <div class="contact-info">
            <p>+639052371439</p>
          </div>
          <div class="contact-info">
            <p>darenz.rodriguez@gmail.com</p>
          </div>
          <div class="contact-info social f-row">
            <a target="_blank" href="#" class="twi"><i class="fab fa-twitter"></i></a>
            <a target="_blank" href="#" class="ins"><i class="fab fa-instagram"></i></a>
            <a target="_blank" href="https://www.facebook.com/messages/t/yemanicious" class="msg"><i class="fab fa-facebook-messenger"></i></a>
            <a target="_blank" href="https://www.facebook.com/yemanicious/" class="fb"><i class="fab fa-facebook-f"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
        <app-navigation></app-navigation>
        <app-about id="about" v-in-viewport.once></app-about>
        <app-product id="products" v-in-viewport.once></app-product>
        <app-team id="team" v-in-viewport.once></app-team>
        <app-footer id="contacts" v-in-viewport.once></app-footer>
      </div>
  </div>
</template>

<script>
import navBar from '@/components/Navigation'
import About from '@/components/About'
import Product from '@/components/Products'
import Team from '@/components/Team'
import AppFooter from '@/components/Footer'

export default {
  name: 'maadds',
  data () {
    return {

    }
  },
  components: {
    'app-navigation': navBar,
    'app-about':About,
    'app-product':Product,
    'app-team': Team,
    'app-footer': AppFooter,
  }
}
</script>
<style scoped>
.banner {
  background-image: url(../assets/images/banner.jpg);
  background-attachment: fixed;
  height: 100vh;
  width: 100%;
}
.introduction h1 {
  font-weight: 600;
}
.contacts p {
  margin: 0;
  padding: 0;
}
.contact-label p{
  font-weight: 600;
  font-size: 15pt;
  color: #fff;
}
.contact-info p{
  color: #fff;
  margin: auto;
  font-size: 11pt;
}
</style>

