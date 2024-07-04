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
                <div
                  v-if="childrenCategories.length === 0"
                  class="settings-products__body settings-products"
                  ref="filters"
                >
                  <aside-filter />
                </div>
              </aside>
              <div class="catalog-page__content content">
                <div class="catalog-page__slider">
                  <sub-slider :subSlides="categoryItems" />
                </div>
                <div class="catalog-page__products">
                  <catalog-products
                    v-if="childrenCategories.length === 0"
                    :productsLabel="productsLabel"
                  />
                  <template v-else>
                    <home-catalogue
                      v-for="item in childrenCategories"
                      :key="item.id"
                      :category='item'
                      :isCatalog="true"
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
@media(max-width: 1200px) {
  .catalog-page{
    &__content{
      order: 1;
    }
    &__sidebar{
      order: 0;
    }
    &__slider{
      display: none;
    }
  }
}
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
      productsLabel: '',
      is404: false,
      SidebarWidth: !(window.innerWidth <= 1200),
    }
  },
  computed: {
    currentCatId() {
      return parseInt(this.$route.params.id) || 1;
    },
    recentList () {
      return this.$store.state.recentList;
    },
    MobileWidth () {
      if (window.innerWidth <= 768) {
        return false
      } else {
        return true
      }
    },
    childrenCategories() {
      const { categories } = this.$store.state;
      const parentCategory = categories.find(item => item.id === this.currentCatId);

      if (parentCategory && parentCategory.children.length > 0) {
        return parentCategory.children.map(child => 
          categories.find(category => category.id === child.id)
        ).filter(value => value !== undefined);
      } else {
        return [];
      }
    }
  },
  methods: {
    onResize() {
      this.SidebarWidth = !(window.innerWidth <= 1200);
    },
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
  },
  beforeUnmount() { 
    window.removeEventListener('resize', this.onResize); 
  },
}
</script>