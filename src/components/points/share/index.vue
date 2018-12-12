<template>
  <div class="des-share">
    <div class="share-container">
      <div class="share" @click="share">分享</div>
      <img src="" alt="">
      <div class="share-content">
        <div class="title">
          <p>奥园物业与你共同欢迎</p>
          <p>新邻居入住奥克城</p>
        </div>
        <img src="../../../assets/shareBg.png" alt="">
        <div class="code">
          <p>-您的邀请码-</p>
          <p class="share-code">{{ shareCode }}</p>
        </div>
        <div class="share-detail">
          <p>我已邀请{{ invited }}位邻居</p>
          <p>获得{{ power }}算力</p>
          <p>还能邀请{{ canInvite }}位</p>
        </div>
      </div>
    </div>
    <div class="explain">
      <div class="explain-title">
        规则
      </div>
      <div class="explain-text">
        每邀请一个邻居，普通用户可获得个20个算力，业主及家属租客可获得40个算力，每人上限邀请20次。
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../../config/api.js'
import Util from '../../../utils/utils'

export default {
  data () {
    return {
      shareCode: 'AY3883',
      invited: 0,
      power: 0,
      canInvite: 0,
      token: '',
      currentRoomId: '',
      shareImg: ''
    }
  },
  created() {
  },
  mounted() {
    this.getShareInfo()
  },
  methods: {
    getShareInfo() {
      api.Axios.get(api.SHARE).then(res => {
        console.log('res', res);
        if (res.data.code === 200) {
          this.shareCode = res.data.data.inviteCode
          this.invited = res.data.data.invitePerson
          this.power = res.data.data.invitePersonPower
          this.canInvite = res.data.data.leftInvitePerson
          this.shareImg = res.data.data.invitePic
        } else {
          this.$toast(res.data.msg, 1500)
        }
      })
    },
    share () {
      let img = this.shareImg // "https://img1.aylives.cn/72887d5cf9864c9586f6395c0a1980d7.png"
      document.location = `jsinteractive://share?image=${img}`
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
    padding-top: 28%;
    box-sizing: border-box;
    background-image: url('https://img1.aylives.cn/c2b707b85b7f4e988409c837b96dc597.png');
    background-size: cover;
    background-position: center;

    @media only screen and (min-width: 768px) {
      background-image: url('https://img1.aylives.cn/1d372d34d9b846b3a128569d87a04e4d.png');
      padding-top: 12%;
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
      top: 1.5%;
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
      height: 82%;
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
        margin-top: 10%;
        color: #000000;
        @media only screen and (min-width: 768px) {
          margin-top: 2%;
        }
      }
      img{
        width: 142px;
        height: 142px;
        margin: 9% 0;
        @media only screen and (min-width: 768px) {
          width: 220px;
          height: 220px;
           margin: 5% 0;
        }
      }
      .code{
        margin-bottom: 2%;
        color: #FFB17C;
        .share-code{
          color: #FF6800;
          font-size: 40px;
          font-weight:500;
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
    margin: 0 20px 20px;
    text-align: left;
    // line-height: 28px;
    .explain-title{
      // color: #FF6800;
      font-size: 16px;
      line-height: 28px;
      padding: 18px 0 12px;
      @media only screen and (min-width: 768px) {
        padding: 38px 0;
        line-height: 60px;
        font-size: 42px;
      }
    }
    .explain-text{
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

