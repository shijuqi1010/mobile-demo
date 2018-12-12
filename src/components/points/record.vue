<template>
  <div class="des-record">
    <scroller :on-infinite = "infinite" :on-refresh = "refresh">
    <ul class="record-list" v-if="recordlist">
      <li v-for="(item, index) in recordlist" :key="index">
        <div class="left">
          <p>{{item.source}}</p>
          <p class="time">{{item.createTime}}</p>
        </div>
        <div class="right">+{{item.power}}</div>
      </li>
    </ul>
    <div v-else class="no-points">
      暂无算力记录
    </div>
    </scroller>
  </div>
</template>

<script>
import api from "../../config/api.js"
import Util from "../../utils/utils"

export default {
  name: 'record',
  data () {
    return {
      token: '',
      roomId: '',
      num: 0,
      owner: 0,
      points: 0,
      recordlist: null,
      scrollBottom: false,
      count: 0,
      pageSize: 20
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    getRank(count, fn) {
      api.Axios.get(api.RECORD,{
        params: {
          page: count,
          size: this.pageSize,
        }
      }).then(res => {
        console.log('res', res);
        if (res.data.code === 200) {
          this.recordlist = res.data.data.aokePowerRecords
        } else {
          this.$toast(res.data.msg, 1500)
        }

        if (res.data && (res.data.code === 200)) {
          let recordlist = res.data.data.aokePowerRecords.content
          if (res.data.data.aokePowerRecords.last) {
            // this.count = 0
            this.scrollBottom = true
            fn(true)
          } else {
            if (fn) fn()
          }
          if (count === 1) {
            this.recordlist = recordlist
          } else {
            this.recordlist = this.recordlist.concat(recordlist)
          }
        } else {
          this.scrollBottom = true
          fn(true)
          this.recordlist = null
          // this.msg = res.data.msg
        }
      })
    },
    infinite (done) {
      if (this.scrollBottom) {
        done(true)
        return
      }
      this.count++
      this.getRank(this.count, done)
    },
    refresh (done) {
      this.count = 0
      this.scrollBottom = false
      this.getRank(1, done)
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
