<template>
  <div class="weui-progress">
    <div class="weui-progress__bar">
      <div class="weui-progress__inner-bar" :style="{width: percent + '%'}">
      </div>
      <img src="../../../assets/images/run.png" :style="{left: percent + '%'}" width="20px" height="20px">
      
    </div>
    <i v-if="percent === 100" class="weui-icon-success"></i>
    <i v-else class="weui-icon-success-circle"></i>
  </div>
</template>

<script>
export default {
  name: 'x-progress',
  // mixins: [Base],
  props: {
    percent: {
      type: Number,
      default: 0
    },
    showCancel: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    cancel () {
      this.$emit('on-cancel')
    }
  }
}
</script>

<style lang="less">
.weui-progress {
  display: flex;
  align-items: center;
  .weui-progress__bar {
    position: relative;
    height: 3px;
    width: 38%;
    margin-left: 5%;
    background-color: rgb(244, 248, 248);
      // flex: 1;
    .weui-progress__inner-bar {
      width: 0;
      height: 5px;
      background: linear-gradient(0deg,rgba(113,146,255,1) 0%,rgba(35,224,254,1) 100%);
    }
    img{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
    }
  }
}
</style>
