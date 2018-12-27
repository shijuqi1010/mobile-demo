// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill' // 低版本浏览器兼容es6
import 'core-js/fn/object/assign' // Object.assign引起的页面显示空白
import VueScroller from 'vue-scroller' // 划动加载
import Toast from 'vue-toast-component'
import Toasted from 'vue-toasted'

import 'swiper/dist/css/swiper.min.css'
import './assets/iconfont/iconfont.css'

Vue.use(Toast)
Vue.use(Toasted)
Vue.use(VueScroller)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
