<template>
    <div class="container">
        <header class="header f-row">
            <div class="logo background-image"></div>
            <h1>MAADD'S Enterprise</h1>
        </header>
        <div class="sub-container f-row">
            <div class="form-container">
                <form v-on:submit.prevent="placeOrder">
                    <div class="order">
                        <header class="header">
                            <h1>Product</h1>
                        </header>
                        <div class="order-wrap f-row">
                            <div class="input-field">
                                <select v-on:change="chooseProduct" v-model="selectedProduct">
                                    <option value="" selected disabled>Product</option>
                                    <option v-for="product in products" :key="product">{{ product }}</option>
                                </select>
                                <input type="number" v-on:change="amount()" v-model="quantity" placeholder="Quantity">
                            </div>
                            <div class="item">
                                <img v-if="tenpcs = tenpcs" src="../assets/images/slide6.jpg" alt="">
                                <img v-if="onepc = onepc" src="../assets/images/product2.jpeg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="form-sub-container f-row">
                        <div class="personal-details">
                            <header class="header">
                                <h1>Personal Details</h1>
                            </header>
                            <div class="input-field">
                                <input type="text" v-model="lastName" placeholder="Last Name">
                            </div>
                            <div class="input-field">
                                <input type="text" v-model="firstName" placeholder="First Name">
                            </div>
                            <div class="input-field">
                                <input type="text" v-model="middleName" placeholder="Middle Name">
                            </div>
                        </div>
                        <div class="contact-details">
                            <header class="header">
                                <h1>Contact Details</h1>
                            </header>
                            <div class="input-field">
                                <input type="email" v-model="email" placeholder="Email">
                            </div>
                            <div class="input-field">
                                <input type="text" v-model="mobile" placeholder="Mobile Number">
                            </div>
                        </div>
                        <div class="billing-details">
                            <header class="header">
                                <h1>Billing</h1>
                            </header>
                            <div class="input-field">
                                <input type="text" v-model="address" placeholder="Delivery Address">
                            </div>
                        </div>
                    </div>
                    <div class="input-field action">
                        <router-link to="/">Cancel</router-link>
                        <input type="submit" value="Place Order">
                        <router-link class="view-orders" to="/view-orders">View Orders</router-link>
                    </div>
                </form>
            </div>
            <div class="order-preview f-col">
                <header class="header">
                    <h1>Order Preview</h1>
                </header>
                <div class="content f-col">
                    <div class="info">
                        <p><b>Product:</b> {{ selectedProduct }}</p>
                        <p><b>Quantity: </b>&nbsp;{{ quantity }}</p>
                        <p><b>Customer Name:</b> {{ lastName + "," | ucfirst }} {{ firstName | ucfirst}} {{ middleName | ucfirst}}</p>
                        <p><b>Mobile Number:</b> {{ mobile }}</p>
                        <p><b>Email:</b> {{ email }}</p>
                        <p><b>Address:</b> {{ address }}</p>
                    </div>
                    <div class="total">
                        <p><b>Total: </b> </p>
                        <h2>{{ total }}</h2>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="overlay = overlay" class="overlay f-col">
            <div class="overlay-wrap">
                <h2>Processing your order</h2>
                <div class="progress-bar">
                    <div class="progress-fill-container">
                        <div class="bar-fill"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/firebaseInit'

export default {
    name:'order',
    data() {
        return{
            onepc: false,
            tenpcs: false,
            quantity: '',
            firstName: '',
            middleName: '',
            lastName: '',
            email:'',
            mobile:'',
            address:'',
            selectedProduct: '',
            total: '',
            overlay: false,
            products: ["1 Box Yemanicious(10-pcs)", "1-pc Yemanicious"]
        }
    },
    methods: {
        chooseProduct() {
            if(this.selectedProduct == "1 Box Yemanicious(10-pcs)") {
                this.tenpcs = true
                this.onepc = false
            } else {
                this.onepc = true
                this.tenpcs = false
            }
        },
        placeOrder() {
            this.overlay = true,
            db.collection("Orders").add({
                firstName: this.firstName,
                lastName: this.lastName,
                middleName: this.middleName,
                quantity: this.quantity,
                selectedProduct: this.selectedProduct,
                email: this.email,
                mobile: this.mobile,
                address:this.address,
                total: this.total,
                timestamp: new Date()

            }).then(docRef => this.$router.push("/success"))
            .catch(error => console.log(err))
        },
        amount() {
            if(this.tenpcs == true) {

                this.total = this.quantity*50 + " pesos"

            } else if(this.onepc == true) {

                this.total = this.quantity*5 + " pesos"

            }
        }
    },
    filters: {
        ucfirst: function(value) {
        if(!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1);
        },
    }
}
</script>
<style scoped>
.logo {
    background-image: url(../assets/images/logo.png);
    height: 100px;
    width: 100px;
}
.sub-container {
    margin: 50px auto;
    padding: 10px;
}
.header,.content {
    padding: 10px;
}
h1 {
    margin: auto 15px;
}
h3 {
    margin: auto 15px;
}
p {
    margin: 0;
    padding: 0;
}
.overlay {
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    justify-content: center;
}
.overlay-wrap {
    width: auto;
    margin: auto;
    padding: 15px;
}
.overlay-wrap h2 {
    color: #fff;
    margin: 10px 0;
}
.progress-bar {
    height: 3px;
    width: 100%;
    margin: auto;
}
.progress-bar .progress-fill-container {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
}
.progress-bar .progress-fill-container .bar-fill {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 50%;
    background: #FFF;
    border-radius: 10px;
    animation: fill 1s infinite ease-in-out;
}
.form-container {
    flex-grow: 1;
}
.form-sub-container {
    justify-content: space-between;
}
.form-sub-container>div {
    flex-grow: 1;
    margin: 0 15px;
}
.form-sub-container header.header{
    padding: 10px 0;
    text-align: center;
}
.order-preview .content {
    flex-grow: 1;
    justify-content: space-between;
}
.action {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
}
@keyframes fill {
    from {
        left: -100%;
    }
    to {
        left: 100%;
    }
}
@media only screen and (min-width: 320px) and (max-width: 425px) {
    .header .logo {
        width: 50px!important;
        height: 50px!important;
    }
    .header h1 {
        font-size: 12pt!important;
        text-align: center;
    }
    .header a {
        padding: 5px 10px !important;
        font-size: 11pt!important;
    }
    .sub-container, .form-sub-container, .order-wrap {
        flex-flow: column!important;
    }
    .action a, input[type=submit] {
        font-size: 11pt!important;
        padding: 5px 10px !important;
    }
    .order-preview {
        width: 100%!important;
        border-left: none!important;
    }
    .total {
        padding: 30px 0!important ;
    }
}
@media only screen and (min-width: 426px) and (max-width: 768px) {
    .header .logo {
        width: 50px!important;
        height: 50px!important;
    }
    .header h1 {
        font-size: 12pt!important;
        text-align: center;
    }
    .header a {
        padding: 5px 10px !important;
        font-size: 11pt!important;
    }
    .sub-container, .form-sub-container, .order-wrap {
        flex-flow: column!important;
    }
    .action a, input[type=submit] {
        font-size: 11pt!important;
        padding: 5px 10px !important;
    }
    .order-preview {
        width: 100%!important;
        border-left: none!important;
    }
    .total {
        padding: 30px 0!important ;
    }
}
</style>