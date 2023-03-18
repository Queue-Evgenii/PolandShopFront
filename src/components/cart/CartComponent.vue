<template>
  <div class="cart-page__component">
    <div class="cart-page__title big-title">Twój Koszyk</div>
    <div class="cart-page__items">
      <div class="cart-page__titles" v-if="cartList.length !== 0">
        <span class="cart-page__title-product">Produkt</span>
        <span class="cart-page__title-amount">Ilość</span>
        <span class="cart-page__title-total">Cena £</span>
      </div>
      <div class="cart-block" v-if="cartList.length !== 0">
        <cart-item :product="product" v-for="product in cartList" :key="product.id" @closePopup="closePopup"/>
        <div class="cart-page__payment payment-cart">
          <div class="payment-cart__cupon"></div>
          <div class="payment-cart__row flex">
            <div class="payment-cart__label">Razem do zapłaty:</div>
            <div class="payment-cart__sale item-cart__sale"><span>Rabat</span>{{ sale() + '%' }}</div>
            <div class="payment-cart__total-price">{{cartTotalCost}} PLN</div>
          </div>
          <div class="payment-cart__button-box flex">
            <router-link :to="{name: 'payment'}" @click="closePopup()" class="payment-cart__button button"><span @click="notQuickBuy()">Zapłać za towar</span></router-link>
          </div>
        </div>
      </div>
      <div class="cart-block" v-else>
        <div class="empty-block">Your cart is <span>empty!</span></div>
      </div>
    </div>
  </div>
</template>
<script>
import CartItem from '@/components/cart/CartItem'
export default {
  components: {
    CartItem,
  },
  props: {
    cartList: {
      type: Array,
      required: []
    }
  },
  computed: {
    cartTotalCost() {
      let result = [];
      if(this.$store.state.cartList.length > 0){
        for(let item of this.$store.state.cartList) {
          result.push(item.price * item.amount);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        })
      } else {
        result = 0;
      }
      return result;
    }
  },
  methods: {
    closePopup () {
      this.$emit('closePopup')
    },
    notQuickBuy() {
      this.$store.state.isQuickBuy = false
    },
    sale(){
      let sumWithout = 0, sumWith = 0
      this.cartList.forEach(element => {
        sumWithout += +element.price
        sumWith += +element.first_price
      });
      return Math.ceil(100 - sumWithout/sumWith*100)
    },
  },
  data() {
    return{
    }
  }
}
</script>
<style lang="stylus">
.cart-page__component{
  align-self start
  flex: 1 1 auto
}
.item-cart {
  padding 45px 0
  display grid
  gap: 30px
  grid-template-columns: 165px 1fr minmax(120px, 200px)
  border-bottom: 1px solid #8B8B8B;
  position relative
  @media(max-width: 992px){
    grid-template-columns: 185px 1fr 100px
  }
  @media(max-width: 768px){
    grid-template-columns: 185px 1fr
  }
  @media(max-width: 540px){
    grid-template-columns: 135px 1fr
    padding 60px 0 75px 0
    gap: 10px
  }
  &__image {
    position relative
    height 150px
    border: 1px solid rgba(0,0,0,0.2);
    img{
      position absolute
      width 100%
      height 100%
      padding 5px
      object-fit: cover
    }
    @media(max-width: 992px){
      height 175px
    }
    @media(max-width: 540px){
      height 120px
    }
  }
  &__row{
    display flex
    align-items center
    column-gap: 30px
    row-gap: 5px
    @media(max-width: 992px){
      flex-wrap: wrap
    }
  }
  &__info {
    display flex
    flex-direction: column
    gap: 5px
    order: 1
    flex: 1 1 auto
  }
  &__title{
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    color: #3D3D3D;
    @media(max-width: 540px){
      position absolute
      top 20px
      left 0
    }
  }
  &__num,
  &__cod{
    font-size: 14px;
    line-height: 16px;
    color: #3D3D3D;
    span{
      font-weight: 700;
    }
  }
  &__sale{
    margin-top 15px
    width 160px
    padding 15px 10px
    border: 1px solid #FF0031;
    text-align center
    color: #FF0031
    font-weight: 700;
    span{
      margin-right 5px
    }
    @media(max-width: 992px){
      display none
    }
  }
  &__quantity {
    order 2
    @media(max-width: 992px) {
      flex: 1 1 100%
      order: 3
    }
    @media(max-width: 540px){
      position absolute
      bottom 20px
      left -10px
    }
  }
  &__price,
  &__trash {
    display flex
    align-items center
    span{
      margin-left 5px
    }
  }
  &__price{
    order: 3
    font-size: 24px;
    line-height: 28px;
    color: #3D3D3D;
    @media(max-width: 992px) {
      flex: 1 1 100%
      order: 2
      font-weight: 700;
      font-size: 32px;
      line-height: 41px;
      color: #000000;
    }
  }
  &__trash{
    cursor: pointer
    @media(max-width: 768px){
      position absolute
      right 0
      bottom 55px
    }
  }
}
.payment-cart {
  &__row {
    padding 24px 0
    width 100%
    justify-content space-around
  }
  &__label,
  &__total-price {
    font-weight: 700;
    font-size: 30px;
    line-height: 34px;
    color: #3D3D3D;
  }
  &__button-box{
    width 100%
    justify-content center
    padding 75px 0
  }
  &__button { 
    display block
    text-align center
    width 240px !important
  }
}
.cart-page{
  &__title{
    flex 1 1 100%
    color: #3D3D3D;
  }
  &__titles {
    padding 65px 0 25px 0
    display grid
    grid-template-columns minmax(200px, 620px) repeat(2, 150px) 200px
    border-bottom: 1px solid #8B8B8B;
    @media(max-width: 992px){
      display none
    }
  }
  &__title-product,
  &__title-amount,
  &__title-total { 
    text-align center
  }
}
.popup{
  .cart-page__title{
    display none
  }
  .cart-page__titles{
    padding-top: 0px
  }
}
</style>