<template>
  <ul class="search-list">
    <li class="search-list__item" v-for="product in products" :key="product.id">
      <router-link :to="{name: 'productItem', params: {id: product.id}}" @click="closeSearchList()">
        <CartItem :product="product" :isSearchList="true" />
      </router-link>
    </li>
  </ul>
</template>
<script>
import CartItem from '@/components/cart/CartItem'
export default {
  components: {
    CartItem,
  },
  props: {
    products: {
      type: Array,
      required: true,
    }
  },
  methods: {
    closeSearchList() {
      this.$emit("closeSearchList");
    }
  },
}
</script>
<style lang="stylus">
  .search-list {
    display none;
    &.active{
      display block
      position absolute
      z-index: 3;
      width 100%
      max-height 60vh
      overflow: auto;
      left 0
      right 0
      top 105%;
      box-shadow 3px 3px 3px #8B8B8B;
    }
  }
</style>