<template>
  <div class="des-points">
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
