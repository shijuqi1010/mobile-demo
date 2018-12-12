<template>
  <div class="des-steps">
    <div class="steps-container">
      <div class="step-content">
        <div class="step-detail">
          <x-circle
            :percent="percent"
            :stroke-width="7"
            :trail-width="3"
            stroke-color="#FF6800"
            trail-color="#FF9E3F">
            <span>
              <p class="today-steps">今日步数</p>
              <p>{{ todaySteps }}</p>
            </span>
          </x-circle>
        </div>
        <p class="notice">
          完成2000步后点击“兑换算力”才能获得算力哦
        </p>
        <div v-if="clickAble" class="donate-btn" @click="donate">兑换算力</div>
        <div v-else class="donate-btn-disable">
          <span v-if="isDonated">兑换成功</span>
          <span v-else>今日已兑换</span>
        </div>
      </div>
      <ul class="donate-info" v-if="isDonated">
        <li>
          <p class="donate-data">{{ todayPower }}</p>
          <p class="donate-text">今日已兑换算力</p>
        </li>
        <li>
          <p class="donate-data">{{ totalPower }}</p>
          <p class="donate-text">累计兑换算力</p>
        </li>
      </ul>

      <ul class="donate-info" v-else>
        <li>
          <p class="donate-data">-</p>
          <p class="donate-text">今日已兑换算力</p>
        </li>
        <li>
          <p class="donate-data">-</p>
          <p class="donate-text">累计兑换算力</p>
        </li>
      </ul>
    </div>
    <div class="explain">
      <div class="explain-title">
        规则
      </div>
      <div class="donate-explain">
        每日仅限兑换1次，普通用户兑换一次可得3个算力，认证成为奥园业主、家属、租客参与兑换可得6个算力；
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.des-steps{
  width: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
  background: #FFFFFF;
  .steps-container{
    width: 100%;
    height: 517px;
    // border: 1px solid red;
    box-sizing: border-box;
    background-image: url('https://img1.aylives.cn/ac78d2c752c6438195682678be837af8.png');
    background-size: cover;
    background-position: center;
    @media only screen and (device-width: 375px) and (device-height: 812px) {
      background-image: url('https://img1.aylives.cn/1d372d34d9b846b3a128569d87a04e4d.png');
      height: 600px;
    }

    @media only screen and (device-width: 411px) and (device-height: 823px) {
      background-image: url('https://img1.aylives.cn/1d372d34d9b846b3a128569d87a04e4d.png');
      height: 658px;
    }

    @media only screen and (min-width: 768px) {
      height: 1040px;
    }
    .step-content{
      .step-detail{
        margin: auto;
        padding-top: 40px;
        width: 124px;
        height: 124px;
        @media only screen and (min-width: 768px) {
          padding-top: 60px;
          width: 324px;
          height: 324px;
        }
        p{
          color: #333333;
          font-size: 24px;
          line-height: 30px;
          @media only screen and (min-width: 768px) {
            font-size: 40px;
            line-height: 60px;
          }
        }
        .today-steps{
          color: #ffffff;
          font-size: 14px;
          @media only screen and (min-width: 768px) {
            font-size: 24px;
          }
        }
      }
      .notice{
        font-size: 12px;
        color: #FFFFFF;
        margin: 30px 0 20px 0;
        @media only screen and (min-width: 768px) {
          font-size: 26px;
          margin: 40px 0;
        }
      }
      .donate-btn{
        margin: auto;
        color: #FFFFFF;
        width: 90%;
        line-height: 40px;
        margin-top: 14px;
        margin-bottom: 20px;
        font-size: 18px;
        background: linear-gradient(270deg,rgba(255,104,0,1) 0%,rgba(255,158,63,1) 100%);
        border-radius: 20px;
        @media only screen and (min-width: 768px) {
          margin-bottom: 60px;
          font-size: 42px;
          line-height: 80px;
          border-radius: 60px;
        }
      }
      .donate-btn-disable{
        margin: auto;
        width: 90%;
        color: #979797;
        line-height: 40px;
        margin-top: 18px;
        margin-bottom: 20px;
        font-size: 14px;
        background:rgba(237,237,237,1);
        border-radius: 20px;
        @media only screen and (min-width: 768px) {
          margin-bottom: 60px;
          font-size: 42px;
          line-height: 80px;
          border-radius: 60px;
        }
      }
    }
    .donate-info{
      height: 80px;
      text-align: center;
      list-style: none;
      display: flex;
      justify-content: space-between;
      @media only screen and (min-width: 768px) {
        height: 200px;
      }
      li{
        display: inline-block;
        flex: 1;
        -ms-flex: 1;
        -webkit-box-flex: 1;
        justify-content: convert;
        overflow: hidden;
        padding: 2px;
        color: #FFFFFF;
        li:nth-child(1){
          justify-content: flex-start;
        }
        li:nth-child(2){
          justify-content: flex-end;
        }
        .donate-data{
          font-size: 24px;
          padding-bottom: 5px;
          @media only screen and (min-width: 768px) {
            padding-bottom: 15px;
            font-size: 36px;
          }
        }
        .donate-text{
          font-size: 12px;
          @media only screen and (min-width: 768px) {
            font-size: 28px;
          }
        }
      }
    }
  }
  .explain{
    // height: 50px;
    margin: 12px 20px;
    text-align: left;
    // line-height: 28px;
    .explain-title{
      color: #333333;
      font-size: 16px;
      line-height: 28px;
      @media only screen and (min-width: 768px) {
        line-height: 60px;
        font-size: 42px;
      }
    }
    .donate-explain{
      list-style: none;
      color: #333333;
      font-size: 12px;
      @media only screen and (min-width: 768px) {
        font-size: 32px;
      }
    }
    @media only screen and (min-width: 768px) {
      margin: 40px 60px;
    }
  }
}
</style>

<script>
import { XCircle } from 'vux'
import Api from '../../config/api.js'
import Util from '../../utils/utils'
export default {
  components: {
    XCircle
  },
  data () {
    return {
      todaySteps: 0,
      encyptSteps: 0,
      currentTime: '',
      todayPower: 0,
      totalPower: 0,
      isDonated: false
    }
  },
  created () {
    this.init()
  },
  mounted () {
    this.getDonateData()
  },
  computed: {
    percent () {
      if (this.todaySteps >= 2000) {
        return 100
      } else {
        return this.todaySteps / 2000 * 100
      }
    },
    clickAble () {
      if (this.todaySteps >= 2000 && !this.isDonated) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    init () {
      this.todaySteps = Util.pageUrlGetValue('steps')
      this.encyptSteps = Util.pageUrlGetValue('encyptSteps')
      this.currentTime = Util.pageUrlGetValue('currentTime')
    },
    getDonateData () {
      Api.Axios.get(Api.RUN).then(res => {
        if (res.data.code === 200) {
          if (res.data.data) {
            this.totalPower = res.data.data.allMineStepPower
            this.todayPower = res.data.data.todayStepPower
            this.isDonated = res.data.data.todayDonateFlag
          }
        } else {
          this.$toast(res.data.msg, 1500)
        }
      })
    },
    donate () {
      Api.Axios.post(Api.DONATE(this.encyptSteps, this.currentTime)).then(res => {
        if (res.data.code === 200) {
          this.getDonateData()
          this.$toast(res.data.data, 1500)
        } else {
          this.$toast(res.data.msg, 1500)
        }
      })
    }
  }
}
</script>

