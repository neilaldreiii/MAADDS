// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import inViewportDirective from 'vue-in-viewport-directive'

Vue.config.productionTip = false

Vue.directive('in-viewport', inViewportDirective)
Vue.use(require('vue-moment'));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
