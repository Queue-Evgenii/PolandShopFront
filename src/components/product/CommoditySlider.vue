<template>
  <div class="commodity-page__images commodity-images info-product__block">
    <div v-if="this.galleryItems" class="commodity-images__wrapper">
      <div class="commodity-images__array" v-if="gallerySize > 1" >
        <div class="commodity-images__thumbs">
          <swiper
            v-if="!isPopup && gallerySize !== 1"
            :slides-per-view="gallerySize"
            :space-between="0"
            :loop="true"
            :modules="[Thumbs]"
            watch-slides-progress
            @swiper="setThumbsSwiper"
            class="thumbs-commodity"
            :breakpoints="{
              1669:{
                slidesPerView: gallerySize,
              },
              1520:{
                slidesPerView: (3 >= gallerySize) ? gallerySize : 3,
              },
              1460: {
                slidesPerView: (2 >= gallerySize) ? gallerySize : 2,
              },
              1200:{
                slidesPerView: gallerySize,
              },
              1120:{
                slidesPerView: (3 >= gallerySize) ? gallerySize : 3,
              },
              992: {
                slidesPerView: (2 >= gallerySize) ? gallerySize : 2,
              },
              768: {
                slidesPerView: gallerySize,
              },
              500: {
                slidesPerView: (3 >= gallerySize) ? gallerySize : 3,
              },
            }"
          >
            <swiper-slide v-for="item in galleryItems" :key="item.id">
              <div class="thumbs-commodity__slide">
                <div class="thumbs-commodity__image"><img :src="item" alt=""></div>
              </div>
            </swiper-slide>
          </swiper>
          <swiper
            v-if="isPopup"
            :slides-per-view="gallerySize"
            :space-between="0"
            :loop="true"
            :modules="[Thumbs]"
            watch-slides-progress
            :direction="'vertical'"
            @swiper="setThumbsSwiper"
            class="thumbs-commodity"
            :breakpoints="{
              1669:{
                slidesPerView: gallerySize,
              },
              992: {
                slidesPerView: (3 >= gallerySize) ? gallerySize : 3,
              },
              768: {
                slidesPerView: gallerySize,
              },
              500: {
                slidesPerView: (3 >= gallerySize) ? gallerySize : 3,
              },
            }"
          >
            <swiper-slide v-for="item in galleryItems" :key="item.id">
              <div class="thumbs-commodity__slide">
                <div class="thumbs-commodity__image"><img :src="item" alt=""></div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="commodity-images__carousel">
          <swiper
            :slides-per-view="1"
            :space-between="0"
            :loop="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="[Thumbs, Navigation, Pagination]"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            navigation
            :pagination="{clickable: true}"
            class="carousel-commodity"
          >
            <swiper-slide v-for="item in galleryItems" :key="item.id">
                <div class="carousel-commodity__slide">
                  <div class="carousel-commodity__image"><img :src="item" alt="" @click="openPopup(item.id)"></div>
                </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="commodity-images__string" v-else>
        <div class="carousel-commodity__image">
          <img v-if="gallerySize === 1" :src="galleryItems[0]" alt="" @click="openPopup()">
        </div>
      </div>
    </div>
    <div v-else class="skeleton">
      <div class="skeleton-item"></div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import { Swiper } from 'swiper/vue/swiper.js';
import { SwiperSlide } from 'swiper/vue/swiper-slide';
import { Thumbs, Navigation, Pagination } from 'swiper';
import 'swiper/swiper.css';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    galleryItems: {
      type: Array,
      required: true,
    },
    isPopup: {
      type: Boolean,
      required: true,
    }
  },
  data() {
    return {
      slider: undefined,
      thumb: undefined,
      settings: {
        "dots": false,
        "focusOnSelect": true,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1,
      },
      settingsThumbs: {
        "dots": false,
        "arrows": false,
        "focusOnSelect": true,
        "infinite": true,
        // "centerMode": true,
        "centerPadding": "2px",
        "speed": 500,
        "slidesToShow": 4,
        "slidesToScroll": 1,
        "vertical": true,
        "verticalSwiping": true,
        "responsive": [
          {
            "breakpoint": 1590,
            "settings": {
              "vertical": false,
              "slidesToShow": 3
            }
          },
          {
            "breakpoint": 1520,
            "settings": {
              "vertical": false,
              "slidesToShow": 3
            }
          },
          {
            "breakpoint": 1460,
            "settings": {
              "slidesToShow": 4,
              "vertical": false,
            }
          },
          {
            "breakpoint": 1200,
            "settings": {
              "slidesToShow": 3,
              "vertical": false,
            }
          },
          {
            "breakpoint": 1080,
            "settings": {
              "slidesToShow": 2,
              "vertical": false,
            }
          },
          {
            "breakpoint": 992,
            "settings": {
              "slidesToShow": 4,
              "vertical": false,
            }
          },
          {
            "breakpoint": 678,
            "settings": {
              "slidesToShow": 3,
              "vertical": false,
            }
          },
        ]
      },
    }
  },
  computed: {
    gallerySize() {
      if(this.galleryItems){
        if(this.galleryItems.length >= 4) {
          return 4;
        }
        return this.galleryItems.length;
      }
      return 0
    }
  },
  methods: {
    openPopup (id) {
      this.$emit('openPopup', id);
    }
  },
  mounted() {
    this.slider = this.$refs.slider;
    this.thumb = this.$refs.thumb;
  },
  setup() {
    const onSwiper = () => {
    };
    const onSlideChange = () => {
    };
    let thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    }
    return {
      Thumbs,
      thumbsSwiper,
      setThumbsSwiper,
      onSwiper,
      onSlideChange,
      Navigation,
      Pagination,
    }
  }
} 
</script>
<style lang="stylus">
.commodity-page__images {
  .skeleton-item {
    height: 520px;
  }
  @media(max-width: 600px) {
    .skeleton-item {
      height: 450px;
    }
  }
}
.swiper-pagination{
  display: inline-flex !important;
  align-items: center;
  position absolute
  bottom 72px
  right 120px
  z-index 1;
  @media(max-width: 768px){
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
.popup{
  @media(min-width 1120px){
    .commodity-images__string{
      width 590px
    }
  }
  .commodity-images{
    max-width: 1600px
    padding: 0;
    border: none;
    @media(min-width: 1121px){
      margin-right 120px
    }
    @media(max-width: 470px){
      padding-bottom 20px
    }
    &__array{
      grid-template-columns: 140px 1fr !important
      grid-template-rows: 1fr !important
      max-height: 590px
      @media(max-width: 1669px){
        max-height 410px
      }
      @media(max-width: 992px){
        grid-template-columns: 100px 1fr !important
      }
      @media(max-width: 640px){
        grid-template-columns: 1fr !important
        max-height 460px
      }
    }
    &__thumbs{
      order 0
      .swiper{
        max-height 590px
        @media(max-width: 1669px){
          max-height 410px
        }
      }
      @media(max-width: 992px) {
        .thumbs-commodity__image{
          width 95px
          height 95px
        }
      }
      @media(max-width: 640px){
        display none
      }
    }
    &__carousel{
      order 1
      position relative
      padding-left 120px
      padding-right 120px
      .swiper-button-next,
      .swiper-button-prev{
        display block
        position absolute
        width 77px
        height 77px
        bottom 47%
        background url('../../assets/img/product/icon/product-slider-arrow.png') center no-repeat
        background-size: cover;
        cursor pointer
        border none
        &::before,
        &::after{
          display none
        }
      }
      .swiper-button-prev{
        left 0px
        transform rotate(0)
      }
      .swiper-button-next{
        right 0px
        transform rotate(180deg) !important
      }
      @media(max-width: 1669px) {
        .swiper-button-next,
        .swiper-button-prev{
          bottom 42%
        }
      }
      @media(max-width: 1120px) {
        padding-left 50px
        padding-right 50px
        .swiper-button-next,
        .swiper-button-prev{
          width 45px !important
          height 45px !important
          bottom 44% !important
        }
      }
      @media(max-width: 768px) {
        padding-left 0px
        padding-right 0px
        .swiper-button-next,
        .swiper-button-prev{
          display none
        }
      }
    }
  }
  .carousel-commodity{
    .swiper-pagination{
      @media(max-width: 640px) {
        display inline-flex !important
      }
    }
    &__image{
      @media(max-width: 640px) {
        height 300px
      }
      img{
        padding 20px
        @media(max-width:640px){
          padding 0
        }
      }
    }
  }
}
.commodity-images{
  .swiper-pagination{
    display none !important
  }
  .swiper-button-next,
  .swiper-button-prev{
    display none
  }
  &__array{
    display grid
    grid-template-columns: 1fr
    grid-template-rows: 520px 145px
    column-gap 25px
    row-gap: 5px
    overflow: hidden
    position relative
    @media(max-width: 1669px){
      grid-template-rows: 410px 145px
    }
    @media(max-width: 500px) {
      grid-template-rows: 305px
    }
  } 
  &__thumbs,
  &__carousel{
    min-width 0 !important
    min-height 0 !important
  }
  &__thumbs{
    order: 1
    @media(max-width: 500px){
      display none
    }
  }
  &__carousel{
    order 0
  }
}
.thumbs-commodity{
  .swiper-slide{
    padding 1px 0
  }
  .swiper-slide-thumb-active{
    .thumbs-commodity__slide{
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
  }
  &__slide{
    display flex
    align-items center
    justify-content center
    border: 1px solid transparent;
  }
  &__image{
    cursor: pointer;
    border: 1px solid transparent;
    width 100%
    height 130px
    position relative
    img{
      padding 8px
      position absolute
      width 100%
      height 100%
      object-fit: cover
    }
    @media(max-width: 500px) {
      min-width 80px
      height 80px
    }
  }
}
.carousel-commodity{
  position initial !important
  &__slide{
    background-color transparent
  }
  &__image{
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.2);
    height 520px
    position relative
    img{
      padding 16px
      position absolute
      width 100%
      height 100%
      object-fit: contain
    }
    @media(max-width: 1669px) {
      height 410px 
    }
    @media(max-width: 500px) {
      height 300px
    }
  }
}
</style>