<template>
  <div class="page-products">
    <div class="mainproducts products">
      <div class="products__container container">
        <div class="products__title"><router-link :to="{name: 'catalogList', params: {id: catalogId}}">{{ productsLabel }}</router-link></div>
        <span v-if="this.notExistProducts" class="products__not-exist">Category does not contain products yet ;(</span>
        <div v-if="!this.notExistProducts" class="products__items">
          <product-item
            v-for="product in catalogProducts"
            :key="product.id"
            :product="product"
            @addToCart="addToCart"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductItem from '@/components/ProductItem'
export default {
  props: {
    catalogId: {
      type: String,
      required: true,
    }
  },
  components: {
    ProductItem,
  },
  methods: {
    addToCart (product) {
      this.$emit('addToCart', product)
    },
    fetchProductsByCategoryId(id) {
      this.$store.dispatch('listProductsByIdCategory', id)
        .then(res => {
          if (res.data.products.length > 4) {
            this.catalogProducts = res.data.products.slice(0,4)
          } else if (res.data.products.length === 0) {
            this.notExistProducts = true;
          }
          else {
            this.catalogProducts = res.data.products
          }
          this.productsLabel = res.data.name
        })
    }
  },
  mounted () {
    this.fetchProductsByCategoryId(this.catalogId)
  },
  data () {
    return {
      catalogProducts: [],
      productsLabel: '',
      notExistProducts: false,
    }
  }
}
</script>
