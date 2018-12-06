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
            <div class="photo" :style="`background-image: url(${item})`">
            </div>
            <!-- <img class="photo" :src="item"/> -->
            <span @click="delImage(index)" class="close weui-icon-cancel"></span>
          </flexbox-item>
        </flexbox>
        <flexbox class="flex-box-two" v-if="form.uploadPics.length > 0 && form.uploadPics.length === 2" :gutter="2">
          <flexbox-item class="img-box" v-for="(item, index) in form.uploadPics" :key="index">
            <div class="photo" :style="`background-image: url(${item})`">
            </div>
            <!-- <img class="photo" :src="item"/> -->
            <span @click="delImage(index)" class="close weui-icon-cancel"></span>
          </flexbox-item>
        </flexbox>
        <flexbox class="flex-box-three" v-if="form.uploadPics.length > 0 && form.uploadPics.length === 3" :gutter="2">
          <flexbox-item class="img-box" v-for="(item, index) in form.uploadPics" :key="index">
            <div class="photo" :style="`background-image: url(${item})`">
            </div>
            <!-- <img class="photo" :src="item"/> -->
            <span @click="delImage(index)" class="close weui-icon-cancel"></span>
          </flexbox-item>
        </flexbox>
        <vue-core-image-upload v-if="showUpload"
          :class="['btn', 'upload-box-item']"
          :crop="false"
          @imageuploaded="imageuploaded"
          @imageuploading="imageuploading"
          @errorhandle="errorhandle"
          :max-file-size="10485760"
          inputOfFile="images"
          :text="uploadText"
          :url="uploadUrl">
          <img class="add-btn" src="https://img1.aylives.cn/2f3a24090ac743c9864072699d6cdf4c.png" alt="">
        </vue-core-image-upload>
      </div>
    </div>

    <div class="middle">
    </div>

    <ul class="des-menu">
      <li class="record bitspin">
        <span>分类</span>
        <img src="../../../assets/arrow.png" alt="">
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

  </div>
</template>

<style scoped lang="less">
.des-push{
  width: 100%;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: left;
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
    }
    .add-photo{
      height: 90px;
      // margin: 20px 20px 0 20px;
      // border: 1px solid red;
      .add-btn{
        position: relative;
        height: 90px;
        top: 50%;
        transform: translateY(-50%);
      }
      .upload{
        width: 100%;
        border-top: 1px solid #e1e1e1;
        padding: 0.3rem 0;
        span{
          width: 3rem;
          line-height: 0.8rem;
          font-size: 0.42rem;
          float: left;
          padding-left: 0.3rem;
          box-sizing: border-box;
        }
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
        height: 90px;
      }
      .add-btn{
        height: 90px;
        width: 90px;
      }
    }
  }
  .middle{
    width: 100%;
    height: 10px;
    background:rgba(251,251,251,1);
  }
  .des-menu{
    // border: 1px solid red;
    width: 100%;
    font-size: 14px;
    list-style: none;
    // margin-top: -20px;
    li{
      height: 56px;
      line-height: 56px;
      box-shadow: 0px 0.5px 0px 0px rgba(206,206,206,0.5);
    }
    .record{
      margin: 0 20px;
      position: relative;
      .right{
        position: absolute;
        right: 0;
      }
      img{
        vertical-align: middle;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        width: 5px;
        height: 11px;
      }
    }
  }
  .explain{
    // border: 1px solid red;
    text-align: left;
    margin: 10px 20px;
    font-size: 12px;
    color: #666666;
  }
  .push-btn{
    color: #ffffff;
    width: 90%;
    margin: auto;
    margin-bottom: 20px;
    // margin: 10px 20px;
    text-align: center;
    line-height: 44px;
    background: linear-gradient(270deg,rgba(255,104,0,1) 0%,rgba(255,146,39,1) 100%);
    border-radius: 8px;
  }
}
</style>

<script>
import { XCircle, XButton, XTextarea, TransferDom, Flexbox, FlexboxItem } from 'vux'
import VueCoreImageUpload from 'vue-core-image-upload'
import Api from '../../../config/api.js'
import { setTimeout } from 'timers';
export default {
  directives: {
    TransferDom
  },
  components: {
    XCircle,
    XButton,
    XTextarea,
    VueCoreImageUpload,
    Flexbox,
    FlexboxItem
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
      content: ''
    }
  },
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
    imageuploaded (res) {
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
    delImage (index) {
      this.form.uploadPics.splice(index, 1)
      if (this.form.uploadPics.length < 3) {
        this.showUpload = true
      }
    },
    imageuploading () {
      // 显示
      // this.$vux.loading.show({
      //   text: 'Loading'
      // })
    },
    errorhandle (err) {
      if (err) {
        this.$toast('图片不可以超过10MB', 1000)
      }
    }
  }
}
</script>

