<template>
  <transition name="fade">
    <div class="des-tips-bar" v-if='show'>
      <div class="des-tips-bar-container">
        <i class="icon-ic_correct success" v-if="tipModel.type === 'success'"></i>
        <i class="icon-ic_error fail" v-if="tipModel.type === 'fail'"></i>
        <i class="icon-ic_prompt prompt" v-if="tipModel.type === 'prompt'"></i>
        <span>{{tipModel.msg}}</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'tips-bar',
  data: function() {
    return {
      show: true,
      tipModel: {},
      parent: null
    }
  },
  methods: {
    tipsShow(type, msg, time = 2000) {
      this.show = true
      this.tipModel = {
        type,
        msg
      }
      setTimeout(()=>{
        this.show = false
        this.parent && this.parent.removeChild(this.$el)
      }, time)
    }
  },
}
</script>

<style lang="stylus" scoped>
.des-tips-bar
  position fixed
  top 60px
  left 0
  right 0
  height 48px
  width 375px
  z-index 100000
  display flex
  justify-content center
  transform translateY(0)
  background url('https://img1.aylives.cn/45aa6a1ffdae47008520c832056c7ee0.png')
  background-repeat no-repeat
  background-position center top
  background-size cover
.des-tips-bar-container
  height 48px
  line-height 48px
  padding 0 20px
  display flex
  background rgba(0,0,0,0.50)
  border-radius 3px
  
  i
    margin-right 18px
    line-height 48px
    font-size 18px
  span
    color #fff
  .success
    color #B3EC11
  .fail
    color #F67171
  .prompt
    color #ffc131

// .fade-enter-active, .fade-leave-active
//   transition transform .5s ease

// .fade-enter, .fade-leave-active
//   transform translateY(-50px)

.fade-enter
  opacity 0
  transform translate(0, 60px)

.fade-leave-active
  opacity 0
  transform translate(0, 0)

</style>

