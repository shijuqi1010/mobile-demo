<template>
  <transition name="fade">
    <div class="des-tip" v-if='tipsModel.showTips'>
      <div class="tip-container">
        <p class="tip-title">{{tipsModel.title}}</p>
        <div class="tip-content">
          <p class="tip-text">{{tipsModel.content}}</p>
        </div>
        <div class="tip-btn">
          <span @click="cancel"> 取消 </span>
          <span class="confirm" @click="confirm"> 确定 </span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'tips-model',
  props: ["tipsModel"],
  data: function() {
    return {
    }
  },
  methods: {
    cancel() {
      this.$emit('closedialog')
    },
    confirm() {
      this.$emit('confirm')
      alert(1)
    }
  },
}
</script>

<style lang="stylus" scoped>
.des-tip
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  height 100%
  width 100%
  z-index 999
  background rgba(0,0,0,0.8)
  .tip-container
    width: 300px
    height 225px
    margin auto
    margin-top 60%
    background rgba(255,255,255,1)
    border-radius 12px
    text-align left
    
    .tip-title
      padding-top 36px
      margin-left 30px
      line-height 28px
      font-size 20px
    .tip-content
      position relative
      height 64px
      padding 20px 30px
      font-size 16px
      .tip-text
        position absolute
        top 50%
        transform translateY(-50%)
        -webkit-transform translateY(-50%)

    .tip-btn
      font-size 14px
      margin-left 168px
      .confirm
        color #FF6800
        margin 0px 0 0px 40px

.fade-enter-active, .fade-leave-active
  transition transform .5s ease

.fade-enter, .fade-leave-active
  transform translate(-50%)
  -webkit-transform translate(-50%)

.fade-enter
  opacity 0
  transform translate(0, 50%)
  -webkit-transform translate(0, -50%)

.fade-leave-active
  opacity 0
  transform translate(0, 0)
  -webkit-transform translate(0, 0);

</style>

