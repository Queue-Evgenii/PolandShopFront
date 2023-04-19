<template>
  <div class="payment">
    <layout-default>
      <main class="page">
        <div class="page__payment payment-page">
          <div class="payment-page__container container">
            <div class="login-form">
              <login-form />
            </div>
            <div class="payment-hidden row">
              <div :class="isLogged ? 'logged' : ''" class="payment-page__content content">
                <div class="payment-page__title">Zapłata za towary</div>
                <div class="payment-page__columns">
                  <payment-form @goBackPopup="goBackPopup"/>
                  <div class="payment-page__preview preview-payment">
                    <div class="preview-payment__content">
                      <div class="preview-payment__row flex">
                        <div class="preview-payment__title">Podsumowanie zamowienia</div>
                        <div class="preview-payment__qtty">
                          <img src="@/assets/img/header/icon/cart.png" alt="">
                          {{ this.previewProducts.length }}
                          <span>produkty</span>
                        </div>
                      </div>
                      <preview-product :Items="this.previewProducts" />
                      <div class="preview-payment__delivery-price flex">
                        <span class="preview-payment__label">Koszt przesyłki</span>
                        <span>{{ this.deliveryPrice }} PLN</span>
                      </div>
                      <div class="preview-payment__total-price flex">
                        <span class="preview-payment__label">Całkowity</span>
                        <span>{{ +cartTotalCost + +this.deliveryPrice }} PLN</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <page-ads />
      </main>
    </layout-default>
    <page-popup
     v-if="openPopup"
     @goBackPopup="goBackPopup"
     @closePopup="closePopup"
     :popupOutput="this.onPayment"
    >
      <payment-alert @goBack="goBack" :popupOutput="this.onPayment" @closePopup="closePopup"/>
    </page-popup>
  </div>
</template>
<script>
import PagePopup from '@/components/PagePopup'

import LayoutDefault from '@/layouts/LayoutDefault'
import PaymentForm from '@/components/payment/PaymentForm'
import PreviewProduct from '@/components/PreviewProduct'
import PaymentAlert from '@/components/product/PaymentAlert'
import PageAds from '@/components/PageAds'
import LoginForm from '@/components/payment/LoginForm'
export default {
  name: 'CatalogView',
  layouts: 'default',
  components: {
    LayoutDefault,
    PaymentForm,
    PreviewProduct,
    PageAds,
    PaymentAlert,
    PagePopup,
    LoginForm,
  },
  created () {
  },
  data() {
    return {
      isLogged: false,
      previewProducts: [],
      deliveryPrice: "5",
      openPopup: false,
      isExistData: false,
      productAbout: {
        image: require('@/assets/img/product/product-img-1.png'),
        title: 'Profil aluminiowy uniwersalny bezuszczelkowy',
        offer: 'Bezpłatna dostawa z 500 Pln',
        categoryNum: 26,
        cod: '0723314791448',
        firstPrice: 95,
        price: 75,
        status: true,
        quantity: 1,
        sale: "-10",
      },
      onPayment: {
        name: "Do you really want go back??",
        nclass: "on-payment",
      },
    }
  },
  methods: {
    goBackPopup() {
      this.openPopup = true;
    },
    closePopup(){
      this.openPopup = false;
    },
    goBack() {
      this.$store.state.quickBuy = [];// this is a question
      this.openPopup = false;
    },
    productPreview () {
      if(this.isQuickBuy) {
        this.previewProducts = this.$store.state.quickBuy;
      } else if (!this.isQuickBuy) {
        this.previewProducts = this.$store.state.cartList;
      } else {
        this.previewProducts = [];
      }
    },
  },
  watch: {
    isQuickBuy () {
      setTimeout(() => {
        this.productPreview()
      }, 0)
    }
  },
  mounted() {
    this.productPreview()
  },
  computed: {
    isQuickBuy () {
      return this.$store.state.isQuickBuy
    },
    cartTotalCost() {
      let result = [];
      if(this.$store.state.quickBuy.length > 0){
        for(let item of this.$store.state.quickBuy) {
          result.push(item.price * item.amount);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        })
      } else if (this.$store.state.cartList.length > 0) {
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
    },
  },
}
</script>
<style lang="stylus">
.login-form{
  margin 0 auto
  padding 25px 0
  width fit-content
  button{
    min-width initial !important
  }
  &__actions{
    @media(max-width: 768px) {
      flex-wrap wrap !important
    }
  }
  &__without-log{
  }
}
  .payment{
    color: #3D3D3D;
  }
  .payment-hidden{
    overflow: hidden
  }
  .payment-page{
    &__title{
      font-size: 30px;
      line-height: 34px;
      text-align center
      padding 70px 0
    }
    &__columns{
      display flex
      justify-content space-around
    }
    &__content{
      max-width: none !important
      flex 100% !important;
      transition all 0.9s ease 0.1s
      transform: translate(0, -100%)
      height 0
      visibility collapse
      &.logged{
        transform: translate(0, 0)
        height fit-content
        visibility visible
      }
    }
    &__sidebar{
      flex: 0 !important;
      padding 0 !important;
      width 0 !important;
    }
  }
  .payment-page__preview {
}
.preview-payment {
  position relative
  @media(max-width: 992px){
    display none
  }
  &__content {
    position sticky;
    top: 10px
    background: linear-gradient(179.99deg, rgba(217, 217, 217, 0) -53.9%, rgba(255, 0, 0, 0.2) 280.91%);
    padding 25px 15px
    max-width: 375px
    transition: all 0.5s ease 0s
    @media(min-width: 769px) {
      &:hover{
        box-shadow: 1px 1px 30px rgba(#FF0031,0.3)
      }
    }
  }
  &__row {
    justify-content space-between
    gap 10px
    font-weight: 700;
  }
  &__title {
  }
  &__qtty {
  }
  &__delivery-price {
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    justify-content space-between
    gap: 10px
    padding 15px 0
  }
  &__label {
  }
  &__total-price {
    font-weight: 700;
    justify-content space-between
    gap: 10px
    padding 17px 0
    border-top 1px solid rgba(#8B8B8B, 0.3)
  }
}
.form-payment {
  &__sections{
    display flex
    @media(max-width: 768px){
      flex-direction column-reverse
    }
  }
  &__section-btn {
    justify-content left
    gap: 30px
    @media(max-width: 475px){
      flex-wrap: wrap
    }
  }
  &__title {
  }
  &__block {
    padding 40px 0 40px 70px
    display flex
    flex-direction: column
    gap: 35px
    @media(max-width: 768px){
      padding 40px 0
    }
  }
  &__row {
    display flex
    flex-direction: column
    gap: 15px
  }
  &__label{
  }
  &__input {
    background-color transparent
    padding 10px 15px
    border: 1px solid #8B8B8B;
    border-radius: 5px
    max-width:300px
    input{
      background-color transparent
    }
  }
  &__button {
    width 162px
    padding 15px
    font-size: 14px;
    line-height: 16px;
    color: #FF0031;
    border 1px solid #FF0031;
    border-radius 5px
    transition background 0.3s ease 0s;
  }
  &__cancel {
    background transparent
    color: #ff0031;
    border: 1px solid #ff0031;
    width 190px
    min-width: initial;
    @media(max-width: 992px){
      width 100%
    }
  }
  @media(min-width: 769px){
    &__button,
    &__cancel{
      &:hover{
        background-color #ff0031;
        color: #fff;
      }
    }
  }
  &__submit{
    color: #fff
    font-weight 700
    font-size 14px
    line-height 16px
    width 215px
    @media(max-width: 992px){
      width 100%
    }
  }
  &__radiobox {
    display none
  }
  &__label-radio {
    position relative
    padding-left 30px
    p{
        margin-bottom 10px
    }
    span{
      display inline-block
      margin-top 5px
      color: #FF0031;
      font-weight: 700;
    }
    &::before{
      content: ''
      position absolute
      left 0
      top 3px
      width 16px
      height 16px
      border: 1px solid #272727;
      border-radius: 50%
    }
    &::after{
      content: ''
      position absolute
      left 4px
      top 7px
      width 7.5px
      height 7.5px
      border-radius: 50%
      background-color #ff5070
      transform: scale(0)
      transition: all 0.3s ease 0s
    }
  }
}
.input-width{
  width 300px
  @media(max-width: 420px) {
    width initial
  }
}
.radio-block {
  input[type=checkbox]:checked + label {
    &::after{
      transform: scale(1)
    }
  }
}
.f1-1{
  flex: 1 1 100%
}
.n-row{
  flex-direction: row
  flex-wrap: wrap
}
.w-110{
  flex: 0 0 122px
  max-width: 122px
}
</style>
