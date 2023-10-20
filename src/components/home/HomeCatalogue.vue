<template>
  <div class="page-products">
    <div class="mainproducts products">
      <div class="products__container container">
        <div v-if="catalogProducts.length !== 0" class="products__title">
          <router-link :to="{name: 'catalogList', params: {id: catalogId}}">
            {{ productsLabel }}
          </router-link>
        </div>
        <div v-if="catalogProducts.length !== 0" class="products__items">
          <product-item
            v-for="product in catalogProducts"
            :key="product.id"
            :product="product"
            :favoriteItems="favoriteItems"
            @addToCart="addToCart"
          />
        </div>
        <SkeletonProduct v-else />
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
      favoriteItems: []
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
      const data = `category_ids[]=${id}&sort[column]=id&sort[type]=desc&perPage=4`
      this.$store.dispatch('setFilters', data)
        .then(res => {
            if (res.data.length !== 0) {
              this.catalogProducts = res.data;
              this.productsLabel = res.data[0].category.name;
            }
        })
    }
  },
  mounted () {
    this.getProductsByCategoryId(this.catalogId);
    this.getFavorites();
  },
}
</script>
