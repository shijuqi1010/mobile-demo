<template>
  <div class="des-record">
    <ul class="record-list" v-if="recordlist">
      <li v-for="(item, index) in recordlist" :key="index">
        <div class="left">
          <p>{{item.type}}</p>
          <p class="time">{{item.time}}</p>
        </div>
        <div class="right">+{{item.points}}</div>
      </li>
    </ul>
    <div v-else class="no-points">
      暂无算力记录
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
      points: 0,
      recordlist: null
      // recordlist:[{
      //   type: '获取算力名称',
      //   time: '2018-11-29 10:20:00',
      //   points: 1
      //   }, {
      //     type: '签到',
      //     time: '2018-11-29 10:10:00',
      //     points: 9
      //   }, {
      //     type: '关注公众号',
      //     time: '2018-11-29 10:10:00',
      //     points: 10
      //   }, {
      //     type: '运动捐步',
      //     time: '2018-11-29 10:10:00',
      //     points: 100
      //   }, {
      //     type: '抽奖',
      //     time: '2018-11-29 10:10:00',
      //     points: 30
      //   }, {
      //     type: '租住',
      //     time: '2018-11-29 10:10:00',
      //     points: 20
      //   }, {
      //     type: '邀请邻居',
      //     time: '2018-11-29 10:10:00',
      //     points: 40
      //   }
      // ],
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
    getHistoryPoints() {
      this.recordlist = [{
        type: '获取算力名称',
        time: '2018-11-29 10:20:00',
        points: 1
        }, {
          type: '签到',
          time: '2018-11-29 10:10:00',
          points: 9
        }, {
          type: '关注公众号',
          time: '2018-11-29 10:10:00',
          points: 10
        }, {
          type: '运动捐步',
          time: '2018-11-29 10:10:00',
          points: 100
        }, {
          type: '抽奖',
          time: '2018-11-29 10:10:00',
          points: 30
        }, {
          type: '租住',
          time: '2018-11-29 10:10:00',
          points: 20
        }, {
          type: '邀请邻居',
          time: '2018-11-29 10:10:00',
          points: 40
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.des-record {
  width: 100%;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
  .no-points{

  }
}

</style>
