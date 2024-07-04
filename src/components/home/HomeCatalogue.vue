<template>
  <div class="page-products">
    <div class="mainproducts products">
      <div class="products__container container">
        <div v-if="category.products.length !== 0" class="products__title">
          {{ catalogId }}
          <router-link :to="{name: 'catalogList', params: {id: category.id}}">
            {{ category.name || "" }}
          </router-link>
        </div>
        <!-- <SkeletonProduct v-if="isSkeleton"/> -->
        <div v-if="category.products.length !== 0" :class="isCatalog ? 'subcategory-wrapper products__items' : 'products__items'">
          <template
            v-for="(product, index) in category.products"
            :key="product.id"
          >
            <product-item
              v-if="index < 4"
              :product="product"
              :favoriteItems="favoriteItems"
              @addToCart="addToCart"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import SkeletonProduct from '../SkeletonProduct'
import ProductItem from '@/components/ProductItem'
export default {
  props: {
    isCatalog: {
      type: Boolean,
      default: false,
    },
    category: {
      required: true,
      type: Object,
    },
    favoriteItems: {
      type: Array,
      required: true,
    }
  },
  data () {
    return {
      isSkeleton: true,
    }
  },
  components: {
    ProductItem,
    // SkeletonProduct,
  },
  methods: {
    addToCart (product) {
      this.$emit('addToCart', product)
    },
  },
}
</script>
<style>

.subcategory-wrapper.products__items {
  grid-template-columns: repeat(4, minmax(300px, 1fr));
  @media(max-width: 1700px){
    grid-template-columns: repeat(3, minmax(300px, 1fr));
  }
  @media(max-width: 1400px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }
  @media(max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(300px, 1fr));
  }
  @media(max-width: 992px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }
  @media(max-width: 700px) {
    grid-template-columns: repeat(1, minmax(300px, 1fr));
  }
}
</style>