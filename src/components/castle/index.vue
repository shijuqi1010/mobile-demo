<template>
  <div class="des-personal">
    <div class="center-info">
      <img class="user-img" :src="personalInfo.userAvater">
      <ul class="explain">
        <li class="name">
          {{personalInfo.name}}
        </li>
        <li class="title">
          {{personalInfo.honor}}
        </li>
        <li class="rank">
          第{{personalInfo.rank}}名市民
        </li>
      </ul>
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
export default {
  data () {
    return {
      // name: 'paopao',
      // honor: '奥克城创世居民',
      // rank: '',
      points: '',
      msg: '',
      personalInfo: {userAvater: 'https://img1.aylives.cn/ee1284f082b34dca8b5ec5e3d67ad125.jpg', name: '某某某',honor: '奥克城创世居民',rank: 2018},
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
    height: 205px;
    background-image: url("https://img1.aylives.cn/e5d42ae0d07b4fae879d36c09ad6da30.png");
    background-size: 100% 100%;
    background-position: center;
    text-align: center;
    list-style: none;
    .user-img{
      margin-top: 40px; 
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    .explain{
      position: relative;
      font-size: 14px;
      padding-bottom: 20px;
      top: -10px;
      .name{
        margin: 12px 0;
      }
      .title, .rank{
        font-size: 12px;
        line-height: 20px;
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

