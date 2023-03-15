<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
<script>
// import sidebarCategoryList from '@/mock/sidebar-category'

import LayoutDefault from '@/layouts/LayoutDefault'
import AsideSidebar from '@/components/home/AsideSidebar'
// import MainSlider from '@/components/home/MainSlider'
import SubSlider from '@/components/SubSlider'
import HomeCatalogue from '@/components/home/HomeCatalogue'
import RecentProducts from '@/components/home/RecentProducts'
import PageAds from '@/components/PageAds'
export default {
  name: 'HomeView',
  layouts: 'default',
  created () {
    this.categoryItems = this.categoryList;
  },
  computed: {
    recentList () {
      return this.$store.state.recentList;
    },
  },
  data () {
    return {
      productItem1: null,
      mainSlides: [
        {
          id: 1,
          url: '#',
          label: 'Dodaj do koszyka',
          image: require('@/assets/img/main/slider/slide-bg.png')
        },
        {
          id: 2,
          url: '#',
          label: 'Dodaj to koszyka',
          image: require('@/assets/img/main/slider/slide-bg.png')
        },
        {
          id: 3,
          url: '#',
          label: 'Dodaj to koszyka',
          image: require('@/assets/img/main/slider/slide-bg.png')
        },
        {
          id: 4,
          url: '#',
          label: 'Dodaj to koszyka',
          image: require('@/assets/img/main/slider/slide-bg.png')
        }
      ],
    }
  },
  methods: {
    addToCart (product) {
      if(this.$store.state.cartList.find(item => item.id === product.id)){
        product.quantity++
      } else {
        this.$store.state.cartList.push(product)
      }
    },
  },
  components: {
    HelloWorld
  }
}
</script> -->

<template>
  <div class="wrapper">
    <layout-default>
      <main class="page">
        <div class="home-page">
          <div class="home-page__container container">
            <div class="home-page__row row">
              <aside class="home-page__sidebar sidebar">
                <aside-sidebar :asideItems="categoryItems" />
              </aside>
              <div class="home-page__content content">
                <main-slider :mainSlides="mainSlides" />
                <sub-slider />
              </div>
            </div>
          </div>
        </div>
        <home-catalogue
          catalogId='13'
          @addToCart="addToCart"
        />
        <home-catalogue
          catalogId='14'
          @addToCart="addToCart"
        />
        <page-ads />
        <home-catalogue
          catalogId='15'
          @addToCart="addToCart"
        />
        <recent-products v-if="recentList.length !== 0" :recentProducts="recentList" @addToCart="addToCart" />
        <page-ads />
      </main>
    </layout-default>
  </div>
</template>
<script>

import LayoutDefault from '@/layouts/LayoutDefault'
import AsideSidebar from '@/components/home/AsideSidebar'
import MainSlider from '@/components/home/MainSlider'
import SubSlider from '@/components/SubSlider'
import HomeCatalogue from '@/components/home/HomeCatalogue'
import RecentProducts from '@/components/home/RecentProducts'
import PageAds from '@/components/PageAds'
export default {
  name: 'HomeView',
  layouts: 'default',
  created () {
    this.categoryItems = this.categoryList;
  },
  computed: {
    recentList () {
      return this.$store.state.recentList;
    },
  },
  data () {
    return {
      productItem1: null,
      mainSlides: [
        {
          id: 1,
          url: '#',
          label: 'Dodaj do koszyka',
          image: require('@/assets/img/main/slider/slide-bg.png')
        },
        {
          id: 2,
          url: '#',
          label: 'Dodaj to koszyka',
          image: require('@/assets/img/main/slider/slide-bg.png')
        },
        {
          id: 3,
          url: '#',
          label: 'Dodaj to koszyka',
          image: require('@/assets/img/main/slider/slide-bg.png')
        },
        {
          id: 4,
          url: '#',
          label: 'Dodaj to koszyka',
          image: require('@/assets/img/main/slider/slide-bg.png')
        }
      ],
    }
  },
  methods: {
    addToCart (product) {
      if(this.$store.state.cartList.find(item => item.id === product.id)){
        product.quantity++
      } else {
        this.$store.state.cartList.push(product)
      }
    },
  },
  components: {
    LayoutDefault,
    AsideSidebar,
    MainSlider,
    SubSlider,
    HomeCatalogue,
    RecentProducts,
    PageAds
  },
}
</script>

