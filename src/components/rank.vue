<template>
  <div class="des-rank">
    <img src="https://img1.aylives.cn/d41bfb4cc79943d9b3135c996c2dd27b.png" alt="">
    <ul class="data">
      <li class="total-num">
        <p>{{ totalNum }}</p>
        <p>奥克城总注册居民</p>
      </li>
      <li class="rank">
        <p>{{ rank }}</p>
        <p>我的算力排名</p>
      </li>
    </ul>
    
    <div class="story">
      <p>算力是记录“奥居民”对奥克城发展所作的贡献量，也是获取奥克积分数量的主要因素，算力越高，单位时间内矿海生成的奥克积分就越多。算力分为2种，一种是永久算力，即一旦获取，永远不会消失，另一种是临时算力，即获取后过一段时间会逐渐减半最后归零。</p>
    </div>
    <div class="content">
      <p class="title">算力排行榜</p>
      <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
        <thead>
          <tr>
            <th class="t-head">名次</th>
            <th class="t-head">居民</th>
            <th class="t-head">算力</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in rankList" :key="index">
            <td>{{index+1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.aokeWallet.aokePower}}</td>
          </tr>
        </tbody>
      </x-table>
    </div>

  </div>
</template>

<script>
import { XTable } from 'vux'
import api from "../config/api.js"
import Util from "../utils/utils"

export default {
  components: {
    XTable
  },
  data() {
    return {
      token: "",
      currentRoomId: "",
      totalNum: 0,
      rank: 0,
      loading: true,
      tip: false,
      rankList: null
    }
  },
  created() {
  },
  mounted() {
    this.getRank()
  },
  methods: {
    getRank() {
      api.Axios.get(api.RANK).then(res => {
        console.log('res', res);
        if (res.data.code === 200) {
          this.totalNum = res.data.data.aokeUserSize
          this.rank = res.data.data.minePowerRank
          this.rankList = res.data.data.aokeUsers
        } else {
          this.$toast(res.data.msg, 1500)
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.des-rank {
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
    font-size: 12px;
    margin: 10px 20px;
  }
  .content{
    // width: 100%;
    font-size: 14px;
    list-style: none;
    .vux-table td:before, .vux-table th:before{
      border: none;
    }
    .vux-table:after{
      border: none;
    }
    .title{
      font-size: 18px;
      line-height: 25px;
      margin: 32px 20px;
    }
    .t-head{
      font-size: 16px;
      color: #FFA235;
    }
  }
}
</style>
