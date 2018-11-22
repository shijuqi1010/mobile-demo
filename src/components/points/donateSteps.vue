<template>
  <div class="des-run">
    <div class="run-object">
      <ul class="run-info">
        <li class="run-data">
          <span>今日已获得积分：{{ points }}</span>
        </li>
        <li class="run-data total-point">
          <span>累计获得积分：{{ totalPoints }}</span>
        </li>
      </ul>
      <x-progress class="run-progress" :percent="goalPercent" :show-cancel="false" ></x-progress>
      <div class="run-text">
        <p class="text" v-if="todaySteps < totalSteps">今天我跑了{{ todaySteps }}步，还差{{ leftSteps }}步抵达上限</p>
        <p class="text" v-else>今天我跑了{{ todaySteps }}步，已达到上限啦！</p>
      </div>
    </div>
    <div v-if="clickAble" class="run-btn" @click="getPoints">步数兑换积分</div>
    <div v-else class="run-btn-disable">今日已完成积分兑换</div>
  </div>
</template>

<script>
// import { XCircle} from 'vux'
import Api from '../../config/api.js'
import Util from '../../utils/utils'
import XProgress from './x-progress/index.vue'
export default {
  components: {
    // XCircle,
    XProgress
  },
  data () {
    return {
      token: '',
      currentRoomId: '',
      todaySteps: 0,
      totalSteps: 12000,
      encyptSteps: 0,
      currentTime: '',
      donateData: '',
      donateSteps: 0,
      communityDonateSteps: 0,
      rank: 0,
      points: 0,
      totalPoints: 0,
      isDonated: false
    }
  },
  created () {
    this.init()
  },
  mounted () {
  },
  computed: {
    leftSteps () {
      return this.totalSteps - this.todaySteps
    },
    goalPercent () {
      if (this.todaySteps < this.totalSteps) {
        return this.todaySteps / this.totalSteps * 100
      } else {
        return 100
      }
    },
    clickAble () {
      if (!this.isDonated) {
        return true
      } else {
        return false
      }
    }
  },
  created() {
    this.init()
  },
  mounted () {
    if (this.currentRoomId === 0) {
      this.$toast('您还不是奥园业主，请先认证房屋。', 2000)
    } else {
      this.getParam()
    }
  },
  methods: {
    init () {
      this.getToken()
      this.getRoomId()
      this.todaySteps = Util.pageUrlGetValue('steps')
      this.encyptSteps = Util.pageUrlGetValue('encyptSteps')
      this.currentTime = Util.pageUrlGetValue('currentTime')
    },
    getToken () {
      this.token = Util.pageUrlGetValue('token')
      Util.setCookie('token', this.token, 'aylives.cn')
    },
    getRoomId () {
      this.currentRoomId = Util.pageUrlGetValue('currentRoomId')
      Util.setCookie('currentRoomId', this.currentRoomId, 'aylives.cn')
    },
    getParam () {
      Api.Axios.get(Api.RUN_INFO).then(res => {
        if (res.data.code === 200) {
          if (res.data.data) {
            this.points = res.data.data.todayStep
            this.totalPoints = res.data.data.steps
            if (this.points !== 0) {
              this.isDonated = true
            }
          }
        } else {
          this.$vux.toast.show({
            text: res.data.msg,
            type: 'warn'
          })
          console.log('tip', res.data.msg)
        }
      })
    },
    getPoints () {
      Api.Axios.post(Api.DONATE_POINT(this.encyptSteps, this.currentTime)).then(res => {
        if (res.data.code === 200) {
          this.isDonated = true
          this.getParam()
        } else {
          this.$vux.toast.show({
            text: res.data.msg,
            type: 'warn'
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.des-run{
  width: 100%;
  margin-top: -50px;
  margin-bottom: -52px;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  overflow: auto;
  height: 996px;
  -webkit-text-size-adjust: 100%;
  // background: url('https://img1.aylives.cn/f626f00a92ad4fc8983561bc75830bb4.png');
  background: url('https://img1.aylives.cn/427038f10b244c51a9e44f74e84e1e5b.png');
  background-size: 100% 100%;
  @media only screen and (max-width: 320px) {
    height: 850px;
  }
  @media only screen and (min-width: 360px) {
    height: 956px;
  }
  @media only screen and (min-width: 365px) {
    height: 970px;
  }
  @media only screen and (min-width: 370px) {
    height: 983px;
  }
  @media only screen and (min-width: 375px) {
    height: 996px;
  }
  @media only screen and (min-width: 380px) {
    height: 1009px;
  }
  @media only screen and (min-width: 385px) {
    height: 1022px;
  }
  @media only screen and (min-width: 390px) {
    height: 1036px;
  }
  @media only screen and (min-width: 395px) {
    height: 1048px;
  }
  @media only screen and (min-width: 400px) {
    height: 1062px;
  }
  @media only screen and (min-width: 405px) {
    height: 1075px;
  }
  @media only screen and (min-width: 411px) {
    height: 1092px;
  }
  @media only screen and (min-width: 414px) {
    height: 1100px;
  }
  @media only screen and (min-width: 768px) {
    height: 2040px;
  }
  @media only screen and (min-width: 1024px) {
    height: 2720px;
  }
  .run-object{
    position: relative;
    height: 17%;
    width: 100%;
    margin-top: 68%;
    .run-info{
      position: relative;
      width: 100%;
      text-align: center;
      list-style: none;
      font-size: 10px;
      color: #F4F8FF;
      margin-left: -4%;
      text-align: left;
      @media only screen and (min-width: 768px) {
        font-size: 24px;
      }
      li{
        position: absolute;
        display: inline-block;
        width: auto;
        height: 33px;
        line-height: 33px;
        background:linear-gradient(0deg,rgba(255,164,101,1) 0%,rgba(255,190,127,1) 100%);
        border-radius: 17px;
        @media only screen and (min-width: 768px) {
          border-radius: 30px;
          line-height: 66px;
          height: 66px;
        }
      }
      .run-data{
        margin-top: 6%;
        padding-left: 6%;
        padding-right: 4%;
      }
      .total-point{
        margin-top: 20%;
      }
    }
    .run-progress{
      height: 3px;
      // border: 1px solid green;
      margin: auto;
      // position: absolute;
      // top: 50%;
      // transform: translateY(-50%);
      transform: rotate(-90deg);
      margin-top: 28%;
      // width: 40%;
    }
    .run-text{
      position: absolute;
      right: 0;
      top: 6%;
      width: 151px;
      height: 100px;
      background: url('https://img1.aylives.cn/d6f32f4b4e164053a8682a1ef05e6d80.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      font-size: 10px;
      color: #666666;
      @media only screen and (min-width: 768px) {
        width: 42%;
        height: 212px;
        font-size: 24px;
      }
      @media only screen and (min-width: 1024px) {
        width: 42%;
        height: 282px;
        font-size: 34px;
      }
      .text{
        position:absolute;
        color: #ffffff;
        margin-left: 10%;
        top: 50%;
        transform: translateY(-50%);
        width: 80%;
        // height: 50%;
      }
    }
  }
  .run-btn{
    width: 94%;
    margin: auto;
    color: #010101;
    line-height: 48px;
    margin-top: 66%;
    font-size: 16px;
    background: rgba(255,209,0,1);
    box-shadow: 0px 2px 2px 0px rgba(255,236,148,1);
    background:linear-gradient(0deg,rgba(255,146,70,1) 0%,rgba(255,186,119,1) 100%);
    border-radius:10px;
    @media only screen and (min-width: 768px) {
      font-size: 32px;
      line-height: 80px;
      border-radius:20px;
    }
  }
  .run-btn-disable{
    width: 94%;
    margin: auto;
    color: #979797;
    line-height: 48px;
    margin-top: 66%;
    font-size: 16px;
    background:rgba(237,237,237,1);
    border-radius: 10px;
    @media only screen and (min-width: 768px) {
      font-size: 32px;
      line-height: 80px;
      border-radius:20px;
    }
  }
}
</style>

