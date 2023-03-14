<template>
    <div class="mainslider">
      <VueSlickCarousel v-bind="settings">
        <div class="mainslider__slide" v-for="item in mainSlides" :key="item.id">
          <div class="mainslider__image"><img :src="item.image" alt=""></div>
            <div class="mainslider__button"><router-link :to="item.url">{{ item.label }}</router-link></div>
        </div>
      </VueSlickCarousel>
    </div>
</template> 
<style lang="stylus">
  .slick-arrow{
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
    &:hover{
      background: rgb(255, 255, 255);
      opacity 0.9
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
  .slick-next{
    right 37px
  }
  .slick-prev{
    right 270px
    transform rotate(180deg)
  }
  .slick-dots{
    display: inline-flex !important;
    align-items: center;
    position absolute
    bottom 72px
    right 120px
    @media(max-width: 768px){
      bottom -36px
      right auto
      width 100%
      justify-content center
    }
    @media(max-width: 400px){
      display none !important
    }
    button {
      font-size 0
    }
    li {
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
      &.slick-active{
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
    height 567px
    overflow-y: hidden
    &__image{
      max-width 1500px
      height 567px
      text-align center
      img{
        display: block;
        width: 100%;
        height: 100%;
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
        bottom 138px
        left 164px
        background: #FFFFFF;
        border: 1px solid #000000;
        box-shadow: 0px 4px 100px #FF0000;
        border-radius: 5px;
        color: #FF0000;
        font-weight 700
        transition box-shadow 0.5s ease
        &:hover{
          box-shadow: 2px 2px 5px rgba(#000, 0.3)
        }
      }
    }
    @media(max-width: 768px){
      height 320px
      display flex
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
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
  props: {
    mainSlides: {
      type: Array,
    }
  },
  components: { VueSlickCarousel },
  data () {
    return {
      settings: {
      "autoplay": true,
      "arrows": true,
      "dots": true,
    }
    }
  }
}
</script>
