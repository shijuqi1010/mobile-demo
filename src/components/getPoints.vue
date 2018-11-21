<template>
  <div class="des-index">
   <div>记录</div>
   <div>普通任务</div>
   <div>专属任务</div>
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
      userInfo:[{
        text: 1111111
      },
      {
        text: 2111111
      },
      {
        text: 31111
      },
      {
        text: 41111
      },
      {
        text: 50000
      },
      {
        text: 60000
      },
      {
        text: 72222
      },
      {
        text: 83333
      },
      {
        text: 94444
      },
      {
        text: 101111
      }
      ]
    }
  },
  created() {
    this.init()
  },
  mounted() {
    if (this.currentRoomId === 0) {
      this.$toast('您还不是奥园业主，请先认证房屋。', 1500)
    } else {
      this.getParam()
    }
  },
  methods: {
    init() {
      this.getToken()
      this.getRoomId()
    },
    getToken() {
      this.token = Util.pageUrlGetValue("token")
      Util.setCookie("token", this.token, "aylives.cn")
    },
    getRoomId() {
      this.currentRoomId = Util.pageUrlGetValue("currentRoomId")
      Util.setCookie("currentRoomId", this.currentRoomId, "aylives.cn")
    },
    getParam() {
      api.Axios.get(api.USERINFO).then(res => {
        if (res.data.code === 200) {
          this.area = res.data.data.agencyName
          this.city = res.data.data.cityName
          this.status = res.data.data.added
          if (this.status) {
            this.$router.push({ path: "/poster" })
          }
        } else {
          this.$toast(res.data.msg, 1500)
        }
      })
    },
    getPoints () {
      this.$router.push({ path: "/getPoints"})
    }
  }
};
</script>

<style scoped lang="less">
.des-index {
  position: fixed;
  width: 100%;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-weight: normal;
  overflow: hidden;
}
</style>
