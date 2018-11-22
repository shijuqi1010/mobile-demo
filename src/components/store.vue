<template>
  <div class="des-index">
    <p>市场正在开发中，敬请期待</p>
  </div>
</template>

<script>
import loading from "./loading.vue"
import api from "../config/api.js"
import Util from "../utils/utils"

export default {
  components: {
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
}
</style>
