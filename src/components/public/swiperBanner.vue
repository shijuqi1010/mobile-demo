<template>
  <div class="des-swiper">
    <swiper :options="swiperOption" ref="myswiper">
      <swiper-slide v-for="(item, index) in bannerList" :key="index">
        <div href="" :style="`background-images: url(${item})`" class="banner-img"></div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide} from 'vue-awesome-swiper'

export default {
  name: 'swiper-banner',
  props: ["bannerList"],
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        autoplay: true,
        speed: 1000,
        setWrapperSize: true,
        autoHeight: true,
        mousewheelControl: true,
        paginationClickable: true,
        observeParents: true,
        debugger: true,
        loop : true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
          // type: 'bullets'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
  }
}
</script>

<style>
.des-swiper{
  width: 100%;
  height: 200px;
  /* display: flex; */
  background-color: #fff;
  text-align: center;
  margin: auto;
  /* margin-top: 20px;
  margin-bottom: 10px; */
}
.banner-img{
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
  .swiper-container {
    /* width: 100%;
    height: 100%;  */
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #ddd;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  </style>
