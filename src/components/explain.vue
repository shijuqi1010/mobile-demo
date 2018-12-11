<template>
  <div class="des-explain">
    <img src="https://img1.aylives.cn/b684aa7dac334bddbdb03b31f6d652c1.png" alt="">
    <ul class="data">
      <li class="total-num">
        <p>{{ totalPoints }}</p>
        <p>总奥克积分</p>
      </li>
      <li class="rank">
        <p>{{ points }}</p>
        <p>昨日被收取奥克积分</p>
      </li>
    </ul>
    
    <div class="story">
      <p>传说，这里以前是一片蛮荒的野地，杳无人烟。某一天，一只嘴衔稻穗的仙羊路过，一颗稻谷跌落了下来，阳光正好，雨水丰足。多年后的一天，这片土地已铺满金灿灿的稻谷，农民正收割着稻谷，工人正砌着城墙....</p>
      <p>这便是，奥克城的由来。读到这里的每一个居民，都是奥克城的建设者。</p>
    </div>
    <div class="introduct">
      <p class="title"> 奥克城定位 </p>
      <p class="content"> 奥克城以虚拟社区的形式，在生活上涵盖衣食住行等全方面服务，在建设上提供士农工商等发展方式，致力于打造一个互联网+社区生态圈。奥克城通过全民参与的形式，让每一个奥克居民都能成为社区的主人，重新定义新的社区生活。 </p>
    </div>

    <ul class="plan">
      <li class="title">奥克城建设计划</li>
      <li>
        <p class="content"> 衣冠礼乐 </p>
        <p class="content"> 奥克城初创期，奥克居民分为创世居民和普通居民，根据入城时间、所做贡献划分。 </p>
      </li>
      <li>
        <p class="content"> 当家做主 </p>
        <p class="content"> 奥克城发展期，全体奥克居民参与建设，从各方面共同 搭建奥克城的基础设施。 </p>
      </li>
      <li>
        <p class="content"> 百花齐放，姹紫嫣红 </p>
      <p class="content"> 奥克城繁荣期，积极引进城外工商企业入驻，为奥克居 民提供精神文化各方面服务。 </p>
      </li>
    </ul>

    <div class="explain">
      <div class="explain-title">
        生存法则
      </div>
      <ul class="donate-explain">
        <li>1、奥克积分每天按24个小时平均产生，2小时产生一次；</li>
        <li>2、当天积分不收取，第三天自动消失；</li>
        <li>3、180天不登录奥克城算力减为原来的60%，365天不登录算力减为原来的30%，730天不登录算力清空（奥克积分不回收）；</li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from "../config/api.js"
import Util from "../utils/utils"

export default {
  name: 'explian',
  data () {
    return {
      token: '',
      roomId: '',
      totalPoints: 521000000,
      points: 99999.11111,
    }
  },
  created() {
  },
  mounted() {
    this.getPoints()
  },
  methods: {
    getPoints() {
      api.Axios.get(api.EXPLAIN).then(res => {
        console.log('res', res);
        if (res.data.code === 200) {
          this.recordlist = res.data.data.aokePowerRecords
          this.points = res.data.data.lastDayPoints
        } else {
          this.$toast(res.data.msg, 1500)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.des-explain{
  width: 100%;
  height: 100%;
  text-align: left;
  img{
    width: 100%;
    height: 22%;
  }
  .data{
    list-style: none;
    position: relative;
    display: flex;
    justify-content: center;
    font-size: 20px;
    padding: 28px 20px;
    li{
      flex: 1;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      p:nth-child(1){
        font-size: 20px;
        font-weight:bold;
        margin-bottom: 8px;
      }
      p:nth-child(2){
        font-size: 12px;
      }
    }
    .total-num{
      text-align: center;
    }
    .rank{
      text-align: center;
    }
  }
  .story{
    padding: 28px 20px 36px;
  }
  .introduct{
    padding: 20px 20px 24px;
    border-top: 10px solid rgba(251,251,251,1);
    .title{
      margin-bottom: 14px;
      font-size: 20px;
    }
    .content{
      font-size: 14px;
      line-height: 20px;
    }
  }
  .plan{
    padding: 20px 20px 24px;
    border-top: 10px solid rgba(251,251,251,1);
    list-style: none;
    .title{
      margin-bottom: 14px;
      font-size: 20px;
    }
    .content{
      font-size: 14px;
      line-height: 20px;
    }
    li:nth-child(3){
      margin: 30px 0;
    }
  }
  .explain{
    padding: 20px 20px 30px;
    border-top: 10px solid rgba(251,251,251,1);
    .explain-title{
      margin-bottom: 20px;
      font-size: 20px;
      @media only screen and (min-width: 768px) {
        line-height: 60px;
        font-size: 42px;
      }
    }
    .donate-explain{
      list-style: none;
      font-size: 14px;
      line-height: 20px;
      @media only screen and (min-width: 768px) {
        font-size: 32px;
        line-height: 40px;
      }
    }
    @media only screen and (min-width: 768px) {
      padding: 40px 40px 34px;
    }
  }
}
</style>
