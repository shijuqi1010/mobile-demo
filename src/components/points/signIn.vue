<template>
  <div class="des-sgin">
    <div class="sign">
      <div class="sign-text">
        <p>传说，</p>
        <p>每天来到奥克城门打卡签到，都能获得神秘力量...</p>
      </div>
      <img class="sign-img" src="../../assets/sign.png" @click="signIn">
    </div>
    <div class="text">
      <p class="title">规则</p>
      <p class="explain">每签到一次可获得个1个算力，业主及家属租客可获得2个算力，每日仅限签到一次。</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'sign',
  data () {
    return {
      token: '',
      roomId: '',
      num: 0,
      owner: 0,
      points: 0,
      recordlist: null
    }
  },
  created () {
  },
  computed:{
  },
  mounted () {
  },
  methods: {
    signIn () {
      alert("签到")
    }
  }
}
</script>
<style lang="less" scoped>
.des-sgin {
  width: 100%;
  // height: 100%;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .sign {
    text-align: left;
    width: 100%;
    height: 517px;
    background-image: url('https://img1.aylives.cn/b5ce8717481742d0951854d8cfaa2fa4.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% auto;
    // background-size: cover;
    .sign-text{
      color: #333333;
      font-size: 14px;
      line-height: 20px;
      padding: 50px 0 0 20px;
      @media only screen and (min-width: 768px) {
        line-height: 40px;
        font-size: 30px;
      }
    }
    .sign-img{
      width: 64px;
      height: 64px;
      margin-top: 8%;
      margin-left: 70%;
      @media only screen and (min-width: 768px) {
        width: 100px;
        height: 100px;
      }
    }
  }
  .text{
    margin: 0 20px;
    text-align: left;
    .title{
      color: #333333;
      font-size: 18px;
      margin-bottom: 20px;
      @media only screen and (min-width: 768px) {
        line-height: 60px;
        font-size: 42px;
      }
    }
    .explain{
      list-style: none;
      color: #333333;
      line-height: 20px;
      font-size: 12px;
      @media only screen and (min-width: 768px) {
        line-height: 40px;
        font-size: 30px;
      }
    }
    @media only screen and (min-width: 768px) {
      margin: 40px 60px;
    }
  }
}

</style>
