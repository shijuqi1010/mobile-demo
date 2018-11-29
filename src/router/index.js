import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import getPoints from '@/components/points/index'
import record from '@/components/points/record'
import store from '@/components/store'
import personalCenter from '@/components/castle/index'
import explain from '@/components/castle/explain'
import rank from '@/components/rank'

import share from '@/components/points/share/index'
import sharePage from '@/components/points/share/sharePage'
import donateSteps from '@/components/points/donateSteps'

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
      path: '/record',
      name: 'record',
      meta: {
        title: '算力记录'
      },
      component: record
    },
    {
      path: '/store',
      name: 'store',
      meta: {
        title: '市场'
      },
      component: store
    },
    {
      path: '/personalCenter',
      name: 'personalCenter',
      meta: {
        title: '我的城堡'
      },
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
    },
    {
      path: '/donateSteps',
      name: 'donateSteps',
      meta: {
        title: '捐步'
      },
      component: donateSteps
    },
    {
      path: '/share',
      name: 'share',
      meta: {
        title: '邀请邻居'
      },
      component: share
    },
    {
      path: '/sharePage',
      name: 'sharePage',
      meta: {
        title: '分享'
      },
      component: sharePage
    }
  ]
})
