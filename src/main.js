import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routing'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.use(VueRouter)
const router = new VueRouter({
  routes : Routes
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
