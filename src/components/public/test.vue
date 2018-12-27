<template lang="jade">
.loading
  i.fa.fa-spinner.fa-spin
  i.fa.fa-circle-o-notch.fa-spin
  i.fa.fa-refresh.fa-spin
  i.fa.fa-cog.fa-spin
  i.fa.fa-spinner.fa-pulse
//- <i class="fa fa-spinner fa-spin"></i>
//- <i class="fa fa-circle-o-notch fa-spin"></i>
//- <i class="fa fa-refresh fa-spin"></i>
//- <i class="fa fa-cog fa-spin"></i>
//- <i class="fa fa-spinner fa-pulse"></i>
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
