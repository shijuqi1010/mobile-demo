<template>
  <div class="des-receive">
    <!-- <scroller :on-infinite = "infinite" :on-refresh = "refresh"> -->
    <div class="tips" v-show="showTips">
      <img class="tip-icon" src="../../../assets/image/tips.png" alt="">
      <span class="tips-text">首次发布可获得10奥克积分，每次发布可获得15算力</span>
      <img class="close" src="../../../assets/image/close.png" alt="" @click="closeTips">
    </div>
    <div class="des-info">
      <ul class="product-list-info" v-if="receiveList">
        <li class="product-info" v-for="(item, listIndex) in receiveList" :key="listIndex">
          <div class="product-list">
            <img class="product-img" :src="item.productImg">
            <div class="content-right">
              <span class="product-name">{{item.productName}}</span>
              <div class="product">{{item.points}}</div>
              <div class="product">7天后自动确认收货</div>
              <div class="confirm-btn" @click="received">确认收货</div>
            </div>
          </div>
        </li>
      </ul>
      <div v-else>
        <p class="msg">{{ msg }}</p>
      </div>
    </div>

    <tips-model
      :tips-model="tipsModel" 
      @closedialog="tipsModel.showTips = false"
      @confirm="confirm">
    </tips-model>

    <!-- </scroller> -->
  </div>
</template>

<style scoped lang="less">
.des-receive{
  width: 100%;
  margin: 0;
  padding: 0;
  // position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: left;
  overflow: hidden;
  background:rgba(249,249,249,1);
  .tips{
    background: #ffffff;
    position: relative;
    font-size: 12px;
    text-align: left;
    // padding: 0px 10px 0 20px;
    @media only screen and (min-width: 360px) {
      padding: 0px 10px 0 20px;
    }
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
      // margin-left: 10px;
      vertical-align: middle;
      @media only screen and (min-width: 360px) {
        margin-left: 10px;
      }
      @media only screen and (min-width: 768px) {
        line-height: 50px;
      }
    }
    .close{
      position: absolute;
      width: 16px;
      height: 16px;
      right: 0px;
      top: 50%;
      transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      @media only screen and (min-width: 360px) {
        right: 10px;
      }
    }
  }
  .des-info{
    // border: 1px solid green;
    // box-sizing: border-box;
    width: 100%;
    text-align: left;
    .product-list-info{
      width: 100%;
      list-style: none;
      li{
        background: #ffffff;
        margin-bottom: 10px; 
      }
      li:nth-child(1){
        border-top: 10px solid rgba(251, 251, 251, 1);
      }
      // li:nth-child(1){
      //   padding-top: 0;
      // }
      .product-info{
        width: 100%;
        // border: 1px solid blue;
        // box-sizing: border-box;
        position: relative;
        overflow: hidden;
        .product-list{
          // background: red;
          padding: 15px 20px;
          .product-img{
            width: 32%;
            // border: 1px solid red;
            // box-sizing: border-box;
            position: absolute;
            // width: 107px;
            height: 86px;
            vertical-align: middle;
          }
          .content-right{
            width: 60%;
            // border: 1px solid skyblue;
            // box-sizing: border-box;
            position: relative;
            margin-left: 40%;
            display:inline-block;
            font-size: 14px;
            .product-name{
              line-height: 20px;
            }
            .product{
              font-size: 12px;
              color: #666666;
              color: #666666;
              line-height: 22px;
              word-wrap: break-word; 
              word-break: break-all;
            }
            .confirm-btn{
              text-align: center;
              color: rgba(255,104,0,1);
              width:80px;
              line-height:30px;
              border-radius:4px;
              border:1px solid rgba(255,104,0,1);
              margin-left: 56%;
            }
          }
        }
      }
    }
    .msg{
      text-align: center;
      padding-top: 15px;
      background: #ffffff;
    }
  }
}
</style>

<script>
import Api from '../../../config/api.js'
import Util from '../../../utils/utils'
import tipsModel from '../../public/tipsModel'

export default {
  components: {
    tipsModel
  },
  data () {
    return {
      userInfo: [],
      userId: '',
      searchWord: '',
      msg: '',
      happyMomentId: '',
      token: '',
      currentRoomId: '',
      showTips: true,
      scrollBottom: false,
      showCreateBtn: false,
      showHappiness: false,
      count: 0,
      pageSize: 5,
      // receiveList: null,
      receiveList:[
        {productImg: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', productName: '山东栗子100g', points: '50奥克积分'},
        {productImg: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', productName: '山东栗子100g', points: '50奥克积分'},
        {productImg: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', productName: '山东栗子100g', points: '50奥克积分'},
        {productImg: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', productName: '山东栗子100g', points: '50奥克积分'},
        {productImg: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', productName: '山东栗子100g', points: '50奥克积分'},
        {productImg: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', productName: '山东栗子100g', points: '50奥克积分'},
        {productImg: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', productName: '山东栗子100g', points: '50奥克积分'},
        {productImg: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', productName: '山东栗子100g', points: '50奥克积分'},
        {productImg: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', productName: '山东栗子100g', points: '50奥克积分'},
        {productImg: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', productName: '山东栗子100g', points: '50奥克积分'},
        {productImg: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', productName: '山东栗子100g', points: '50奥克积分'},
        {productImg: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', productName: '山东栗子100g', points: '50奥克积分'}
      ],
      msg: '',
      tipsModel: {
        showTips: false,
        title: '确认收货',
        content: '您确认收到邻居的物品吗？确认收货后您的积分将转到邻居的账户上，且无法追回哦。',
      }
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    init () {
    },
    getList () {
    },
    confirm() {
      alert("确认收货")
    },
    received() {
      this.tipsModel.showTips = true
    },
    closeTips() {
      this.showTips = false
    }
  }
}
</script>

