import Vue from 'vue'
import Router from 'vue-router'
import Error from '@/components/error/Error'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/user/Login'
import Register from '@/components/user/register'
import MailList from '@/components/mailList/MailList'
import SoltDemo from '@/components/mailList/soltDemo'
import Home from '@/pages/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'allhome',
      component: Home
    },
    {
      path: '/hello',
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
      path: '/mailList',
      name: 'sjtxl',
      component: MailList
    },
    {
      path: '/solt',
      name: 'soltTest',
      component: SoltDemo
    },
    {
      path: '/home',
      name: 'myhome',
      component: Home
    },
    {
      path: '*',//用于匹配404页面
      name: 'Error',
      component: Error
    }
  ]
})
