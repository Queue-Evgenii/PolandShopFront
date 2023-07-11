<template>
  <div class="wrapper">
    <layout-default v-if="!is404">
      <main class="page">
        <div class="page__catalog catalog-page">
          <div class="catalog-page__container container">
            <aside-sidebar v-if="!SidebarWidth" />
            <div class="catalog-page__row row">
              <aside class="catalog-page__sidebar sidebar">
                <aside-sidebar v-if="SidebarWidth" />
                <aside-filter v-if="SidebarWidth" :filters="categoryItems" @productsHoisting="getProducts" />
              </aside>
              <div class="catalog-page__content content">
                <div class="catalog-page__slider">
                  <sub-slider :subSlides="categoryItems" />
                </div>
                <div class="catalog-page__products">
                  <catalog-products
                    v-if="isSingleCategory"
                    :catalogProducts="catalogProducts"
                    :productsLabel="productsLabel"
                    @productsHoisting="getProducts"
                  > 
                    <aside-filter v-if="!SidebarWidth" :filters="categoryItems" @productsHoisting="getProducts" />
                  </catalog-products>
                  <template v-else>
                    <home-catalogue
                      v-for="item in childrenCategoriesId"
                      :key="item"
                      :catalogId='item'
                      @addToCart="addToCart"
                    />
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
        <recent-products  v-if="recentList.length !== 0" :recentProducts="recentList"/>
        <page-ads />
      </main>
    </layout-default>
    <NotFound v-else/>
  </div>
</template>
<style lang="stylus">
</style>
<script>
import LayoutDefault from '@/layouts/LayoutDefault'
import AsideSidebar from '@/components/home/AsideSidebar'
import SubSlider from '@/components/SubSlider'
import AsideFilter from '@/components/catalog/AsideFilter'
import CatalogProducts from '@/components/catalog/CatalogProducts'
import RecentProducts from '@/components/home/RecentProducts'
import PageAds from '@/components/PageAds'
import NotFound from '@/components/NotFound'
import HomeCatalogue from '../components/home/HomeCatalogue'
export default {
  name: 'CatalogView',
  layouts: 'default',
  components: {
    LayoutDefault,
    AsideSidebar,
    AsideFilter,
    SubSlider,
    CatalogProducts,
    RecentProducts,
    PageAds,
    NotFound,
    HomeCatalogue,
  },
  data () {
    return {
      categoryItems: [],
      catalogProducts: [],
      childrenCategoriesId: [],
      productsLabel: '',
      is404: false,
      isSingleCategory: true,
    }
  },
  computed: {
    currentCatId() {
      return parseInt(this.$route.params.id) || 1;
    },
    recentList () {
      return this.$store.state.recentList;
    },
    SidebarWidth () {
      if (window.innerWidth <= 1200) {
        return false
      } else {
        return true
      }
    },
    MobileWidth () {
      if (window.innerWidth <= 768) {
        return false
      } else {
        return true
      }
    },
  },
  methods: {
    getProducts(data) {
      this.catalogProducts = data;
    },
    getCategories() {
      this.$store.dispatch("getCategories").then(res => {
        this.categoryItems = res.data;
      })
    }
  },
  mounted () {
    this.getCategories();
  },
}
</script>