// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 全局注册插件方式
// import Header from '@/components/mailList/Header' ;
// Vue.component(Header.name,Header); //定义成全局组件，注意组件的name不能和html标签重名，否则会报错。

/* eslint-disable no-new */

//全局使用mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
