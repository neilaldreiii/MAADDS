<template>
    <div class="container">
        <header class="header f-row">
            <div class="logo background-image"></div>
            <h1>MAADDS Enterprise</h1>
            <router-link to="/">Back</router-link>
        </header>
        <div class="sub-container">
            <header class="sub-header center">
                <h2>Privacy Policy</h2>
            </header>
            <div class="content">
                <ul>
                    <li>
                        <p>When you use our services, you're trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.</p>
                    </li>
                    <li>
                        <p>We only collect personal and contact information to provide our customers with better services.</p>
                    </li>
                    <li>
                        <p>Our website does <b>NOT</b> collect any credit card/bank info.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header h1 {
    margin: auto 10px;
}
.logo {
    background-image: url(../assets/images/logo.png);
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin: auto 0;
}
.header a {
    align-self: flex-end;
    display: block;
    margin: auto;
    margin-right: 0;
    text-decoration: none;
    background: rgba(0,0,0,0.5);
    color: #fff;
    padding: 10px 15px;
    border-radius: 3px;
    box-shadow: 3px 3px 6px #343434cc;
    transition: background 0.5s;
}
.header a:hover {
    background: #000000cc;
}
@media only screen and (min-width: 320px) and (max-width: 425px) {
    .header .logo {
        width: 50px!important;
        height: 50px!important;
    }
    .header h1 {
        font-size: 12pt!important;
    }
    .header a {
        padding: 5px 10px !important;
        font-size: 11pt!important;
    }
}
</style>
