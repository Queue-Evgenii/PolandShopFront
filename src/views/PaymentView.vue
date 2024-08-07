<template>
  <div :class="( isLoading ? 'ov-hidden' : '') + ' payment'">
    <layout-default>
      <main class="page">
        <div class="page__payment payment-page">
          <div v-if="!isConfirm" class="payment-page__container container">
            <div v-if="!$store.state.isAuthorized" class="login-form">
              <login-form @openForm="openForm" />
            </div>
            <div class="payment-hidden row">
              <div
                :class="isOpen || $store.state.isAuthorized ? 'logged' : ''"
                class="payment-page__content content"
                ref="mainForm"
              >
                <div class="payment-page__title">{{ formTitle }}</div>
                <div v-if="isOpen || $store.state.isAuthorized" class="payment-page__columns">
                  <payment-form
                    @goBackPopup="goBackPopup"
                    @registration="registration"
                    @submitForm="submitForm"
                    :errMsg="errMsg"
                  />
                  <div v-if="$store.state.cartList.length > 0" class="payment-page__preview preview-payment">
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
                      <div class="preview-payment__total-price flex">
                        <span class="preview-payment__label">Całkowity</span>
                        <span>{{ cartTotalCost }} PLN</span>
                      </div>
                    </div>
                    <div class="sticky-relative"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="confirmation__container container">
            <preview-product :Items="previewProducts" />
            <div class="preview-payment__total-price flex">
              <span class="preview-payment__label">Przesyłka <span>brutto</span></span>
              <span>{{ confirmData.deliver_price }} PLN</span>
            </div>
            <div class="preview-payment__total-price flex">
              <span class="preview-payment__label">Razem do zapłaty <span>brutto</span></span>
              <span>{{ confirmData.price }} PLN</span>
            </div>
            <div class="confirm-button">
              <template v-if="isLoading">
                <div class="loader">
                  <img style="max-width: 400px;" src="./../assets/img/main/icons/loader-new.gif" alt="">
                </div>
              </template>
              <button v-else @click="confirmPayment()" class="form-payment__submit button" type="button">Confirm</button>
            </div>
          </div>
        </div>
        <page-ads />
      </main>
    </layout-default>
    <page-popup v-if="openPopup" @goBackPopup="goBackPopup" @closePopup="closePopup" :popupOutput="this.onPayment">
      <payment-alert @goBack="goBack" :popupOutput="this.onPayment" @closePopup="closePopup" />
    </page-popup>
  </div>
</template>
<script>
import { PaymentFormStatus } from '../models/PaymentFormStatus'

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
  data() {
    return {
      isOpen: false,
      previewProducts: [],
      deliveryPrice: "5",
      openPopup: false,
      isExistData: false,
      isLoading: false,
      errMsg: "",
      onPayment: {
        name: "Do you really want go back??",
        nclass: "on-payment",
      },
      isConfirm: false,
      confirmData: {},
    }
  },
  methods: {
    confirmPayment() {
      this.isLoading = true;
      this.$store.dispatch('submitCheckout', this.confirmData.id)
        .then(res => {
          window.location.replace(`https://sandbox-go.przelewy24.pl/trnRequest/${res.data.token}`);
        });
    },
    submitForm(value) {
      const items = this.previewProducts.map(item => {
        return {
          product_id: item.id,
          count: item.amount,
        }
      });
      const data = { ...value, items };
      this.$store.dispatch('submitDelivery', data)
        .then(res => {
          this.confirmData = res.data.data;
          this.isConfirm = true;
          window.scrollTo(0, 0);
        });
    },
    registration(data) {
      this.$store.dispatch("registration", data)
        .then(res => {
          localStorage.setItem("access_token", JSON.stringify(res.data.access_token))
          localStorage.setItem("user_id", JSON.stringify(res.data.id))
          this.$store.state.isAuthorized = true;
          this.$store.state.paymentFormStatus = PaymentFormStatus.None;
          
          if (this.$store.state.cartList.length > 0) {
            this.openForm();
            return;
          }
          this.errMsg = "";
          this.$router.replace({name: "home"});
        })
        .catch(err => {
          console.log(err)
          if (err.response.data.errors.email !== undefined) {
            this.errMsg = err.response.data.errors.email.join(", ");
          }
        });
    },
    openForm() {
      this.errMsg = "";
      this.isOpen = true;
      if (!this.$store.state.isAuthorized) {
        this.$refs.mainForm.scrollIntoView({ behavior: "smooth" });
      }
    },
    goBackPopup() {
      this.openPopup = true;
    },
    closePopup() {
      this.openPopup = false;
    },
    goBack() {
      this.$store.state.quickBuy = [];
      this.openPopup = false;
    },
    productPreview() {
      if (this.isQuickBuy) {
        this.previewProducts = this.$store.state.quickBuy;
      } else if (!this.isQuickBuy) {
        this.previewProducts = this.$store.state.cartList;
      } else {
        this.previewProducts = [];
      }
    },
  },
  watch: {
    isQuickBuy() {
      setTimeout(() => {
        this.productPreview()
      }, 0)
    }
  },
  mounted() {
    this.productPreview();
  },
  computed: {
    formTitle() {
      return this.$store.state.paymentFormStatus === PaymentFormStatus.Registration ? "Tworzenie konta" : "Zapłata za towary";
    },
    isQuickBuy() {
      return this.$store.state.isQuickBuy
    },
    cartTotalCost() {
      let result = [];
      if (this.$store.state.quickBuy.length > 0) {
        for (let item of this.$store.state.quickBuy) {
          result.push(item.price * item.amount);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        })
      } else if (this.$store.state.cartList.length > 0) {
        for (let item of this.$store.state.cartList) {
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
.confirmation__container {
  max-width: 992px;
  .confirm-button{
    display flex
    justify-content center
    align-items center
    margin-top 24px;
  }
  .preview-product__item {
    grid-template-columns: auto 1fr;
  }
  .preview-product__image {
    width 150px
    img {
      padding 0
    }
  }
  .preview-product__info {
    flex-direction: row;
    align-items center
    flex-wrap: wrap
    .preview-product__label {
      flex: 1 1 auto;
    }
    .preview-product__price,
    .preview-product__quantity  {
      flex: 0 1 150px;
    }
  }
  .preview-product__label,
  .preview-product__price,
  .preview-product__quantity  {
    line-height 1
    font-size 24px
  }
  .preview-payment__total-price {
    line-height 1
    font-size 28px
  }
  @media(min-width: 679px) {
    .preview-product__label,
    .preview-product__price,
    .preview-product__quantity,
    .preview-payment__total-price  {
      font-size 32px
    }
  }
}
.login-form{
  margin 0 auto
  padding 25px 0
  width fit-content
  &__verify{
    border-radius: 8px;
    background-color: rgba(#ff0031, 0.7);
    min-width: 240px;
    min-height: 50px;
    border: 1px solid transparent;
    justify-content center
    span{
      display: inline-block;
      padding: 16px 5px;
      font-weight: 700;
      color: #fff;
    }
  }
  @media(max-width: 768px) {
    &__actions{
      flex-wrap wrap !important
    }
    &__verify{
      width 100%
    }
  }
}
  .payment{
    color: #3D3D3D;
  }
  .payment-hidden{
    // overflow: hidden
  }
  .payment-page{
    &__title{
      font-size: 30px;
      line-height: 34px;
      text-align center
      padding 70px 0
    }
    &__columns{
      display flex;
      justify-content space-between;
      column-gap: 32px;
      @media(min-width: 1201px) {
        padding: 0 10vw;
      }
      @media(max-width: 992px){
        justify-content center
      }
      .form-payment__block {
        flex-wrap: wrap;
        flex-direction: row;
        @media(max-width: 768px){
          flex-wrap: nowrap;
          flex-direction: column;
        }
      }
    }
    &__content{
      max-width: none !important
      flex 100% !important;
      transition all 0.3s ease 0.1s
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
  flex: 0 0 370px;
  @media(max-width: 992px){
    display none
  }
  &__content {
    position: -webkit-sticky;
    position sticky;
    top: 20px;
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
    span {
      font-size: 28px
    }
  }
  &__total-price {
    font-weight: 700;
    justify-content space-between
    gap: 10px
    padding 24px 0
    border-top 1px solid rgba(#8B8B8B, 0.3)
  }
}
.form-payment {
  &__section{
    overflow: hidden;
  }
  &__section-btn {
    justify-content left
    gap: 30px
    @media(max-width: 550px){
      flex-wrap: wrap
    }
  }
  &__text,
  &__slot-text {
    color: #8b8b8b
    max-width: 500px
  }
  &__slot-text{
    margin-top -10px
  }
  &__block {
    padding 40px 0 40px 25px
    display flex
    row-gap: 32px;
    column-gap: 64px;
    flex-direction: column;
    @media(max-width: 768px){
      padding 40px 0
      flex-wrap: nowrap;
      flex-direction: column;
    }
  }
  &__row {
    display flex
    flex-direction: column
    gap: 15px
  }
  &__inline{
    display flex
    align-items center
    gap: 30px
  }
  &__label{
  }
  &__input {
    background-color transparent
    padding 10px 15px
    border: 1px solid #8B8B8B;
    border-radius: 5px
    max-width:300px
    color: #8B8B8B;
    input{
      background-color transparent
    }
    &:focus{
      box-shadow: 3px 3px 3px #8b8b8b;
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
    text-align center
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
    cursor: pointer
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
      top 1px
      width 16px
      height 16px
      border: 1px solid #272727;
      border-radius: 50%
    }
    &::after{
      content: ''
      position absolute
      left 4px
      top 5px
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
  width: 300px
  @media(max-width: 500px) {
    width initial
  }
}
.radio-block {
  input[type=radio]:checked + label {
    &::after{
      transform: scale(1)
    }
  }
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
  gap: 10px
  .w-110{
    height 48px
  }
}
.w-110{
  flex: 0 0 122px
  max-width: 122px
}
.fz-24{
  font-size 24px !important;
}
.row-gap{
  display flex
  flex-direction: column;
  row-gap: 5px;
}
.invalid-data-mark{
  color: #FF0031;
  font-size 14px
  margin-top 5px
}
.valid-data-input{
  border: 1px solid #098b14;
  color: #098b14;
}
.invalid-data-input{
  border: 1px solid #FF0031;
  color: #FF0031;
}
.invalid-data-box{
  margin-top -10px
}
</style>
