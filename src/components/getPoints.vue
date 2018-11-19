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
    <div class="container">

    </div>
    <div class="content">

    </div>
    <div class="footer">
      <div class="des-btn">
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
      tip: false
    };
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
    create() {
      api.Axios.post(api.CREATE(this.photoUrl, this.name, this.num)).then(
        res => {
          if (res.data.code === 200) {
            this.id = res.data.data.id
            this.$router.push({ path: "/poster"})
          } else {
            this.$toast(res.data.msg, 2000)
          }
        }
      )
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
  // height: 667px;
  font-weight: normal;
  overflow: hidden;
  background: url("https://img1.aylives.cn/f66f947d9b754a6b8f78c3831e1b7ccc.png");
  // background: url("奥克城背景");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  // @media only screen and (max-width: 320px) {
  //   height: 569px;
  // }
  // @media only screen and (min-width: 360px) {
  //   height: 640px;
  // }
  // @media only screen and (min-width: 365px) {
  //   height: 649px;
  // }
  // @media only screen and (min-width: 370px) {
  //   height: 658px;
  // }
  // @media only screen and (min-width: 375px) {
  //   height: 667px;
  // }
  // @media only screen and (min-width: 380px) {
  //   height: 676px;
  // }
  // @media only screen and (min-width: 385px) {
  //   height: 685px;
  // }
  // @media only screen and (min-width: 390px) {
  //   height: 694px;
  // }
  // @media only screen and (min-width: 395px) {
  //   height: 702px;
  // }
  // @media only screen and (min-width: 400px) {
  //   height: 711px;
  // }
  // @media only screen and (min-width: 411px) {
  //   height: 731px;
  // }
  // @media only screen and (device-width: 411px) and (device-height: 823px) {
  //   height: 823px;
  // }
  // @media only screen and (min-width: 414px) {
  //   height: 736px;
  // }
  // @media only screen and (min-width: 768px) {
  //   height: 1366px;
  // }
  // @media only screen and (min-width: 1024px) {
  //   height: 1821px;
  // }
  .header{
    // position: relative;
    border: 1px solid red;
    width: 100%;
    height: 21%;
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
      top: 3%;
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
        margin-top: 6%;
        padding-left: 6%;
        padding-right: 4%;
      }
      // .total-point{
      //   margin-top: 20%;
      // }
    }
  }
  .container{
    border: 1px solid red;
    width: 100%;
    height: 18%;
    // margin-top: 38%;
  }
  .content{
    border: 1px solid yellow;
    height: 48%;
  }
  .footer{
    border: 1px solid black;
    height: 12%;
    display: flex;
    position: absolute;
    z-index: 500;
    bottom: 0;
    width: 100%;
    // background-color: #F7F7FA;
    // bottom: 10%;
    // border: 1px solid black;
    width: 100%;
    // height: 30%;
    .des-btn{
      display: block;
      flex: 1;
      padding: 5px 0;
      font-size: 10;
      color: blue;
      text-align: center;
      // position: absolute;
      // width: 40px;
      img{
        // width: 40px;
        height: 40px;
      }
    }
  }
}
</style>
