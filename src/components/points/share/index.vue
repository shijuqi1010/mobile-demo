<template>
  <div class="poster-container">
    <div class="des-img">
      <loading class="loading-image" v-if="loading" :color='"#FF9246"'></loading>
      <div v-else class="image" :style="`background-image: url(${photoUrl})`">
        <div class="text">
          <p>我是{{name}}</p>
          <p>我为奥悦节代言</p>
        </div>
      </div>
    </div>
    <div class="share-btn" @click="share">分享至微信</div>
    
  </div>
</template>

<script>
import loading from '../../loading.vue'
import api from '../../../config/api.js'
import Util from '../../../utils/utils'

export default {
  components: {
    loading
  },
  data () {
    return {
      token: '',
      currentRoomId: '',
      photoUrl: '',
      name: '',
      id: 0,
      loading: true
    }
  },
  created() {
    this.init()
  },
  mounted () {
    this.getParam()
  },
  methods: {
    init () {
      this.getToken()
      this.getRoomId()
    },
    getToken () {
      if (!Util.getCookie('token')) {
        this.token = Util.pageUrlGetValue('token')
        Util.setCookie('token', this.token, 'aylives.cn')
      } else {
        this.token = Util.getCookie('token')
      }
    },
    getRoomId () {
      if (!Util.getCookie('currentRoomId')) {
        this.currentRoomId = Util.pageUrlGetValue('currentRoomId')
        Util.setCookie('currentRoomId', this.currentRoomId, 'aylives.cn')
      } else {
        this.currentRoomId = Util.getCookie('currentRoomId')
      }
    },
    getParam () {
      api.Axios.get(api.SHOW(this.id)).then(res => {
        if (res.data.code === 200) {
          this.loading = false
          this.photoUrl = res.data.data.pic
          this.name = res.data.data.name
          this.id = res.data.data.id
        } else {
          this.$toast(res.data.msg, 1500)
        }
      })
    },
    share () {
      let shareId = this.id
      let img = `${this.photoUrl}/thumbnail/200x`
      let title = '奥克城'
      let content = '奥克城活动。'
      document.location = `jsinteractive://share?url=https://h5.aylives.cn/points/#/sharePage?${shareId}&image=${img}&title=${title}&content=${content}`
    }
  }
}
</script>

<style scoped lang="less">
.poster-container {
  width: 100%;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // height: 947px;
  font-weight: normal;
  // background: url('https://img1.aylives.cn/45aa6a1ffdae47008520c832056c7ee0.png');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  .des-img{
    margin: auto;
    height: 40%;
    border: 1px solid  rgba(255,255,255,0);
    .loading-image{
      width: 32px;
      margin: auto;
      margin-top: 60%;
    }
    .image{
      margin: auto;
      margin-top: 12%;
      width: 88%;
      height: 51%;
      border: 1px solid #4585F2;
      border-radius:7px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      // color:#31299E;
      text-align: left;
      .logo{
        position: absolute;
        width:93px;
        height:49px;
        left: 10%;
        top: 10%;
      }
      .fourty{
        position: absolute;
        z-index: 99;
        width:97px;
        height:52px;
        right: 10%;
        top: 10%;
      }
      .text{
        z-index: 99;
        margin-top: 130%;
        // width: 256px;
        height: 86px;
        font-size: 30px;
        font-family: SungtiCSEG-Medium-GB;
        font-weight: bold;
        color: rgba(253,191,24,1);
        line-height: 52px;
        @media only screen and (max-width: 320px) {
          font-size: 32px;
          line-height: 48px;
        }
        @media only screen and (min-width: 768px) {
          width: 500px;
          font-size: 60px;
          line-height: 100px;
        }
        @media only screen and (min-width: 1024px) {
          width: 600px;
          font-size: 76px;
          line-height: 140px;
        }
      }
    }
  }
  .share-btn {
    width: 92%;
    height: 50px;
    margin: auto;
    background:rgb(100, 242, 171);
    border-radius: 10px;
    font-size: 16px;
    font-family: PingFang-SC-Medium;
    font-weight: bold;
    color: rgba(0,0,0,1);
    line-height: 50px;
    margin-top: 8%;
    // margin-bottom: 40px;
    @media only screen and (min-width: 768px) {
      height: 88px;
      font-size: 36px;
      border-radius:10px;
      line-height: 88px;
    }
    @media only screen and (min-width: 1024px) {
      height: 92px;
      font-size: 42px;
      border-radius:10px;
      line-height: 92px;
    }
  }
}
</style>
