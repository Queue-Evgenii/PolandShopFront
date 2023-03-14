<template>
  <div class="commodity-page__images commodity-images">
    <div class="commodity-images__wrapper">
      <div class="commodity-images__array" v-if="typeof productItem.preview === 'array'">
        <VueSlickCarousel 
        ref="thumb" 
        v-bind="settingsThumbs" 
        :asNavFor="slider"
        class="commodity-images__thumbs thumbs-commodity"
      >
        <div class="thumbs-commodity__slide" v-for="item in productItem.preview" :key="item.id">
          <div class="thumbs-commodity__image"><img :src="item.image" alt=""></div>
        </div>
      </VueSlickCarousel>
      <VueSlickCarousel 
        ref="slider" 
        v-bind="settings" 
        :asNavFor="thumb"
        class="commodity-images__carousel carousel-commodity"
      >
        <div class="carousel-commodity__slide"
          v-for="item in productItem.preview"
          :key="item.id"
        >
          <div class="carousel-commodity__image"><img :src="item.image" alt="" @click="openPopup(item.id)"></div>
        </div>
      </VueSlickCarousel>
      </div>
      <div class="commodity-images__string" v-if="typeof productItem.preview === 'string'">
        <div class="carousel-commodity__image"><img :src="productItem.preview" alt="" @click="openPopup(1)"></div>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
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
  mounted() {
    this.slider = this.$refs.slider
    this.thumb = this.$refs.thumb
  },
  props: {
    productItem: {
      type: Object,
      required: true,
    }
  },
  components: { VueSlickCarousel },
  methods: {
    openPopup (id) {
      this.$emit('openPopup', id)
    }
  }
} 
</script>
<style lang="stylus">
  .commodity-images{
    &__wrapper{
      // display grid
      // grid-template-columns: 140px minmax(200px, 1fr)
      // column-gap 25px
      // row-gap: 10px
      // overflow: hidden
      // position relative
      // padding-bottom 70px
      // margin-bottom 30px
      // @media(max-width: 1590px){
      //   grid-template-columns: minmax(200px, 1fr)
      // }
    }
    &__array{
      display grid
      grid-template-columns: 140px minmax(200px, 1fr)
      column-gap 25px
      row-gap: 10px
      overflow: hidden
      position relative
      padding-bottom 70px
      margin-bottom 30px
      @media(max-width: 1590px){
        grid-template-columns: minmax(200px, 1fr)
      }
    } 
    &__thumbs,
    &__carousel{
      min-width 0
      max-height 562px
      @media(max-width: 1590px) {
        height auto !important
      }
    }
    &__thumbs{
      @media(max-width: 1590px){
        order 2
      }
    }
    &__carousel{
    }
  }
  .popup{
    .thumbs-commodity__image{
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
    .thumbs-commodity{
      .slick-current{
        .thumbs-commodity__image{
          border: 1px solid #FF0031
        }
      }
    }
  }
  .thumbs-commodity{
    .slick-track{
    }
    .slick-slide{
      @media(max-width: 1590px){
        padding 0 5px
      }
      @media(min-width: 1591px){
        margin-top 1px
      }
    }
    &__slide{
    }
    .slick-current{
      .thumbs-commodity__image{
        border: 1px solid rgba(0, 0, 0, 0.2);
      }
    }
    &__image{
      background-color #fff
      min-width 135px
      height 130px
      position relative
      img{
        padding 8px
        position absolute
        width 100%
        height 100%
        object-fit: contain
      }
      @media(max-width: 500px) {
        min-width 80px
        height 80px
      }
    }
  }
  .carousel-commodity{
    position initial !important
    .slick-arrow{
      display none !important
      border: none
      background: inherit
      &::after,
      &::before{
        background-color #D60029
      }
    }
    .slick-dots{
      bottom 0 
      right 0
      width 100%
      justify-content center
      @media(min-width: 1591px) {
        right -75px
      }
      li {
        background-color #3d3d3d
        opacity 0.5
      &.slick-active{
          background-color #FF0031
          opacity 1
      }
    }
    }
    &__slide{
      background-color #fff
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
    &__image{
      // max-width 610px
      border: 1px solid rgba(139,139,139,0.522);
      height 558px
      position relative
      img{
        padding 80px
        position absolute
        width 100%
        height 100%
        object-fit: contain
        @media(max-width: 1590px) {
          padding 20px
        }
      }
      @media(max-width: 1590px) {
        height 410px 
      }
      @media(max-width: 500px) {
        height 300px
      }
    }
    @media(max-width: 1460px){
      max-width:1200px
    }
  }
</style>