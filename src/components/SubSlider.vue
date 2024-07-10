<template>
  <div class="subslider" :class="(subSlides.length < 4 || subSlides.length === 0) ? 'no-button' : ''">
    <swiper
      v-if="subSlides.length !== 0"
      :modules="modules"
      :space-between="24"
      :loop="true"
      :scrollbar="false"
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
            300: {
              slidesPerView: 2,
            },
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="subslider__wrapper"
    >
      <swiper-slide v-for="item in subSlides" :key="item.id">
        <router-link
          class="subslider__slide"
          :to="{name: 'catalogList', params: {id: item.id}}"
          @click="filterReset()">
          <div class="subslider__image"><img v-if="item.preview" :src="item.preview" alt=""></div>
          <div class="subslider__label">{{ item.name }}</div>
        </router-link>
      </swiper-slide>
    </swiper>
    <div v-else class="skeleton">
      <div class="skeleton-item"></div>
      <div class="skeleton-item"></div>
      <div class="skeleton-item"></div>
      <div class="skeleton-item"></div>
    </div>
  </div>
</template>
<style lang="stylus">

  @media(min-width: 769px) {
    .subslider__slide:hover{
      box-shadow: 2px 2px 4px 2px #d5d5d5
    }
  }
  .no-button{
    padding-right 0px !important
    .subslider__wrapper{
      .swiper-button-next{
        display none !important
      }
    }
  }
    .subslider{
      padding 40px 0
      display flex
      gap: 40px
      align-items center
      min-width: 0
      position relative
      overflow-y: hidden
      min-height: 140px
      @media(max-width: 768px){
        padding-right 0
        padding 20px 0 20px 0
        display block
      }
      @media(max-width: 450px) {display: none;}
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
          bottom 40%
        }
      }
      &__slide{
        border-radius: 5px;
        display flex !important
        flex-direction column
        gap 20px
        padding 20px
        cursor: pointer
        text-align: center;
        background: linear-gradient(117.13deg, #FFFFFF -11.73%, #D5D5D5 105.48%);
        transition: all 0.3s ease 0s
        margin 5px 0
        height 100%
      }
      &__image{
        flex: 1 1 100%
        width: 100%;
        overflow: hidden;
        img{
          width 100%;
          height 100%;
          object-fit: cover;
        }
      }
      &__label{
        font-weight: 700;
        font-size: 20px;
      }
      .skeleton {
        display flex
        gap: 16px;
        width 100%
      }
      .skeleton-item{
        border-radius: 5px;
        flex: 1 1 auto;
        height 200px
      }
      @media(max-width: 992px) {
        .skeleton-item {
          &:nth-child(4) {
            display none;
          }
        }
      }
      @media(max-width: 768px) {
        .skeleton-item {
          &:nth-child(3) {
            display none;
          }
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
  computed: {
    subSlides () {
      return this.$store.state.categoriesWithProducts;
    }
  },
  methods: {
    filterReset() {
      this.$store.state.filterParams = ["sort[type]=asc", "sort[column]=name"]
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
