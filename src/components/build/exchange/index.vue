<template>
  <div class="des-exchange">
    <div class="exchange-banner">
      <ul class="top">
        <li>我的奥克积分</li>
        <li>
          奥园城市天地
        </li>
      </ul>
      <p class="center"> {{points}} </p>
      <p class="explain"> 可白拿{{commodity}}件物品 </p>
    </div>
    <div class="general-task">
      <!-- <tab :line-width="1" bar-active-color="#FF6800" class="tab-title">
        <tab-item selected>发布闲置物品</tab-item>
        <tab-item>我发布的</tab-item>
        <tab-item>我领到的</tab-item>
      </tab> -->
      <ul>
        <router-link class="des-btn" to="/push" tag='li'>
          发布闲置物品
        </router-link>
        <router-link class="des-btn" to="/pblish" tag='li'>
          我发布的
        </router-link>
        <router-link class="des-btn" to="/receive" tag='li'>
          我领到的
        </router-link>
      </ul>
      <ul class="des-general">
        <li v-for="(item, index) of generalTaskList" :key="index" v-if="((index + 1) % 3 >= 0)">
          <router-link :to="item.path">
            <img class="icon" :src="item.img" alt="">
            <div class="detail">
              <p class="detail-text name"> {{item.name}} </p>
              <div class="detail-text points-btn">{{item.points}}</div>
            </div>
          </router-link>
        </li>
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
        {path: '/productDetail', img: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', name: '山东栗子100g', points: '50奥克积分'},
        {path: '/productDetail', img: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', name: '山东栗子100g', points: '50奥克积分'},
        {path: '/productDetail', img: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', name: '山东栗子100g', points: '50奥克积分'},
        {path: '/productDetail', img: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', name: '山东栗子100g', points: '50奥克积分'},
        {path: '/productDetail', img: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', name: '山东栗子100g', points: '50奥克积分'},
        {path: '/productDetail', img: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', name: '山东栗子100g', points: '50奥克积分'},
        {path: '/productDetail', img: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', name: '山东栗子100g', points: '50奥克积分'},
        {path: '/productDetail', img: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', name: '山东栗子100g', points: '50奥克积分'},
        {path: '/productDetail', img: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', name: '山东栗子100g', points: '50奥克积分'},
        {path: '/productDetail', img: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', name: '山东栗子100g', points: '50奥克积分'},
        {path: '/productDetail', img: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', name: '山东栗子100g', points: '50奥克积分'},
        {path: '/productDetail', img: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', name: '山东栗子100g', points: '50奥克积分'}
      ],
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
.des-exchange {
  width: 100%;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  background:rgba(249,249,249,1);
  .exchange-banner{
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
      font-size: 14px;
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
    .tab-title{
      font-size: 18px;
      line-height: 25px;
      margin: 20px 0 15px;
      // color: #FF6800;
      @media only screen and (min-width: 768px) {
        font-size: 30px;
        line-height: 52px;
      }
      .vux-tab .vux-tab-item.vux-tab-selected{
        color: #FF6800;
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
        width: 46%;
        height: 160px;
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
          width: 118px;
          height: 90px;
          @media only screen and (min-width: 768px) {
            width: 60px;
            height: 60px;
          }
        }
        .detail{
          width: 100%;
          font-size: 12px;
          // position: absolute;
          display: flex;
          display: -webkit-flex;
          display: -ms-flex;
          // bottom: 0;
          .detail-text{
            flex: 1;
            -ms-flex: 1;
            -webkit-box-flex: 1;
            justify-content: convert;
            overflow: hidden;
            // padding: 13px;
          }
          .name{
            line-height: 20px;
            
            @media only screen and (min-width: 768px) {
              line-height: 52px;
              font-size: 28px;
            }
          }
          .points-btn{
            color: #FF6800;
            // display: inline-block;
            // width: 88%;
            line-height: 22px;
            border: 1px solid #FF6800;
            border-radius: 12px;
            @media only screen and (min-width: 768px) {
              line-height: 52px;
              border-radius: 30px;
            }
          }
        }
      }
      li:nth-child(2n){
        margin-left: 2.5%; 
        // margin-right: 2.5%; 
      }
    }
  }
}

</style>
