<template>
  <div class="des-rank">
    <div class="header">
      <p class="title">奥克城荣誉榜</p>
      <ul class="data">
        <li class="total-num">
          <p>{{ num }}</p>
          <p>奥克城总注册居民</p>
        </li>
        <li class="rank">
          <p>{{ points }}</p>
          <p>我的算力排名</p>
        </li>
      </ul>
      <div class="explain">
        算力是记录“奥居民”对奥克城发展所作的贡献量，也是获取奥克积分数量的主要因素，算力越高，单位时间内矿海生成的奥克积分就越多。算力分为2种，一种是永久算力，即一旦获取，永远不会消失，另一种是临时算力，即获取后过一段时间会逐渐减半最后归零。
      </div>
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
          <tr v-for="(item, index) in info" :key="index">
            <td>{{item.rank}}</td>
            <td>{{item.name}}</td>
            <td>{{item.points}}</td>
          </tr>
        </tbody>
      </x-table>
    </div>

  </div>
</template>

<script>
import { XTable } from 'vux'

export default {
  components: {
    XTable
  },
  data() {
    return {
      token: "",
      currentRoomId: "",
      uploadText: "",
      num: 0,
      points: 0,
      id: "",
      loading: true,
      tip: false,
      info:[{
        rank: 1,
        name: 'qq1',
        points: 100000
      },
      {
        rank: 2,
        name: 'qq2',
        points: 100000
      },
      {
        rank: 3,
        name: 'qq3',
        points: 100000
      },
      {
        rank: 4,
        name: 'qq4',
        points: 100000
      },
      {
        rank: 5,
        name: 'qq5',
        points: 100000
      },
      {
        rank: 6,
        name: 'qq6',
        points: 100000
      },
      {
        rank: 7,
        name: 'qq7',
        points: 100000
      }]
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style scoped lang="less">
.des-rank {
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  // bottom: 0;
  font-weight: normal;
  overflow: auto;
  .header{
    height: 376px;
    background-image: url("https://img1.aylives.cn/07b5600cbd81466e880383d70983ea7d.png");
    background-size: 100% 100%;
    background-position: center;
    text-align: center;
    .user-img{
      margin-top: 8px; 
      width: 65px;
      height: 65px;
      border-radius: 50%;
      list-style: none;
    }
    .title{
      padding: 78px 0 32px;
    }
    .data{
      list-style: none;
      position: relative;
      display: flex;
      justify-content: center;
      font-size: 20px;
      color: #FFFFFF;
      padding-bottom: 20px;
      top: -10px;
      li{
        display: inline-block;
        p:nth-child(1){
          font-size: 20px;
          margin: 8px;
        }
        p:nth-child(2){
          font-size: 12px;
        }
      }
      .total-num{
        text-align: center;
        padding-right: 120px; 
      }
      .rank{
        text-align: center;
      }
    }
    .explain{
      text-align: left;
      margin: 20px 20px;
      font-size: 12px;
      color: #ffffff;
    }
  }
  .content{
    z-index: 999;
    width: 100%;
    background-color: #ffffff;
    overflow: auto;
    font-size: 14px;
    border-radius: 20px 20px 0 0;
    list-style: none;
    margin-top: -20px;
    .vux-table td:before, .vux-table th:before{
      border: none;
    }
    .vux-table:after{
      border: none;
    }
    .title{
      font-size: 18px;
      color: #FF6800;
      line-height: 25px;
      margin: 20px;
    }
    .t-head{
      font-size: 14px;
      color: #FFA235;
    }
  }
}
</style>
