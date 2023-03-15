<template>
  <div class="subslider">
    <VueSlickCarousel v-if="subSlides.length !== 0" v-bind="settings" class="subslider__wrapper" ref="slider">
          <router-link  class="subslider__slide" v-for="item in subSlides" :key="item.id" :to="{name: 'catalogList', params: {id: item.id}}">
            <div class="subslider__image"><img :src="item.preview" alt=""></div>
            <div class="subslider__label">{{ item.name }}</div>
          </router-link>
    </VueSlickCarousel>
    <span class="loading" v-if="subSlides.length === 0"></span>
    {{ this.subSlides }}
  </div>
</template>
<style lang="stylus">
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
        .slick-prev{
          display none !important
        }
        .slick-next{
          right -120px
          bottom 50px
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
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
  data () {
    return {
      settings: {
        "dots": false,
        "focusOnSelect": true,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 4,
        "slidesToScroll": 1,
        "touchThreshold": 5,
        "responsive": [
          {
            "breakpoint": 1590,
            "settings": {
              "slidesToShow": 3
            }
          },
          {
            "breakpoint": 1350,
            "settings": {
              "slidesToShow": 2
            }
          },
          {
            "breakpoint": 1200,
            "settings": {
              "slidesToShow": 4
            }
          },
          {
            "breakpoint": 1130,
            "settings": {
              "slidesToShow": 3
            }
          },
          {
            "breakpoint": 920,
            "settings": {
              "slidesToShow": 2
            }
          },
          {
            "breakpoint": 768,
            "settings": {
              "slidesToShow": 2,
              "dots": true
            }
          },
          {
            "breakpoint": 520,
            "settings": {
              "slidesToShow": 1,
              "dots": true
            }
          }
        ]
      },
      slider: undefined,
      subSlides: [],
    }
  },
  // props: {
  //   subSlides: {
  //     type: Array,
  //   }
  // },
  components: { VueSlickCarousel },
  methods: {
    fetchCategory () {
      this.$store.dispatch('getCategories')
      .then(data => {
        this.subSlides = data.data.filter(item => item.children.length === 0)
        console.log(this.subSlides)
      })
    }
  },
  mounted () {
    this.fetchCategory()
  },
}
</script>
