<template>
  <div class="des-build">
    <div class="build-banner">
      <p class="explain">每一个奥克居民，都是奥克城发展的建筑者，历史的创造者。</p>
    </div>
    <div class="general-task">
      <p class="task-explain">你的以下行为，都将为奥克城的发展做出贡献</p>
      <ul class="plan-list">
        <router-link to="/exchange" tag="li">
          <img class="icon" src="https://img1.aylives.cn/8ba0229ab745411d8cf11b65f361f48c.png" alt="">
          <div class="left">
            <p> 闲置免费互换 </p>
            <p class="rule"> +6～15算力 </p>
          </div>
          <div class="right">
            <span> 建设环保之城 </span>
            <img src="../../assets/arrow.png" alt="">
          </div>
        </router-link>
        <li @click="getSteps">
          <img class="icon" src="https://img1.aylives.cn/9f16d704770d4923afd7ebfcf7e9205a.png" alt="">
          <div class="left">
            <p> 悦跑 </p>
            <p class="rule"> +3～6算力 </p>
          </div>
          <div class="right">
            <span> 建设健康之城 </span>
            <img src="../../assets/arrow.png" alt="">
          </div>
        </li>
        <li @click="tips" v-for="(item, index) of planBuildList" :key="index+'-key'">
          <img class="icon" :src="item.icon" alt="">
          <div class="left">
            <p>{{item.content}}</p>
            <p class="rule">{{item.rule}}</p>
          </div>
          <div class="right">
            <span>{{item.cityType}}</span>
            <img src="../../assets/arrow.png" alt="">
          </div>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'build',
  data () {
    return {
      token: '',
      roomId: '',
      num: 0,
      owner: 0,
      isSigned: false,
      showSign: false,
      planBuildList:[
        {path: '#', icon: 'https://img1.aylives.cn/7dc8afdf26474cd493ea599d1b1e4cc0.png', content: '邻居串门', rule: '+3算力', cityType: '建设和谐之城'},
        {path: '#', icon: 'https://img1.aylives.cn/c9218154e0124ea2a4e756f1a7b7adeb.png', content: '小区绿化', rule: '+3算力', cityType: '建设绿色之城'},
      ]
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    getSteps() {
      let donateUrl = 'https://h5.aylives.cn/points/#/donateSteps'
      if (Util.isIos) {
        window.webkit.messageHandlers.openDonateStepH5.postMessage({donateUrl: donateUrl})
      } else if (Util.isAndroid) {
        window.android.openDonateStepH5(donateUrl)
      } else {
        this.$toast("您的手机无法获取步数哦", 1500)
      }
    },
    tips() {
      this.$toast("正在全力建设中，敬请期待", 1500)
    },
  }
}
</script>
<style lang="less" scoped>
.des-build {
  width: 100%;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  text-align: left;
  background: #FFFFFF;
  .build-banner{
    height: 192px;
    background: url("https://img1.aylives.cn/7ced0bc1262d4a4383e8a63d94da02a6.png");
    background-size: cover;
    background-position: center;
    color: #ffffff;
    @media only screen and (min-width: 768px) {
      height: 300px;
      line-height: 80px;
    }
    .explain{
      font-size: 18px;
      line-height: 25px;
      padding: 70px 20px;
      color: #ffffff;
      @media only screen and (min-width: 768px) {
        font-size: 24px;
        margin-top: 6%;
      }
    }
  }
  .general-task{
    @media only screen and (min-width: 768px) {
      font-size: 30px;
      line-height: 52px;
    }
    .task-explain{
      font-size: 16px;
      line-height: 25px;
      margin: 22px 20px 30px;
      @media only screen and (min-width: 768px) {
        font-size: 30px;
        line-height: 52px;
      }
    }
    .plan-list {
      font-size: 14px;
      line-height: 24px;
      list-style: none;
      li{
        box-shadow: 0px 0.5px 0px 0px rgba(206,206,206,0.5);
        position: relative;
        margin: 0 20px;
        height: 56px;
        .icon{
          position: absolute;
          left: 0;
          width: 20px;
          height: 20px;
          vertical-align: middle;
          top: 50%;
          transform: translateY(-50%);
          -webkit-transform: translateY(-50%);
          @media only screen and (min-width: 768px) {
            width: 54px;
            height: 54px;
          }
        }
        .left{
          position: absolute;
          vertical-align: middle;
          text-align: left;
          align-items: center;
          line-height: 18px;
          left: 36px;
          top: 50%;
          transform: translateY(-50%);
          -webkit-transform: translateY(-50%);
          .rule{
            font-size: 12px;
            color: #FF954D;
          }
        }
        .right{
          position: absolute;
          right: 0;
          line-height: 66px;
          img{
            vertical-align: middle;
            width: 5px;
            height: 11px;
            margin-left: 12px;
          }
        }
      }
    }
  }
}

</style>
