<template>
  <div class="des-push">
    <div class="describe">
      <x-textarea class="text-area" v-model="content" placeholder="一句话描述你的宝贝（30字内）" :max="30" :show-counter="true" :rows="1">
      </x-textarea>
      <x-textarea class="text-area" v-model="content" placeholder="请详细介绍你的宝贝，如市场价格、型号、新旧程度等（300字内）" :max="300" :show-counter="true" :rows="6">
      </x-textarea>
      
      <div class="upload-box">
        <flexbox class="flex-box-one" v-if="form.uploadPics.length > 0 && form.uploadPics.length === 1" :gutter="2">
          <flexbox-item class="img-box" v-for="(item, index) in form.uploadPics" :key="index">
            <div class="photo" :style="`background-images: url(${item})`">
            </div>
            <!-- <img class="photo" :src="item"/> -->
            <span @click="delimages(index)" class="close weui-icon-cancel"></span>
          </flexbox-item>
        </flexbox>
        <flexbox class="flex-box-two" v-if="form.uploadPics.length > 0 && form.uploadPics.length === 2" :gutter="2">
          <flexbox-item class="img-box" v-for="(item, index) in form.uploadPics" :key="index">
            <div class="photo" :style="`background-images: url(${item})`">
            </div>
            <!-- <img class="photo" :src="item"/> -->
            <span @click="delimages(index)" class="close weui-icon-cancel"></span>
          </flexbox-item>
        </flexbox>
        <flexbox class="flex-box-three" v-if="form.uploadPics.length > 0 && form.uploadPics.length === 3" :gutter="2">
          <flexbox-item class="img-box" v-for="(item, index) in form.uploadPics" :key="index">
            <div class="photo" :style="`background-images: url(${item})`">
            </div>
            <!-- <img class="photo" :src="item"/> -->
            <span @click="delimages(index)" class="close weui-icon-cancel"></span>
          </flexbox-item>
        </flexbox>
        <vue-core-image-upload v-if="showUpload"
          :class="['btn', 'upload-box-item']"
          :crop="false"
          @imagesuploaded="imagesuploaded"
          @imagesuploading="imagesuploading"
          @errorhandle="errorhandle"
          :max-file-size="10485760"
          inputOfFile="images"
          :text="uploadText"
          :url="uploadUrl">
          <div class="upload-btn">
            <img src="../../../assets/images/upload.png" alt="">
            <p>上传照片</p>
          </div>
        </vue-core-image-upload>
      </div>
    </div>

    <ul class="des-menu">
      <li class="record bitspin" @click="showSelect">
        <span>分类</span>
        <div class="choose">
          <span>{{ selected }}</span>
          <img src="../../../assets/images/arrow.png" alt="">
        </div>
      </li>
      <li class="record points">
        <span>一口价</span>
        <span class="right">0奥克积分</span>
      </li>
      <li class="record code">
        <span>小区</span>
        <span class="right">0奥克积分</span>
      </li>
      <li class="record code">
        <span>联系方式</span>
        <span class="right">0奥克积分</span>
      </li>
    </ul>

    <div class="explain">
      <p>注：</p> 
      <p>1.请认真填写宝贝信息，一旦发布，不能修改，可以删除重发； 2.每成交一笔，发布者需要缴纳0.1%服务费（奥克积分）。</p>
    </div>

    <div class="push-btn">
      确认发布
    </div>


    <select-model 
      :select-model="selectModel" 
      @closedialog="selectModel.showSelect = false"
      @getSelected="getSelected">
    </select-model>

  </div>
</template>

<style scoped lang="less">
.des-push{
  width: 100%;
  overflow: hidden;
  background-color: #ffffff;
  .describe{
    margin: 20px 20px 10px 20px;
    .text-area{
      // border: 1px solid red;
      font-size: 12px;
      line-height: 18px;
      // margin: 20px 20px 0 20px;
      .text{
        width: 100%;
        resize: none;
      }
      @media only screen and (min-width: 768px) {
        font-size: 24px;
        line-height: 52px;
      }
    }
    .upload-box {
      display: flex;
      // margin: 20px 20px 0 20px;
      // border: 1px solid red;
      .flex-box-one{
        width: 33%;
        padding-right: 2px;
        .img-box {
          position: relative;
          display:inline-block;
          .photo {
            display: inline-block;
            width: 100%;
            height: 90px;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
          }
          .close {
            position: absolute;
            top: 1px;
            right: 2px;
            color: #fff;
          }
        }
      }
      .flex-box-two{
        width: 66%;
        padding-right: 2px;
        .img-box {
          position: relative;
          display:inline-block;
          .photo {
            display: inline-block;
            width: 100%;
            height: 90px;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
          }
          .close {
            position: absolute;
            top: 1px;
            right: 2px;
            color: #fff;
          }
        }
      }
      .flex-box-three{
        width: 100%;
        padding-right: 2px;
        .img-box {
          position: relative;
          display:inline-block;
          .photo {
            display: inline-block;
            width: 100%;
            height: 90px;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
          }
          .close {
            position: absolute;
            top: 1px;
            right: 2px;
            color: #fff;
          }
        }
      }
      .upload-box-item {
        .upload-btn{
          height: 90px;
          width: 90px;
          text-align: center;
          img{
            margin-top: 22px;
            width: 20px;
            height: 20px;
          }
          p{
            font-size: 12px;
          }
        }
      }
    }
  }
  .des-menu{
    text-align: left;
    border-top: 10px solid rgba(251,251,251,1);
    width: 100%;
    font-size: 14px;
    list-style: none;
    @media only screen and (min-width: 768px) {
      font-size: 24px;
      // line-height: 52px;
    }
    li{
      line-height: 56px;
      box-shadow: 0px 0.5px 0px 0px rgba(206,206,206,0.5);
      @media only screen and (min-width: 768px) {
        line-height: 88px;
      }
    }
    .record{
      margin: 0 20px;
      position: relative;
      @media only screen and (min-width: 768px) {
        margin: 0 50px;
      }
      .right{
        position: absolute;
        right: 0;
      }
      .choose{
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
      }
      img{
        vertical-align: middle;
        width: 5px;
        height: 11px;
        margin-left: 10px;
        @media only screen and (min-width: 768px) {
          width: 10px;
          height: 22px;
          margin-left: 30px;
        }
      }
    }
  }
  .explain{
    text-align: left;
    margin: 10px 20px;
    font-size: 12px;
    color: #666666;
    @media only screen and (min-width: 768px) {
      margin: 30px 50px;
      font-size: 20px;
    }
  }
  .push-btn{
    color: #ffffff;
    width: 90%;
    margin: auto;
    margin-bottom: 20px;
    text-align: center;
    line-height: 44px;
    background: linear-gradient(270deg,rgba(255,104,0,1) 0%,rgba(255,146,39,1) 100%);
    border-radius: 8px;
    @media only screen and (min-width: 768px) {
      line-height: 66px;
      border-radius: 26px;
      margin-bottom: 50px;
    }
  }
}
</style>

<script>
import { XCircle, XButton, XTextarea, TransferDom, Flexbox, FlexboxItem } from 'vux'
import VueCoreimagesUpload from 'vue-core-image-upload'
import Api from '../../../config/api.js'
import { setTimeout } from 'timers'
import selectModel from '../../public/selectModel'

export default {
  directives: {
    TransferDom
  },
  components: {
    XCircle,
    XButton,
    XTextarea,
    VueCoreimagesUpload,
    Flexbox,
    FlexboxItem,
    selectModel
  },
  data () {
    return {
      showUpload: true,
      uploadText: '',
      uploadUrl: Api.ADD_PHOTO,
      form: {
        openId: '',
        uploadPics: []
      },
      uploadImg1: '',
      pushBtn: true,
      content: '',
      selected: '书籍',
      selectModel: {
        showSelect: false,
        selectList: ['书籍', '母婴', '家居', '美妆', '数码', '鞋服', '其他']
      }
    }
  },
  // computed: {
  //   selected () {
  //     return this.$store.state.selected
  //   }
  // },
  methods: {
    pushPhoto () {
      let params = {
        content: this.content,
        photoList: this.form.uploadPics
      }
      Api.Axios.post(Api.PUSH, params).then(res => {
        if (res.data.code === 200) {
          this.$toast('发表成功', 1000)
          setTimeout(() => {
            this.$router.push({path: '/happiness'})
          }, 120)
        } else {
          this.$toast(res.data.msg, 1000)
        }
      })
    },
    push () {
      let params = {
        content: this.content,
        photoList: this.form.uploadPics
      }
      Api.Axios.post(Api.PUSH, params).then(res => {
        if (res.data.code === 200) {
          this.$toast('发表成功', 1000)
          setTimeout(() => {
            this.$router.push({path: '/happiness'})
          }, 120)
        } else {
          this.$toast(res.data.msg, 1000)
        }
      })
    },
    imagesuploaded (res) {
      if (this.form.uploadPics.length === 3) {
        this.$toast('最多可上传三张图片', 1000)
      }
      // this.$vux.loading.hide()
      if (res.code === 200) {
        let photoUrl = res.data.photo
        this.form.uploadPics.push(photoUrl)
        if (this.form.uploadPics.length === 3) {
          this.showUpload = false
        }
      } else {
        this.$toast(res.msg, 1000)
      }
    },
    delimages (index) {
      this.form.uploadPics.splice(index, 1)
      if (this.form.uploadPics.length < 3) {
        this.showUpload = true
      }
    },
    imagesuploading () {
      // 显示
      // this.$vux.loading.show({
      //   text: 'Loading'
      // })
    },
    errorhandle (err) {
      if (err) {
        this.$toast('图片不可以超过10MB', 1000)
      }
    },
    showSelect() {
      this.selectModel.showSelect = true
    },
    getSelected(selectedOpt) {
      this.selected = selectedOpt
      console.log("push-getSelected", this.selected);
    }
  }
}
</script>

