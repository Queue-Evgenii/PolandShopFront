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
                  <commodity-slider :galleryItems="galleryItems" @openPopup="openPopup" :isPopup="false"/>
                  <commodity-content
                    :productItem="this.productItem"
                    @openAlertPopup="openAlertPopup"
                    @inputValue="inputValue"
                    @changeFavoriteList="changeFavoriteList"
                  />
                </div>
                <div class="product-page__info info-product">
                  <about-product v-if="this.productItem.description" :aboutText="this.productItem.description" />
                  <!-- <table-product :tableProductItems="productItem.description" /> -->
                  <gallery-product v-if="this.productItem.images" :productImages="galleryItems" />
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
    <page-popup 
     v-if="visibilityPopup" 
     @closePopup="closePopup"
     :popupOutput="this.productItem"
    >
      <commodity-slider v-if="galleryItems" :galleryItems="galleryItems" :isPopup="true"/>
      <commodity-content :productItem="this.productItem" />
    </page-popup>
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
      flex: 1 1 50%
    }
    &__content{
      flex: 0 0 50%
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
    display: flex;
    flex-direction: column;
    row-gap: 45px;
    &__title {
      font-weight 700
      font-size: 30px;
      line-height: 34px;
      color: #3D3D3D;
      margin-bottom 25px
    }
    &__block {
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      padding 20px
      background-color: #fff
      height: min-content;
    }
  }
</style>
<script>
import PagePopup from '@/components/PagePopup'


import PaymentAlert from '@/components/product/PaymentAlert'
import ReviewsProduct from '@/components/product/ReviewsProduct'
// import TableProduct from '@/components/product/TableProduct'
import GalleryProduct from '@/components/product/GalleryProduct'
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
    GalleryProduct,
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
    galleryItems() {
      if(this.productItem.images) {
        let items = this.productItem.images;
        items.unshift(this.productItem.preview)
        return items
      }
      if (this.productItem.preview) return Array(this.productItem.preview)
      return null;
    }
  },
  methods: {
    openPopup() {
      this.visibilityPopup = 1;
      document.body.style.overflowY = "hidden"
    },
    closePopup() {
      this.visibilityPopup = null;
      this.buyOneClickPopup = null;
      document.body.style.overflowY = "initial"
    },
    openAlertPopup(value) {
      this.buyOneClickPopup = 1;
      this.inputValue = value
      document.body.style.overflowY = "hidden"
    },
    quickBuy() {
      this.$store.state.isQuickBuy = true
      this.$store.state.quickBuy[0] = this.productItem;
      if(this.$store.state.quickBuy.find(item => item.id === this.productItem.id)){
        this.$store.state.quickBuy[0].amount = this.inputValue;
      }
    },
    getProducts () {
      // this.$store.dispatch('getProducts')
      //   .then(res => {
      //     this.productItem = res.data.find(item => item.id === this.productId)
      //     if (this.productItem.quantity !== 0) {
      //       this.productItem.amount = 1
      //     } else {
      //       this.productItem.amount = 0
      //     }
      //     if (this.$store.state.favoriteItems.find(item => item.id === this.productItem.id)) {
      //       this.productItem.isFavorite = true
      //     } else {
      //       this.productItem.isFavorite = false
      //     }
      //   })

      this.$store.dispatch('getProduct', this.productId)
        .then(res => {
          this.productItem = res.data
          if (this.productItem.quantity !== 0) {
            this.productItem.amount = 1
          } else {
            this.productItem.amount = 0
          }
          if (this.$store.state.favoriteItems.find(item => item.id === this.productItem.id)) {
            this.productItem.isFavorite = true
          } else {
            this.productItem.isFavorite = false
          }
        })
    },
    changeFavoriteList() {
      if(localStorage.getItem("access_token")) {
        const data = {
          product_id: this.productId,
        };
        this.$store.dispatch("getFavorites").then(res => {
          if(res.data.find(item => item.id === data.product_id)) {
            this.$store.state.favoriteItems =  this.$store.state.favoriteItems.filter(item => item.id !== data.product_id)
            this.$store.dispatch("removeFavorites", data);
          } else {
            this.$store.state.favoriteItems.push(this.productItem);
            this.$store.dispatch("addFavorites", data);
          }
        })
        return;
      }
      this.changeLocalFavorites();
    },
    changeLocalFavorites() {
      if (!this.$store.state.favoriteItems.find(item => item.id === this.productItem.id)) {
        this.productItem.isFavorite = true
        const favoriteItems = this.$store.state.favoriteItems
        favoriteItems.push(this.productItem)
        localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems))
      } else {
        const item = this.$store.state.favoriteItems.find(item => item.id === this.productItem.id)
        item.isFavorite = false
        const favoriteItems = this.$store.state.favoriteItems
        const index = favoriteItems.indexOf(favoriteItems.find(item => item.id === this.productItem.id))
        favoriteItems.splice(index, 1)
        localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems))
      }
    }
  },
  mounted () {
    this.getProducts();
  },
  watch: {
    productId() {
      setTimeout(() => {
        this.getProducts()
      }, 0)
    }
  },
}
</script>