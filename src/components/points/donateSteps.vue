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
        <div v-if="clickAble" class="donate-btn" @click="donate">兑换算力</div>
        <div v-else class="donate-btn-disable">兑换算力</div>
      </div>
      <ul class="donate-info" v-if="donateData">
        <li>
          <p class="donate-data">{{ donateSteps }}步</p>
          <p class="donate-text">今日已兑换算力</p>
        </li>
        <li>
          <p class="donate-data">{{ communityDonateSteps }}步</p>
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
        普通用户兑换一次可得1个算力，认证成为奥园业主、家属、租客参与兑换可得2个算力；
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
    // width: 375px;
    // width: 100%;
    height: 517px;
    // border: 1px solid red;
    box-sizing: border-box;
    background: url('https://img1.aylives.cn/caf09e48a5274487aee2ac28f0289857.png');
    background-size: cover;
    background-position: center;
    @media only screen and (min-width: 768px) {
      height: 1040px;
    }
    .step-content{
      // border: 1px solid red;
      .step-detail{
        margin: auto;
        padding: 40px 0;
        width: 124px;
        height: 124px;
        @media only screen and (min-width: 768px) {
          padding: 88px 0;
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
        padding: 8px;
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
            padding-bottom: 20px;
            font-size: 40px;
          }
        }
        .donate-text{
          font-size: 12px;
          @media only screen and (min-width: 768px) {
            font-size: 32px;
          }
        }
      }
    }
  }
  .explain{
    // height: 50px;
    margin: 12px 30px;
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
      donateData: '',
      donateSteps: 0,
      communityDonateSteps: 0,
      rank: 0,
      token: '',
      currentRoomId: '',
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
      if (this.isDonated) {
        return 0
      } else {
        if (this.todaySteps >= 50000) {
          return 100
        } else {
          return this.todaySteps / 50000 * 100
        }
      }
    },
    clickAble () {
      if (this.todaySteps >= 100 && !this.isDonated) {
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
      this.token = Util.pageUrlGetValue('token')
      this.currentRoomId = Util.pageUrlGetValue('currentRoomId')
      
      if (!Util.getCookie('token')) {
        Util.setCookie('token', this.token, 'aylives.cn')
      }

      if (!Util.getCookie('currentRoomId')) {
        Util.setCookie('currentRoomId', this.currentRoomId, 'aylives.cn')
      }
    },
    getDonateData () {
      Api.Axios.get(Api.DONATE_API).then(res => {
        if (res.data.code === 200) {
          if (res.data.data) {
            this.donateData = res.data.data
            this.donateSteps = res.data.data.donateSteps
            this.communityDonateSteps = res.data.data.community.communityDonateSteps
            this.rank = res.data.data.community.rank
          }
        } else {
          // this.$vux.toast.show({
          //   text: res.data.msg,
          //   type: 'success'
          // })
          console.log('tip', res.data.msg)
        }
      })
    },
    donate () {
      Api.Axios.post(Api.DONATE_STEPS(this.encyptSteps, this.currentTime)).then(res => {
        if (res.data.code === 200) {
          this.isDonated = true
          this.getDonateData()
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

