import Vue from 'vue'
import Router from 'vue-router'
import Error from '@/components/error/Error'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/user/Login'
import Register from '@/components/user/register'
import MailList from '@/components/mailList/MailList'
import SoltDemo from '@/components/mailList/soltDemo'
import city from '@/pages/city/cityList'
import listCell from '@/pages/mtui_list_demo/listCell'
import Home from '@/pages/home'
import fullcalendar from '@/pages/fullcalendar/fullcalendar'



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
      path: '/city',
      name: 'mycity',
      component: city
    },
    {
      path: '/listCell',
      name: 'myCell',
      component: listCell
    },
    {
      path: '/fullcalendar',
      name: 'myfullcalendar',
      component: fullcalendar
    },
    {
      path: '*',//用于匹配404页面
      name: 'Error',
      component: Error
    }
  ]
})
