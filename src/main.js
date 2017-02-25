// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//引入需要的文件
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'

// 引入需要的组件
import App from './App'
import Home from './components/Home'
import List from './components/List'
import User from './components/User'
import 'bootstrap/dist/css/bootstrap.css'

//vue-router 和 vue-resource 要这样才能用
Vue.use(VueRouter)
Vue.use(VueResource)

//定义常量来表示 url和组件之间对应路由关系
const routes = [{
    path : '/',   // url
    component : Home   // 组件名
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

//实例化Vue-router，然后传入参数
const router = new VueRouter({
  routes    //  ES6写法，相当于 routes: routes
});


/* eslint-disable no-new */
// 实例化vue对象
new Vue({
  el: '#app',   // 根元素 index.html中的
  router,  //传入router
  store,   // 传入store
  //这里定义一个全局组件，下边是模板名和组件
  template: '<App/>',  //注册组件名为<App/>，在vue-dev-tools中显示
  components: { App }  //最上边引入的App组件
})
