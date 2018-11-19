import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import getPoints from '@/components/getPoints'
import test from '@/components/test'
import animation from '@/components/animation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/getPoints',
      name: 'getPoints',
      meta: {
        title: '算力任务'
      },
      component: getPoints
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/animation',
      name: 'animation',
      meta: {
        title: '浮动'
      },
      component: animation
    }
  ]
})
