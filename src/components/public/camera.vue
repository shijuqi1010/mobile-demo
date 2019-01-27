<template>
  <div>
    <div>纯input与type</div>
    <input type="file">

    <div>指明需要图片</div>
    <input type="file" accept='images/*'>

    <div>指明需要多张图片</div>
    <input type="file" multiple accept='images/*'>

    <div>指明调用摄像头获取图片</div>
    <input type="file" capture='camera' accept='images/*'>

    <div>指明调用摄像头并多张图片</div>
    <input type="file" multiple capture='camera' accept='images/*'>
  </div>
</template>

<style lang="stylus" scoped>
.loading
  width 100%
  height 100%
  i 
    font-size 40px
    color red
    &:nth-child(2n)
      margin 30px
      font-size 60px
      color blue
</style>

<script>
export default {
}
</script>
