import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import rank from '@/components/rank'
import explain from '@/components/explain'
import points from '@/components/points/index'
import record from '@/components/points/record'
import store from '@/components/store/index'
import personalCenter from '@/components/castle/index'
import share from '@/components/points/share/index'
import sharePage from '@/components/points/share/sharePage'
import donateSteps from '@/components/points/donateSteps'
import signIn from '@/components/points/signIn'
import attention from '@/components/points/attention'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
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
      path: '/points',
      name: 'points',
      meta: {
        title: '算力任务'
      },
      component: points
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
      path: '/donateSteps',
      name: 'donateSteps',
      meta: {
        title: '天天运动'
      },
      component: donateSteps
    },
    {
      path: '/signIn',
      name: 'signIn',
      meta: {
        title: '健康生活之城'
      },
      component: signIn
    },
    {
      path: '/attention',
      name: 'attention',
      meta: {
        title: '关注公众号'
      },
      component: attention
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
