<template>
    <div class="sub-container f-col">
        <header class="header">
            <h1>Thank you for purchasing yemanicious</h1>
            <p>Your orders are being processed. You will receive a call once we are at your doorstep.</p>
            <p><i>Delivery time varies on the location you had submitted.</i></p>
            <router-link to="/">Back to MAADD'S Enterprise home page</router-link>
        </header>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sub-container {
    width: 100%;
    height: 100vh;
    margin: auto;
    justify-content: center;
    text-align: center;
    background: transparent;
    box-shadow: none;
}
.sub-container .header {
    box-shadow: 0 0 8px #ccc;
    background: #fff;
    border-radius: 5px;
    margin: auto;
}
.sub-container .header p i {
    font-size: 11pt;
}
.sub-container .header a {
    background: #0066FF;
    border-radius: 3px;
    box-shadow: 0 0 8px #ccc;
    color: #fff;
    text-decoration: none;
    padding: 12px 15px;
    display: inline-block;
}
</style>
