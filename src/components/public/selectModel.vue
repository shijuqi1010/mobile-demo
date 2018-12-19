<template>
  <transition name="fade">
    <div class="des-tip" v-if='selectModel.showSelect'>
      <div class="close-block" @click="cancel"></div>
      <div class="general-task">
        <ul class="des-general">
          <li v-for="(item, index) of selectModel.selectList" @click="selectOpt(item)" :key="index" v-if="((index + 1) % 3 >= 0)">
            <p class="type"> {{item}} </p>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'select-model',
  props: ["selectModel"],
  data: function() {
    return {
    }
  },
  methods: {
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
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  height 100%
  width 100%
  z-index 99
  background rgba(0,0,0,0.5)
  .close-block{
    height: 80%;
  }
  .general-task{
    width: 100%;
    z-index 999
    position absolute
    background: #ffffff;
    color: #2F3542;
    font-size: 14px;
    line-height: 24px;
    bottom 0px
    padding-top: 10%;
    @media only screen and (min-width: 768px) {
      font-size: 30px;
      line-height: 52px;
    }
    .des-general{
      font-size: 14px;
      width: 100%;
      @media only screen and (min-width: 768px) {
        font-size: 24px;
        line-height: 52px;
      }
      li{
        width: 26%;
        height: 30px;
        background: rgba(243,243,243,1);
        border-radius: 22px;
        margin-bottom: 25px;
        display: inline-block;
        text-align: center;
        margin-left: 5.5%;
        @media only screen and (min-width: 768px) {
          border-radius: 32px;
          margin-bottom: 50px;
          height: 66px;
        }
        .type{
          line-height: 30px;
          font-size: 14px;
          @media only screen and (min-width: 768px) {
            line-height: 66px;
            font-size: 30px;
          }
        }
      }
      li:hover,li:active{
        background: rgba(255,230,212,1);
        color: #FF6800;
      }
    }
  }

.fade-enter-active, .fade-leave-active
  transition transform .5s ease

.fade-enter, .fade-leave-active
  transform translate(-50px)
  -webkit-transform translate(-50%)

.fade-enter
  opacity 0
  transform translate(0, 50%)
  -webkit-transform translate(0, -50%)

.fade-leave-active
  opacity 0
  transform translate(0, 0)
  -webkit-transform translate(0, 0)

</style>

