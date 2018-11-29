<template>
  <div class="share-body">
    <div class="des-info" v-if="shareInfo">
      <ul class="photo-list-info">
        <li class="user-info">
          <img class="user-image" :src="shareInfo.userAvater" alt="头像">
          <div class="content-right">
            <span class="user-name">{{shareInfo.userName}}</span>
            <div v-if="shareInfo.happyMoment" class="content-text">{{shareInfo.happyMoment.happyMomentContent}}</div>
            <flexbox class="content-photo" :gutter="2">
              <flexbox-item v-if="shareInfo.happyMoment" v-for="(photo, index) in shareInfo.happyMoment.happyMomentPhotosArray" :key="index">
                <img class="photo" v-if="shareInfo.happyMoment.happyMomentPhotosSize === 1" :src="photo" style="width:60%"/>
                <!-- <img class="photo" v-else :src="photo" style="width:100%"/> -->
                <div v-else class="figure-photo" :style="`background-image: url(${photo})`">
                </div>
              </flexbox-item>
            </flexbox>
          </div>

        </li>
        <div class="content-bottom">
          <!-- <span class="report" @click="report(item)">举报</span> -->
          <!-- <img class="praise" src="../assets/demoIcon/heart.png" @click="downLoadApp"> -->
          <span v-if="shareInfo.happyMoment">{{ shareInfo.happyMoment.happyMomentPraise }}</span>
        </div>
      </ul>
    </div>

    <div class="msg-box" v-else>
      <p class="msg">{{msg}}</p>
    </div>

    <div class="share-info">
      <div class="download-title">
        <!-- <img src="../assets/demoIcon/pink-heart.png" alt=""> -->
        <div class="download-text" @click="downLoadApp">下载奥悦家为好友点赞</div>
      </div>
      <div class="luck-container">
        <!-- <img src="../assets/demoIcon/bg-luck-code.png" alt=""> -->
        <div class="luck-code">
          <p class="code">幸运码</p>
          <p>{{ userHappyNum }}</p>
        </div>
        <div class="radius"></div>
      </div>
      <div class="active-rule">
        <p class="rule-title">活动规则</p>
        <ul class="explain">
          <li>1.每个小区业主单组照片点赞数第一名可获得价值169元的美的养生壶1个、第2~5名可获得600ML九阳多功能料理机1台、第6~10名可获得65cm粉红豹1只;</li>
          <li>2.业主可邀请微信好友搜索幸运码为自己点赞助力;</li>
          <li>3.活动时间为2018年09月22日至2018年10月21日;</li>
          <li>4.每人每天可为每组照片点赞10次;</li>
          <li>5.领取方式：奥悦节闭幕式当天活动现场领取（具体时间以各服务中心安排为准)。</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.share-body{
  width: 100%;
  margin-top: -50px;
  margin-bottom: -52px;
  padding: 0;
  top: 0px;
  left: 0;
  right: 0;
  text-align: center;
  overflow: hidden;
  background: url('//img1.aylives.cn/70c5a89f229142d6b29329aa47bf345b.png');
  background-size: 100% 100%;
  .des-info{
    background: #FFFFFF;
    border-radius: 16px;
    margin: 204px 10px 0 10px;
    text-align: left;
    list-style: none;
    display: flex;
    justify-content: space-between;
    .photo-list-info{
      margin: 10px 15px 0 15px;
      width: 100%;
      list-style: none;
      .user-info{
        position: relative;
        overflow: hidden;
        padding-top: 15px;
        .user-image{
          position: absolute;
          width: 35px;
          height: 35px;
          vertical-align: top;
        }
        .content-right{
          position: relative;
          margin-left: 50px;
          display: inline-block;
          font-size: 12px;
          // width: 80%;
          .user-name{
            line-height: 17px;
            color: #4C618E;
          }
          .content-text{
            line-height: 20px;
            color: #333333;
            margin-bottom: 12px;
            word-wrap:break-word; 
            word-break:break-all;
          }
          .content-photo{
            list-style: none;
            .photo{
              max-height: 200px;
            }
            .figure-photo{
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center center;
              min-height: 100px;
              max-height: 120px;
              min-width: 88px;
            }
          }
        }
      }
      .content-bottom{
        float: right;
        margin-bottom: 20px;
        font-size: 12px;
        // .report{
        //   font-size: 10px;
        //   line-height: 14px;
        //   margin-right: 60px;
        //   color: #666666;
        // }
        .praise{
          width: 15px;
          height: 13px;
          vertical-align: middle;
          margin-right: 4px;
        }
        span{
          right: 0px;
        }
      }
    }
  }
  .share-info{
    margin: 25px 10px 26px 10px;
    border-radius: 16px;
    text-align: center;
    background: #FFFFFF;
    .download-title{
      padding-top: 40px;
      font-size: 18px;
      color: #FCA5C2;
      position: relative;
      img{
        position: absolute;
        width: 24px;
        height: 23px;
        vertical-align: middle;
        left: 30px;
        margin-top: 8px;
      }
      .download-text{
        margin: auto;
        display: inline-block;
        width: 200px;
        height: 36px;
        border-radius: 17px;
        border: 1px solid rgba(252,165,194,1);
        box-shadow: 3px 3px 0px #FCA5C2;
        line-height: 40px;
      }
    }
    .luck-container{
      position: relative;
      box-sizing: border-box;
      margin-top: 5px;
      img{
        width: 100%;
      }
      .luck-code{
        position: absolute;
        box-sizing: border-box;
        width: 86px;
        height: 86px;
        border-radius: 50%;
        box-shadow: 0px 2px 19px 0px rgba(229,229,229,0.5);
        font-size: 14px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        .code{
          margin-top: 22px;
        }
      }
      .radius{
        position: absolute;
        left: -30px;
        top: 40px;
        width: 66px;
        height: 66px;
        border-radius: 50%;
        background: linear-gradient(180deg,rgba(102,209,251,1),rgba(151,221,252,1));
      }
    }
    .active-rule{
      margin-top: 10px;
      font-size: 18px;
      color: #FCA5C2;
      .rule-title{
        margin: auto;
        display: inline-block;
        width: 200px;
        height: 36px;
        border-radius: 17px;
        border: 1px solid rgba(252,165,194,1);
        box-shadow: 3px 3px 0px #FCA5C2;
        line-height: 40px;
      }
      .explain{
        list-style: none;
        text-align: left;
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 20px;
        color: #666666;
        font-size: 12px;
        line-height: 18px;
        padding-bottom: 15px;
        li{
          margin-bottom: 5px;
        }
      }
    }
  }
  .msg-box{
    margin: 204px 10px 0 10px;
    height: 100px;
    .msg{
      text-align: center;
      font-size: 16px;
    }
  }
}
</style>

<script>
import Api from '../../../config/api.js'
export default {
  data () {
    return {
      shareInfo: '',
      shareId: '',
      msg: '',
      userHappyNum: 0
    }
  },
  mounted () {
    // http://127.0.0.1:8088/#/sharePage?15
    let url = window.location.href
    // 分享微信朋友圈链接样式 http://happiness.frp.aylives.cn:8000/?from=singlemessage&isappinstalled=0#/sharePage?81
    if (url.indexOf('#') > -1) {
      this.shareId = url.split('#', 2)[1].split('?', 2)[1]
    } else {
      this.msg = '您想看的照片被藏起来了哦！'
      return null
    }
    Api.Axios.get(Api.SHARE(this.shareId)).then(res => {
      if (res.data && (res.data.code === 200)) {
        this.shareInfo = res.data.data
        this.userHappyNum = this.shareInfo.userHappyNum
      } else {
        this.shareInfo = null
        this.msg = '内容暂时保密哦～'
      }
    })
  },
  methods: {
    downLoadApp () {
      window.location = 'https://h5.aylives.cn/app/index.html'
    },
    report (item) {
      let id = item.happyMomentId
      Api.Axios.post(Api.REPORT(id)).then(res => {
        if (res.data.code === 200) {
          this.$vux.toast.show({
            text: res.data.msg,
            type: 'success'
          })
        } else {
          this.$vux.toast.show({
            text: res.data.msg,
            type: 'warn'
          })
        }
      })
    }
  }
}
</script>

