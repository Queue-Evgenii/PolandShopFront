<template>
  <div class="page-products">
    <div class="mainproducts products">
      <div class="products__container container">
        <div v-if="catalogProducts.length !== 0" class="products__title">
          <router-link :to="{name: 'catalogList', params: {id: catalogId}}">
            {{ productsLabel }}
          </router-link>
        </div>
        <SkeletonProduct v-if="isSkeleton"/>
        <div v-if="catalogProducts.length !== 0" class="products__items">
          <product-item
            v-for="product in catalogProducts"
            :key="product.id"
            :product="product"
            :favoriteItems="favoriteItems"
            @addToCart="addToCart"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SkeletonProduct from '../SkeletonProduct'
import ProductItem from '@/components/ProductItem'
export default {
  props: {
    catalogId: {
      type: String,
      required: true,
    }
  },
  data () {
    return {
      catalogProducts: [],
      productsLabel: '',
      favoriteItems: [],
      isSkeleton: true,
    }
  },
  components: {
    ProductItem,
    SkeletonProduct,
  },
  methods: {
    addToCart (product) {
      this.$emit('addToCart', product)
    },
    getFavorites() {
      if (this.isAuthorised) {
        this.$store.dispatch("getFavorites").then(res => {
          this.favoriteItems = res.data;
        })
        return;
      }
      this.favoriteItems = this.$store.state.favoriteItems;
    },
    getProductsByCategoryId(id) {
      const data = `category_ids[]=${id}&perPage=4`
      this.$store.dispatch('setFilters', data)
        .then(res => {
          this.catalogProducts = res.data;
          this.productsLabel = res.data.length !== 0 ? res.data[0].category.name : null;
        })
        .finally(() => {
          this.isSkeleton = false;
        })
    }
  },
  mounted () {
    this.getProductsByCategoryId(this.catalogId);
    this.getFavorites();
  },
}
</script>
