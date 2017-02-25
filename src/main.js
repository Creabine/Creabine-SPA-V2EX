// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'

import App from './App'
import Home from './components/Home'
import List from './components/List'
import User from './components/User'
import 'bootstrap/dist/css/bootstrap.css'


Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
    path : '/',
    component : Home
},{
    path : '/home',
    component : Home
},{
    path : '/list',
    component : List
},{
	path : '/User',
	component : User
}];

const router = new VueRouter({
  routes
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
