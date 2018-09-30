import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import Maadds from '@/components/Maadds'
import Order from '@/components/Order'
import Terms from '@/components/Terms'
import Privacy from '@/components/Privacy'
import Success from '@/components/success'
import viewOrders from '@/components/view-order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Maadds',
      component: Maadds
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: Privacy
    },
    {
      path: '/terms',
      name: 'Terms',
      component: Terms
    },
    {
      path: '/success',
      name: 'success',
      component: Success
    },
    {
      path: '/view-orders',
      name: 'view-order',
      component: viewOrders
    }
  ],
  mode: 'history'
})
