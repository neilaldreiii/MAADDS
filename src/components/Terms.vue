<template>
    <div class="container">
        <header class="header f-row">
            <div class="logo background-image"></div>
            <h1>MAADDS Enterprise</h1>
            <router-link to="/">Back</router-link>
        </header>
        <div class="sub-container">
            <header class="sub-header center">
                <h2>Terms and Conditions</h2>
            </header>
            <div class="content center">
                <p>
                    <span class="marginalize"></span> This terms and conditions are set to protect both parties now and in the future. You are viewing this website to find information about us and our products. We are a professional and we expect you also to be a professional.
                </p>
            </div>
            <header class="sub-header center">
                <h2>Payment</h2>
            </header>
            <div class="content center">
                <p>
                    <span class="marginalize"></span>I am certain you understand that this is only a small business of ours and we are hoping that you will pay us right amount for our products and services. We can only do meet ups as a payment method at the moment because the developer of this website is too lazy to migrate files and has no energy left.

                </p>
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
