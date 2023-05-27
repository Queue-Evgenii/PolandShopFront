<template>
  <div class="cart-page__item item-cart">
    <router-link class="item-cart__image" :to="{name: 'productItem', params: {id: product.id}}" @click="closePopup()"><img :src="product.preview" alt="" ></router-link>
    <div class="item-cart__row">
      <div class="item-cart__info">
        <router-link class="item-cart__title" :to="{name: 'productItem', params: {id: product.id}}" @click="closePopup()">{{ product.name }}</router-link>
        <div class="item-cart__num"><span>Numer kategorii: </span>{{ product.category_id }}</div>
        <div class="item-cart__cod"><span>Kod EAN: </span>{{ product.code }}</div>
        <div v-if="product.discount" class="item-cart__sale"><span>Rabat</span>{{ product.discount + "%" }}</div>
      </div>
      <div class="item-cart__quantity quantity-product">
        <span @click="decrement(product.id)">-</span>
        <div class="quantity-product__input">
          <input disabled type="text" :value="product.amount">
        </div>
        <span v-if="product.amount < product.quantity" @click="increment(product.id)">+</span>
        <span v-else class="_disabled">+</span>
        <div
        v-if="windowWidth <= 992"
          class="item-cart__trash"
          @click="removeItem(product.id)"
        >
          <img src="@/assets/img/main/icons/trash.png" alt="">
        </div>
      </div>
      <div class="item-cart__price">{{ product.price*(100-product.discount)/100 }}<span>PLN</span></div>
    </div>
    <div
    v-if="windowWidth > 992"
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
      localStorage.setItem('cartItems', JSON.stringify(this.$store.state.cartList));
    },
    increment (id) {
      const item = this.$store.state.cartList.find(item => item.id === id);
      if(item.id < item.quantity) {
        item.amount++;
        localStorage.setItem('cartItems', JSON.stringify(this.$store.state.cartList));
      }
    },
    decrement (id) {
      const item = this.$store.state.cartList.find(item => item.id === id);
      if(item.amount > 1){
        item.amount--;
        localStorage.setItem('cartItems', JSON.stringify(this.$store.state.cartList));
      } else {
        this.removeItem(id);
      }
    },
    closePopup () {
      this.$emit('closePopup')
    }
  },
  computed: {
    windowWidth() {
      return window.innerWidth
    }
  }
}
</script>
