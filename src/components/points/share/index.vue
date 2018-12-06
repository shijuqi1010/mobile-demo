<template>
  <div class="des-share">
    <div class="share-container">
      <div class="share" @click="share">分享</div>
      <div class="share-content">
        <div class="title">
          <p>奥园物业与你共同欢迎</p>
          <p>新邻居入住奥克城</p>
        </div>
        <div class="code">
          <p>-您的邀请码-</p>
          <p class="share-code">{{shareCode}}</p>
        </div>
        <div class="share-detail">
          <p>我已邀请{{ invited }}位邻居</p>
          <p>获得{{ point }}算力</p>
          <p>还能邀请{{ canInvite }}位</p>
        </div>
      </div>
    </div>
    <div class="explain">
      <div class="explain-title">
        规则
      </div>
      <div class="donate-explain">
        每邀请一个邻居，普通用户可获得个10个算力，业主及家属租客可获得20个算力，每人上限邀请20次。
      </div>
    </div>
  </div>
</template>

<script>
import Api from '../../../config/api.js'
import Util from '../../../utils/utils'
export default {
  data () {
    return {
      shareCode: 'AY3883',
      invited: 8,
      point: 80,
      canInvite: 12,
      rank: 0,
      token: '',
      currentRoomId: '',
      isDonated: false
    }
  },
  created () {
  },
  mounted () {
    this.init()
  },
  computed: {
  },
  methods: {
    init () {
    },
    share () {
      let img = "https://img1.aylives.cn/ac78d2c752c6438195682678be837af8.png"
      document.location = `jsinteractive://share?url=https://h5.aylives.cn/points/#/sharePage?image=${img}`
    }
  }
}
</script>

<style scoped lang="less">
.des-share{
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  .share-container{
    width: 100%;
    height: 656px;
    padding-top: 20%;
    box-sizing: border-box;
    background-image: url('https://img1.aylives.cn/4035fd85c8bf4a33804fa4e4e9edc278.png');
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
    .share{
      position: absolute;
      background: linear-gradient(270deg,rgba(255,104,0,1) 0%,rgba(255,158,63,1) 100%);
      border-radius: 16px;
      line-height: 31px;
      width: 66px;
      padding-right: 5px;
      right: -10px;
      top: 3%;
      color: #ffffff;
      font-size: 14px;
      @media only screen and (min-width: 768px) {
        border-radius: 24px;
        line-height: 60px;
        width: 120px;
        padding-right: 10px;
        right: -20px;
        font-size: 24px;
      }
    }
    .share-content{
      // border: 1px solid red;
      padding-top: 6%;
      width: 76%;
      height: 74%;
      margin: auto;
      font-size: 18px;
      text-align: center;
      background-color: #ffffff;
      border-radius: 12px;
      @media only screen and (min-width: 768px) {
        font-size: 30px;
        border-radius: 24px;
      }
      .title{
        margin-top: 13%;
        color: #000000;

      }
      .code{
        margin: 11%;
        color: #FFB17C;
        .share-code{
          color: #FF6800;
          font-size: 40px;
          @media only screen and (min-width: 768px) {
            font-size: 58px;
          }
        }
      }
      .share-detail{
        // margin: auto;
        color: #333333;
        font-size: 14px;
        line-height: 20px;
        @media only screen and (min-width: 768px) {
          font-size: 24px;
          line-height: 40px;
        }
      }
    }
  }
  .explain{
    margin: 0 30px;
    text-align: left;
    // line-height: 28px;
    .explain-title{
      color: #FF6800;
      font-size: 16px;
      line-height: 28px;
      padding: 18px 0 12px;
      @media only screen and (min-width: 768px) {
        padding: 38px 0;
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

