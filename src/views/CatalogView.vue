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
                  <div v-else class="catalog-page__category-tabs">
                    <div
                      v-for="item in childrenCategories"
                      :key="item.id"
                       class="catalog-page__category-tab"
                    >
                      <router-link
                        class="subslider__slide"
                        :to="{name: 'catalogList', params: {id: item.id}}"
                        @click="filterReset()"
                      >
                        <div class="subslider__image"><img v-if="item.preview" :src="item.preview" alt=""></div>
                        <div class="subslider__label">{{ item.name }}</div>
                      </router-link>
                    </div>
                  </div>
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
.catalog-page{
  &__category-tabs {
    display grid
    row-gap 32px
    column-gap 24px
    grid-template-columns: repeat(4, minmax(200px, 400px))
    @media(max-width: 1400px) {
      grid-template-columns: repeat(3, minmax(200px, 400px))
    }
  }
  &__category-tab {
    
  }
}
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
    &__category-tabs {
      grid-template-columns: repeat(4, minmax(200px, 400px))
    }
  }
}
@media(max-width: 992px) {
  .catalog-page{
    &__category-tabs {
      row-gap 24px
      grid-template-columns: repeat(3, minmax(200px, 400px))
    }
  }
}
@media(max-width: 768px) {
  .catalog-page{
    &__category-tabs {
      grid-template-columns: repeat(2, minmax(200px, 400px))
    }
  }
}
@media(max-width: 520px) {
  .catalog-page{
    &__category-tabs {
      grid-template-columns: repeat(1, 1fr)
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
      const categories = this.$store.state.categoriesWithChild;
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
    filterReset() {
      this.$store.state.filterParams = ["sort[type]=asc", "sort[column]=name"]
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
  },
  beforeUnmount() { 
    window.removeEventListener('resize', this.onResize); 
  },
}
</script>