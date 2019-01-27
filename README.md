# 移动端项目

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
      |--------: 我的邀请码（share）
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
      |--green: 小区绿化（二期开发）
      |exchange: 闲置物品兑换
      |     |--index: 兑换主页
      |     |--push: 发布界面
      |     |--exchange: 兑换物品页面
      |     |--publish: 我发布的
      |     |--productDetail: 宝贝详情
      |     |--receive: 我领到的
store: 市场
      |--index: 市场主页
      |--luckywheel: 幸运大转盘（抽奖）
      |--store
parking: 停车缴费
      |--parking: 停车缴费主页
      |--inputBoard: 车牌输入框
      |--keyboard: 车牌输入定制键盘
public: 公共组件
      |--countdown: 倒计时
      |--loading: 正在加载中
      |--tipModel: 提示弹出框
      |--selectModel: 选择弹出框
      |--swiperBanner: 轮播banner组件
      |--iconfront: 矢量图标实例
```

## 接口文档