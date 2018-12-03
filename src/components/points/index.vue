<template>
  <div class="des-points">
    <div class="points-banner">
      <ul class="top">
        <li>当前算力</li>
        <li>算力记录</li>
      </ul>
      <p class="center"> {{points}} </p>
      <p class="explain" > 算力越高，获取的奥克积分越多 </p>
    </div>
    <div class="general-task">
      <p class="title">普通任务</p>
      <ul class="des-general">
        <li v-for="(item, index) of generalTaskList" :key="index" v-if="((index + 1) % 3 >= 0)">
          <router-link :to="item.path">
            <img class="icon" :src="item.icon" alt="">
            <!-- <img src="../../assets/points/@2x租住.png" alt=""> -->
            <p class="type"> {{item.content}} </p>
            <div class="rule-btn">{{item.rule}}</div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="special-task">
      
      <p class="title">专属任务</p>
      <ul class="des-special">
        <li v-for="(item, index) of specialTaskList" :key="index" v-if="((index + 1) % 3 >= 0)">
          <router-link :to="item.path">
            <img class="icon" :src="item.icon" alt="">
            <p class="type"> {{item.content}} </p>
            <div class="rule-btn">{{item.rule}}</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'points',
  data () {
    return {
      token: '',
      roomId: '',
      num: 0,
      owner: 0,
      isSigned: false,
      showSign: false,
      points: 3883,
      generalTaskList:[
        {path: '/signIn', icon: 'https://img1.aylives.cn/fa21eab5e99549d5b959b112e90008a8.png', content: '签到', rule: '+1～2算力'},
        {path: '/donateSteps', icon: 'https://img1.aylives.cn/9f16d704770d4923afd7ebfcf7e9205a.png', content: '运动捐步', rule: '+1～2算力'},
        {path: '/attention', icon: 'https://img1.aylives.cn/74384931e9ca4501b903a9f9348b0a3d.png', content: '认证房屋', rule: '+20算力'},
        {path: '/attention', icon: 'https://img1.aylives.cn/5e258b091a674bd19a44db401b6294e3.png', content: '关注公众号', rule: '+2～4算力'},
        {path: '/share', icon: 'https://img1.aylives.cn/4827fc99f5cf4cdca26588ed2002ae5e.png', content: '邀请邻居', rule: '+1～2算力'},
        {path: '/signIn', icon: 'https://img1.aylives.cn/b5bf6d5c02d4437cae5b981b71cbfbb4.png', content: '租住', rule: '+20算力'},
      ],
      specialTaskList:[
        {path: '/signIn', icon: 'https://img1.aylives.cn/160221d2163b46bab2c64760d1075f27.png', content: '缴费', rule: '+2算力'},
        {path: '/donateSteps', icon: 'https://img1.aylives.cn/288dcafe8bf844d58759b528b4e63469.png', content: 'APP开门', rule: '+1算力'},
        {path: '/attention', icon: 'https://img1.aylives.cn/5cdc0db944b042068af4c0af2dd781f4.png', content: '悦分享发帖', rule: '+1算力'},
        {path: '/attention', icon: 'https://img1.aylives.cn/8ba0229ab745411d8cf11b65f361f48c.png', content: '悦享物', rule: '+10算力'},
        {path: '/share', icon: 'https://img1.aylives.cn/c9218154e0124ea2a4e756f1a7b7adeb.png', content: '小区绿化', rule: '+1算力'},
        {path: '/signIn', icon: 'https://img1.aylives.cn/7dc8afdf26474cd493ea599d1b1e4cc0.png', content: '邻居串门', rule: '+1算力'},
      ]
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    jumpToHappiness() {
      // window.location.href = `https://h5.aylives.cn/happy/#/happiness?token=${this.token}&currentRoomId=${this.currentRoomId}`
      // 注意需要带cookie
      window.location.href = 'https://h5.aylives.cn/happy/#/happiness'
    }
  }
}
</script>
<style lang="less" scoped>
.des-points {
  width: 100%;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  background:rgba(249,249,249,1);
  .points-banner{
    height: 120px;
    background: url("https://img1.aylives.cn/1d4cb7ada42241b5be8c2f66a250ba65.png");
    background-size: cover;
    background-position: center;
    color: #ffffff;
    @media only screen and (min-width: 768px) {
      height: 300px;
      line-height: 80px;
    }
    .top{
      font-size: 12px;
      list-style: none;
      padding-top: 10px;
      display: flex;
      display: -webkit-flex;
      display: -ms-flex;
      @media only screen and (min-width: 768px) {
        font-size: 24px;
      }
      li{
        display: block;
        flex: 1;
        -webkit-box-flex: 1;
        -ms-flex: 1;
      }
      li:nth-child(1){
        margin-right: 40%;
      }
    }
    .center{
      font-size: 36px;
      line-height: 50px;
      @media only screen and (min-width: 768px) {
        font-size: 50px;
        line-height: 80px;
      }
    }
    .explain{
      font-size: 10px;
      line-height: 20px;
      margin-top: 10px;
      @media only screen and (min-width: 768px) {
        font-size: 24px;
        margin-top: 6%;
      }
    }
  }
  .general-task{
    color: #2F3542;
    font-size: 14px;
    line-height: 24px;
    @media only screen and (min-width: 768px) {
      font-size: 30px;
      line-height: 52px;
    }
    .title{
      font-size: 18px;
      line-height: 25px;
      margin: 20px 0 15px;
      @media only screen and (min-width: 768px) {
        font-size: 30px;
        line-height: 52px;
      }
    }
    .des-general{
      font-size: 14px;
      // list-style: none;
      // position: absolute;
      // display: flex;
      // display: -webkit-flex;
      // display: -ms-flex;
      // bottom: 0;
      width: 100%;
      @media only screen and (min-width: 768px) {
        font-size: 24px;
        line-height: 52px;
      }
      li{
        background: #ffffff;
        width: 30%;
        height: 124px;
        // border: 1px solid red;
        // box-shadow: 0px 0px 4px 0px rgba(183,183,183,0.5);
        margin-bottom: 25px;
        padding-top: 20px;
        // margin-left: 2%; 
        // margin-right: 2%; 
        // box-sizing: border-box;
        display: inline-block;
        @media only screen and (min-width: 768px) {
          margin-bottom: 50px;
          padding-top: 40px;
          height: 224px;
        }
        img{
          width: 26px;
          height: 26px;
          @media only screen and (min-width: 768px) {
            width: 60px;
            height: 60px;
          }
        }
        .type{
          padding: 13px;
          line-height: 20px;
          font-size: 14px;
          @media only screen and (min-width: 768px) {
            line-height: 52px;
            font-size: 28px;
          }
        }
        .rule-btn{
          color: #ffffff;
          display: inline-block;
          width: 88%;
          line-height: 22px;
          background: linear-gradient(270deg,rgba(255,104,0,1) 0%,rgba(255,158,63,1) 100%);
          border-radius: 11px;
          @media only screen and (min-width: 768px) {
            line-height: 52px;
            border-radius: 30px;
          }
        }
      }
      li:nth-child(2),li:nth-child(5){
        margin-left: 2.5%; 
        margin-right: 2.5%; 
      }
      li.active, li:hover{
        box-shadow: 0px 0px 4px 4px RGBA(197, 218, 239, 1) inset, 0px 0px 4px 0px rgba(183,183,183,0.5);
      }
    }
  }
  .special-task {
    color: #2F3542;
    font-size: 14px;
    line-height: 24px;
    font-size: 14px;
      // list-style: none;
      // position: absolute;
      height: 12%;
      // display: flex;
      // display: -webkit-flex;
      // display: -ms-flex;
      bottom: 0;
      width: 100%;
      text-align: center;
    .title{
      font-size: 18px;
      line-height: 25px;
      margin: 15px 0;
    }
    .des-special{
      list-style: none;
      // position: absolute;
      // height: 12%;
      width: 100%;
      li{
        background: #ffffff;
        width: 30%;
        height: 124px;
        // border: 1px solid red;
        // box-shadow: 0px 0px 4px 0px rgba(183,183,183,0.5);
        margin-bottom: 25px;
        padding-top: 20px;
        // margin-left: 2%; 
        // margin-right: 2%; 
        // box-sizing: border-box;
        display: inline-block;
        @media only screen and (min-width: 768px) {
          margin-bottom: 50px;
          padding-top: 40px;
          height: 224px;
        }
        img{
          width: 26px;
          height: 26px;
          @media only screen and (min-width: 768px) {
            width: 60px;
            height: 60px;
          }
        }
        .type{
          padding: 13px;
          line-height: 20px;
          font-size: 14px;
          @media only screen and (min-width: 768px) {
            line-height: 52px;
            font-size: 28px;
          }
        }
        .rule-btn{
          color: #ffffff;
          display: inline-block;
          width: 88%;
          line-height: 22px;
          background: linear-gradient(270deg,rgba(255,104,0,1) 0%,rgba(255,158,63,1) 100%);
          border-radius: 11px;
          @media only screen and (min-width: 768px) {
            line-height: 52px;
            border-radius: 30px;
          }
        }
      }
      li:nth-child(2),li:nth-child(5){
        margin-left: 2.5%; 
        margin-right: 2.5%; 
      }
      li.active, li:hover{
        box-shadow: 0px 0px 4px 4px RGBA(197, 218, 239, 1) inset, 0px 0px 4px 0px rgba(183,183,183,0.5);
      }
    }
  }
}

</style>
