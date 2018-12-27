<template>
  <div class="des-build">
    <div class="build-banner">
      <p class="explain">奥市，立于奥克城之初，八街九陌，熙来攘往，举目望青楼画阁，俯身阅品类之盛，满目琳琅，集五湖珍奇，齐四海异宝，皆归奥市。</p>
    </div>
    <div class="general-task">
      <p class="task-explain"> </p>
      <ul class="plan-list">
        <li @click="jumpToPrize">
          <img class="icon" src="https://img1.aylives.cn/8ba0229ab745411d8cf11b65f361f48c.png" alt="">
          <div class="left">
            <p> 幸运抽奖 </p>
            <p class="rule">  </p>
          </div>
          <div class="right">
            <span> 九宫格Go起来 </span>
            <img src="../../assets/image/arrow.png" alt="">
          </div>
        </li>
        <li @click="tips">
          <img class="icon" src="https://img1.aylives.cn/9f16d704770d4923afd7ebfcf7e9205a.png" alt="">
          <div class="left">
            <p> 换乐兑礼 </p>
            <p class="rule">  </p>
          </div>
          <div class="right">
            <span> 医美体验，精美实物 </span>
            <img src="../../assets/image/arrow.png" alt="">
          </div>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
import api from "../../config/api.js"
import Util from "../../utils/utils"
import jsInteractive from "../../utils/jsInteractive"

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
      donateUrl: "https://h5.aylives.cn/points/#/donateSteps",
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
    jumpToPrize() {
      this.$toast("即将跳到抽奖", 2000)
    },
    getSteps() {
      jsInteractive.jsToApp("getSteps", this.stepToast, this.donateUrl)
    },
    stepToast() {
      this.$toast("您的手机暂时无法获取步数哦，请将您的App更新到最新版本", 2000)
    },
    tips() {
      this.$toast("正在全力建设中，敬请期待", 2000)
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
      font-size: 14px;
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
