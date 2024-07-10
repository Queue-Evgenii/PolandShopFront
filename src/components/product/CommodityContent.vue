<template>
  <div class="commodity-page__content content-commodity">
    <div class="info-product__block">
      <div v-if="!productItem.name" class="skeleton-item skeleton-line sk_title"></div>
      <div v-else class="content-commodity__title">{{ productItem.name }}</div>
      <!-- <div class="content-commodity__offer">{{ productItem.offer }}</div> -->
      <div class="content-commodity__info">
        <div v-if="!productItem.code" class="skeleton-item skeleton-line"></div>
        <div v-else class="content-commodity__info-row"><span>Kod: </span>{{ productItem.code }}</div>
        <div v-if="!productItem.category" class="skeleton-item skeleton-line"></div>
        <div v-else class="content-commodity__info-row"><span>Kategoria: </span>{{ productItem.category.name }}</div>
      </div>
      <div v-if="!productItem.price" class="skeleton-item skeleton-line sk_price"></div>
      <div v-else-if="productItem.discount" class="content-commodity__price flex">
        <div class="content-commodity__new-price flex">
          {{ (productItem.price*(100-productItem.discount)/100).toFixed(2) }}
          <span>{{ 'PLN ZA ' + productItem.unit_of_measure }}</span>
        </div>
        <div class="content-commodity__sale-price">
          <div class="content-commodity__first-price flex">
            {{ (productItem.price) }}
            <span>{{ 'PLN ZA ' + productItem.unit_of_measure }}</span>
          </div>
          <div class="content-commodity__price-info">
            <span>{{ productItem.discount + "% " }}</span>
            {{ productItem.discount_label }}
          </div>
        </div>
      </div>
      <div v-else class="content-commodity__price flex">
        <div class="content-commodity__new-price flex">
          {{ productItem.price }}<span>{{ 'PLN za ' + productItem.unit_of_measure }}</span>
        </div>
      </div>
      <div v-if="getWat" class="content-commodity__wat"><span>{{ getWat.toFixed(2) + ' PLN' }}</span> netto, 23% VAT</div>
      <div class="content-commodity__actions actions-commodity">
        <div class="actions-commodity__row">
          <div class="actions-commodity__quantity quantity-product">
            <span v-if="amountInput > 1" @click="decrement()">-</span>
            <span v-else class="_disabled">-</span>
            <div class="quantity-product__input">
              <input type="text" v-model="amountInput">
            </div>
            <span v-if="amountInput < productItem.quantity" @click="increment()">+</span>
            <span v-else class="_disabled">+</span>
          </div>
          <div v-if="productItem.promoCod" class="actions-commodity__token flex"><span>Cod Kupon:</span><input type="text" placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _"></div>
        </div>
        <div v-if="productItem.quantity > 0" class="actions-commodity__status flex yes"><span>Na magazynie - </span>{{ productItem.labelMark ? productItem.labelMark : productItem.quantity }}</div>
        <div v-else-if="productItem.quantity" class="actions-commodity__status flex no"><span>Na magazynie - </span>{{ productItem.labelMark ? productItem.labelMark : productItem.quantity }}</div>
        <div class="actions-commodity__row">
          <button
            v-if="isCorrectValue(amountInput)"
            type="button" class="actions-commodity__cart button"
            @click="showAlert(productItem);addToCart(productItem)"
          >
            <span>Dodaj do koszyka</span>
          </button>
          <button v-else type="button" class="actions-commodity__cart button _disabled">
            <span>Dodaj do koszyka</span>
          </button>
          <button
            v-if="isCorrectValue(amountInput)"
            type="button"
            class="actions-commodity__cart button"
            @click="openAlertPopup()"
          >
            <span>Kup w 1 Kliknięcie</span>
          </button>
          <button v-else type="button" class="actions-commodity__buy button _disabled">
            <span>Kup w 1 kliknięcie</span>
          </button>
        </div>
        <div class="actions-commodity__row">
          <button
            @click="changeFavoriteList()"
            type="button"
            class="actions-commodity__favorite flex"
            :class="{'favorite' : checkIsFavorite(productItem) === true}"
          >
            Dodaj do Ulubionych
          </button>
        </div>
      </div>
    </div>
    <div v-if="$store.state.deliveriesData" class="delivery-commodity info-product__block">
      <div v-if="$store.state.deliveriesData.time" class="delivery-commodity__row flex delivery-commodity__time">
        {{ $store.state.deliveriesData.time }}
      </div>
      <div v-if="box.price" class="delivery-commodity__row flex delivery-commodity__delivery">
        {{ (box.price / 1.23).toFixed(2) + ' PLN netto, 23% VAT ' + box.price + ' PLN' }}
      </div>
      <div v-if="$store.state.deliveriesData.protected" class="delivery-commodity__row flex delivery-commodity__protected">
        {{ $store.state.deliveriesData.protected }}
      </div>
    </div>
  </div>
</template>
<style lang="stylus">
.content-commodity {
  .skeleton-line {
    height: 24px;
    margin 12px 0
    border-radius: 5px;
    &:nth-child(1) {
      width: 35%;
    }
    &:nth-child(2) {
      width: 25%;
    }
    &.sk_price {
      width: 40%;
      margin 24px 0;
    }
    &.sk_title {
      height 28px
      width: 50%;
      margin-bottom: 24px;
    }
  }
}
.delivery-commodity {
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size 18px;
  color: #3d3d3d;
  &__row {
    &::before {
      content: '';
      display: block;
      width: 28px;
      height: 28px;
      margin-right: 16px;
    }
  }
  &__time{
    &::before{
      background: url('../../assets/img/product/icon/clock.svg') 0 0 / 100% no-repeat;
    }
  }
  &__delivery{
    &::before{
      background: url('../../assets/img/product/icon/delivery.svg') 0 0 / 100% no-repeat;
    }
  }
  &__protected{
    &::before{
      background: url('../../assets/img/product/icon/protected.svg') 0 0 / 100% no-repeat;
    }
  }
  &__payment{
    &::before{
      background: url('../../assets/img/product/icon/wallet.svg') 0 0 / 100% no-repeat;
    }
  }
}
.actions-commodity__favorite.favorite{
  color: #FF0031
  &::before{
    background url('../../assets/img/main/icons/favorite-on-hover.png') 0 0 no-repeat
  }
}
  .content-commodity{
    display: flex;
    flex-direction: column
    row-gap: 20px
    &__title{
      font-weight: 700;
      font-size: 30px;
      line-height: 34px;
      color: #3D3D3D;
      margin-bottom 20px
      @media(max-width: 375px) {
        font-size 25px
        margin-bottom 20px
      }
    }
    &__wat {
      font-size: 18px;
      margin-bottom 30px;
      margin-top: -10px;
      span{
        font-weight 700;
      }
    }
    &__offer{
      display inline-block
      padding 10px 20px
      background: linear-gradient(270deg, rgba(254, 231, 255, 0.52) 3.12%, rgba(255, 168, 173, 0.52) 100%);
      color: #3D3D3D;
      border-radius: 4px
      margin-bottom 20px
    }
    &__info{
      margin -12px 0
    }
    &__info-row{
      font-size 14px
      line-height 16px
      color: #3D3D3D
      padding 6px 0
      span{
        font-weight 700
      }
    }
    &__price{
      margin 20px 0
      gap: 15px
      @media(max-width: 620px){
        flex-direction: column-reverse
        align-items start
      }
    }
    &__sale-price{

    }
    &__new-price{
      font-weight: 700;
      line-height: 57px;
      font-size 50px
      color: #3D3D3D
      gap: 15px
      span{
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display inline-block
        //width 80px
      }
      @media(max-width: 375px) {
        font-size 40px
        line-height 40px
        span{
          font-size 18px
        }
      }
    }
    &__first-price{
      font-weight: 700;
      font-size: 36px;
      line-height: 41px;
      color: #8B8B8B;
      gap: 15px
      padding 0 15px
      position relative
      &::after{
        content: ''
        position absolute
        width 205px
        height 2px
        background-color #FF0031;
        left 0
        transform: rotate(-2deg)
      }
      span{
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
      }
      @media(max-width: 375px) {
        font-size 30px
        line-height 20px
        span{
          font-size 16px
        }
      }
    }
    &__price-info{
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      padding 0 15px
      span{
        color: #FF0031;
      }
    }
  }
  .actions-commodity{
    margin -26px 0
    &__row{
      padding 25px 0
      display flex
      align-items center
      column-gap: 20px
      row-gap: 20px
      &:last-child{
        padding-top 0
      }
      @media(max-width: 620px){
        flex-wrap: wrap
      }
    }
    &__token{
      padding 5px 10px
      border 1px solid #FF0031
      border-radius: 3px
      color: #3D3D3D;
      font-weight 700;
      &::before{
        content: ''
        display inline-block
        width 30px
        height 30px
        background url('../../assets/img/product/icon/token.png') 0 0 no-repeat
        margin-right 10px
      }
      input{
        padding 2px 10px
        margin-left 5px
        height 100%
        max-width 155px
        background-color transparent
        font-size 18px
        transition: all 0.5s ease
        letter-spacing: 4px
        &:focus{
          box-shadow: 0.2px 0.2px 5px rgba(#000, 0.2)
        }
      }
    }
    &__status{
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #FF0031;
      column-gap: 10px
      span{
        font-weight 700
      }
      &::before{
        content ''
        display inline-block
        width 26px
        height 26px
      }
    }
    &__status.yes{
      color: #FF0031;
      &::before{
        background url('../../assets/img/product/icon/true.png') 0 0 no-repeat
      }
    }
    &__status.no{
      color: #000;
      &::before{
        background url('../../assets/img/product/icon/false.png') 0 0 no-repeat
      }
    }
    &__buy{
      background-color #fff
      border 1px solid #FF0031
      span{
        color #FF0031
      }
    }
    &__favorite{
      color: #3D3D3D;
      column-gap: 15px
      font-size 18px
      &::before{
        content: ''
        display inline-block
        width 28px
        height 28px
        background url('../../assets/img/main/icons/main-favorite.png') 0 0 no-repeat
      }
    }
    &__cart {
      background-color: rgb(255, 90, 0);
      &:hover {
        background-color: #FF0031;
      }
    }
    @media(min-width: 769px) {
      &__buy {
        &:hover{
          background-color #FF0031
          span{
            color #fff
          }
        }
      }
      &__favorite{
        &:hover{
          color: #FF0031
          &::before{
            background url('../../assets/img/main/icons/favorite-on-hover.png') 0 0 no-repeat
          }
        }
      }
    }
    @media(max-width: 620px){
      &__buy,
      &__cart{
        width 100%
      }
    }
  }
  .popup{
    .info-product__block{
      padding 0;
      border: none;
      max-width: 260px
      padding 0
      right 0
      @media(max-width: 1120px){
        max-width: none
        display flex
        .content-commodity__actions{
          margin 0
          margin-left 25px
        }
      }
      @media(max-width: 481px){
        flex-direction column
        align-items center
        .content-commodity__price{
          margin-top 0
        }
        .content-commodity__actions{
          margin 0
          .actions-commodity__row{
            padding 0
          }
        }
      }
    }
    .content-commodity__title,
    .content-commodity__wat,
    .delivery-commodity,
    .content-commodity__info,
    .content-commodity__offer,
    .content-commodity__price-info,
    .actions-commodity__status,
    .actions-commodity__buy,{
      display none
    }
    .actions-commodity__row{
      &:first-child,
      &:last-child{
        display none
      }
    }
    .actions-commodity__cart{
      width 200px
      min-width 0 !important
      bottom 55px
      @media(max-width: 1120px){
        bottom 35px
        left 50px
      }
    }
    .content-commodity__price{
      flex-direction: column-reverse
      width 200px
      bottom 100px
      @media(max-width: 1669px){
        .content-commodity__sale-price{
          display none
        }
      }
    }
    .actions-commodity__cart,
    .content-commodity__price{
      @media(min-width: 1121px){
        position absolute
        right 50px
      }
    }
  }
</style>
<script>
  export default {
    props: {
      productItem: {
        type: Object,
        required: true,
      }
    },
    data () {
      return {
        amountInput: 1,
      }
    },
    computed: {
      getWat() {
        if (this.productItem.discount) {
          return (this.productItem.price*(100-this.productItem.discount)/100) / 1.23;
        }
        return this.productItem.price / 1.23;
      },
      box() {
        if (this.productItem.id && this.$store.state.deliveriesData.boxes[Number(this.productItem.box_id)].methodPayment) {
          const item = this.$store.state.deliveriesData.boxes.find(el =>  el.id === Number(this.productItem.box_id))
          return item;
        }
        return false;
      }
    },
    methods: {
      increment () {
        this.amountInput++
      },
      decrement () {
        this.amountInput--
      },
      isCorrectValue(value) {
        const number = +value;
        const condition = (number instanceof Number||typeof number === 'number') && !isNaN(number);
        if (condition) {
          if (number > this.productItem.quantity) {
            return false;
          }
          if (number <= 0) {
            return false;
          }
          return true;
        }
        return false;
      },
      addToCart (product) {
        const items = this.$store.state.cartList
        const item = items.find(item => item.id === product.id)
        if(item){
          item.amount = this.amountInput
        } else {
          product.amount = this.amountInput;
          items.push(product);
        }
        localStorage.setItem('cartItems', JSON.stringify(items));
      },
      showAlert(product) {
        if(this.amountInput <= product.quantity) {
          const block = document.querySelector('.access-alert__container');
          block.classList.add('show-access-alert');
          setTimeout(() => block.classList.remove('show-access-alert'), 1000);
        }
      },
      openAlertPopup () {
        this.$emit('openAlertPopup', this.amountInput)
      },
      changeFavoriteList() {
        this.$emit('changeFavoriteList')
      },
      checkIsFavorite(product) {
        if (this.$store.state.favoriteItems.find(item => item.id === product.id)) {
          product.isFavorite = true
          return true
        } else {
          product.isFavorite = false
          return false
        }
      },
      getQuantity () {
        const item = this.$store.state.cartList.find(item => item.id === this.productItem.id);
        if (!item) {
          return 1;
        }
        return item.amount;
      },
    },
    mounted() {
      setTimeout(() => {
        this.amountInput = this.getQuantity();
      }, 1000);
    },
  }
</script>
