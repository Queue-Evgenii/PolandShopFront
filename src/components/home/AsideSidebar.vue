<template>
  <div class="sidebar-category">
    <div class="sidebar-category__title" @click="mobileCategory">Kategorie</div>
     <ul v-if="listCategory.length" class="sidebar-category__list">
      <!-- <span class="loading" v-if="!listCategory.length"></span> -->
      <category-item
        v-for="item in filterListCategory" 
        :key="item.id"
        :item="item"
      />
    </ul>
    <ul v-else class="sidebar-category__list skeleton">
      <li class="skeleton-item"></li>
      <li class="skeleton-item"></li>
      <li class="skeleton-item"></li>
      <li class="skeleton-item"></li>
    </ul>
  </div>
</template>
<style lang="stylus">
 .sidebar-category {
    .skeleton-item {
      border-radius: 5px
      margin 10px 0
      height: 24px;
      animation: skeletonShine 3s ease 0s infinite normal forwards;
      background: #fbc6d9;
      background-image: linear-gradient(135deg, #fbc6d9 0%, #d4c6db 20%, #fbc6d9 40%, #fbc6d9 100%);
      &:nth-child(1) {
        width: 35%;
      }
      &:nth-child(2) {
        width: 25%;
      }
      &:nth-child(3) {
        width: 33%;
      }
      &:nth-child(4) {
        width: 32%;
      }
    }
  }
.loading{
  background: url('../../assets/img/main/icons/loader-new.gif') no-repeat
  background-size: contain
  width 100%
  height 180px
  position absolute
  background-position: center
  top 0px
}
.sidebar-category{
  overflow hidden
  transition all 0.5s ease 0s
  padding-top 30px
  &.active{
    display flex
    flex-direction column
  }
  @media(min-width: 1201px){
    padding 0
    display flex
    flex-direction column
  }
  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #FF0031;
    display inline-flex
    align-items center
    padding-bottom: 25px
    margin-bottom 5px
    border none
    background inherit
    @media(max-width: 1200px){
      font-size 30px
      width 100%
      justify-content space-between
      &::after{
        content ''
        display inline-block
        width 20px
        height 11px
        background url('../../assets/img/main/icons/arrow-bottom.png') center no-repeat
      }
    }
    &.active{
      border-bottom: 1px solid #888
      &::after{
        transform rotate(-90deg)
      transition: all 0.3s ease 0s
      }
    }
    @media(min-width: 1201px){
      border-bottom: 1px solid #888
    }
  }
  &__list{
    position relative
    min-height 180px
    @media(max-width: 1200px){
      display none
    }
    &.active{
      display block
    }
  }
  &__item {
    display block
    padding 5px 0
  }
  &__item-title {
    display inline-block
    width 100%
    height 100%
    font-weight: 700;
    font-size: 16px;
    line-height: 50px;
    color: #3D3D3D;
    position relative
    cursor pointer
    &::before{
      content ''
      width 20px
      height 11px
      position absolute
      right 0
      top 43%
      background url('../../assets/img/main/icons/arrow-bottom.png') center no-repeat
      transform rotate(-90deg)
      transition transform 0.3s ease 0s
    }
  }
  &__sublist{
    transition all 0.5s ease 0s
    max-height: 0
    opacity: 0
    visibility hidden
  }
  &__subitem{
    padding 0 30px
    position relative
    a{
      display block
      width 100%
      height 100%
      color: #3d3d3d
      font-size: 20px;
      line-height: 40px;
      
    }
    @media(min-width: 769px) {
      a{
        &:hover{
          color: #FF0031;
        }
      }
      &:hover{
        &::before{
          content ''
          position absolute
          left 0
          top 33%
          width 20px
          height 14px
          background url('../../assets/img/main/icons/arrow-on-hover.png') center no-repeat
        }
      }
    }
  }
 
}
</style>
<script>
import CategoryItem from "@/components/home/CategoryItem";
export default {
  components: {
    CategoryItem,
  },
  data () {
    return {
      filterSlider: {
        sliderValue: 50,
        sliderMinValue: 0,
        sliderMaxValue: 350,
      },
      //listCategory: [],
      isLoading: false,
    }
  },
  methods: {
    mobileCategory (e) {
      const categoriesTitle = e.target
      const categoriesList = e.target.nextSibling
      if (innerWidth <= 1200) {
        categoriesTitle.classList.toggle('active')
        categoriesList.classList.toggle('active')
        categoriesTitle.parentNode.classList.toggle('active')
      }
    },
  },
  computed: {
    filterListCategory() {
      return this.listCategory.filter(item => item.parent_id === null)
    },
    listCategory() {
      return this.$store.state.categories;
    }
  },
}
</script>
