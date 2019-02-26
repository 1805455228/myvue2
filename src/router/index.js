import Vue from 'vue'
import Router from 'vue-router'
import Error from '@/components/error/Error'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/user/Login'
import Register from '@/components/user/register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '*',//用于匹配404页面
      name: 'Error',
      component: Error
    }
  ]
})
