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
          <template v-if="$store.state.deliveriesData">
            <div class="delivery">
              <div class="payment-cart__row end flex">
                <div class="payment-cart__sub-price bold"><vat-price :basePrice="cartTotalCost" /></div>
              </div>
              <div class="payment-cart__row flex">
                <div class="payment-cart__label">Razem za towary:</div>
                <div class="payment-cart__total-price">
                  {{ cartTotalCost }} PLN
                </div>
              </div>
            </div>
            <div class="delivery">
              <!-- 
              <div class="payment-cart__row end flex">
                <div class="delivery__label">
                  {{ $store.state.deliveriesData.title }}
                </div>
              </div>
              -->
              <div class="payment-cart__row end flex">
                <div class="delivery__label">
                  {{ $store.state.deliveriesData.time }}
                </div>
              </div>
              <div class="payment-cart__row end flex">
                <div class="delivery__label">
                  {{ $store.state.deliveriesData.protected }}
                </div>
              </div>
              <div class="payment-cart__row end flex">
                <div class="payment-cart__sub-price bold"><vat-price :basePrice="cartDeliveryCost" /></div>
              </div>
              <div class="payment-cart__row flex">
                <div class="payment-cart__label">Razem za dostawę:</div>
                <div class="payment-cart__total-price">
                  {{ cartDeliveryCost }} PLN
                </div>
              </div>
            </div>
          </template>
          
          <div class="payment-cart__row flex">
            <div class="payment-cart__label">Razem do zapłaty:</div>
            <div v-if="sale()" class="payment-cart__sale item-cart__sale"><span>Rabat</span>{{ sale() + '%' }}</div>
            <div class="payment-cart__total-price">{{ cartTotalCost + (cartDeliveryCost ? cartDeliveryCost : 0) }} PLN</div>
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
import VatPrice from '@/components/VatPrice'
export default {
  components: {
    CartItem,
    VatPrice,
  },
  props: {
    cartList: {
      type: Array,
      required: []
    }
  },
  computed: {
    cartDeliveryCost() {
        const cart = this.$store.state.cartList;
        const boxes = this.$store.state.deliveriesData.boxes;

        if (!cart.length) return 0;

        const groups = {}; 
        for (let item of cart) {
            if (!groups[item.box_id]) groups[item.box_id] = [];
            groups[item.box_id].push(item);
        }

        let totalCost = 0;

        for (let boxId in groups) {
            const box = boxes.find(b => b.id == boxId);
            if (!box) continue;

            const boxSize = Number(box.size);
            let totalVolume = 0;

            for (let item of groups[boxId]) {
                const itemVolume = Number(item.size ?? 0);
                totalVolume += itemVolume * item.amount;
            }

            if (boxSize <= 0) continue;

            const boxesNeeded = Math.ceil(totalVolume / boxSize);

            totalCost += boxesNeeded * box.price;
        }

        return totalCost;
    },
    cartTotalCost() {
      let result = 0;
      if(this.cartList.length > 0){
        for(let item of this.$store.state.cartList) {
          result += item.price*(100-item.discount)/100 * item.amount;
        }
        return Math.ceil(result);
      }
      return 0;
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
        sumWithout += +element.price;
        sumWith += +element.price*(100-element.discount)/100;
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

.delivery {
  border-bottom: 1px solid #8B8B8B;
  padding: 8px 0 16px
  &__label {
    font-size: 16px;
    line-height: 1.25;
    color: #3D3D3D;
  }
}

.cart-page__component{
  margin 0 auto
  flex: 0 1 1600px
  padding 0 30px
}
.item-cart {
  padding 45px 0
  display grid
  gap: 30px
  grid-template-columns: 165px 1fr minmax(120px, 200px)
  border-bottom: 1px solid #8B8B8B;
  position relative
  background-color: #fff;
  @media(max-width: 992px){
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
    @media(max-width: 992px) {
      flex: 1 1 100%
    }
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
      flex: 0 1 50%
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
      flex: 0 1 auto
      order: 2
      font-size: 30px;
      line-height: 41px;
    }
  }
  &__trash{
    cursor: pointer
  }
}
.payment-cart {
  &__row {
    padding 18px 64px 14px
    margin 0 auto
    width 100%
    justify-content space-between;
    &.end {
      padding 16px 64px 4px
      justify-content end;
    }
  }
  &__label,
  &__total-price {
    font-weight: 700;
    font-size: 30px;
    line-height: 34px;
    color: #3D3D3D;
  }
  &__sub-price {
    font-size: 20px;
    line-height: 1.25;
    color: #3D3D3D;
    &.bold {
      font-weight: 700;
    }
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
    grid-template-columns minmax(200px, 1fr) repeat(2, 170px) 200px
    border-bottom: 1px solid #8B8B8B;
    @media(max-width: 992px){
      display none
    }
  }
  &__title-amount,
  &__title-total { 
    text-align center
  }
  &__title-product{
    padding-left 100px
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