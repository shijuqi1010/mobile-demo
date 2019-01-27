<template>
  <div class="des-product">
    <div class="product-banner">
      <swiper loop auto :list="demoList" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>
      <!-- <p>current index: {{demo06_index}}</p> -->
      <p class="product-title"> {{title}} </p>
      <p class="product-time"> {{time}} </p>
    </div>
    <div class="des-info">
      <div class="user-info">
        <img class="user-images" :src="userInfo.avater">
        <div class="content-right">
          <div class="user-address">{{userInfo.address}}</div>
          <span class="user-name">{{userInfo.userName}}</span>
        </div>
      </div>
      <div class="describe">
        {{describe}}
      </div>
    </div>

    <div class="buy-btn">
      <div class="des-btn">
        <img src="./../../../assets/images/stone.png" alt="">
        <span>50奥克积分</span>
      </div>
      <div class="des-btn buy">
        我要了
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'
const baseList = [{
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/5.jpg', // 404
  title: '送你一次旅行',
  fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
}]

const imgList = [
  'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
]

const urlList = baseList.map((item, index) => ({
  url: 'http://m.baidu.com',
  img: item.img,
  fallbackImg: item.fallbackImg,
  // title: `(可点击)${item.title}`
}))

const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))

const only2ClickList = baseList.slice(0, 2).map(item => {
  item.url = 'http://m.baidu.com'
  return item
})

export default {
  name: 'product',
  components: {
    Swiper,
    SwiperItem
  },
  data () {
    return {
      token: '',
      roomId: '',
      num: 0,
      owner: 0,
      demoList: urlList,
      demo06_index: 0,
      isSigned: false,
      showSign: false,
      points: 3883,
      time: '2018-10-10',
      title: '板栗生 新鲜现货山东板栗栗子野生栗子毛栗油栗农家现摘现发包邮',
      userInfo: {
        avater: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png',
        userName: '18578766795',
        address: '广州奥园城市天地X栋X户'
      },
      describe: '栗子真好吃啊栗子真好吃啊栗子真好吃啊，栗子真好吃啊栗子真好吃啊栗子真好吃啊，栗子真好吃啊栗子真好吃啊栗子真好吃啊，栗子真好吃啊栗子真好吃啊栗子真好吃啊，栗子真好吃啊栗子真好吃啊栗子真好！'
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    demo06_onIndexChange (index) {
      this.demo06_index = index
    },
    jumpToHappiness() {
      // window.location.href = `https://h5.aylives.cn/happy/#/happiness?token=${this.token}&currentRoomId=${this.currentRoomId}`
      // 注意需要带cookie
      window.location.href = 'https://h5.aylives.cn/happy/#/happiness'
    }
  }
}
</script>
<style lang="less" scoped>
.des-product {
  width: 100%;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  background: #ffffff;
  .product-banner{
    text-align: left;
    // height: 120px;
    // background: url("https://img1.aylives.cn/1d4cb7ada42241b5be8c2f66a250ba65.png");
    // background-size: cover;
    // background-position: center;
    // color: #ffffff;
    @media only screen and (min-width: 768px) {
      height: 300px;
      line-height: 80px;
    }
    .product-title{
      margin: 6px 20px;
      font-size: 18px;
      // line-height: 50px;
      @media only screen and (min-width: 768px) {
        font-size: 50px;
        line-height: 80px;
      }
    }
    .product-time{
      margin: 0 20px;
      font-size: 12px;
      line-height: 18px;
      margin-top: 10px;
      @media only screen and (min-width: 768px) {
        font-size: 24px;
        margin-top: 6%;
      }
    }
  }
  .des-info{
    margin-top: 20px;
    text-align: left;
    list-style: none;
    font-size: 14px;
    overflow: hidden;
    border-top: 10px solid rgba(249,249,249,1);
    // display: flex;
    // justify-content: space-between;
    .user-info{
      margin: 20px 20px 0;
      position: relative;
      width: 100%;
      overflow: hidden;
      // padding: 15px 0 40px 0;
      border-bottom: 0.05px solid #F8F8F8;
      .user-images{
        position: absolute;
        width: 35px;
        height: 35px;
        vertical-align: top;
      }
      .content-right{
        position: relative;
        margin-left: 50px;
        display:inline-block;
        font-size: 12px;
        width: 80%;
        .user-name{
          line-height: 17px;
        }
        .user-address{
          line-height: 20px;
          word-wrap: break-word; 
          word-break: break-all;
        }
      }
    }
    .describe{
      margin: 15px 20px;
      position: relative;
    }
  }
  .buy-btn{
    position: absolute;
    height: 44px;
    display: flex;
    display: -webkit-flex;
    display: -ms-flex;
    z-index: 500;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-size: 10px;
    box-shadow:0px 1px 0px 0px rgba(206,206,206,0.5);
    .des-btn{
      display: block;
      font-size: 12px;
      flex: 1;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      // padding: 5px 0;
      line-height: 44px;
      @media only screen and (min-width: 768px) {
        font-size: 24px;
      }
      img{
        margin-right: 15px;
        vertical-align: middle;
        width: 26px;
        height: 22px;
      }
    }
    .buy{
      width: 50%;
      font-size: 18px;
      color: #FFFFFF;
      background:linear-gradient(270deg,rgba(255,104,0,1) 0%,rgba(255,146,39,1) 100%);
    }
  }
}

</style>
