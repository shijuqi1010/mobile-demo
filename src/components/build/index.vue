<template>
  <div class="des-points">
    <div class="general-task">
      <p class="title">普通任务</p>
      <ul class="des-general">
        <li>签到</li>
        <li>运动捐步</li>
        <li>认证房屋</li>
        <li>关注公众号</li>
        <li>邀请邻居</li>
        <li>租住</li>
      </ul>
    </div>
    <div class="special-task">
      <p class="title">专属任务</p>
      <ul class="des-special">
        <li>缴费</li>
        <li>APP开门</li>
        <li>悦分享发帖</li>
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
      showSign: false
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
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
  .general-task {
    text-align: left;
    color: #2F3542;
    font-size: 14px;
    line-height: 24px;
    .title{
      font-size: 24px;
    }
    .des-general{
      font-size: 20px;
    }
  }
  .special-task {
    text-align: left;
    color: #2F3542;
    font-size: 14px;
    line-height: 24px;
    .title{
      font-size: 24px;
    }
    .des-special{
      font-size: 20px;
    }
  }
}

</style>
