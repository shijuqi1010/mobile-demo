<template>
  <div class="des-index">
    <div class="des-circle">
      <x-circle class="circle"
        :percent="percent"
        :stroke-width="7"
        :trail-width="7"
        stroke-color="#328FDE"
        trail-color="#ececec">
        <p class="title">剩余车位</p>
        <p class="num">{{surplusNumber}}</p>
        <img src="../../assets/images/refresh.png" alt="">
      </x-circle>
    </div>

    <div class="des-input">
      <input-board :inputList="inputList"></input-board>
    </div>

    <div class="des-history">
      <ul class="history" @click="showHistory">
        <li>
          <img src="../../assets/images/history.png" alt="">
        </li>
        <li class="history-text">
          <p>历史</p>
        </li>
      </ul>
    </div>

    <div>
      <select-car
        :select-model="selectModel"
        @closedialog="selectModel.showSelect = false"
        @getSelected="getSelected">
      </select-car>
    </div>

    <div class="btn">临停缴费</div>

    <div class="border"></div>

    <div class="des-content">
      <ul class="des-general">
        <router-link class="router-link" :to="item.path" tag="li" v-for="(item, index) of contentList" :key="index" v-if="((index + 1) % 4 >= 0)">
          <img class="icon" :src="item.icon" alt="">
          <p class="type"> {{item.content}} </p>
        </router-link>
      </ul>
    </div>

  </div>
  
</template>

<script>
  import { XCircle } from 'vux'
  import inputBoard from './inputBoard'
  import selectCar from './selectCar'

  export default {
    components: {
      XCircle,
      inputBoard,
      selectCar
    },
    data(){
      return{
        percent: 20,
        provinceList: [['粤','沪','湘']],
        province: ['粤'],
        plateNumList: [['A512312', 'B234234']],
        plateNum: '',
        valueList: [],
        surplusNumber: 0,
        inputList: '',
        contentList: [
          {path: '/monthCard', icon: 'https://img1.aylives.cn/23b7964613024b23821d720bfa06d17a.png', content: '月卡缴费'},
          {path: '/unlicensed', icon: 'https://img1.aylives.cn/63c9dda34dc04e83aabe5b347b529cd1.png', content: '无牌车缴费'},
          {path: '/', icon: 'https://img1.aylives.cn/bc1121d0785f427c91103bb77e6720ce.png', content: '无感支付'},
          {path: '/manageVehicle', icon: 'https://img1.aylives.cn/ed9adcf1480b4c0e901963ad6cdf4e75.png', content: '车辆管理'},
          {path: '/rule', icon: 'https://img1.aylives.cn/5b5ba394281349d191055e338f1cda2a.png', content: '收费规则'},
          {path: '/record', icon: 'https://img1.aylives.cn/2d55f3e3b57d44e2abbf0acb0d1c487d.png', content: '记录查询'},
          {path: '/personalCenter', icon: 'https://img1.aylives.cn/077858eca7ae4c7b8dfa459c3303d5f7.png', content: '个人中心'},
        ],
        selectModel: {
          showSelect: false,
          selectList: ['粤A11111', '粤A222222', '粤A111111', '粤A111111', '粤A111111'],
          title: '历史车牌',
          // selectList: ''
        },
      }
    },
    created(){
    },
    methods:{
      showHistory() {
        this.selectModel.showSelect = true
      },
      getSelected(selectedOpt) {
        this.inputList = selectedOpt
        console.log('====', this.inputList);
      },
      onChange (value) {
        this.plateNum = value[0]
      },
      refresh() {}
    }
  }
</script>

<style scoped lang="stylus">
  .des-index
    .des-circle
      padding-top: 16px
      // text-align center
      .circle
        margin auto
        width 170px
        height 170px
        font-size 14px
        @media only screen and (min-width: 768px) 
          width 300px
          height 300px
          font-size 28px
        // .title
        //   font-size 14px
        .num
          color #328FDE
          font-size: 32px
          font-weight bold
          @media only screen and (min-width: 768px) 
            font-size: 60px
        img
          width 36px
          height 30px
          @media only screen and (min-width: 768px) 
            width 60px
            height 50px
    .des-input
      margin: 20px 0 14px
    .des-history
      margin: 10px 18px 10px
      padding-bottom 10px
      .input-block
        list-style none
        height 52px
        display flex
        li
          display block
          flex 1
          border-top solid 1px #328FDE
          border-bottom solid 1px #328FDE
          border-left solid 1px #328FDE
        li:last-child
            border-top dashed 1px #328FDE
            border-bottom dashed 1px #328FDE
            border-right dashed 1px #328FDE
        li:nth-child(3)
          border none
          border-left solid 1px #328FDE
      .history
        position relative
        list-style none
        li
          position absolute
          right 0
          @media only screen and (min-width: 768px) 
            right 4%
          img
            width 14px
            height 14px
            @media only screen and (min-width: 768px) 
              width 28px
              height 28px
          p
            color rgba(87, 107, 149, 1)
            font-size 14px
            @media only screen and (min-width: 768px) 
              font-size 28px
        li:nth-child(1)
          margin-right 30px
          @media only screen and (min-width: 768px) 
            margin-right 66px

    .btn
      color #ffffff
      line-height 42px
      width 90%
      border-radius 4px
      background-color rgba(50, 143, 222, 1)
      border 1px solid rgba(46, 136, 212, 1)
      margin auto
      margin-top 19px
      margin-bottom 25px
      @media only screen and (min-width: 768px) 
        margin-top 4%
        font-size 30px
        line-height 68px
        border-radius 12px
    .border
      background #EFEFF4
      height 10px

  .des-content
    font-size 14px
    text-align left
    @media only screen and (min-width: 768px) 
      font-size 30px
      line-height 52px
    
    .des-general
      width 100%
      @media only screen and (min-width: 768px)
        font-size 24px
        line-height 52px
    
      li
        text-align center
        width: 24.5%
        padding-top 8%
        display inline-block
        
        img
          width 44px
          height 44px
          @media only screen and (min-width: 768px)
            width 80px
            height 80px
        
        .type
          line-height: 20px
          @media only screen and (min-width: 768px)
            line-height 52px
            font-size 28px
</style>
