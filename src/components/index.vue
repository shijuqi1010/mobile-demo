<template>
  <div class="des-index">
    <div class="header">
      <div class="castle">
        <router-link to="/personalCenter" class="self-castle">
          <img src="../assets/castle.png" alt="">
          <p class="title">我的城堡</p>
        </router-link>
        <ul class="point-info">
          <li class="point-data">
            <span>奥克积分：{{ points }}</span>
          </li>
          <li class="point-data total-point">
            <span>算力：{{ powers }}</span>
          </li>
        </ul>
      </div>
      <ul class="introduce">
        <li class="introduce-data">
          <router-link to="/rank">
            排名
          </router-link>
        </li>
        <li class="introduce-data total-point">
          <router-link to="/explain">
            奥克基地
          </router-link>
        </li>
      </ul>
    </div>

    <transition name="fade">
    <ul class="vip-animation" v-show="showFirst && stoneList">
      <li class="animation" v-for="(item, index) in userInfo1" :key="index" :id="`id${item.id}`" @click="collect(item)">
        <img class="bubble" src="../assets/stone.png" alt="">
        <span class="text">{{item.text}}</span>
      </li>
    </ul>
    </transition>

    <transition name="fade">
    <ul class="vip-animation" v-show="showSecond && stoneList">
      <li class="animation" v-for="(item, index) in userInfo2" :key="index" :id="`id${item.id}`" @click="collect(item)">
        <img class="bubble" src="../assets/stone.png" alt="">
        <span class="text">{{item.text}}</span>
      </li>
    </ul>
    </transition>

    <transition name="fade">
    <ul class="vip-animation" v-show="showWait && !stoneList">
      <li class="animation">
        <img class="bubble" src="../assets/stone.png" alt="">
        <countdown class="count-down" :time="countDownTime"></countdown>
      </li>
    </ul>
    </transition>

    <div class="content">
    </div>

    <div class="footer">
      <router-link class="des-btn" to="/points">
        <img src="../assets/energy.png">
        <p>获取能量</p>
      </router-link>
      <router-link class="des-btn btn" to="/build">
        <img src="../assets/build.png">
        <p>共建计划</p>
      </router-link>
      <router-link class="des-btn btn" to="/share">
        <img src="../assets/share.png">
        <p>邀请好友</p>
      </router-link>
      <router-link class="des-btn btn" to="/store">
        <img src="../assets/store.png">
        <p>市场</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import api from "../config/api.js"
import Util from "../utils/utils"
import countdown from "./public/countdown.vue"
import  Velocity from 'velocity-animate'
import { Toast} from 'vux'

export default {
  components: {
    Toast,
    countdown
  },
  data() {
    return {
      token: "",
      currentRoomId: "",
      points: 0,
      powers: 0,
      stoneList: null,
      countDownTime: 0,
      city: "",
      area: "",
      status: "",
      name: "",
      num: "",
      id: "",
      clickAble: true,
      loading: true,
      tip: false,
      count: 0,
      showFirst: true,
      showSecond: false,
      showWait: true,
      userInfo1:[{
        id: 1,
        text: 10000
      },
      {
        id: 2,
        text: 20000
      },
      {
        id: 3,
        text: 30000
      },
      {
        id: 4,
        text: 40000
      },
      {
        id: 5,
        text: 50000
      },
      {
        id: 6,
        text: 60000
      }
      ],
      userInfo2:[{
        id: 11,
        text: 11111
      },
      {
        id: 12,
        text: 21111
      },
      {
        id: 13,
        text: 31111
      },
      {
        id: 14,
        text: 41111
      },
      {
        id: 15,
        text: 51111
      },
      {
        id: 16,
        text: 61111
      }
      ]
    }
  },
  created() {
    this.init()
  },
  computed: {
  },
  watch: {
  },
  mounted() {
    this.getParam()
  },
  methods: {
    init() {
      this.getToken()
      this.getRoomId()
    },
    getToken() {
      this.token = Util.pageUrlGetValue("token")
      Util.setCookie("token", this.token, "aylives.cn")
    },
    getRoomId() {
      this.currentRoomId = Util.pageUrlGetValue("currentRoomId")
      Util.setCookie("currentRoomId", this.currentRoomId, "aylives.cn")
    },
    getParam() {
      api.Axios.get(api.MAIN).then(res => {
        console.log('res', res);
        if (res.data.code === 200) {
          this.points = res.data.data.aokeUser.aokeWallet.aokePoints
          this.powers = res.data.data.aokeUser.aokeWallet.aokePower
          this.stoneList = res.data.data.temporaryPoints
          this.countDownTime = res.data.data.nextGenerateTime
        } else {
          this.$toast(res.data.msg, 1500)
        }
      })
    },
    getStone() {
      api.Axios.get(api.STONE).then(res => {
        if (res.data.code === 200) {
          this.area = res.data.data.agencyName
          this.city = res.data.data.cityName
          this.status = res.data.data.added
          if (this.status) {
            this.$router.push({ path: "/poster" })
          }
        } else {
          this.$toast(res.data.msg, 1500)
        }
      })
    },
    collect (item) {
      let index = item.id
      let oId = document.getElementById(`id${index}`)
      this.count++
      // this.$toast(this.count, 1000)

      //动画
      Velocity(oId,{
        top: 40,
        opacity: 0
      }, {
        duration: 1000,
        complete: function() {
          // oId.parentNode.removeChild(oId)
        }
      })

      //声音
      // Util.sound()

      // this.$toasted.show('hello billo', {
      //   position: 'top-center',
      //   duration: 3000})

      this.refresh(item.text)

      if (this.count === 6) {
        this.showFirst = false
        this.showSecond = true
      }
      if (this.count === 12) {
        this.showSecond = false
        this.showWait = true
      }
    },
    refresh (point) {
      this.points += point
    },
    jumpToRank () {
      this.$router.push({ path: "/rank"})
    }
  }
};
</script>

<style scoped lang="less">
.des-index {
  position: fixed;
  width: 100%;
  height: 100%;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-weight: normal;
  overflow: hidden;
  background-image: url("https://img1.aylives.cn/7fce378fdd1448838838ee553ff248ca.png"); //667
  background-repeat: no-repeat;
  background-position: center center;
  // background-size: 100% auto;
  background-size: cover;
  @media only screen and (device-width: 375px) and (device-height: 812px) {
    // background-image: url("https://img1.aylives.cn/0472e8034ba54187ba399ca916623a17.png");
  }
  @media only screen and (min-width: 768px) {
    background-image: url("https://img1.aylives.cn/2e0ce14d7a1e44d6b4359389549f3b55.png");
    font-size: 24px;
  }
  .header{
    position: relative;
    top: 7%;
    width: 100%;
    height: 22%;
    color: #F4F8FF;
    font-size: 10px;
    @media only screen and (min-width: 768px) {
      font-size: 24px;
    }
    .castle{
      position: absolute;
      // border: 1px solid red;
      // box-sizing: border-box;
      width: 60%;
      text-align: left;
      margin-left: 4%;
      .self-castle{
        position: absolute;
        text-align: center;
        img{
          width: 53px;
          height: 38px;
          @media only screen and (min-width: 768px) {
            width: 120px;
            height: 98px;
          }
        }
        .title{
          margin: auto;
          color: #010101;
          font-weight: bold;
        }
      }
      .point-info{
        width: 60%;
        // border: 1px solid black;
        // box-sizing: border-box;
        position: absolute;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        list-style: none;
        font-size: 10px;
        margin-left: 66px;
        text-align: left;
        @media only screen and (min-width: 768px) {
          font-size: 24px;
          margin-left: 140px;
        }
        li{
          position: absolute;
          width: auto;
          line-height: 22px;
          background: linear-gradient(0deg,rgba(113,146,255,1) 0%,rgba(35,224,254,1) 100%);
          border-radius: 10px;
          @media only screen and (min-width: 768px) {
            border-radius: 30px;
            line-height: 50px;
          }
        }
        .point-data{
          padding-left: 5%;
          padding-right: 5%;
        }
        .total-point{
          margin-top: 34px;
          @media only screen and (min-width: 768px) {
            margin-top: 24%;
          }
        }
      }
    }
    .introduce{
      position: absolute;
      display: flex;
      display: -webkit-flex;
      flex-direction: column;
      z-index: 500;
      // top: 24%;
      right: -2%;
      width: 20%;
      list-style: none;
      text-align: center;
      @media only screen and (min-width: 768px) {
        font-size: 24px;
      }
      li{
        display: block;
        flex: 1;
        line-height: 24px;
        background: linear-gradient(0deg,rgba(255,104,0,1) 0%,rgba(255,158,63,1) 100%);
        border-radius: 10px;
        @media only screen and (min-width: 768px) {
          border-radius: 30px;
          line-height: 42px;
        }
      }
      .introduce-data{
        padding-left: 6%;
        padding-right: 4%;
      }
      li:nth-child(2){
        margin-top: 26%;
        @media only screen and (max-width: 340px) {
          margin-top: 10%;
        }
        @media only screen and (min-width: 768px) {
          margin-top: 15%;
        }
      }
    }
  }
  .vip-animation{
    width: 100%;
    height: 19%;
    color: #ffffff;
    .animation{
      position: absolute;
      -webkit-text-size-adjust: none; 
      font-size: 6px;
      // font-size: 12px;
      text-align: center;
      animation: bubble 5s infinite linear alternate;
      -webkit-animation: bubble 5s infinite linear alternate;
      -moz-animation: bubble 5s infinite linear alternate;
      -o-animation: bubble 5s infinite linear alternate;
      animation-fill-mode: both; /*播放后的状态*/
      transform-origin: center bottom; /*设置动画旋转元素的基点为：居中靠下*/
      cursor: pointer;
      .bubble{
        // position: absolute;
        width: 20px;
        height: 17px;
      }
      .text{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
      }
      .count-down{
        position: absolute;
        width: 80px;
        left: 50%;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
      }
      @media only screen and (max-width: 320px) {
        font-size: 5px;
        .bubble{
          width: 16px;
          height: 14px;
        }
      }
      @media only screen and (min-width: 768px) {
        font-size: 16px;
        .bubble{
          width: 42px;
          height: 36px;
        }
      }
    }
    li{
      list-style: none;
      display: inline-block;
    }
    li:nth-child(1){
      top: 24%;
      left: 50%;
    }
    li:nth-child(2){
      top: 36%;
      left: 53%;
    }
    li:nth-child(3){
      top: 28%;
      left: 68%;
    }
    li:nth-child(4){
      top: 30%;
      left: 36%;
    }
    li:nth-child(5){
      top: 23%;
      left: 28%;
    }
    li:nth-child(6){
      top: 27%;
      left: 6%;
    }
  }
  
  .content{
    height: 49%;
  }
  .footer{
    position: absolute;
    height: 12%;
    display: flex;
    display: -webkit-flex;
    display: -ms-flex;
    z-index: 500;
    bottom: 0;
    width: 100%;
    color: #FFFFFF;
    text-align: center;
    font-size: 10px;
    .des-btn{
      display: block;
      font-size: 12px;
      flex: 1;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      padding: 5px 0;
      height: 100%;
      @media only screen and (min-width: 768px) {
        font-size: 24px;
      }
      img{
        height: 50%;
        // width: 40px;
        // height: 40px;
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0.2;
}
</style>
