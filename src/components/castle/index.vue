<template>
  <div class="des-personal">
    <div class="center-info">
      <img class="user-img" :src="personalInfo.userAvater">
      <ul class="explain">
        <li class="name">
          {{name}}
        </li>
        <li class="title">
          {{honor}}
        </li>
        <li class="rank">
          第{{rank}}名市民
        </li>
      </ul>
    </div>
    <div class="detail">
      奥克积分{{points}}
    </div>

    <ul class="menu">
      <li>奥克基地</li>
      <li>我的算力</li>
      <li>我的订单</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'paopao',
      honor: '奥克城创世居民',
      rank: '',
      points: '',
      msg: '',
      personalInfo: '',
      userId: '',
      delId: '',
      allPreviewerList: [],
      showConfirm: false,
      scrollBottom: false,
      showDelete: false,
      count: 0,
      pageSize: 5,
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.des-personal{
  width: 100%;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  text-align: left;
  overflow: auto;
  .center-info{
    height: 200px;
    // top: -8px; 
    background-color: aqua;
    // background-image: url("//img1.aylives.cn/cf05cd18b85f44a0bd812e0858ce2cf5.png");
    // background-size: 100% 100%;
    // background-position: center;
    text-align: center;
    .user-img{
      margin-top: 18px; 
      width: 65px;
      height: 65px;
      border-radius: 50%;
      list-style: none;
    }
    .explain{
      list-style: none;
      position: relative;
      // display: flex;
      // justify-content: center;
      font-size: 16px;
      padding-bottom: 20px;
      top: -10px;
      li{
        // display: inline-block;
        p:nth-child(1){
          font-size: 20px;
        }
        p:nth-child(2){
          font-size: 10px;
        }
      }
      .share-code{
        text-align: center;
        padding-right: 120px; 
      }
      .rank{
        text-align: center;
      }
    }
  }
  .detail{
    text-align: left;
    height: 50px;
    background: #666666;
  }
  .menu{
    margin: 0;
    padding: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: green;
    overflow: auto;
    .confirm-box{
      position: relative;
      width: 250px;
      height: 156px;
      background:rgba(255,255,255,1);
      top: 50%;
      transform: translateY(-50%);
      left: 50%;
      transform: translateX(-50%);
      font-size: 14px;
      color: #666666;
      border-radius: 6px;
      overflow: hidden;
      .confirm-title{
        font-size: 20px;
        color: #333333;
        margin: 12px 0 20px 20px;
      }
      .confirm-content{
        margin-left: 20px;
      }
      .confirm-btn{
        bottom: -36px;
        position: relative;
        .btn-cancle{
          position: absolute;
          right: 70px;
        }
        .btn-confirm{
          position: absolute;
          right: 20px;
          color: #FFD100;
        }
      }
    }
  }
  .msg-notice{
    // margin: 30px 80px 20px 80px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>

