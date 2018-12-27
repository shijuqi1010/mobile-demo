<template lang="jade">
  div(:class='[_type, fading]', :style='progressStyle')
    slot
</template>

<style lang="stylus" scoped>
  .btn
    btn-green-positive(100%, 28px)
    &.progressEnd
      background initial
      background-color '#10DBE4'
    &.fading
      transition all 1s linear
  .green-btn
    btn-green-opposite(100%, 26px)
  .green-btn-big
    btn-green-opposite(100%, 35px,16px)
  .blue-btn-big
    btn-blue(100%, 35px, 14px)
  .gray-btn
    btn-gray(100%, 28px)

</style>

<script>
  // import Util from '../../utils/util.js'

  export default {
    name: 'progressBar',
    /* 
      ** @ props type -> 选择表现形式，可选：btn
      ** @ props start -> 开始进度显示，boolean
      ** @ props percent -> 进度，0 ~ 1
      ** percent == 1时不一定上传完成，比如音乐上传：先传mp3到Oss,完成时percent=1，接下来需要上传json到Oss,完成时 start = false，所以判断start从true->false表明上传完成
    */
    props: ['type', 'start', 'percent'],
    data() {
      return {
        status: '',
        fading: '',
      }
    },
    ready() {
      window.percent = this
    },
    computed: {
      _type() {
        return this.camelCase(this.type)
      },
      progressStyle() {
        let style = {}
        let percent = this.percent * 100 + '%'
        // let browser = Util.browserType()
        let background = {
          ie: `linear-gradient(to right, #19C9D2 0%, #7FE1E6 ${percent} , #03B3BC ${percent}, #03B3BC)`,
          firefox: `-moz-linear-gradient(left, #19C9D2 0%, #7FE1E6 ${percent} , #03B3BC ${percent}, #03B3BC)`,
          chrome: `linear-gradient(to right, #19C9D2 0%, #7FE1E6 ${percent} , #03B3BC ${percent}, #03B3BC)`,
          opera: `-o-linear-gradient(left,  #19C9D2 0%, #7FE1E6 ${percent} , #03B3BC ${percent}, #03B3BC)`,
          safari: `-webkit-linear-gradient(left, #19C9D2 0%, #7FE1E6 ${percent} , #03B3BC ${percent}, #03B3BC)`,
          standard: `linear-gradient(to right, #19C9D2 0%, #7FE1E6 ${percent} , #03B3BC ${percent}, #03B3BC)`,
        }

        if (this.start) {
          style.color = 'red'//'#fff'
          // style.background = background[browser.ua]
          if (this.percent == 1) {
            style.background = undefined
            style['background-color'] = '#10DBE4'
          }
        }
        return style
      }
    },
    methods: {
      camelCase(str) {
        // 大驼峰转为'-'连接
        // return str.replace(/[A-Z]/g, function(s) {
        //   return '-' + s.toLowerCase()
        // })
      }
    },
    watch: {
      percent(n) {
        if (n == 1) {
          this.$set('status', 'progressEnd')
        }
      },
      start(nV, oV) {
        // 上传完成
        if (!nV && oV) {
          this.$set('fading', 'fading')
          this.$nextTick(()=>{
            this.$set('status', '')
            setTimeout(()=>{
              this.$set('percent', 0),
              this.$set('fading', '')
            }, 2000)
          })
        }
      }
    }
  }
</script>