<template>
  <div class="wrapper">
    <layout-default>
      <main class="page">
        <div class="page__product product-page">
          <div class="product-page__container container">
            <div class="product-page__row row">
              <aside class="product-page__sidebar sidebar">
                <aside-sidebar v-if="SidebarWidth" />
              </aside>
              <div class="product-page__content content">
                <div class="product-page__commodity commodity-page">
                  <!-- <div class="carousel-commodity__image"><img :src="this.productItem.preview" alt="" @click="openPopup(item.id)"></div> -->
                  <commodity-slider :productItem="this.productItem" @openPopup="openPopup" />
                  <commodity-content :productItem="this.productItem" @openAlertPopup="openAlertPopup" @inputValue="inputValue" />
                </div>
                <div class="product-page__info info-product">
                  <about-product v-if="this.productItem.description" :aboutText="this.productItem.description" />
                  <!-- <table-product :tableProductItems="productItem.description" /> -->
                  <!-- <gallery-product :commoditySlides="productItem.images" /> -->
                  <reviews-product v-if="this.productItem.feedbacks" :ReviewsProductItems="productItem.feedbacks" />
                  <!-- <button class="info-product__more">Uczyć się więcej</button> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <recent-products v-if="recentList.length !== 0" :recentProducts="recentList"/>
        <page-ads />
      </main>
    </layout-default>
    <!-- <page-popup 
     v-if="visibilityPopup" 
     @closePopup="closePopup"
     :popupOutput="this.productItem"
    >
      <commodity-slider :commoditySlides="this.productItem.images" />
      <commodity-slider :productItem="this.productItem" />
      <commodity-content :productAbout="this.productItem" />
    </page-popup> -->
    <page-popup 
     v-if="buyOneClickPopup" 
     @closePopup="closePopup"
     :popupOutput="this.beforePayment"
    >
      <payment-alert @quickBuy="quickBuy" :popupOutput="this.beforePayment"/>
    </page-popup>
  </div>
</template>
<style lang="stylus">
  .product-page {
    padding-bottom 70px
  }
  .commodity-page{
    padding 20px 0
    display flex
    gap: 20px
    &__images{
      max-width: 800px
      flex: 1 1 800px
    }
    &__content{
      flex: 0 0 550px
    }
    @media(min-width: 1201px)&&(max-width: 1460px){
      flex-wrap: wrap
      &__content{
        flex: 1 1 100%
      }
      &__images{
        max-width: 1200px
      }
    }
    @media(max-width: 992px){
      flex-wrap: wrap
      &__content{
        flex: 1 1 100%
      }
      &__images{
        max-width: 1200px
      }
    }
  }
  .info-product{
    &__title {
      font-weight 700
      font-size: 30px;
      line-height: 34px;
      color: #3D3D3D;
      margin-bottom 25px
    }
    &__block {
      width: 100%
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      padding 25px 30px
      background-color: #fff
      &:not(:last-child) {
        margin-bottom: 45px
      }
    }
  }
  .popup{
    .commodity-page__images{
      max-width: 1600px
      @media(max-width: 470px){
        padding-bottom 20px
      }
    }
    .carousel-commodity{
      position relative !important
      margin 0 80px
      @media(max-width: 768px){
        margin 0 40px
      }
      &__slide{
        border: none
      }
      .slick-arrow{
        display block !important
        bottom 220px
        @media(max-width: 1590px){
          bottom 190px
        }
        @media(max-width: 500px){
          bottom 140px
        }
      }
      .slick-prev{
        left -60px
      }
      .slick-next{
        right -60px
      }
    }
  }
</style>
<script>
import PagePopup from '@/components/PagePopup'


import PaymentAlert from '@/components/product/PaymentAlert'
import ReviewsProduct from '@/components/product/ReviewsProduct'
// import TableProduct from '@/components/product/TableProduct'
// import GalleryProduct from '@/components/product/GalleryProduct'
import AboutProduct from '@/components/product/AboutProduct'

import CommodityContent from '@/components/product/CommodityContent'
import CommoditySlider from '@/components/product/CommoditySlider'

import LayoutDefault from '@/layouts/LayoutDefault'
import AsideSidebar from '@/components/home/AsideSidebar'
import RecentProducts from '@/components/home/RecentProducts'
import PageAds from '@/components/PageAds'
export default {
  name: 'CatalogView',
  layouts: 'default',
  components: {
    LayoutDefault,
    AsideSidebar,
    RecentProducts,
    PageAds,
    CommoditySlider,
    CommodityContent,
    AboutProduct,
    // TableProduct,
    // GalleryProduct,
    ReviewsProduct,
    PagePopup,
    PaymentAlert,
  },
  data() {
    return {
      visibilityPopup: null,
      buyOneClickPopup: null,
      inputValue: 0,
      beforePayment: {
        name: "You want to buy only that product OR buy all products from your cart?",
        nclass: "before-payment",
      },
      productItem: {},
    }
  },
  methods: {
    openPopup() {
      this.visibilityPopup = 1;
    },
    closePopup() {
      this.visibilityPopup = null;
      this.buyOneClickPopup = null;
    },
    openAlertPopup(value) {
      this.buyOneClickPopup = 1;
      this.inputValue = value
    },
    quickBuy() {
      this.$store.state.isQuickBuy = true
      console.log(this.$store.state.isQuickBuy)
      this.$store.state.quickBuy[0] = this.productItem;
      if(this.$store.state.quickBuy.find(item => item.id === this.productItem.id)){
        this.$store.state.quickBuy[0].quantity = this.inputValue;
      }
    },
    getProducts () {
      this.$store.dispatch('getProducts')
        .then(res => {
          this.productItem = res.data.find(item => item.id === this.productId)
        })
    }
  },
  mounted () {
    this.getProducts()
  },
  watch: {
    productId() {
      setTimeout(() => {
        this.getProducts()
      }, 0)
    }
  },
  computed: {
    recentList () {
      return this.$store.state.recentList;
    },
    SidebarWidth() {
      if (window.innerWidth <= 1200) {
        return false
      } else {
        return true
      }
    },
    MobileWidth() {
      if (window.innerWidth <= 768) {
        return false
      } else {
        return true
      }
    },
    productId() {
      return parseInt(this.$route.params.id) || 1;
    },
  },
}
</script>