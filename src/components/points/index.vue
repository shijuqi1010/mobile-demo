<template>
  <div class="des-points">
    <div class="points-banner">
      <ul class="top">
        <li>当前算力</li>
        <li>
          <router-link to="/record">
            算力记录
          </router-link>
        </li>
      </ul>
      <p class="center"> {{points}} </p>
      <p class="explain" > 算力越高，获取的奥克积分越多 </p>
    </div>
    <div class="general-task">
      <p class="title">普通任务</p>
      <ul class="des-general">
        <router-link :to="item.path" tag="li" v-for="(item, index) of generalTaskList" :key="index" v-if="((index + 1) % 3 >= 0)">
          <img class="icon" :src="item.icon" alt="">
          <p class="type"> {{item.content}} </p>
          <div class="rule-btn">{{item.rule}}</div>
        </router-link>
        <li @click="getSteps">
          <img class="icon" src="https://img1.aylives.cn/9f16d704770d4923afd7ebfcf7e9205a.png" alt="">
          <p class="type"> 悦跑 </p>
          <div class="rule-btn"> +3～6算力 </div>
        </li>
        <li @click="verifyHouse">
          <img class="icon" src="https://img1.aylives.cn/74384931e9ca4501b903a9f9348b0a3d.png" alt="">
          <p class="type"> 认证房屋 </p>
          <div class="rule-btn"> +60算力 </div>
        </li>
        <li @click="tips">
          <img class="icon" src="https://img1.aylives.cn/b5bf6d5c02d4437cae5b981b71cbfbb4.png" alt="">
          <p class="type"> 租住 </p>
          <div class="rule-btn"> +40算力 </div>
        </li>
      </ul>
    </div>
    <div class="special-task">
      
      <p class="title">专属任务</p>
      <ul class="des-special">
        <li @click="pay">
          <img class="icon" src="https://img1.aylives.cn/160221d2163b46bab2c64760d1075f27.png" alt="">
          <p class="type"> 缴费 </p>
          <div class="rule-btn"> +6算力 </div>
        </li>
        <li @click="openDoor">
          <img class="icon" src="https://img1.aylives.cn/288dcafe8bf844d58759b528b4e63469.png" alt="">
          <p class="type"> APP开门 </p>
          <div class="rule-btn"> +3算力 </div>
        </li>
        <li @click="jumpToHappiness">
          <img class="icon" src="https://img1.aylives.cn/5cdc0db944b042068af4c0af2dd781f4.png" alt="">
          <p class="type"> 悦分享发帖 </p>
          <div class="rule-btn"> +3算力 </div>
        </li>
        <router-link to="/exchange" tag="li">
          <img class="icon" src="https://img1.aylives.cn/8ba0229ab745411d8cf11b65f361f48c.png" alt="">
          <p class="type exchange"> 闲置免费互换 </p>
          <div class="rule-btn"> +6～15算力 </div>
        </router-link>
        <li @click="tips" v-for="(item, index) of planDevList" :key="index+'-key'">
          <img class="icon" :src="item.icon" alt="">
          <p class="type"> {{item.content}} </p>
          <div class="rule-btn">{{item.rule}}</div>
        </li>
      </ul>
    </div>

    <transition name="fade">
    <div class="chooice-pay" v-if="chooicePay">
      <div class="close-block" @click="cancel"></div>
      <ul class="des-chooice">
        <li @click="payForHouse">住宅物业费</li>
        <li @click="payForCar">车位管理费</li>
      </ul>
    </div>
    </transition>
  </div>
</template>

<script>
import api from "../../config/api.js"
import Util from "../../utils/utils"

export default {
  name: 'points',
  data () {
    return {
      token: '',
      currentRoomId: '',
      num: 0,
      owner: 0,
      isSigned: false,
      showSign: false,
      chooicePay: false,
      points: 3883,
      generalTaskList:[
        {path: '/signIn', icon: 'https://img1.aylives.cn/fa21eab5e99549d5b959b112e90008a8.png', content: '签到', rule: '+3～6算力'},
        {path: '/share', icon: 'https://img1.aylives.cn/4827fc99f5cf4cdca26588ed2002ae5e.png', content: '邀请邻居', rule: '+20～40算力'},
        {path: '/attention', icon: 'https://img1.aylives.cn/5e258b091a674bd19a44db401b6294e3.png', content: '关注公众号', rule: '+6～12算力'},
        // {path: '/donateSteps', icon: 'https://img1.aylives.cn/9f16d704770d4923afd7ebfcf7e9205a.png', content: '悦跑', rule: '+3～6算力'},
        // {path: '/#', icon: 'https://img1.aylives.cn/74384931e9ca4501b903a9f9348b0a3d.png', content: '认证房屋', rule: '+60算力'},
        // {path: '/#', icon: 'https://img1.aylives.cn/b5bf6d5c02d4437cae5b981b71cbfbb4.png', content: '租住', rule: '+40算力'},
      ],
      planDevList:[
        {path: '/#', icon: 'https://img1.aylives.cn/c9218154e0124ea2a4e756f1a7b7adeb.png', content: '小区绿化', rule: '+3算力'},
        {path: '/#', icon: 'https://img1.aylives.cn/7dc8afdf26474cd493ea599d1b1e4cc0.png', content: '邻居串门', rule: '+3算力'},
      ]
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    tips() {
      this.$toast("正在全力建设中，敬请期待", 1500)
    },
    jumpToHappiness() {
      this.token = Util.getCookie('token')
      this.currentRoomId = Util.getCookie('currentRoomId')
      window.location.href = `https://h5.aylives.cn/happy/#/happiness?token=${this.token}&currentRoomId=${this.currentRoomId}`
    },
    getSteps() {
      let donateUrl = "https://h5.aylives.cn/points/#/donateSteps"
      if (Util.isIos()) {
        if(window.webkit && window.webkit.messageHandlers) {
          window.webkit.messageHandlers.openDonateStepH5.postMessage({donateUrl: donateUrl})
        }
      } else if (Util.isAndroid()) {
        if (window.android &&  window.android.openDonateStepH5) {
          window.android.openDonateStepH5("https://h5.aylives.cn/points/#/donateSteps")
        }
      } else {
        this.$toast("您的手机暂时无法获取步数哦，请将您的App更新到最新版本", 1500)
      }
    },
    openDoor() {
      if (Util.isIos()) {
        if(window.webkit && window.webkit.messageHandlers) {
          window.webkit.messageHandlers.openDoor.postMessage()
        }
      } else if (Util.isAndroid()) {
        if (window.android &&  window.android.openDoor) {
          window.android.openDoor()
        }
      } else {
        this.$toast("您的手机暂时无法跳转到开扫码功能哦，请将您的App更新到最新版本", 1500)
      }
    },
    verifyHouse() {
      if (Util.isIos()) {
        if(window.webkit && window.webkit.messageHandlers) {
          window.webkit.messageHandlers.verifyHouse.postMessage()
        }
      } else if (Util.isAndroid()) {
        if (window.android &&  window.android.verifyHouse) {
          window.android.verifyHouse()
        }
      } else {
        this.$toast("您的手机暂时无法跳转到认证房屋功能哦，请更新您的App到最新版本", 1500)
      }
    },
    pay() {
      this.chooicePay = true
    },
    cancel() {
      this.chooicePay = false
    },
    payForHouse() {
      if (Util.isIos()) {
        if(window.webkit && window.webkit.messageHandlers) {
          window.webkit.messageHandlers.payHousePropertyFee.postMessage()
        }
      } else if (Util.isAndroid()) {
        if (window.android &&  window.android.payHousePropertyFee) {
          window.android.payHousePropertyFee()
        }
      } else {
        this.$toast("您的手机暂时无法跳转到房屋缴费功能哦，请更新您的App到最新版本", 1500)
      }
    },
    payForCar() {
      if (Util.isIos()) {
        if(window.webkit && window.webkit.messageHandlers) {
          window.webkit.messageHandlers.payCarPropertyFee.postMessage()
        }
      } else if (Util.isAndroid()) {
        if (window.android &&  window.android.payCarPropertyFee) {
          window.android.payCarPropertyFee()
        }
      } else {
        this.$toast("您的手机暂时无法跳转到车位缴费功能哦，请更新您的App到最新版本", 1500)
      }
    },
  }
}
</script>
<style lang="less" scoped>
.des-points {
  width: 100%;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  background:rgba(249,249,249,1);
  .points-banner{
    height: 120px;
    background: url("https://img1.aylives.cn/1d4cb7ada42241b5be8c2f66a250ba65.png");
    background-size: cover;
    background-position: center;
    color: #ffffff;
    @media only screen and (min-width: 768px) {
      height: 300px;
      line-height: 80px;
    }
    .top{
      font-size: 12px;
      list-style: none;
      padding-top: 10px;
      display: flex;
      display: -webkit-flex;
      display: -ms-flex;
      @media only screen and (min-width: 768px) {
        font-size: 24px;
      }
      li{
        display: block;
        flex: 1;
        -webkit-box-flex: 1;
        -ms-flex: 1;
      }
      li:nth-child(1){
        margin-right: 40%;
      }
    }
    .center{
      font-size: 36px;
      line-height: 50px;
      @media only screen and (min-width: 768px) {
        font-size: 50px;
        line-height: 80px;
      }
    }
    .explain{
      font-size: 10px;
      line-height: 20px;
      margin-top: 10px;
      @media only screen and (min-width: 768px) {
        font-size: 24px;
        margin-top: 6%;
      }
    }
  }
  .general-task{
    color: #2F3542;
    font-size: 14px;
    line-height: 24px;
    @media only screen and (min-width: 768px) {
      font-size: 30px;
      line-height: 52px;
    }
    .title{
      font-size: 18px;
      line-height: 25px;
      margin: 20px 0 15px;
      @media only screen and (min-width: 768px) {
        font-size: 30px;
        line-height: 52px;
      }
    }
    .des-general{
      font-size: 14px;
      width: 100%;
      @media only screen and (min-width: 768px) {
        font-size: 24px;
        line-height: 52px;
      }
      li{
        background: #ffffff;
        width: 30%;
        height: 124px;
        margin-bottom: 25px;
        padding-top: 20px;
        // margin-left: 2%; 
        // margin-right: 2%; 
        display: inline-block;
        @media only screen and (min-width: 768px) {
          margin-bottom: 50px;
          padding-top: 40px;
          height: 224px;
        }
        img{
          width: 26px;
          height: 26px;
          @media only screen and (min-width: 768px) {
            width: 60px;
            height: 60px;
          }
        }
        .type{
          padding: 13px;
          line-height: 20px;
          font-size: 14px;
          @media only screen and (min-width: 768px) {
            line-height: 52px;
            font-size: 28px;
          }
        }
        .rule-btn{
          color: #ffffff;
          display: inline-block;
          width: 88%;
          line-height: 22px;
          background: linear-gradient(270deg,rgba(255,104,0,1) 0%,rgba(255,158,63,1) 100%);
          border-radius: 11px;
          @media only screen and (min-width: 768px) {
            line-height: 52px;
            border-radius: 30px;
          }
        }
      }
      li:nth-child(2),li:nth-child(5){
        margin-left: 2.5%; 
        margin-right: 2.5%; 
      }
    }
  }
  .special-task {
    color: #2F3542;
    font-size: 14px;
    line-height: 24px;
    font-size: 14px;
    height: 12%;
    bottom: 0;
    width: 100%;
    text-align: center;
    .title{
      font-size: 18px;
      line-height: 25px;
      margin: 15px 0;
      @media only screen and (min-width: 768px) {
        font-size: 30px;
        line-height: 52px;
      }
    }
    .des-special{
      list-style: none;
      // position: absolute;
      // height: 12%;
      width: 100%;
      @media only screen and (min-width: 768px) {
        font-size: 24px;
        line-height: 52px;
      }
      li{
        background: #ffffff;
        width: 30%;
        height: 124px;
        // border: 1px solid red;
        // box-shadow: 0px 0px 4px 0px rgba(183,183,183,0.5);
        margin-bottom: 25px;
        padding-top: 20px;
        // margin-left: 2%; 
        // margin-right: 2%; 
        // box-sizing: border-box;
        display: inline-block;
        @media only screen and (min-width: 768px) {
          margin-bottom: 50px;
          padding-top: 40px;
          height: 224px;
        }
        img{
          width: 26px;
          height: 26px;
          @media only screen and (min-width: 768px) {
            width: 60px;
            height: 60px;
          }
        }
        .type{
          padding: 13px;
          line-height: 20px;
          font-size: 14px;
          @media only screen and (min-width: 768px) {
            line-height: 52px;
            font-size: 28px;
          }
        }
        .exchange{
          @media only screen and (max-width: 360px) {
            padding: 12px;
            font-size: 12px;
          }
        }
        .rule-btn{
          color: #ffffff;
          display: inline-block;
          width: 88%;
          line-height: 22px;
          background: linear-gradient(270deg,rgba(255,104,0,1) 0%,rgba(255,158,63,1) 100%);
          border-radius: 11px;
          @media only screen and (min-width: 768px) {
            line-height: 52px;
            border-radius: 30px;
          }
        }
      }
      li:nth-child(2),li:nth-child(5){
        margin-left: 2.5%; 
        margin-right: 2.5%; 
      }
    }
  }
  .chooice-pay{
    position:fixed;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 9;
    background: rgba(0,0,0,0.5);
    .close-block {
      position:absolute;
      width: 100%;
      height: 100%;
      z-index: 99;
    }
    .des-chooice{
      position:absolute;
      background: #ffffff;
      width: 86%;
      z-index: 999;
      // color: #2F3542;
      font-size: 16px;
      line-height: 24px;
      padding-top: 20px;
      border-radius: 10px;
      list-style: none;
      top: 40%;
      left: 50%;
      transform: translateX(-50%);
      @media only screen and (min-width: 768px) {
        padding-top: 50px;
        font-size: 24px;
        line-height: 52px;
      }
      li{
        // width: 26%;
        height: 30px;
        box-shadow:0px 0.5px 0px 0px rgba(206,206,206,0.5);
        margin-bottom: 20px;
        text-align: center;
        // margin-left: 5.5%;
        @media only screen and (min-width: 768px) {
          margin-bottom: 50px;
          height: 66px;
        }
        .type{
          line-height: 30px;
          font-size: 14px;
          @media only screen and (min-width: 768px) {
            line-height: 66px;
            font-size: 30px;
          }
        }
      }
      li:hover,li:active{
        color: #FF6800;
      }
    }
  }
}

</style>
