<template>
  <div class="des-detail">
    <div class="detail-banner">
      <p class="top">奥克积分总数</p>
      <p class="center"> {{totalPoints}} </p>
    </div>
    <div class="introduct">
      <p class="title">简介</p>
      <p class="content"> 奥克积分是奥克城居民在奥克城日常生活中活动的奖励，记录着每个“奥居民”为奥克城的发展所贡献的点点滴滴，可以通过日常矿海的生长和其他活动奖励获得奥克积分，使用奥克积分可以在兑换奥克城里的虚拟物品或现实世界的实物奖品和服务，奥克积分总量有限。 </p>
    </div>

    <div class="point-detail">
      <p class="title">积分明细</p>
      <ul class="record-list">
        <li>
          <div class="left">
            <p>日常领取</p>
            <p class="time">{{time}}</p>
          </div>
          <div class="right">+{{point}}</div>
        </li>
        <li>
          <div class="left">
            <p>积分兑换</p>
            <p class="time">{{time}}</p>
          </div>
          <div class="right">+{{point}}</div>
        </li>
        <li>
          <div class="left">
            <p>闲置物品互赠</p>
            <p class="time">{{time}}</p>
          </div>
          <div class="right">+{{point}}</div>
        </li>
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
      totalPoints: 3883,
      point: 1.999999,
      time: '2018-10-24 10:00',
      recordlist: null
    }
  },
  created () {
  },
  computed:{
  },
  mounted () {
    this.getHistoryPoints()
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.des-detail{
  .detail-banner{
    height: 100px;
    background: url("https://img1.aylives.cn/1d4cb7ada42241b5be8c2f66a250ba65.png");
    background-size: cover;
    background-position: center;
    color: #ffffff;
    @media only screen and (min-width: 768px) {
      height: 280px;
      line-height: 80px;
    }
    .top{
      font-size: 12px;
      padding-top: 10px;
      padding-left: 20px;
      display: flex;
      display: -webkit-flex;
      display: -ms-flex;
      @media only screen and (min-width: 768px) {
        font-size: 24px;
      }
    }
    .center{
      font-size: 36px;
      line-height: 50px;
      @media only screen and (min-width: 768px) {
        font-size: 50px;
        line-height: 80px;
      }
    }
  }
  .introduct{
    text-align: left;
    color: #333333;
    margin: 28px 20px 36px;
    .title{
      margin-bottom: 20px;
      font-size: 20px;
    }
    .content{
      font-size: 14px;
      line-height: 20px;
    }
  }
  .point-detail {
    width: 100%;
    padding: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 10px solid rgba(251,251,251,1);
    .title{
      margin: 30px 20px;
      text-align: left;
      font-size: 20px;
      color: #333333;
    }
    .record-list {
      color: #2F3542;
      font-size: 14px;
      line-height: 24px;
      list-style: none;
      li{
        box-shadow: 0px 1px 0px 0px rgba(206,206,206,0.5);
        position: relative;
        margin: 0 20px;
        // border: 1px solid red;
        height: 56px;
        .left{
          position: absolute;
          text-align: left;
          align-items: center;
          font-size: 16px;
          line-height: 40px;
          .time{
            font-size: 10px;
            line-height: 12px;
          }
        }
        .right{
          position: absolute;
          right: 0;
          font-size: 20px;
          line-height: 56px;
        }
      }
    }
  }
}
</style>
