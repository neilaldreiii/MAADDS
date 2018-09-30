<template>
    <div class="container f-col">
        <header class="header f-row">
            <div class="logo background-image"></div>
            <h1>MAADD'S Enterprise</h1>
            <div class="action">
                <router-link to="/">Home</router-link>
            </div>
        </header>
        <div class="received-orders f-col">
            <div class="orders f-row" v-for="order in orders" v-bind:key="order.id">
                <div class="name">
                    <h2>{{ order.firstName | ucfirst }} {{ order.middleName | ucfirst}} {{ order.lastName | ucfirst }}</h2>
                    <p>{{ order.mobile }}</p>
                    <p>{{ order.address }}</p>
                </div>
                <div class="selected-product f-col">
                    <p>{{ order.selectedProduct }}</p>
                </div>
                <div class="quantity f-col">
                    <p><b>Quantity: </b>{{ order.quantity }}</p>
                </div>
                <div class="order-total f-col">
                    <p>{{ order.total }}</p>
                    <p>Order placed on: {{ order.timestamp | moment("ddd, MMM D, YYYY @hh:mmA")}} </p>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/firebaseInit'

export default {
    name: 'view-orders',
    data() {
        return {
            orders: [],
        }
    },
    created() {
        db.collection("Orders").orderBy("timestamp", "desc")
        .get()
        .then(
            querySnapshot => {
                querySnapshot.forEach(doc => {
                    const data = {
                        'id': doc.id,
                        'firstName': doc.data().firstName,
                        'middleName': doc.data().middleName,
                        'lastName': doc.data().lastName,
                        'mobile': doc.data().mobile,
                        'selectedProduct': doc.data().selectedProduct,
                        'quantity': doc.data().quantity,
                        'address': doc.data().address,
                        'total': doc.data().total,
                        'timestamp': new Date(doc.data().timestamp.toDate())
                    }
                    this.orders.push(data)
                })
            }
        )
    },
    methods: {

    },
    mounted() {

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
header h1 {
    margin: auto 10px;
}
h2 {
    color: #0066FF;
}
.action {
    margin: auto;
    margin-right: 0;
}
.action a {
    text-decoration: none;
    background: #0066FF;
    color: #fff;
    padding: 12px 15px;
    border-radius: 3px;
    box-shadow: 3px 3px 10px #ccc;
    font-size: 12pt;
    transition: background 0.5s;
}
.action a:hover {
    background: #0000ff;
}
.logo {
    background-image: url(../assets/images/logo.png);
    height: 100px;
    width: 100px;
    border-radius: 50%;
}
.orders>div {
    flex-grow: 1;
    width: 25%;
    padding: 20px;
}
.orders {
    margin: 10px 0;
    border-radius: 3px;
}
.orders:nth-child(odd) {
    background: #fff;
}
.orders:nth-child(even) {
    background: #fafafa;
}
.orders .quantity, .orders .selected-product {
    text-align: center;
    justify-content: center;
}
.orders .order-total, .orders .selected-product {
    justify-content: center;
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
    .orders {
        flex-flow: column!important;
        border: 1px solid #ddd;
    }
    .orders>div {
        width: 100%!important;
        padding: 5px!important;
        text-align: center;
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
    .orders {
        flex-flow: column!important;
        border: 1px solid #ddd;
    }
    .orders>div {
        width: 100%!important;
        padding: 10px!important;
        text-align: center;
    }
    
}
</style>
