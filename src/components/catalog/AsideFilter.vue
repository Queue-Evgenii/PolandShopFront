<template>
  <div class="sidebar-filter">
    <div class="sidebar-filter__title">Filtry produktów</div>
    <form action="" class="sidebar-filter__form">
      <div class="sidebar-filter__section section-filter">
        <div class="section-filter__title">Cena £</div>
        <div class="section-filter__body active range-filter">
          <range-slider
            class="range-filter__slider"
            :min="filterSlider.sliderMinValue"
            :max="filterSlider.sliderMaxValue"
            v-model="filterSlider.sliderValue">
          </range-slider>
          <div class="range-filter__values flex">
            <span class="range-filter__min">{{ filterSlider.sliderMinValue }}</span>
            <span class="range-filter__max">{{ filterSlider.sliderMaxValue }}</span>
          </div>
        </div>
      </div>
      <section-filter 
        v-for="item in filterItems"  
        :key="item.id" 
        :item="item"
        :class="{'active' : currentNavItem === item.id}"
        @onSelected="onSelected"
      />
      <div class="sidebar-filter__section section-filter section-button">
        <div class="section-filter__body">
          <button class="section-filter__button button"><span>Stosować</span></button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
  import SectionFilter from "@/components/catalog/SectionFilter";
  import RangeSlider from 'vue-range-slider'
  // you probably need to import built-in style
  import 'vue-range-slider/dist/vue-range-slider.css'
  export default {
    data () {
      return {
        filterSlider: {
          sliderValue: 50,
          sliderMinValue: 0,
          sliderMaxValue: 350,
        },
        currentNavItem: null
      }
    },
    props: {
      filterItems: {
        type: Array,
        required: true,
      }
    },
    components: {
      RangeSlider,
      SectionFilter
    },
    methods: {
      onSelected (id) {
        if (this.currentNavItem !== id) {
          this.currentNavItem = id
        } else if (this.currentNavItem === id) {
          this.currentNavItem = null
        }
      }
    }
  }
</script> 
<style lang="stylus">
  .settings-products__body.active .sidebar-filter{
    transform translate(0, 0)
  }
  .sidebar-filter{
    @media(min-width: 1201px){
      margin-top: 40px
      padding-top 60px
      border-top 1px solid #8B8B8B;
    }
    @media(max-width: 1200px){
      transform translate(0, -1000%)
      transition all 0.5s ease 0s
      position absolute
      z-index 1
      left 0
      right 0
      top 130%
      background: #FFFFFF;
      box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      padding 35px 20px
    }
    &__title{
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      color: #3D3D3D;
    }
    &__form{
      padding-top 20px
    }
  }
  .section-button{
    border none !important
    button{
      width 230px !important
      margin 0 auto
      display block
      span{
        font-size: 24px;
        line-height: 28px;
      }
    }
    @media(min-width: 1201px){
      display none
    }
  }
  .section-filter{
    padding 20px 0
    &:not(:first-child){
      border-bottom 1px solid #CACACA;
    }
    &__title{
    }
    &__body{
      margin-top 0
      transition all 0.5s ease 0s
      max-height: 0
      opacity: 0
      visibility hidden
      &.active{
        max-height: none
        opacity 1
        visibility visible
        margin-top 25px
      }
      @media(max-width: 1200px){
        max-height: none
        opacity 1
        visibility visible
        margin-top 25px
      }
    }
    &__body-line{
      position relative
      &::after{
        content ''
        position absolute
        right 0
        top 0
        bottom 0
        height 100%
        width 1px
        background-color #838383;
      }
      &::before{
        content ''
        position absolute
        right -4px
        top 8px
        height 9px
        width 9px
        background-color #838383;
        border-radius 50%
      }
    }
    &__item{
      &:not(:last-child){
        margin-bottom 15px
      }
      input{
        display none
      }
      label{
        position relative
        &::before{
          content: ''
          margin-right 10px
          display inline-block
          width 20px
          height 20px
          border 1px solid #CACACA;
          background-color #fff
          border-radius 3px
        }
        &::after{
          content: ''
          position absolute
          display inline-block
          width 14px
          height 14px
          background-color #cacaca
          left 3px
          transform scale(0)
          transition transform 0.3s ease 0s
        }
      }
      input[type=checkbox]:checked + label{
        &::after{
          transform scale(1)
        }
      }
    }
  }
  .range-filter{
    &__values{
      margin-top 7px
      justify-content space-between
    }
    &__min,
    &__max{
      &::after{
        content 'pln'
        margin-left 5px
      }
    }
  }
  .range-slider{
    width 100%
    padding 0
  }
  .range-slider-rail,
  .range-slider-fill {
    background-color #000
    height: 1px;
    border-radius: 0;
  }
  .range-slider-knob {
    height: 10px;
    width: 10px;
    border: none
    background-color: #000;
  }
</style>