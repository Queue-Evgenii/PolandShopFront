<template>
  <div class="mainslider">

    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      :loop="true"
      :autoplay="{delay: 5000}"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="false"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="item in mainSlides" :key="item.id">
        <div class="mainslider__image"><img :src="item.image" alt=""></div>
        <div class="mainslider__button">
          <router-link :to="item.url">{{ item.label }}</router-link>
        </div>
      </swiper-slide>
    </swiper>

  </div>
</template> 
<style lang="stylus">
  .swiper-button-prev,.swiper-button-next{
  width 75px
  height 75px
  background: rgb(255, 255, 255);
  opacity 0.7
  border-radius 50%
  border: 1px solid #3D3D3D;
  position absolute
  z-index 3
  font-size 0
  bottom 45px
  transition opacity 0.3s ease
  cursor pointer
  @media(min-width: 769px) {
    &:hover{
      background: rgb(255, 255, 255);
      opacity 0.9
    }
  }
  &::before, &::after{
    content ''
    position absolute
    width 22.5px
    height 2px
    background-color #000
  }
  &::before{
    transform rotate(45deg)
    top: 28.5px
    left: 28.5px
  }
  &::after{
    transform rotate(-45deg)
    bottom: 28.5px
    left: 28.5px
  }
  @media(max-width: 768px){
    display none !important
  }
}
.swiper-button-next{
  right 37px
}
.swiper-button-prev{
  right 270px
  transform rotate(180deg)
}
.swiper-pagination{
  display: inline-flex !important;
  align-items: center;
  position absolute
  bottom 72px
  right 120px
  z-index 1;
  @media(max-width: 768px){
    // bottom 25px
    // right auto
    // width 100%
    // justify-content center
    width 100%
    justify-content center
    position initial
    margin-top: 25px
  }
  @media(max-width: 400px){
    display none !important
  }
  span {
    display inline-block
    width 13.5px
    height 13.5px
    background-color rgba(255, 255, 255, 0.6)
    border-radius 50%
    margin 0 10px
    cursor pointer
    @media(max-width: 768px){
      background-color #3d3d3d
      opacity 0.5
    }
    &.swiper-pagination-bullet-active{
      background: rgba(255, 255, 255, 0.9);
      width 22px
      height 22px
      @media(max-width: 768px){
        background-color #FF0031
        opacity 1
      }
    }
  }
}
.mainslider{
  width 100%
  overflow-y: hidden
  position relative
  @media(max-width: 600px) {
    display none
  }
  .swiper{
    position initial !important
  }
  &__image{
    max-width 1500px
    text-align center
    img{
      display: block;
      width: 100%;
      // min-height 270px
      object-fit: cover;
    }
  }
  &__slide{
    flex 1 0 100%
    position relative
  }
  &__button{
    a{
      display inline-flex
      justify-content center
      align-items center
      position absolute
      min-width 198px
      height 58px
      bottom 50px
      left 80px
      background: #FFFFFF;
      border: 1px solid #000000;
      box-shadow: 0px 4px 100px #FF0000;
      border-radius: 5px;
      color: #FF0000;
      font-weight 700
      transition box-shadow 0.5s ease
      @media(min-width: 769px) {
        &:hover{
          box-shadow: 2px 2px 5px rgba(#000, 0.3)
        }
      }
    }
  }
  @media(max-width: 768px){
    // height 320px
    flex-direction column
    &__image{
      max-height 254px
    }
    &__navs{
      position relative
      top 0
      width 100%
      padding-left 110px
      padding-top 35px
      justify-content center
    }
    .slider__navs-btn{
      display none
    }
    &__button{
      display none
    }
  }
}
</style>
<script>

import { Swiper } from 'swiper/vue/swiper.js';
import { SwiperSlide } from 'swiper/vue/swiper-slide';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.css';

export default {
props: {
  mainSlides: {
    type: Array,
  }
},


components: {
  Swiper,
  SwiperSlide,
},
setup() {
  const onSwiper = () => {
  };
  const onSlideChange = () => {
  };
  return {
    onSwiper,
    onSlideChange,
    modules: [Navigation, Pagination, Scrollbar, A11y],
  };
},
}
</script>
