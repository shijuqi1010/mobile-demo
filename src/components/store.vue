<template>
  <div class="des-index">
    <div class="banner">
    </div>
    <button-tab class="tab-header">
      <button-tab-item>抽奖</button-tab-item>
      <button-tab-item selected>兑礼</button-tab-item>
      <button-tab-item>抵扣维修费</button-tab-item>
    </button-tab>
    <div>
      <iframe class="des-prize" src="https://h5.aylives.cn/suggest/#/index" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
import loading from "./loading.vue"
import api from "../config/api.js"
import Util from "../utils/utils"
import { ButtonTab, ButtonTabItem } from 'vux'

export default {
  components: {
    ButtonTab,
    ButtonTabItem,
    loading
  },
  data() {
    return {
      token: "",
      currentRoomId: "",
      uploadText: "",
      points: 0,
      totalPoints: 0,
      city: "",
      area: "",
      status: "",
      name: "",
      num: "",
      id: "",
      choose: ['抽奖', '兑礼', '抵扣维修费'],
      clickAble: true,
      uploaded: false,
      loading: true,
      tip: false,
      showBubble: true
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.des-index {
  width: 100%;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .banner{
    margin: 20px 20px 20px 20px;
    height: 120px;
    background: url("//img1.aylives.cn/a14475c44e054e1e9de4bd9f5e077f21.png");
    background-size: cover;
    background-position: center;
  }
  .tab-header{
    margin: 20px 20px 20px 20px;
  }
  .des-prize{
    margin: -200px 20px 20px 20px;
    width: 90%;
    height: 1000px;
  }
}
</style>
