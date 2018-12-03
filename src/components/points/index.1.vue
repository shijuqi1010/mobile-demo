<template>
  <div class="des-points">
    <div class="points-banner">
      <ul>
        <li>当前算力</li>
        <li>算力记录</li>
      </ul>
      <p> {{points}} </p>
      <p> 算力越高，获取的奥克积分越多 </p>
    </div>
    <div class="general-task">
      <p class="title">普通任务</p>
      <ul class="des-general">
        <li>
          <router-link to="/signIn">
            签到
          </router-link>
        </li>
        <li>
          <router-link to="/donateSteps">
            运动捐步
          </router-link>
        </li>
        <li>
          认证房屋
        </li>
        <li>
          <router-link to="/attention">
            关注公众号
          </router-link>
        </li>
        <li>
          <router-link to="/share">
            邀请邻居
          </router-link>
        </li>
        <li>
          <router-link to="/donateSteps">
            租住
          </router-link>
        </li>
      </ul>
    </div>
    <div class="special-task">
      <p class="title">专属任务</p>
      <ul class="des-special">
        <li>缴费</li>
        <li>APP开门</li>
        <li @click="jumpToHappiness">
          APP开门悦分享发帖
        </li>
        <li>邻居串门</li>
        <li>小区绿化</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'points',
  data () {
    return {
      token: '',
      roomId: '',
      num: 0,
      owner: 0,
      isSigned: false,
      showSign: false,
      points: 3883,
      generalTaskList:[{},{}],
      specialTaskList:[]

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
.des-points {
  width: 100%;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  background: #ffffff;
  .points-banner{
    // margin: 15px 0;
    height: 120px;
    background: url("../../assets/points/banner.png");
    background-size: cover;
    background-position: center;
  }
  .general-task {
    color: #2F3542;
    font-size: 14px;
    line-height: 24px;
    .title{
      font-size: 18px;
    }
    .des-general{
      font-size: 14px;
      // list-style: none;
      // position: absolute;
      height: 12%;
      display: flex;
      display: -webkit-flex;
      display: -ms-flex;
      bottom: 0;
      width: 100%;
      text-align: center;
      li{
        border: 1px solid red;
        width: 30%;
        height: 124px;
        display: block;
        flex: 1;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        padding: 5px 0;
        height: 100%;
      }
    }
  }
  .special-task {
    color: #2F3542;
    font-size: 14px;
    line-height: 24px;
    .title{
      font-size: 18px;
    }
    .des-special{
      list-style: none;
      // position: absolute;
      // height: 12%;
      display: flex;
      display: -webkit-flex;
      display: -ms-flex;
      width: 100%;
      li{
        border: 1px solid red;
        width: 30%;
        height: 124px;
        display: block;
        flex: 1;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        padding: 5px 0;
        height: 100%;
      }
    }
  }
}

</style>
