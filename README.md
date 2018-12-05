# 奥克积分

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 原型
Refer to [Documentation](https://pro.modao.cc/app/TEs7jkqdfkXhL3q29XJEYvWhzrGpVt1#screen=s3D3C0A8E941540542138160) for more information

## 文件目录

```
src---|
      |--index.html: 入口文件
      |--App.vue
      |--assets: 本地文件（如本地小图片）
      |--components: 组件（所有页面所在目录）
      |--config: 配置文件(用于接口配置)
      |--router: 路由文件
      |--utils: 工具类文件
```

## 组件（components）详细目录结构

```
index: 奥克城首页
rank: 排名
explain: 奥克基地
castle: 我的城堡
      |--index: 我的城堡主页
      |--detail: 我的奥克积分
      |--order: 我的订单
points: 获取算力
      |--index: 获取算力主页
      |--record: 算力记录
      |--signIn: 签到
      |--donateSteps: 捐步
      |share: 邀请邻居
      |     |--index: 邀请邻居主页
      |     |--sharePage: 分享页面
      |--attention: 关注公众号
      |--payment: 房屋缴费页
      |--opendoor: APP开门页面
      |--happiness: 悦分享
build: 共建计划
      |--index: 共建计划主页
      |--green: 小区绿化
      |exchange: 闲置物品兑换
      |     |--index: 兑换主页
      |     |--pblish: 发布
      |     |--exchange: 兑换
      |     |--sendOut: 送出的
      |     |--receive: 领取
store: 市场
      |--index: 市场主页
      |--prize: 抽奖(共用之前的抽奖)
public: 公共组件
      |--countdown: 倒计时
      |--loading: 正在加载中
      |--tip: 弹出框
```

## 接口文档