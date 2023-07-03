<template>
  <div class="recent-products">
    <div class="products">
      <div class="products__container container">
        <div class="products__title recent-products__title">Niedawno przeglądałeś:</div>
        <div class="products__items">
          <ProductItem
            v-for="product in recentProducts"
            :key="product.id"
            :product="product"
            @addToCart="addToCart"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="stylus">
  .recent-products__title{
    width 100%
    text-align center
  }
  .recent-products{
    span{
      display none
    }
  }
</style>
<script>
import ProductItem from '../ProductItem'
export default {
  components: { ProductItem },
  props: {
    recentProducts: {
      type: Array,
    }
  },
  methods: {
    getQuantity (product) {
      if (!this.$store.state.cartList.find(item => item.id === product.id)) {
        return 0
      }
      const item = this.$store.state.cartList.find(item => item.id === product.id)
      return item.amount
    },
    addToCart(product) {
      this.$emit('addToCart', product)
    },
    showAlert(product) {
      if(this.getQuantity(product) < product.quantity) {
        const block = document.querySelector('.access-alert__container')
        block.classList.add('show-access-alert')
        setTimeout(() => block.classList.remove('show-access-alert'), 1000);
      }
    },
    addToRecent(product){
      if(this.$store.state.recentList.find(item => item.id === product.id)){
        // console.log("dublicate product")
      } else {
        this.$store.state.recentList.unshift(product)
      }
      // this.$store.state.recentList.push(product)
    },
  }
}
</script>
