<template>
  <div class="products__item item-product">
    <router-link :to="{name: 'productItem', params: {id: product.id}}" >
      <div class="item-product__body flex" @click="addToRecent(product)">
        <div class="item-product__info flex">
          <div class="item-product__image">
            <img :src="product.preview" alt="">
            <span v-if="product.mark">{{ product.labelMark }}</span>
          </div> 
          <div v-if="!isRowDirection" class="item-product__text-row">
            <div class="item-product__label">{{ product.name}}</div>
            <div class="item-product__price">{{ product.price }}</div>
          </div>
        </div>
        <div class="column-container flex">
          <div v-if="isRowDirection" class="item-product__text-row">
            <div class="item-product__label">{{ product.name}}</div>
            <div class="item-product__price">{{ product.price }}</div>
          </div>
          <div class="item-product__actions actions-product flex">
            <button
              @click="this.showAlert(product);addToCart(product);$event.stopPropagation();$event.preventDefault()"
              type="button"
              class="actions-product__button"
              :class="(getQuantity(product) >= product.quantity) ? '_disabled' : ''"
            >
              Dodaj do koszyka
            </button>
            <button
              @click="changeFavoriteList(product);$event.stopPropagation();$event.preventDefault();"
              type="button" class="actions-product__favorite"
              :class="{'favorite' : checkIsFavorite(product) === true}">
            </button>
          </div>
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
    },
    isRowDirection: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    isAuthorised() {
      return localStorage.getItem("access_token");
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
      this.$emit('addToCart', product);
    },
    setFavorites(data) {
      this.$emit("setFavoriteItems", data);
    },
    changeFavoriteList(product) {
      if(this.isAuthorised) {
        const data = {
          product_id: product.id,
        };
        if(this.$store.state.favoriteItems.find(item => item.id === data.product_id)) {
          this.$store.state.favoriteItems =  this.$store.state.favoriteItems.filter(item => item.id !== data.product_id)
          this.$store.dispatch("removeFavorites", data);
        } else {
          this.$store.state.favoriteItems.push(product);
          this.$store.dispatch("addFavorites", data);
        }
        return;
      }
      this.changeLocalFavorites(product);
    },
    changeLocalFavorites(product) {
      if (!this.$store.state.favoriteItems.find(item => item.id === product.id)) {
        product.isFavorite = true
        const favoriteItems = this.$store.state.favoriteItems
        favoriteItems.push(product)
        localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems))
      } else {
        let item = this.$store.state.favoriteItems.find(item => item.id === product.id)
        item.isFavorite = false
        let favoriteItems = this.$store.state.favoriteItems
        const index = favoriteItems.indexOf(favoriteItems.find(item => item.id === product.id))
        favoriteItems.splice(index, 1)
        localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems))
      }
    },
    checkIsFavorite(product) {
      if(!this.isAuthorised) return this.checkLocalFavorites(product);
      if(this.$store.state.favoriteItems.find(item => item.id === product.id)) {
        return true;
      }
      return false; 
    },
    checkLocalFavorites(product) {
      if (this.$store.state.favoriteItems.find(item => item.id === product.id)) {
        product.isFavorite = true
        return true
      } else {
        product.isFavorite = false
        return false
      }
    },
    addToRecent(product){
      if(this.$store.state.recentList.find(item => item.id === product.id)){
        // console.log("dublicate product")
      } else {
        this.$store.state.recentList.unshift(product)
      }
    },
    showAlert(product) {
      if(this.getQuantity(product) < product.quantity) {
        const block = document.querySelector('.access-alert__container')
        block.classList.add('show-access-alert')
        setTimeout(() => block.classList.remove('show-access-alert'), 1000);
      }
    },
  },
}
</script>
<style lang="stylus">
</style>
