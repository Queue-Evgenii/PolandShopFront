<template>
  <div class="subslider">
    <!-- <VueSlickCarousel v-if="this.subSlides.length !== 0" v-bind="settings" class="subslider__wrapper">
        <router-link  class="subslider__slide" v-for="item in subSlides" :key="item.id" :to="{name: 'catalogList', params: {id: item.id}}">
          <div class="subslider__image"><img :src="item.preview" alt=""></div>
          <div class="subslider__label">{{ item.name }}</div>
        </router-link>
    </VueSlickCarousel> -->

    <swiper
      v-if="subSlides.length !== 0"
      :modules="modules"
      :space-between="15"
      :loop="true"
      :scrollbar="false"
      :navigation="true"
      :breakpoints="{
            1590: {
              slidesPerView: 4
            },
            1350: {
              slidesPerView: 3
            },
            1200: {
              slidesPerView: 2
            },
            1130: {
              slidesPerView: 4
            },
            920: {
              slidesPerView: 3
            },
            520: {
              slidesPerView: 2,
            },
            300: {
              slidesPerView: 1,
            }
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="subslider__wrapper"
    >
      <swiper-slide v-for="item in subSlides" :key="item.id">
        <router-link  class="subslider__slide" :to="{name: 'catalogList', params: {id: item.id}}">
          <div class="subslider__image"><img v-if="item.preview" :src="item.preview" alt=""></div>
          <div class="subslider__label">{{ item.name }}</div>
        </router-link>
      </swiper-slide>
    </swiper>

    <span class="loading" v-if="subSlides.length === 0"></span>
  </div>
</template>
<style lang="stylus">
@media(min-width: 769px) {
  .subslider__slide:hover{
    box-shadow: 2px 2px 4px 2px #d5d5d5
  }
}
    .subslider{
      padding 40px 0
      display flex
      gap: 40px
      align-items center
      min-width: 0
      padding-right 150px
      position relative
      overflow-y: hidden
      min-height: 140px
      @media(max-width: 768px){
        padding-right 0
        padding 20px 0 50px 0
        display block
      }
      &__wrapper{
        display flex !important
        flex: 1 1 auto
        min-width 0
        justify-content space-between
        position initial
        .swiper-button-prev{
          display none !important
        }
        .swiper-button-next{
          right 20px
          bottom 105px
        }
        .slick-track{
          display flex !important
          gap 15px
          min-height: 181px
          padding 5px 0
        }
        .slick-slide{
          transition: all 0.2s ease 0s
          &:hover{
            box-shadow: 1px 1px 5px 1px #000;
          }
        }
      }
      &__slide{
        min-height: 200px
        display flex !important
        flex-direction column
        align-items center
        justify-content center
        gap 15px
        padding 20px
        cursor: pointer
        text-align: center;
        background: linear-gradient(117.13deg, #FFFFFF -11.73%, #D5D5D5 105.48%);
        transition: all 0.3s ease 0s
        margin 5px 0
      }
      &__image{
        width 174px
        height 90px
        position relative
        img{
          position absolute
          top 0
          left 0
          width 100%
          height 100%
          object-fit: cover
        }
      }
      &__label{
        font-weight: 700;
        font-size: 20px;
      }
    }
</style>
<script>
import { Swiper } from 'swiper/vue/swiper.js';
import { SwiperSlide } from 'swiper/vue/swiper-slide';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.css';

export default {
  data () {
    return {
      subSlides: [],
    }
  },
  // components: { VueSlickCarousel },
  methods: {
    fetchCategory () {
      this.$store.dispatch('getCategories')
      .then(data => {
        this.subSlides = data.data.filter(item => item.children.length === 0)
      })
    }
  },
  mounted () {
    this.fetchCategory()
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
