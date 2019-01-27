import Vue from 'vue'
import Router from 'vue-router'
// 首页
import index from '@/components/index'
import rank from '@/components/rank'
import explain from '@/components/explain'

// 获取算力
import points from '@/components/points/index'
import record from '@/components/points/record'
import share from '@/components/points/share/index'
import sharePage from '@/components/points/share/sharePage'
import donateSteps from '@/components/points/donateSteps'
import signIn from '@/components/points/signIn'
import attention from '@/components/points/attention'

// 我的城堡
import personalCenter from '@/components/castle/index'
import detail from '@/components/castle/detail'

// 共建计划
import build from '@/components/build/index'
// 闲置物品兑换
// 兑换主页
import exchange from '@/components/build/exchange/index'
// 发布界面
import push from '@/components/build/exchange/push'
// 兑换物品页面
import exchangeProduct from '@/components/build/exchange/exchange'
// 我发布的
import publish from '@/components/build/exchange/publish'
// 宝贝详情
import productDetail from '@/components/build/exchange/productDetail'
// 我领到的
import receive from '@/components/build/exchange/receive'

// 市场
import store from '@/components/store/index'
import luckywheel from '@/components/store/luckywheel'

import camera from '@/components/public/camera'
import iconfont from '@/components/public/iconfont'

import parking from '@/components/parking/parking'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/parking',
      name: 'parking',
      component: parking
    },
    {
      path: '/iconfont',
      name: 'iconfont',
      component: iconfont
    },
    {
      path: '/camera',
      name: 'camera',
      component: camera
    },
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
        title: '奥克基地'
      },
      component: explain
    },
    {
      path: '/points',
      name: 'points',
      meta: { title: '算力任务' },
      component: points,
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
      path: '/luckywheel',
      name: 'luckywheel',
      meta: {
        title: '幸运大转盘'
      },
      component: luckywheel
    },
    {
      path: '/personalCenter',
      name: 'personalCenter',
      meta: {
        title: '奥克城 健康生活之城'
      },
      component: personalCenter
    },
    {
      path: '/detail',
      name: 'detail',
      meta: {
        title: '我的积分明细'
      },
      component: detail
    },
    {
      path: '/donateSteps',
      name: 'donateSteps',
      meta: {
        title: '悦跑'
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
    },
    {
      path: '/build',
      name: 'build',
      meta: {
        title: '共建计划'
      },
      component: build
    },
    {
      path: '/exchange',
      name: 'exchange',
      meta: {
        title: '二手闲置物品互赠'
      },
      component: exchange,
    },
    {
      path: '/push',
      name: 'push',
      meta: {
        title: '发布闲置物品'
      },
      component: push,
    },
    {
      path: '/exchangeProduct',
      name: 'exchangeProduct',
      meta: {
        title: '物品详情'
      },
      component: exchangeProduct,
    },
    {
      path: '/productDetail',
      name: 'productDetail',
      meta: {
        title: '商品详情'
      },
      component: productDetail
    },
    {
      path: '/receive',
      name: 'receive',
      meta: {
        title: '我领到的'
      },
      component: receive,
    },
    {
      path: '/publish',
      name: 'publish',
      meta: {
        title: '我发布的'
      },
      component: publish,
    }
  ]
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  
  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
})

export default router
