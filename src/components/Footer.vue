<template>
    <div class="footer">
        <header class="header center">
          <h1>Contacts</h1>
        </header>
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
            <a href="#" class="twi"><i class="fab fa-twitter"></i></a>
            <a href="#" class="ins"><i class="fab fa-instagram"></i></a>
            <a target="_blank" href="https://www.facebook.com/messages/t/yemanicious" class="msg"><i class="fab fa-facebook-messenger"></i></a>
            <a target="_blank" href="https://www.facebook.com/yemanicious/" class="fb"><i class="fab fa-facebook-f"></i></a>
          </div>
        </div>
        <div class="footer-main">
          <ul>
            <li><router-link to="/terms">Terms of use</router-link></li>
            <li><router-link to="/privacy">Privacy Policy</router-link></li>
            <li><p>MAADDS Enterprise &copy; 2018</p></li>
            <li><p>Developer: &nbsp;</p><a href="#">Neil Aldrei</a></li>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app-footer'
}
</script>

<style scoped>
.footer-main p {
  margin: 0;
  padding: 0;
  display: inline-block;
}
.contacts {
  width: 100%;
}
</style>
