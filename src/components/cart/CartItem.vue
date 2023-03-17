<template>
  <div class="cart-page__item item-cart">
    <router-link class="item-cart__image" :to="{name: 'productItem', params: {id: product.id}}" @click="closePopup()"><img :src="product.preview" alt="" ></router-link>
    <div class="item-cart__row">
      <div class="item-cart__info">
        <router-link class="item-cart__title" :to="{name: 'productItem', params: {id: product.id}}" @click="closePopup()">{{ product.name }}</router-link>
        <div class="item-cart__num"><span>Numer kategorii: </span>{{ product.category_id }}</div>
        <div class="item-cart__cod"><span>Kod EAN: </span>{{ product.code }}</div>
        <div class="item-cart__sale"><span>Rabat</span>{{ Math.ceil(100 - product.price/product.first_price*100) + "%" }}</div>
      </div>
      <div class="item-cart__quantity quantity-product">
        <span @click="decrement(product.id)">-</span>
        <div class="quantity-product__input">
          <input type="text" :value="product.amount">
        </div>
        <span @click="increment(product.id)">+</span>
      </div>
      <div class="item-cart__price">{{ product.price }}<span>PLN</span></div>
    </div>
    <div
      class="item-cart__trash"
      @click="removeItem(product.id)"
    >
      <img src="@/assets/img/main/icons/trash.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
    }
  },
  methods: {
    removeItem (id) {
      this.$store.state.cartList = this.$store.state.cartList.filter(item => item.id !== id)
    },
    increment (id) {
      this.$store.state.cartList.find(item => {
        if(item.id === id){
          item.quantity++;
        }
      })
    },
    decrement (id) {
      this.$store.state.cartList.find(item => {
        if(item.id === id){
          if(item.quantity > 1){
            item.quantity--;
          } else {
            this.removeItem(id);
          }
        }
      })
    },
    closePopup () {
      this.$emit('closePopup')
    }
  },
}
</script>
