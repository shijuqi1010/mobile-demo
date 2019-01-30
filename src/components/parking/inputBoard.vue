<template>
  <div class="input-body" id="input">
    <ul class="des-area">
      <li class="list" id="list1" @click="changeShow">
        <p class="text" @click="editLicense('list1')">{{one}}</p>
      </li>
      <li class="list second" id="list2" :class="{'active':id == 'list2'}" @click="changeShow">
        <p class="text" @click="editLicense('list2')">{{two}}</p>
      </li>
      <li class="list third">
        <img src="../../assets/images/point.png" alt="">
      </li>
      <li class="list" id="list3" :class="{'active':id == 'list3'}" @click="changeShow">
        <p class="text" @click="editLicense('list3')">{{three}}</p>
      </li>
      <li class="list" id="list4" :class="{'active':id == 'list4'}" @click="changeShow">
        <p class="text" @click="editLicense('list4')">{{four}}</p>
      </li>
      <li class="list" id="list5" :class="{'active':id == 'list5'}" @click="changeShow">
        <p class="text" @click="editLicense('list5')">{{five}}</p>
      </li>
      <li class="list" id="list6" :class="{'active':id == 'list6'}" @click="changeShow">
        <p class="text" @click="editLicense('list6')">{{six}}</p>
      </li>
      <li class="list" id="list7" :class="{'active':id == 'list7'}" @click="changeShow">
        <p class="text" @click="editLicense('list7')">{{seven}}</p>
      </li>
      <li class="list newInput" v-if="showNewEnerge" id="list8" :class="{'active':id == 'list8'}" @click="changeShow">
        <div class="text" @click="editLicense('list8')">
          {{newEnergeNum}}
        </div>
      </li>
      <li class="new-energy" v-else @click="showEnergy">
        <div class="new">
          <p class="text">+</p>
          <img src="../../assets/images/newEnerge.png" alt="">
        </div>
      </li>
    </ul>

    <keyboard 
      :showKeyboard="showKeyboard"
      :changeKeyboard="changeKeyboard" 
      @getProvince="getProvince"
      @getAlph="getAlph"
      @deleteProvince="deleteProvince">
    </keyboard>
    
  </div>
</template>

<script>
import keyboard from './keyboard'

export default {
  name: 'input-board',
  props:["inputList"],
  data () {
    return {
      showNewEnerge: false,
      showKeyboard: false,
      changeKeyboard: 1,
      one:'',
      two:'',
      three:'',
      four:'',
      five:'',
      six:'',
      seven:'',
      eight:'',
      id: '',
      // list:{one:'',two:'',three:'',four:'',five:'',six:'',seven:'',eight:''},
      newEnergeNum: '',
    }
  },
  components: {
    keyboard
  },
  created () {
  },
  mounted () {
  },
  watch: {
    inputList(newV) {
      if (newV) {
        this.showHistory()
      }
    }
  },
  methods: {
    showHistory() {
      if (this.inputList) {
        console.log('+++', this.inputList)
        this.one = this.inputList[0]
        this.two = this.inputList[1]
        this.three = this.inputList[2]
        this.four = this.inputList[3]
        this.five = this.inputList[4]
        this.six = this.inputList[5]
        this.seven = this.inputList[6]
        this.newEnergeNum = this.inputList[7]
      }
    },
    changeShow() {
      if (this.showKeyboard) {
        this.showKeyboard = false
      } else {
        this.showKeyboard = true
      }
    },
    showEnergy() {
      this.showNewEnerge = true
      this.showKeyboard = true
    },
    getProvince(province) {
      this.one = province
      this.id = 'list2'
    },
    getAlph(ele) {
      if (!this.seven) {
        if(!this.two) {
          this.two = ele
          this.id = 'list3'
        } else if(!this.three) {
          this.three = ele
          this.id = 'list4'
        } else if(!this.four) {
          this.id = 'list5'
          this.four = ele
        } else if(!this.five) {
          this.id = 'list6'
          this.five = ele
        } else if(!this.six) {
          this.id = 'list7'
          this.six = ele
        } else if(!this.seven) {
          this.seven = ele
          if (!this.showNewEnerge) {
            this.showKeyboard = false
            this.id = ''
          } else {
            this.id = 'list8'
          }
        } else if (this.showNewEnerge) {
          this.id = 'list8'
          this.newEnergeNum = ele
          this.showKeyboard = false
        }
      } else {
        this.editLicense(this.id, ele) 
      }
    },
    editLicense(id, ele) {
      this.id = id

      if (!ele) {
        return
      }
      if(id === 'list2') {
        this.two = ele
      } else if (id === 'list3') {
        this.three = ele
      } else if (id === 'list4') {
        this.four = ele
      } else if (id === 'list5') {
        this.five = ele
      } else if (id === 'list6') {
        this.six = ele
      } else if (id === 'list7') {
        this.seven = ele
      } else if (this.showNewEnerge) {
        this.newEnergeNum = ele
        this.id = ''
      }
      this.showKeyboard = false
    },
    deleteProvince() {
      if (this.showNewEnerge) {
        this.newEnergeNum = ''
        this.showNewEnerge = false
      } else if(this.seven) {
        this.seven = ''
      } else if(this.six) {
        this.six = ''
      } else if(this.five) {
        this.five = ''
      } else if(this.four) {
        this.four = ''
      } else if(this.three) {
        this.three = ''
      }  else if(this.two) {
        this.two = ''
      } else if(this.one) {
        this.one = ''
        if (this.changeKeyboard === 1) {
           this.changeKeyboard = 2
        } else {
          this.changeKeyboard = 1
        }
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .input-body
    width 100%
    .des-area
      // width 100%
      margin 0 17px
      color #000000
      font-size 0
      margin-block-start 0
      margin-block-end 0
      padding-inline-start 0
      li
        background #FFFFFF
        text-align center
        width 11.6%
        letter-spacing normal
        line-height 40px
        height 40px
        display inline-block
        border-top 1px solid rgba(136, 136, 136, 0.5)
        border-bottom 1px solid rgba(136, 136, 136, 0.5)
        border-left 1px solid rgba(136, 136, 136, 0.5)
        box-sizing border-box
        // overflow hidden
        @media only screen and (min-width: 768px)
          width 10%
          line-height 82px
          height 82px
      .newInput
        border-right 1px solid rgba(136, 136, 136, 0.5)
        box-sizing border-box
      .list
        font-size 20px
        position relative
        @media only screen and (min-width: 768px) 
          font-size 40px
        .text
          position absolute
          top 50%
          left 50%
          transform translate(-50%, -50%)
          -webkit-transform translate(-50%, -50%)
          .text
            font-size 12px
      .second
        border-right 1px solid rgba(136, 136, 136, 0.5)
      .third
        border none
        width 6%
        position relative
        img 
          width 24px
          height 24px
          vertical-align middle
          position absolute
          top 50%
          left 50%
          transform translate(-50%, -50%)
          -webkit-transform translate(-50%, -50%)
      .new-energy
        font-size 12px
        position relative
        border-top 1px dashed rgba(136, 136, 136, 0.5)
        border-bottom 1px dashed rgba(136, 136, 136, 0.5)
        border-right 1px dashed rgba(136, 136, 136, 0.5)
        box-sizing border-box
        line-height 12px
        @media only screen and (min-width: 768px) 
          font-size 38px
          line-height 22px
        .new
          position absolute
          top 50%
          left 50%
          transform translate(-50%, -50%)
          -webkit-transform translate(-50%, -50%)
          .text
            font-size 12px
            @media only screen and (min-width: 768px) 
              font-size 20px
          img 
            height 10px
            @media only screen and (min-width: 768px) 
              height 22px
            
      li:active,li:hover,.active
        border 2px solid #94bef1
        box-sizing border-box

</style>

