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
            <span>算力：{{ totalPoints }}</span>
          </li>
        </ul>
      </div>
      <ul class="introduce">
        <li class="introduce-data" @click="jumpToRank">
          <span>排名</span>
        </li>
        <li class="introduce-data total-point">
          <span>共建计划</span>
        </li>
      </ul>
    </div>

    <transition name="fade" v-if="showFirst">
    <ul class="vip-animation">
      <li class="animation" v-for="(item, index) in userInfo1" :key="index" :id="`id${item.id}`" @click="collect(item)">
        <img class="bubble" :id="index" src="../assets/stone.png" alt="">
        <span class="text">{{item.text}}</span>
      </li>
    </ul>
    </transition>

    <transition name="fade" v-else-if="showSecond">
    <ul class="vip-animation" >
      <li class="animation" v-for="(item, index) in userInfo2" :key="index" :id="`id${item.id}`" @click="collect(item)">
        <img class="bubble" :id="index" src="../assets/stone.png" alt="">
        <span class="text">{{item.text}}</span>
      </li>
    </ul>
    </transition>

    <transition name="fade" v-else>
    <ul class="vip-animation">
      <li class="animation">
        <img class="bubble" src="../assets/stone.png" alt="">
        <countdown class="count-down" :time='countDownTime'></countdown>
      </li>
    </ul>
    </transition>

    <div class="content">
    </div>

    <div class="footer">
      <router-link class="des-btn" to="/getPoints">
        <img src="../assets/energy.png">
        <p>获取能量</p>
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
import loading from "./loading.vue"
import countdown from "./countdown.vue"
import  Velocity from 'velocity-animate'

export default {
  components: {
    loading,
    countdown
  },
  data() {
    return {
      token: "",
      currentRoomId: "",
      uploadText: "",
      points: 0,
      totalPoints: 0,
      city: "",
      area: "",
      status: "",
      name: "",
      num: "",
      id: "",
      clickAble: true,
      loading: true,
      tip: false,
      // showBubble: true,
      countDownTime: 600,
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
        id: 1,
        text: 11111
      },
      {
        id: 2,
        text: 21111
      },
      {
        id: 3,
        text: 31111
      },
      {
        id: 4,
        text: 41111
      },
      {
        id: 5,
        text: 51111
      },
      {
        id: 6,
        text: 61111
      }
      ]
    }
  },
  created() {
    this.init()
  },
  computed: {
    showFirst () {
      if (this.userInfo1 && this.userInfo1.length <= 6) {
        return true
      }
    },
    showSecond () {
      if (this.showFirst) {
        return false
      }
    }
  },
  // watch: {
  //   showFirst(newVal) {
  //     if (this.userInfo1 && this.userInfo1.length <= 6) {
  //       return
  //     }
  //   }
  // },
  mounted() {
    // if (this.currentRoomId === 0) {
    //   this.$toast('您还不是奥园业主，请先认证房屋。', 1500)
    // } else {
    //   this.getParam()
    // }
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
      api.Axios.get(api.USERINFO).then(res => {
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
      if (this.showFirst) {
        if (this.userInfo1.length > 1) {
          this.userInfo1.length--
          console.log("------", this.userInfo1.length);
        } else {
          this.showFirst = false
          this.showSecond = true
        }
      }

      if (this.showSecond) {
        this.userInfo2.length--
        // if (this.userInfo2.length === 0) {
        //   this.showSecond = false
        // }
      }

      Velocity(oId,
        {
          top: 40,
          opacity: 0
        }, {
        duration: 1000
      })
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
        background:linear-gradient(0deg,rgba(255,164,101,1) 0%,rgba(255,190,127,1) 100%);
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
        @media only screen and (max-width: 320px) {
          margin-top: 12%;
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
    // .animation:hover{
    //   animation-duration: 2s; /*动画时间*/
    //   // animation-fill-mode: both; /*播放后的状态*/
    //   animation-name: hidder;
    //   animation-direction: alternate;
    //   animation-timing-function:linear;
    //   animation-iteration-count: 1; /*动作循环的次数：infinite 无限循环*/
    //   // transform-origin: center bottom; /*设置动画旋转元素的基点为：居中靠下*/
    //   cursor: pointer;
    // }
    li{
      list-style: none;
      display: inline-block;
    }
    li:nth-child(1),li:nth-child(7){
      margin-top: 0;
      margin-left: 0;
    }
    li:nth-child(2),li:nth-child(8){
      margin-top: 11%;
      margin-left: 13%;
    }
    li:nth-child(3),li:nth-child(9){
      margin-top: 4%;
      margin-left: -18%;
    }
    li:nth-child(4),li:nth-child(10){
      margin-top: 13%;
      margin-left: -30%;
    }
    li:nth-child(5),li:nth-child(11){
      margin-top: 23%;
      margin-left: 22%;
      @media only screen and (min-width: 768px) {
        margin-top: 12%;
        margin-left: 0%;
      }
    }
    li:nth-child(6),li:nth-child(12){
      margin-top: 27%;
      margin-left: 6%;
    }
    li:nth-child(1),li:nth-child(11){
      -webkit-animation-delay: -0.1s;
      -moz-animation-delay: -0.1s;
      -o-animation-delay: -0.1s;
      animation-delay: -0.1s;
    }
    li:nth-child(2),li:nth-child(12){
      -webkit-animation-delay: -2.7s;
      -moz-animation-delay: -2.7s;
      -o-animation-delay: -2.7s;
      animation-delay: -2.7s;
    }
    li:nth-child(3),li:nth-child(13){
      -webkit-animation-delay: -1.5s;
      -moz-animation-delay: -1.5s;
      -o-animation-delay: -1.5s;
      animation-delay: -1.5s;
    }
    li:nth-child(4),li:nth-child(14){
      -webkit-animation-delay: -2.5s;
      -moz-animation-delay: -2.5s;
      -o-animation-delay: -2.5s;
      animation-delay: -2.5s;
    }
    li:nth-child(5),li:nth-child(15){
      -webkit-animation-delay: -1.3s;
      -moz-animation-delay: -1.3s;
      -o-animation-delay: -1.3s;
      animation-delay: -1.3s;
    }
    li:nth-child(6),li:nth-child(16){
      -webkit-animation-delay: 1s;
      -moz-animation-delay: 1s;
      -o-animation-delay: 1s;
      animation-delay: 1s;
    }
    li:nth-child(7),li:nth-child(17){
      -webkit-animation-delay: -1s;
      -moz-animation-delay: -1s;
      -o-animation-delay: -1s;
      animation-delay: -1s;
    }
    li:nth-child(7),li:nth-child(10){
      -webkit-animation-delay: -1.8s;
      -moz-animation-delay: -1.8s;
      -o-animation-delay: -1.8s;
      animation-delay: -1.8s;
    }
    li:nth-child(8),li:nth-child(18){
      -webkit-animation-delay: -0.7s;
      -moz-animation-delay: -0.7s;
      -o-animation-delay: -0.7s;
      animation-delay: -0.7s;
    }
  }
  
  .content{
    // border: 1px solid yellow;
    // box-sizing: border-box;
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
        height: 60%;
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
// @keyframes bubble {
//   from {
//     // left: 0;
//     // top: 0;
//     opacity: 1;
//   } to {
//     // left: 10px;
//     // top: 30px;
//     opacity: 0.5;
//   }
// }

@keyframes hidder {
  from {
    left: 10px;
    top: 30px;
    opacity: 1;
  } to {
    left: 10px;
    top: 50px;
    opacity: 0;
  }
}

</style>
