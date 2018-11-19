<template>
  <div class="des-index">
    <div class="header">
      <div class="castle">
        <div class="self-castle">
          <img src="../assets/castle.png" alt="">
          <p class="title">我的城堡</p>
        </div>
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
        <li class="introduce-data">
          <span>排名</span>
        </li>
        <li class="introduce-data total-point">
          <span>秘籍</span>
        </li>
        <li class="introduce-data total-point">
          <span>共建计划</span>
        </li>
      </ul>
    </div>

    <ul class="vip-animation">
      <li class="animation" v-for="(item, index) in userInfo" :key="index">
        <img class="bubble" :id="index" src="../assets/stone.png" alt="">
        <span class="text">{{item.text}}</span>
      </li>
    </ul>

    <div class="content">
    </div>

    <div class="footer">
      <div class="des-btn" @click="getPoints">
        <img src="../assets/energy.png" alt="">
        <p>获取能量</p>
      </div>
      <div class="des-btn btn">
        <img src="../assets/share.png" alt="">
        <p>邀请好友</p>
      </div>
      <div class="des-btn btn">
        <img src="../assets/store.png" alt="">
        <p>市场</p>
      </div>
    </div>
  </div>
</template>

<script>
import loading from "./loading.vue"
import api from "../config/api.js"
import Util from "../utils/utils"

export default {
  components: {
    loading
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
      uploaded: false,
      loading: true,
      tip: false,
      userInfo:[{
        text: 1
      },
      {
        text: 2
      },
      {
        text: 3
      },
      {
        text: 4
      },
      {
        text: 5
      },
      {
        text: 6
      },
      {
        text: 7
      },
      {
        text: 8
      },
      {
        text: 9
      },
      {
        text: 10
      },
      {
        text: 11
      },
      {
        text: 12
      },
      {
        text: 13
      },
      {
        text: 14
      },
      {
        text: 15
      },
      {
        text: 16
      }
      ]
    }
  },
  created() {
    this.init()
  },
  mounted() {
    if (this.currentRoomId === 0) {
      this.$toast('您还不是奥园业主，请先认证房屋。', 1500)
    } else {
      this.getParam()
    }
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
    getPoints () {
      this.$router.push({ path: "/getPoints"})
    }
  }
};
</script>

<style scoped lang="less">
.des-index {
  position: fixed;
  width: 100%;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-weight: normal;
  // overflow: hidden;
  background: url("https://img1.aylives.cn/f66f947d9b754a6b8f78c3831e1b7ccc.png"); //667
  // background: url("https://img1.aylives.cn/461c200bee644dd1ab915c924398ba8a.png"); //812
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  @media only screen and (device-width: 375px) and (device-height: 812px) {
    background: url("https://img1.aylives.cn/461c200bee644dd1ab915c924398ba8a.png");
  }
  .header{
    // position: relative;
    // border: 1px solid red;
    width: 100%;
    height: 20%;
    .castle{
      // width: 53px;
      color: #010101;
      // height: 38px;
      text-align: center;
      margin-top: 5%;
      margin-left: 4%;
      .self-castle{
        position: absolute;
        img{
          width: 53px;
          height: 38px;
          @media only screen and (min-width: 768px) {
            width: 120px;
            height: 98px;
          }
        }
        .title{
          font-size: 10px;
          @media only screen and (min-width: 768px) {
            font-size: 24px;
          }
        }
      }
      .point-info{
        position: absolute;
        width: 100%;
        text-align: center;
        list-style: none;
        font-size: 10px;
        color: #F4F8FF;
        margin-left: 18%;
        // left: 16%;
        text-align: left;
        @media only screen and (min-width: 768px) {
          font-size: 24px;
        }
        li{
          position: absolute;
          display: inline-block;
          width: auto;
          // height: 33px;
          line-height: 22px;
          background:linear-gradient(0deg,rgba(113,146,255,1) 0%,rgba(35,224,254,1) 100%);
          border-radius:10px;
          @media only screen and (min-width: 768px) {
            border-radius: 30px;
            line-height: 66px;
            height: 66px;
          }
        }
        .point-data{
          // margin-top: 2%;
          padding-left: 3%;
          padding-right: 3%;
        }
        .total-point{
          margin-top: 10%;
        }
      }
    }
    .introduce{
      display: flex;
      flex-direction: column;
      position: absolute;
      z-index: 500;
      top: 1%;
      right: -2%;
      width: 20%;
      // height: 100px;
      // border: 1px solid black;
      text-align: left;
      list-style: none;
      font-size: 10px;
      color: #F4F8FF;
      text-align: center;
      padding: 10px 0;
      @media only screen and (min-width: 768px) {
        font-size: 24px;
      }
      li{
        display: block;
        flex: 1;
        // padding: 5px 0;
        // font-size: 10px;
        color: #ffffff;
        line-height: 22px;
        background:linear-gradient(0deg,rgba(255,164,101,1) 0%,rgba(255,190,127,1) 100%);
        border-radius: 8px;
        @media only screen and (min-width: 768px) {
          border-radius: 30px;
          line-height: 66px;
          height: 66px;
        }
      }
      .introduce-data{
        padding-left: 6%;
        padding-right: 4%;
      }
      li:nth-child(2){
        margin-top: 20%;
        margin-bottom: 20%;
      }
    }
  }
  .vip-animation{
    // border: 1px solid red;
    width: 100%;
    height: 20%;
    position: relative;
    .animation{
      animation: bubble 2s infinite linear alternate;
      border: 1px solid black;
      position: absolute;
      animation-fill-mode: both; /*播放后的状态*/
      transform-origin: center bottom; /*设置动画旋转元素的基点为：居中靠下*/
      cursor: pointer;
      .bubble{
        position: absolute;
        width: 20px;
        height: 17px;
        // position: relative;
        left: 50%;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
      }
      .text{
        position: absolute;
        // line-height: 14px;
        font-size: 12px;
        margin-top: 12px;
      }
    }
    .animation:hover{
      animation-duration:5s; /*动画时间*/
      // animation-fill-mode: both; /*播放后的状态*/
      animation-name: hidder;
      animation-direction: alternate;
      animation-timing-function:linear;
      animation-iteration-count: 1; /*动作循环的次数：infinite 无限循环*/
      transform-origin: center bottom; /*设置动画旋转元素的基点为：居中靠下*/
      cursor: pointer;
    }
    li{
      list-style: none;
      display: inline-block;
    }
    li:nth-child(1){
      margin-left: 66%;
    }
    li:nth-child(2){
      margin-left: 21%;
    }
    li:nth-child(3){
      margin-left:78%;
    }
    li:nth-child(4){
      margin-left: 10%;
    }
    li:nth-child(5){
      margin-left: 24%;
    }
    li:nth-child(6){
      margin-left: 92%;
    }
    li:nth-child(7){
      margin-left: 50%;
    }
    li:nth-child(8){
      margin-left: 68%;
    }
    li:nth-child(9){
      margin-left: 57%;
    }
    li:nth-child(10){
      margin-left: 31%;
    }
    li:nth-child(11){
      margin-left: 53%;
    }
    li:nth-child(12){
      margin-left: 44%;
    }
    li:nth-child(13){
      margin-left:37%;
    }
    li:nth-child(14){
      margin-left:17%;
    }
    li:nth-child(15){
      margin-left:84%;
    }
    li:nth-child(16){
      margin-left: 6%;
    }
    li:nth-child(1),li:nth-child(16){
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
    li:nth-child(4),li:nth-child(13){
      -webkit-animation-delay: -2.5s;
      -moz-animation-delay: -2.5s;
      -o-animation-delay: -2.5s;
      animation-delay: -2.5s;
    }
    li:nth-child(5),li:nth-child(9){
      -webkit-animation-delay: -1.3s;
      -moz-animation-delay: -1.3s;
      -o-animation-delay: -1.3s;
      animation-delay: -1.3s;
    }
    li:nth-child(11){
      -webkit-animation-delay: 1s;
      -moz-animation-delay: 1s;
      -o-animation-delay: 1s;
      animation-delay: 1s;
    }
    li:nth-child(6),li:nth-child(15){
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
    li:nth-child(8),li:nth-child(14){
      -webkit-animation-delay: -0.7s;
      -moz-animation-delay: -0.7s;
      -o-animation-delay: -0.7s;
      animation-delay: -0.7s;
    }
  }
  
  // .content{
  //   border: 1px solid yellow;
  //   height: 44%;
  // }
  .footer{
    // border: 1px solid black;
    height: 11%;
    display: flex;
    position: absolute;
    z-index: 500;
    bottom: 0;
    width: 100%;
    .des-btn{
      display: block;
      flex: 1;
      padding: 5px 0;
      font-size: 10px;
      color: blue;
      text-align: center;
      // position: absolute;
      // width: 40px;
      img{
        // width: 40px;
        height: 60%;
      }
    }
  }
}

@keyframes bubble {
  from {
    left: 0;
    top: 0;
  } to {
    left:0;
    top: 70%;
  }
}
@-webkit-keyframes bubble {
  from {
    left: 0;
    top: 0;
  } to {
    left: 0;
    top: 70%;
  }
}
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
