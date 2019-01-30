<template>
  <div class="des-keyboarda" v-if="isShowKeyboard" v-clickoutside="changeShow">
    <div class="des-area" id="area" v-if="showProvince">
      <ul class="des-general">
        <li class="router-link" v-for="(item, index) of provinceList" :key="index" v-if="((index + 1) % 7 >= 0)">
          <p @click="getProvince(item)"> {{item}} </p>
        </li>
        <li class="last-second">
          <p @click="switchToAlph">ABC</p>
        </li>
        <li class="delete-img" @click="deleteProvince">
          <img src="../../assets/images/delete.png" alt="">
        </li>
      </ul>
    </div>
    <div class="des-alph" v-else>
      <ul class="des-row des-num">
        <li class="router-link" v-for="(item, index) of numList" :key="index">
          <p class="type" @click="getAlph(item)"> {{item}} </p>
        </li>
      </ul>
      <ul class="des-row">
        <li class="router-link" v-for="(item, index) of firstList" :key="index">
          <p class="type" @click="getAlph(item)"> {{item}} </p>
        </li>
      </ul>
      <ul class="des-row second-alph">
        <li class="router-link" v-for="(item, index) of secondList" :key="index">
          <p class="type" @click="getAlph(item)"> {{item}} </p>
        </li>
      </ul>
      <ul class="des-general">
        <li class="province">
          <p class="type" @click="switchToProvince">省份</p>
        </li>
        <li class="router-link" v-for="(item, index) of thirdList" :key="index" v-if="((index + 1) % 8 >= 0)">
          <p @click="getAlph(item)"> {{item}} </p>
        </li>
      </ul>
      <ul class="des-row des-text">
        <li class="router-link" v-for="(item, index) of forthList" :key="index">
          <p class="type" @click="getAlph(item)"> {{item}} </p>
        </li>
        <li class="delete" @click="deleteProvince">
          <img src="../../assets/images/delete.png" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const clickoutside = {
	// 初始化指令
  bind(el, binding, vnode) {
    function documentHandler(e) {
      // 这里判断点击的元素是否是本身，是本身，则返回
      if (el.contains(e.target)) {
        return false;
      }
      // 判断指令中是否绑定了函数
      if (binding.expression) {
      // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
        binding.value(e);
      }
    }
    // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
    el.__vueClickOutside__ = documentHandler;
    document.addEventListener('click', documentHandler);
  },
  update() {},
  unbind(el, binding) {
    // 解除事件监听
    document.removeEventListener('click', el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  },
};

export default {
  name: 'keyboard',
  props:["showKeyboard", "changeKeyboard"],
  data () {
    return {
      number: '',
      isShowKeyboard: false,
      showProvince: true,
      provinceList:['京','沪','粤','津','浙','苏','湘','渝','云','豫','皖','陕','桂','新','青','琼','闽','蒙','辽','宁','鲁','晋','吉','冀','黑','甘','鄂','赣','贵','川','藏','民'],
    //   rowList:"京沪粤津浙苏湘渝云豫皖陕桂新青琼闽蒙辽宁鲁晋吉冀黑甘鄂赣贵川藏民",
      numList:"0123456789",
      firstList:"QWERTYUIOP",
      secondList:"ASDFGHJKL",
      thirdList:"ZXCVBNM",
      forthList:"港澳警领使学",
    }
  },
  watch: {
  },
  components: {
  },
  created () {
  },
  mounted () {
  },
  watch: {
    showKeyboard(newV) {
      if (newV) {
        this.isShowKeyboard = this.showKeyboard
      }
    }
  },
  directives: {clickoutside},
  methods: {
    switchToAlph() {
      this.showProvince = false
    },
    switchToProvince() {
      this.showProvince = true
    },
    getProvince(item) {
      this.$emit('getProvince', item)
      this.showProvince = false
    },
    getAlph(item) {
      this.$emit('getAlph', item)
    },
    deleteProvince() {
      this.$emit('deleteProvince')
    },
    closeKeyboard() {
      this.showProvince = false
    },
    changeShow(e) {
      this.isShowKeyboard = false
    },
  }
}
</script>

<style scoped lang="stylus">
  .des-keyboarda
    .des-area
      width 100%
      z-index 999
      position absolute
      background rgba(209, 213, 219, 1)
      color #000000
      bottom 0px
      font-size 20px
      @media only screen and (min-width: 768px) 
        font-size 38px
      .des-general
        width 100%
        padding-top 2%
        li
          background #FFFFFF
          margin 0.4% 1.8%
          border-radius 6px
          text-align center
          width 10%
          line-height 40px
          display inline-block
          box-shadow 0px 1px 3px 0px rgba(136, 136, 136, 0.5)
          overflow hidden
          @media only screen and (min-width: 768px)
            line-height 82px
            border-radius 12px
        .last-second
          width 22.2%
          background rgba(148, 190, 241, 1)
        .delete-img
          background rgba(177, 184, 194, 1) 
          img 
            height 16px
            @media only screen and (min-width: 768px)
              height 32px
    .des-alph
      width 100%
      z-index 999
      position absolute
      background rgba(209, 213, 219, 1)
      color: #2F3542;
      bottom 0px
      font-size 20px
      text-align left
      @media only screen and (min-width: 768px) 
        font-size 38px
      .des-num
        background rgba(187, 194, 202, 1)
        padding-bottom 2.1%
      .des-row
        width 100%
        padding-top 2.1%
        display flex
        display -webkit-flex
        display -ms-flex
        li
          background #FFFFFF
          flex 1
          -webkit-box-flex 1
          -ms-flex 1
          margin 0 0.8%
          border-radius 6px
          text-align center
          line-height 40px
          box-shadow 0px 1px 3px 0px rgba(136, 136, 136, 0.5)
          overflow hidden
          @media only screen and (min-width: 768px)
            line-height 82px
            border-radius 12px
      .des-general
        width 100%
        padding-top 2%
        li
          background #FFFFFF
          margin 0 0.8%
          border-radius 6px
          text-align center
          width 8%
          line-height 40px
          display inline-block
          box-shadow 0px 1px 3px 0px rgba(136, 136, 136, 0.5)
          overflow hidden
          @media only screen and (min-width: 768px)
            line-height 82px
            border-radius 12px
        .province
          font-size 16px
          width 20%
          background rgba(148, 190, 241, 1)
          @media only screen and (min-width: 768px)
            font-size 32px
        .delete-img
          background rgba(177, 184, 194, 1) 
          img 
            height 16px
            @media only screen and (min-width: 768px)
              height 32px
      .second-alph
        width 90%
        margin 0 20px
        .type
          line-height 40px
          @media only screen and (min-width: 768px)
            line-height 82px
      .third-alph
        width 96%
        margin 0 20px 0 0
        padding-bottom 2.1%
        .province
          font-size 16px
          background rgba(148, 190, 241, 1)
          @media only screen and (min-width: 768px)
            font-size 30px

      .des-text
        background rgba(228, 230, 234, 1)
        padding-bottom 2.1%
        li
          margin 0 1.2%
        .delete
          background rgba(177, 184, 194, 1)
          img
            height 16px
            @media only screen and (min-width: 768px)
              height 32px
</style>


