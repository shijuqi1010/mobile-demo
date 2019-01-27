<template>
  <div class="des-product">
    <div class="product-banner">
      <swiperBanner :banner-list="picList"></swiperBanner>
      <p class="product-title"> {{title}} </p>
      <p class="product-time"> {{time}} </p>
    </div>
    <div class="des-info">
      <div class="user-info">
        <img class="user-images" :src="userInfo.avater">
        <div class="content-right">
          <div class="user-address">{{location}}</div>
          <span class="user-name">{{userInfo.phone}}</span>
        </div>
      </div>
      <div class="describe">
        {{describe}}
      </div>
    </div>

  </div>
</template>

<script>
import { swiper, swiperSlide} from 'vue-awesome-swiper'
import api from '../../../config/api.js'
import Util from '../../../utils/utils'
import swiperBanner from '../../public/swiperBanner'

export default {
  name: 'productDetail',
  components: {
    swiper,
    swiperSlide,
    swiperBanner
  },
  data () {
    return {
      token: '',
      roomId: '',
      num: 0,
      owner: 0,
      picList: '',
      isSigned: false,
      showSign: false,
      points: 3883,
      goodsId: '',
      title: '',
      time: '',
      location: '',
      userInfo: {
        avater: '',
        phone: '',
      },
      describe: '',
    }
  },
  created () {
  },
  mounted () {
    this.getDetail()
  },
  methods: {
    getGoodsId() {
      this.goodsId = Util.pageUrlGetValue("goodsId")
    },
    getDetail() {
      this.getGoodsId()

      api.Axios.get(api.DETAIL(this.goodsId)).then(res => {
        console.log('res', res);
        if (res.data.code === 200) {
          this.picList = res.data.data.pics
          this.userInfo = res.data.data.releaseUser
          this.location = res.data.data.releaseUser.aokeUserRoom.roomAgency
          this.time = res.data.data.createTime
          this.title = res.data.data.title
          this.describe = res.data.data.content
        } else {
          this.$toast(res.data.msg, 1500)
        }
      })
    },
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
      word-wrap: break-word; 
      word-break: break-all;
    }
  }
}

</style>
