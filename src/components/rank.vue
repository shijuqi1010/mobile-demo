<template>
  <div class="des-rank">
    <div class="header">
      <p>奥克城荣誉榜</p>
      <ul>
        <li>
          奥克城总注册居民 {{num}}
        </li>
        <li>
          我的算力排名 {{points}}
        </li>
      </ul>
    </div>
    <div class="content">
      <p>算力排行榜</p>
      <x-table :cell-bordered="false" style="background-color:#fff;">
        <thead>
          <tr>
            <th>名次</th>
            <th>账户</th>
            <th>算力值</th>
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
  bottom: 0;
  font-weight: normal;
  overflow: hidden;
  .header{
    position: relative;
    border: 1px solid red;
    box-sizing: border-box;
    width: 100%;
    height: 22%;
    font-size: 12px;
    @media only screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
  .content{
    border: 1px solid yellow;
    box-sizing: border-box;
    height: 49%;
  }
}

@keyframes hidder {
  from {
    // left: 10px;
    // top: 30px;
    opacity: 1;
  } to {
    left: 10px;
    top: 50px;
    opacity: 0;
  }
}

</style>
