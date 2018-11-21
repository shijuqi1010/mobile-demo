import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import getPoints from '@/components/getPoints'
import personalCenter from '@/components/personalCenter'
import rank from '@/components/rank'
import explain from '@/components/explain'
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
      path: '/personalCenter',
      name: 'personalCenter',
      component: personalCenter
    },
    {
      path: '/rank',
      name: 'rank',
      meta: {
        title: '排名'
      },
      component: rank
    },
    {
      path: '/explain',
      name: 'explain',
      meta: {
        title: '奥克秘籍'
      },
      component: explain
    }
  ]
})
