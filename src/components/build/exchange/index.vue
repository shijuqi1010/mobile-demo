<template>
  <div class="des-exchange">
    <div class="exchange-banner">
      <ul class="top">
        <li>
          <img src="../../../assets/local.png" alt="">
          奥园城市天地
        </li>
      </ul>
      <p class="center"> 我的奥克积分: {{points}} </p>
      <p class="explain"> 可白拿{{commodity}}件物品 </p>
      <ul class="tab">
        <li> 全部闲置 </li>
        <li> 我可白拿 </li>
      </ul>
    </div>
    <div class="tips">
      <img class="tip-icon" src="../../../assets/tips.png" alt="">
      <span class="tips-text">首次发布/兑换可获10奥克积分，每次发布可获2算力。</span>
      <img class="close" src="../../../assets/close.png" alt="">
    </div>
    <ul class="des-btn">
      <router-link class="btn" to="/push" tag='li'>发布闲置物品</router-link>
      <router-link class="btn" to="/publish" tag='li'>我发布的</router-link>
      <router-link class="btn" to="/receive" tag='li'>我领到的</router-link>
    </ul>
    <div class="general-task">
      <ul class="des-general">
        <router-link :to="item.path" tag="li" v-for="(item, index) of generalTaskList" :key="index" v-if="((index + 1) % 2 >= 0)">
          <img class="icon" :src="item.img" alt="">
          <p class="name"> {{item.name}} </p>
          <div class="points-btn">{{item.points}}</div>
        </router-link>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'

export default {
  name: 'exchange',
  components: {
    Tab,
    TabItem
  },
  data () {
    return {
      token: '',
      roomId: '',
      num: 0,
      owner: 0,
      isSigned: false,
      showSign: false,
      points: 3883,
      commodity: 50,
      // getBarWidth: function (index) {
      //   return (index + 1) * 22 + 'px'
      // },
      generalTaskList:[
        {path: '/productDetail', img: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', name: '板栗生 新鲜现货山东板栗栗子野生栗子毛栗油栗农家现摘现发包邮', points: '5奥克积分'},
        {path: '/productDetail', img: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', name: '山东栗子100g 栗子毛栗家现摘现发包邮', points: '50奥克积分'},
        {path: '/productDetail', img: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', name: '山东栗子100g 新鲜现货山东板栗栗子野生栗子毛栗油栗农家现摘现发包邮', points: '500奥克积分'},
        {path: '/productDetail', img: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', name: '山东栗子100g 新鲜现货山东板栗栗子野生', points: '5000奥克积分'},
        {path: '/productDetail', img: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', name: '山东栗 新鲜现货山东板栗栗子野生栗子毛栗油栗农家现摘现发包邮新鲜现货山东板栗栗子野生栗子毛栗油栗农家现摘现发包邮子100g', points: '50000奥克积分'},
        {path: '/productDetail', img: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', name: '山东栗 新鲜现货山东板栗栗子野生栗子毛生栗子毛栗油栗农家现摘现发包邮子100g', points: '50奥克积分'},
        {path: '/productDetail', img: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', name: '山东栗 新鲜现货山东板栗栗子野生栗子毛栗油栗农家现摘现发包邮新鲜现货山东板栗栗子野生栗子毛栗油栗农家现摘现发包邮子100g', points: '50奥克积分'},
        {path: '/productDetail', img: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', name: '山东栗 新鲜现货山东板栗邮新鲜现货山东板栗栗子野生栗子毛栗油栗农家现摘现发包邮子100g', points: '50奥克积分'},
        {path: '/productDetail', img: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', name: '山东栗 新鲜现货山东板栗栗子野生栗子毛栗油栗农家现摘现发包邮新鲜现货山东板栗栗子野生栗子毛栗油栗农家现摘现发包邮子100g', points: '50奥克积分'},
        {path: '/productDetail', img: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', name: '山东栗 新鲜现货山东板栗栗子野 毛栗油栗农家现摘现发包邮子100g', points: '50奥克积分'},
        {path: '/productDetail', img: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', name: '山东栗 新鲜现货山东板栗栗子野生栗子毛栗油栗农家现摘现发包邮新鲜现货山东板栗栗子野生栗子毛栗油栗农家现摘现发包邮子100g', points: '50奥克积分'},
        {path: '/productDetail', img: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', name: '山东栗 新鲜现货 现摘现发包邮 100g', points: '50奥克积分'}
      ],
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
.des-exchange {
  width: 100%;
  background:rgba(249,249,249,1);
  .exchange-banner{
    height: 124px;
    background: url("https://img1.aylives.cn/1d4cb7ada42241b5be8c2f66a250ba65.png");
    background-size: cover;
    background-position: center;
    color: #ffffff;
    @media only screen and (min-width: 768px) {
      height: 300px;
    }
    .top{
      font-size: 12px;
      list-style: none;
      padding-top: 10px;
      margin-left: 20px;
      display: flex;
      display: -webkit-flex;
      display: -ms-flex;
      @media only screen and (min-width: 768px) {
        padding-top: 20px;
        margin-left: 30px;
        font-size: 20px;
      }
      img{
        width: 10px;
        height: 12px;
        vertical-align: middle;
        margin-right: 5px;
        @media only screen and (min-width: 768px) {
          width: 20px;
          height: 24px;
        }
      }
    }
    .tab{
      width: 50%;
      font-size: 12px;
      list-style: none;
      padding-top: 10px;
      margin: auto;
      display: flex;
      display: -webkit-flex;
      display: -ms-flex;
      color: #333333;
      @media only screen and (min-width: 768px) {
        padding-top: 30px;
        font-size: 20px;
      }
      li{
        border-radius: 14px;
        line-height: 30px;
        flex: 1;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        background: #ffffff;
        @media only screen and (min-width: 768px) {
          border-radius: 30px;
          line-height: 50px;
        }
      }
      li:nth-child(1){
        margin-right: 20%;
        color: #FF6800;
      }
    }
    .center{
      font-size: 12px;
      line-height: 20px;
      @media only screen and (min-width: 768px) {
        font-size: 20px;
        line-height: 40px;
      }
    }
    .explain{
      font-size: 20px;
      line-height: 20px;
      margin-top: 6px;
      @media only screen and (min-width: 768px) {
        font-size: 36px;
        margin-top: 5%;
      }
    }
  }
  .tips{
    background: #ffffff;
    position: relative;
    font-size: 12px;
    text-align: left;
    padding: 0px 10px 0 20px;
    @media only screen and (min-width: 768px) {
      font-size: 20px;
      padding: 0px 20px 0 30px;
    }
    img{
      vertical-align: middle;
    }
    .tip-icon{
      width: 16px;
      height: 16px;
    }
    .tips-text{
      line-height: 30px;
      margin-left: 10px;
      vertical-align: middle;
      @media only screen and (min-width: 768px) {
        line-height: 50px;
      }
    }
    .close{
      position: absolute;
      width: 16px;
      height: 16px;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
    }
  }
  .des-btn{
    position: relative;
    font-size: 14px;
    height: 20px;
    margin: 10px 20px 15px;
    list-style: none;
    @media only screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 42px;
      margin: 20px 30px 35px;
    }
    .btn{
      // display: inline;
      position: absolute;
    }
    li:nth-child(1){
      left: 0;
    }
    li:nth-child(2){
      left: 55%;
    }
    li:nth-child(3){
      right: 0;
    }
  }
  .general-task{
    font-size: 14px;
    line-height: 24px;
    @media only screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 42px;
    }
    .des-general{
      font-size: 12px;
      list-style: none;
      @media only screen and (min-width: 768px) {
        font-size: 20px;
      }
      li{
        position: relative;
        background: #ffffff;
        width: 44%;
        // height: 193px;
        margin-bottom: 10px;
        padding-top: 18px;
        padding-bottom: 98px;
        display: inline-block;
        @media only screen and (min-width: 768px) {
          margin-bottom: 26px;
          padding-top: 30px;
          padding-bottom: 160px;
        }
        img{
          height: 90px;
          @media only screen and (min-width: 768px) {
            height: 200px;
          }
        }
        .name{
          position: absolute;
          text-align: left;
          line-height: 14px;
          margin: 0px 10px 36px;
          height: 43px;
          bottom: 10px;
          overflow: hidden;
          @media only screen and (min-width: 768px) {
            line-height: 32px;
            height: 92px;
            bottom: 36px;
          }
        }
        .points-btn{
          position: absolute;
          color: #FF6800;
          bottom: 10px;
          left: 10px;
          padding: 0 5px;
          height: 22px;
          line-height: 22px;
          border: 1px solid #FF6800;
          box-sizing: border-box;
          border-radius: 18px;
          @media only screen and (min-width: 768px) {
            height: 42px;
            line-height: 42px;
            padding: 0 12px;
            left: 16px;
            bottom: 20px;
            border-radius: 30px;
          }
        }
      }
      li:nth-child(2n){
        margin-left: 2.5%; 
      }
    }
  }
}

</style>
