<template>
  <div class="des-personal">
    <div class="center-info">
      <div v-if="personalInfo">
        <img class="user-img" :src="personalInfo.avater">
        <p class="name">{{personalInfo.name}}</p>
        <ul class="honor">
          <li class="title">
            {{personalInfo.identity}}
          </li>
          <li class="rank">
            第{{personalInfo.position}}名市民
          </li>
        </ul>
      </div>
    </div>

    <ul class="menu">
      <li class="bitspin">
        <router-link class="record" to="/record">
          <span>我的算力</span>
          <img src="../../assets/arrow.png" alt="">
        </router-link>
      </li>
      <li class="points">
        <router-link class="record" to="/detail">
          <span>我的奥克积分</span>
          <img src="../../assets/arrow.png" alt="">
        </router-link>
      </li>
      <li class="code">
        <router-link class="record" to="/share">
          <span>我的邀请码</span>
          <img src="../../assets/arrow.png" alt="">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "../../config/api.js"
import Util from "../../utils/utils"

export default {
  data () {
    return {
      msg: '',
      personalInfo: null,
    }
  },
  created() {
  },
  mounted() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo() {
      api.Axios.get(api.USERINFO).then(res => {
        if (res.data.code === 200) {
          this.personalInfo = res.data.data.aokeUser
        } else {
          this.$toast(res.data.msg, 1500)
        }
      })
    }
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
    height: 205px;
    background-image: url("https://img1.aylives.cn/db85c2032b3c422c934154d0269436df.png");
    background-size: 100% 100%;
    background-position: center;
    text-align: center;
    .user-img{
      margin-top: 40px; 
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .name{
      font-size: 14px;
      margin: 12px 0 8px;
    }
    .honor{
      list-style: none;
      position: relative;
      display: flex;
      // justify-content: center;
      font-size: 12px;
      line-height: 18px;
      .title, .rank{
        flex: 1;
        -webkit-box-flex: 1;
        -ms-flex: 1;
      }
      li:nth-child(1){
        // margin-right: -20%;
        justify-content: flex-end;
      }
      li:nth-child(2){
        // margin-right: -20%;
        justify-content: flex-start;
      }
    }
  }
  .menu{
    width: 100%;
    background-color: #ffffff;
    overflow: auto;
    font-size: 14px;
    height: 320px;
    border-radius: 20px 20px 0 0;
    list-style: none;
    margin-top: -20px;
    li{
      height: 56px;
      line-height: 56px;
      box-shadow: 0px 0.5px 0px 0px rgba(206,206,206,0.5);
      .record{
        margin: 0 20px;
        position: relative;
        span{
          text-align: middle;
        }
        img{
          vertical-align: middle;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          -webkit-transform: translateY(-50%);
          width: 5px;
          height: 11px;
        }
      }
    }
    .bitspin{
      margin-top: 20px;
    }
  }
}
</style>

