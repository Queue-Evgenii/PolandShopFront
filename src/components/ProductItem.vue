<template>
  <div class="products__item item-product">
    <router-link :to="{name: 'productItem', params: {id: product.id}}" >
      <div class="item-product__body flex" @click="addToRecent(product)">
        <div class="item-product__info flex">
          <div class="item-product__image">
            <img :src="product.preview" alt="">
            <span v-if="product.mark">{{ product.labelMark }}</span>
          </div> 
          <div class="item-product__text-row">
            <div class="item-product__label">{{ product.name}}</div>
            <div class="item-product__price">{{ product.price }}</div>
          </div>
        </div>
        <div class="item-product__actions actions-product flex">
          <button @click="addToCart(product);$event.stopPropagation();$event.preventDefault();showAlert()" type="button" class="actions-product__button">Dodaj do koszyka</button>
          <button type="button" class="actions-product__favorite"></button>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    }
  },
  computed: {

  },
  methods: {
    addToCart(product) {
      this.$emit('addToCart', product)
    },
    addToRecent(product){
      if(this.$store.state.recentList.find(item => item.id === product.id)){
        // console.log("dublicate product")
      } else {
        this.$store.state.recentList.unshift(product)
      }
      // this.$store.state.recentList.push(product)
    },
    showAlert() {
      const block = document.querySelector('.access-alert__container')
      block.classList.add('show-access-alert')
      setTimeout(() => block.classList.remove('show-access-alert'), 1000);
    },
  },
}
</script>
