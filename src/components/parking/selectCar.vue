<template>
  <transition>
    <div class="des-tip" v-if='selectModel.showSelect'>
      <div class="select-bg"></div>
      <div class="des-select" v-clickoutside="cancel">
        <ul class="des-header">
          <li class="tips left" @click="cancel">取消</li>
          <li>{{selectModel.title}}</li>
          <li class="tips right" @click="confirm">确定</li>
        </ul>
        <ul class="des-general" v-if="selectModel.selectList">
          <li v-for="(item, index) of selectModel.selectList" @click="selectOpt(item)" :key="index" id="select">
            <p class="type"> {{item}} </p>
          </li>
        </ul>
        <div class="des-tips" v-else>
          暂无历史车牌
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
const clickoutside = {
  bind(el, binding, vnode) {
    function documentHandler(e) {
      if (el.contains(e.target)) {
        return false
      }
      if (binding.expression) {
        binding.value(e)
      }
    }
    el.__vueClickOutside__ = documentHandler
    document.addEventListener('click', documentHandler)
  },
  update() {},
  unbind(el, binding) {
    document.removeEventListener('click', el.__vueClickOutside__)
    delete el.__vueClickOutside__
  },
}

export default {
  name: 'select-model',
  props: ["selectModel"],
  data: function() {
    return {
    }
  },
  mounted() {
  },
  directives: {clickoutside},
  methods: {
    changeHeight() {
      if (this.selectModel.selectList <= 1) {
        // document.getElementById('select').height = '84px'
      } else {

      }
    },
    confirm() {
      alert(1)
    },
    cancel() {
      this.$emit('closedialog')
    },
    selectOpt(item) {
      this.$emit('getSelected', item)
      console.log("select-model", item);
    }
  },
}
</script>

<style lang="stylus" scoped>
.des-tip
  // height 100%
  z-index 99
  .select-bg
    position absolute
    top 0
    width 100%
    height 100%
    background rgba(0, 0, 0, 0.3)
  .des-select
    position absolute
    width 100%
    z-index 999
    background #ffffff
    color #2F3542
    bottom 0px
    @media only screen and (min-width: 768px)
      font-size 30px
      line-height 52px
    .des-header
      list-style none 
      line-height 42px
      font-size 17px
      box-shadow 0px 1px 0px 0px rgba(221, 221, 221, 1)
      li
        display inline-block
      .tips
        color #328FDE
      .left 
        float left
        margin-left 15px
      .right  
        float right
        margin-right 15px
      
    .des-general
      font-size 16px
      // width: 100%;
      list-style none
      @media only screen and (min-width: 768px)
        font-size 24px
        line-height 52px
      li
        height 42px
        text-align center
        // margin-left: 5.5%;
        @media only screen and (min-width: 768px)
          border-radius 32px
          margin-bottom 50px
          height 66px
        .type
          line-height 42px
          @media only screen and (min-width: 768px)
            line-height 66px
            font-size 30px
      li:hover,li:active
        border 1px solid #328FDE
        box-sizing border-box
    .des-tips
      font-size 16px
      line-height 42px
</style>

