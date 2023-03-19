<template>
  <div class="favorite-page__component">
    <div class="favorite-page__title big-title">Uratowani produkty</div>
    <div class="favorite-page__items">
      <div class="favorite-block" v-if="favoriteItems.length !== 0">
        <div class="products__items">
          <ProductItem v-for="item in favoriteItems" :key="item.id" :product="item" @addToCart="addToCart"/>
        </div>
        <!-- <div class="clear-all">
          <button @click="clearAllFavorites()" type="button" class="button"><span>Clear all uratovane</span></button>
        </div> -->
      </div>
      <div class="favorite-block" v-else>
        <div class="empty-block">Your uratowane is <span>empty!</span></div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductItem from "@/components/ProductItem"
export default {
  data() {
    return {
      favoriteItems: []
    }
  },
  methods: {
    getFavoriteItems() {
      console.log(this.$store.state.favoriteItems)
      this.favoriteItems = this.$store.state.favoriteItems
    },
    addToCart (product) {
      const cartItems = this.$store.state.cartList
      if(this.$store.state.cartList.find(item => item.id === product.id)){
        const cartItem = cartItems.find(item => item.id === product.id)
        cartItem.amount++
      } else {
        product.amount = 1;
        cartItems.push(product)
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
      }
    },
  },
  mounted() {
    this.getFavoriteItems()
  },
  computed: {
    currentFavoriteList() {
      return localStorage.getItem('favoriteItems')
    }
  },
  watch: {
    currentFavoriteList() {
      setTimeout(() => {
        this.getFavoriteItems()
      }, 0)
    }
  },
  components: {
    ProductItem,
  },
}
</script>
<style>
.favorite-page__component{
  padding: 70px 0;
}
</style>
