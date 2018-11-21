<template>
  <div class="convention">
    <div class="explain">
    </div>
    <div class="sign-btn" @click="sign">我愿意签署公约</div>
  </div>
</template>

<script>

export default {
  name: 'convention',
  data () {
    return {
      token: '',
      roomId: '',
      num: 0,
      owner: 0,
      isSigned: false,
      showSign: false
    }
  },
  created () {
    this.getToken()
    this.getRoomId()
  },
  mounted () {
    this.init()
  },
  methods: {
    getToken () {
      this.token = Util.pageUrlGetValue('token')
      Util.setCookie('token', this.token, 'aylives.cn')
    },
    getRoomId () {
      this.roomId = Util.pageUrlGetValue('currentRoomId')
      Util.setCookie('currentRoomId', this.roomId, 'aylives.cn')
    },
    init () {
      Api.Axios.get(Api.CONVENTION(this.token, this.roomId)).then(res => {
        if (res.data && (res.data.code === 200)) {
          this.num = res.data.data.signedCount
          this.owner = res.data.data.currentAgencyCount
          this.isSigned = res.data.data.signed            // 是否已经签过名了
          if (this.isSigned) {
            this.$router.push({path: '/confirm'})
          }
        } else {
          this.$toast(res.data.msg, 1500)
        }
      })
    },
    sign () {
      this.showSign = true
    },
    close () {
      this.showSign = false
    }
  }
}
</script>
<style lang="less" scoped>
.convention {
  // position: fixed;
  width: 100%;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 812px;
  background-image: url('//img1.aylives.cn/f70b7db7af3e4b5587d25e5e9b9e7a64.png?x-oss-process=image/resize,w_60');
  // background-image: url('//img1.aylives.cn/bc2a8f72f9894cb2afe2dfe048a63adf.png?x-oss-process=image/resize,w_60');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  // @media only screen and (device-width: 375px) and (device-height: 812px) {
  //   background-image: url('//img1.aylives.cn/f70b7db7af3e4b5587d25e5e9b9e7a64.png?x-oss-process=image/resize,w_60');
  // }
  @media only screen and (min-width: 768px) {
    position: relative;
    height: 1366px;
    font-size: 42px;
    background-image: url("//img1.aylives.cn/2d2fa0e6f8fe42fcb4bfeecd5a8f2752.png?x-oss-process=image/resize,w_60");
  }

  @media only screen and (min-width: 1024px) {
    height: 1821px;
    font-size: 42px;
  }
  .explain {
    width: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    // top: 32%;
    top: 220px;
    font-family: 'PingFang-SC-Medium', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande';
    font-weight: bold;
    color: #2F3542;
    font-size: 14px;
    line-height: 24px;
    @media only screen and (min-width: 320px) {
      top: 220px;
    }
    @media only screen and (min-width: 360px) {
      top: 218px;
    }

    @media only screen and (device-width: 375px) and (device-height: 812px) {
      font-size: 14px;
      top: 210px;
    }

    @media only screen and (min-width: 411px) {
      font-size: 15px;
      top: 238px;
    }

    @media only screen and (min-width: 411px) and (height: 823px) {
      font-size: 15px;
      top: 238px;
    }

    @media only screen and (width: 414px) {
      font-size: 15px;
    }

    @media only screen and (min-width: 768px) {
      font-size: 30px;
      top: 340px;
      line-height: 48px;
    }

    @media only screen and (min-width: 1024px) {
      font-size: 36px;
      top: 450px;
      line-height: 60px;
    }
  }
  .sign-btn {
    position: relative;
    color: #FFFFFF;
    font-size: 20px;
    line-height: 42px;
    width: 242px;
    height: 42px;
    background:linear-gradient(0deg,rgba(249,164,105,1) 0%,rgba(251,203,156,1) 100%);
    border-radius: 60px;
    top: 74%;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    @media only screen and (min-width: 390px) and (max-width: 395px) {
      top: 80%;
    }
    @media only screen and (min-width: 360px) and (max-width: 364px) {
      top: 80%;
    }
    @media only screen and (device-height: 640px){
      top: 73%;
    }
    @media only screen and (min-width: 411px) {
      top: 80%;
    }
    @media only screen and (device-width: 375px) and (device-height: 812px){
      top: 74%;
    }
    @media only screen and (device-width: 320px) and (device-height: 568px){
      top: 74%;
      width: 220px;
      height: 38px;
      font-size: 19px;
      line-height: 38px;
    }
    @media only screen and (width: 768px) {
      width: 420px;
      height: 100px;
      top: 72%;
      font-size: 40px;
      line-height: 100px;
    }

    @media only screen and (width: 1024px) {
      width: 420px;
      height: 100px;
      top: 72%;
      font-size: 40px;
      line-height: 100px;
    }
  }
  .sign-component {
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    .close-btn{
      width: 32px;
      height: 32px;
      position: absolute;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      top: 23%;
      left: 85%;
      @media only screen and (device-width: 375px) and (device-height: 812px) {
        width: 36px;
        height: 36px;
        top: 22%;
        left: 84%;
      }
      @media only screen and (width: 768px) {
        width: 8%;
        height: 6%;
        top: 22%;
        left: 86%;
      }

      @media only screen and (width: 1024px) {
        width: 8%;
        height: 6%;
        top: 22%;
        left: 86%;
      }
    }
    .sign-container {
      position: absolute;
      border-radius: 20px;
      width: 90%;
      height: 50%;
      background: #FFFFFF;
      left: 50%;
      top: 30%;
      transform: translate(-50%);
      -webkit-transform: translate(-50%);
      font-size: 18px;
    }
  }
}

</style>
