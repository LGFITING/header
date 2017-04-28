import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routers from './router.js'
Vue.use(VueRouter)
var router = new VueRouter()
Routers(router);
router.start(App,'body')
