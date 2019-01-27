<template>
  <div class="des-wechat">
    <ul class="explain">
      <li>1、微信搜索“奥园悦生活”或扫描下方二维码并关注；</li>
      <li>2、在公众号回复“奥克城”获得幸运码；</li>
      <li>3、在下方的输入框输入幸运码验证通过即；</li>
      <li>4、普通用户关注公众号可获得个2算力，业主及家属租客可获得4个算力。</li>
    </ul>
    <div class="qrdode">
      <img src="../../assets/images/qrcode.png" alt="">
    </div>
    <div class="luck-code">
      <input type="text" placeholder="请输入幸运码">
    </div>
    <div class="btn">
      确定
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  data () {
    return {
      token: '',
      roomId: '',
      num: 0,
      owner: 0,
      isSigned: false,
      showSign: false
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.des-wechat {
  width: 100%;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .explain {
    margin: 35px 20px 65px 20px;
    text-align: left;
    color: #2F3542;
    font-size: 14px;
    line-height: 24px;
    list-style: none;
    .title{
      font-size: 24px;
    }
    .des-general{
      font-size: 20px;
    }
  }
  .qrdode {
    margin-bottom: 32px;
    img{
      width: 110px;
      height: 110px;
    }
  }
  .luck-code {
    text-align: left;
    width: 90%;
    height: 44px;
    line-height: 44px;
    margin: auto;
    color: #666666;
    font-size: 14px;
    // border: 1px solid red;
    box-shadow: 0px 0.5px 0px 0px rgba(169,169,169,0.5);
    .title{
      font-size: 24px;
    }
    .des-special{
      font-size: 20px;
    }
  }
  .btn{
    margin: auto;
    color: #FFFFFF;
    width: 90%;
    line-height: 40px;
    margin-top: 44px;
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
}

</style>
