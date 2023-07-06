<template>
  <div class="sidebar-filter">
    <div class="sidebar-filter__title">Filtry produktów</div>
    <form action="" class="sidebar-filter__form">
      <div class="sidebar-filter__section section-filter">
        <div class="section-filter__title cursor-initial">Cena £</div>
        <div class="section-filter__body active range-filter">
          <div class="range-filter__inputs">
            <input
              type="range"
              :min="filter.minValue"
              :max="filter.maxValue"
              v-model="filter.lowerValue"
              class="range-slider"
              @input="onMinChange"
            >
            <input
              type="range"
              :min="filter.minValue"
              :max="filter.maxValue"
              v-model="filter.upperValue"
              class="range-slider"
              @input="onMaxChange"
            >
          </div>
          <div class="range-filter__values flex">
            <span class="range-filter__min">{{ filter.lowerValue }}</span>
            <span class="range-filter__max">{{ filter.upperValue }}</span>
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
  export default {
    components: {
      SectionFilter
    },
    props: {
      filterItems: {
        type: Array,
        required: true,
      }
    },
    data () {
      return {
        filter: {
          upperValue: 340,
          lowerValue: 10,
          minValue: 0,
          maxValue: 350,
        },
        currentNavItem: null,
      }
    },
    methods: {
      onSelected (id) {
        if (this.currentNavItem !== id) {
          this.currentNavItem = id;
        } else if (this.currentNavItem === id) {
          this.currentNavItem = null;
        }
      },
      onMinChange(e) {
        this.filter.lowerValue = ((e.target.value - this.filter.upperValue) < 0 ? e.target.value : this.filter.upperValue);
      },
      onMaxChange(e) {
        this.filter.upperValue = ((e.target.value - this.filter.lowerValue) > 0 ? e.target.value : this.filter.lowerValue);
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
    &__section{
      &.active .sidebar-filter__checkbox::after{
        transform rotate(0deg)
      }
    }
    &__checkbox::after{
        content ''
        display inline-block
        width 12px
        height 12px
        transition transform 0.3s ease 0s;
        transform rotate(-90deg)
        background url('../../assets/img/main/icons/arrow-bottom.png') center no-repeat
        @media(max-width: 1200px){
          display none
        }
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
      display flex
      justify-content space-between
      align-items center
      width 100%
      cursor pointer
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
        cursor pointer
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
    &__inputs{
      padding 35px 0 15px 0
      position relative
      width 100%
      height 10px
    }
    &__values{
      margin-top: 7px;
      justify-content: space-between;
    }
    &__min,
    &__max{
      &::after{
        content: 'pln';
        margin-left: 5px;
      }
    }
  }
  .range-slider{
    width: 100%;
    height: 1px;
    padding: 0;
    background-color: transparent;
    position: absolute;
    cursor: pointer;
    left: 0;
    right: 0;
  }
  .range-slider::-moz-range-track,
  .range-slider::-webkit-slider-runnable-track {
    background-color: #000;
    color: #000;
    height: 1px;
    border-radius: 0;
  }
  .range-slider::-moz-range-thumb,
  .range-slider::-webkit-slider-thumb {
    height: 15px;
    width: 15px;
    border: none
    background-color: #000;
    color: #000;
    position: relative;
    z-index: 5;
  }
  .cursor-initial{
    cursor: default;
  }
</style>