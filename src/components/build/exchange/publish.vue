<template>
  <div class="des-publish">
    <!-- <scroller :on-infinite = "infinite" :on-refresh = "refresh"> -->
    <div class="tips" v-show="showTips">
      <img class="tip-icon" src="../../../assets/tips.png" alt="">
      <span class="tips-text">首次发布可获得10奥克积分，每次发布可获得15算力</span>
      <img class="close" src="../../../assets/close.png" alt="" @click="closeTips">
    </div>

    <div class="des-info">
      <ul class="product-list-info" v-if="productList">
        <li class="product-info" v-for="(item, listIndex) in productList" :key="listIndex">
          <div class="product-list">
            <img class="product-img" :src="item.productImg">
            <div class="content-right">
              <span class="product-name">{{item.productName}}</span>
              <div class="product-tel">预计获得积分: {{item.points}}</div>
              <div class="product-tel">邻居联系方式: {{item.neighbTel}}</div>
              <div class="del-btn">
                <span @click="del">删除</span>
                <span>下架</span>
              </div>
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
.des-publish{
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
            font-size: 12px;
            .product-name{
              font-size: 14px;
              line-height: 20px;
            }
            .product{
              color: #666666;
            }
            .product-tel{
              color: #666666;
              line-height: 22px;
              word-wrap: break-word; 
              word-break: break-all;
            }
            .del-btn{
              color: #FF6800;
              margin-bottom: 15px;
            }
          }
          .content-bottom{
            position: relative;
            margin-left: 50px;
            margin-top: 12px;
            line-height: 14px;
            .create-time{
              font-size: 10px;
              color: #666666;
            }
            .report{
              font-size: 10px;
              margin-left: 20px;
              color: #666666;
            }
            .share{
              width: 14px;
              height: 14px;
              position: absolute;
              right: 60px;
              vertical-align: middle;
            }
            .praise-container{
              display: inline-block;
              right: 0px;
              position: absolute;
              .praise{
                width: 15px;
                height: 14px;
                vertical-align: middle;
              }
              .praise-number{
                font-size: 12px;
                line-height: 14px;
                text-align: center;
                left: 10px;
              }
            }
          }
        }
      }
    }
    .msg{
      background: #ffffff;
      text-align: center;
      padding-top: 15px;
    }
  }
}
</style>

<script>
import Api from '../../../config/api.js'
import Util from '../../../utils/utils'
import tipsModel from '../../public/tipsModel'

export default {
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
      // productList: null,
      productList:[
        {productImg: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', productName: '山东栗子100g', points: '50奥克积分', neighbTel:'18765643241'},
        {productImg: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', productName: '山东栗子100g', points: '50奥克积分', neighbTel:'18765643241'},
        {productImg: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', productName: '山东栗子100g', points: '50奥克积分', neighbTel:'18765643241'},
        {productImg: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', productName: '山东栗子100g', points: '50奥克积分', neighbTel:'18765643241'},
        {productImg: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', productName: '山东栗子100g', points: '50奥克积分', neighbTel:'18765643241'},
        {productImg: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', productName: '山东栗子100g', points: '50奥克积分', neighbTel:'18765643241'},
        {productImg: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', productName: '山东栗子100g', points: '50奥克积分', neighbTel:'18765643241'},
        {productImg: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', productName: '山东栗子100g', points: '50奥克积分', neighbTel:'18765643241'},
        {productImg: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', productName: '山东栗子100g', points: '50奥克积分', neighbTel:'18765643241'},
        {productImg: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', productName: '山东栗子100g', points: '50奥克积分', neighbTel:'18765643241'},
        {productImg: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', productName: '山东栗子100g', points: '50奥克积分', neighbTel:'18765643241'},
        {productImg: 'https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png', productName: '山东栗子100g', points: '50奥克积分', neighbTel:'18765643241'}
      ],
      msg: '',
      tipsModel: {
        showTips: false,
        title: '确认删除',
        content: '您确定要删除该宝贝吗',
      }
    }
  },
  components: {
    tipsModel
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
    del () {
      this.tipsModel.showTips = true
    },
    confirm() {
      alert("确定删除该宝贝")
    },
    closeTips() {
      this.showTips = false
    }
  }
}
</script>

