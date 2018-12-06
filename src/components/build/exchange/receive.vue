<template>
  <div class="product-body">
    <!-- <scroller :on-infinite = "infinite" :on-refresh = "refresh"> -->

    <div class="des-info">
      <ul class="product-list-info">
        <li class="product-info" v-for="(item, listIndex) in productList" :key="listIndex">
          <div class="product-list">
            <img class="product-img" :src="item.productImg">
            <div class="content-right">
              <span class="product-name">{{item.productName}}</span>
              <div class="product">{{item.points}}</div>
              <div class="product">7天后自动确认收货</div>
              <div class="confirm-btn">
                确认收货
              </div>
            </div>
          </div>
        </li>
      </ul>
      <!-- <div v-else>
        <p class="msg">{{ msg }}</p>
      </div> -->
    </div>

    <!-- </scroller> -->
  </div>
</template>

<style scoped lang="less">
.product-body{
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
      // margin: 30px 80px 20px 80px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>

<script>
import Api from '../../../config/api.js'
import Util from '../../../utils/utils'

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
      scrollBottom: false,
      showCreateBtn: false,
      showHappiness: false,
      count: 0,
      pageSize: 5,
      productList:[
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
  }
}
</script>

