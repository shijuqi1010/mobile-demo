<template>
  <div class="des-build">
    <div class="build-banner">
      <p class="explain">每一个奥克居民，都是奥克城发展的建筑者，历史的创造者。</p>
    </div>
    <div class="general-task">
      <p class="task-explain">你的以下行为，都将为奥克城的发展做出贡献</p>
      <ul class="des-general">
        <li v-for="(item, index) of generalTaskList" :key="index" v-if="((index + 1) % 3 >= 0)">
          <router-link :to="item.path">
            <img class="icon" :src="item.icon" alt="">
            <p class="type"> {{item.content}} </p>
            <div class="rule-btn">{{item.rule}}</div>
          </router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'build',
  data () {
    return {
      token: '',
      roomId: '',
      num: 0,
      owner: 0,
      isSigned: false,
      showSign: false,
      generalTaskList:[
        {path: '/green', icon: 'https://img1.aylives.cn/c9218154e0124ea2a4e756f1a7b7adeb.png', content: '小区绿化', rule: '+1算力'},
        {path: '/share', icon: 'https://img1.aylives.cn/7dc8afdf26474cd493ea599d1b1e4cc0.png', content: '邻居串门', rule: '+1算力'},
        {path: '/donateSteps', icon: 'https://img1.aylives.cn/9f16d704770d4923afd7ebfcf7e9205a.png', content: '运动捐步', rule: '+1～2算力'},
        {path: '/exchange', icon: 'https://img1.aylives.cn/8ba0229ab745411d8cf11b65f361f48c.png', content: '悦享物', rule: '+10算力'},
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
.des-build {
  width: 100%;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  text-align: left;
  background: #FFFFFF;
  .build-banner{
    height: 192px;
    background: url("https://img1.aylives.cn/7ced0bc1262d4a4383e8a63d94da02a6.png");
    background-size: cover;
    background-position: center;
    color: #ffffff;
    @media only screen and (min-width: 768px) {
      height: 300px;
      line-height: 80px;
    }
    .explain{
      font-size: 18px;
      line-height: 25px;
      padding: 70px 20px;
      color: #ffffff;
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
    .task-explain{
      font-size: 16px;
      line-height: 25px;
      margin: 22px 20px 30px;
      @media only screen and (min-width: 768px) {
        font-size: 30px;
        line-height: 52px;
      }
    }
    .des-general{
      text-align: center;
      font-size: 14px;
      width: 100%;
      @media only screen and (min-width: 768px) {
        font-size: 24px;
        line-height: 52px;
      }
      li{
        background: #ffffff;
        width: 30%;
        height: 124px;
        margin-bottom: 25px;
        padding-top: 20px;
        display: inline-block;
        box-shadow:0px 2px 8px 0px rgba(233,233,233,0.5);
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
      li:nth-child(4){
        width: 30%;
        float: left;
        margin-left: 2.5%; 
        margin-right: 2.5%;
      }
    }
  }
}

</style>
