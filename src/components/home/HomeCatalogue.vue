<template>
  <div class="page-products">
    <div class="mainproducts products">
      <div class="products__container container" v-if="category.products.length !== 0">
        <div class="products__title" style="margin-bottom: 24px">
          <router-link :to="{name: 'catalogList', params: {id: category.id}}">
            {{ category.name || "" }}
          </router-link>
        </div>
        <swiper
          :modules="modules"
          :space-between="16"
          :autoplay="{
            delay: 5000,
          }"
          :breakpoints="{
                1590: {
                  slidesPerView: 4
                },
                1024: {
                  slidesPerView: 3,
                },
                720: {
                  slidesPerView: 2,
                }
          }"
          class="subslider__wrapper"
          virtual
        >
          <swiper-slide
            v-for="(product) in category.products"
            :key="product.id"
          >
            <product-item
              :product="product"
              :favoriteItems="favoriteItems"
              @addToCart="addToCart"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper } from 'swiper/vue/swiper.js';
import { SwiperSlide } from 'swiper/vue/swiper-slide';
import { Virtual, Autoplay } from 'swiper';
import 'swiper/swiper.css';
import ProductItem from '@/components/ProductItem'
export default {
  props: {
    isCatalog: {
      type: Boolean,
      default: false,
    },
    category: {
      required: true,
      type: Object,
    },
    favoriteItems: {
      type: Array,
      required: true,
    }
  },
  data () {
    return {
      isSkeleton: true,
    }
  },
  setup() {
    return {
      modules: [
        Autoplay,
        Virtual,
      ]
      
    };
  },
  components: {
    ProductItem,
    Swiper,
    SwiperSlide,
  },
  methods: {
    addToCart (product) {
      this.$emit('addToCart', product)
    },
  },
}
</script>
<style lang="stylus">
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
.subcategory-wrapper.products__items {
  grid-template-columns: repeat(4, minmax(300px, 1fr));
  @media(max-width: 1700px){
    grid-template-columns: repeat(3, minmax(300px, 1fr));
  }
  @media(max-width: 1400px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }
  @media(max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(300px, 1fr));
  }
  @media(max-width: 992px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }
  @media(max-width: 700px) {
    grid-template-columns: repeat(1, minmax(300px, 1fr));
  }
}
</style>