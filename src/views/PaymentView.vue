<template>
  <div class="payment">
    <layout-default>
      <main class="page">
        <div class="page__payment payment-page">
          <div class="payment-page__container container row">
            <aside class="payment-page__sidebar sidebar"></aside>
            <div class="payment-page__content content">
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
  },
  created () {
  },
  data() {
    return {
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
        title: "Do you really want go back??",
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
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        })
      } else if (this.$store.state.cartList.length > 0) {
        for(let item of this.$store.state.cartList) {
          result.push(item.price * item.quantity);
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
  .payment{
    color: #3D3D3D;
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
      margin-bottom 150px
      max-width: none !important
      flex 100% !important;
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
    &:hover{
      box-shadow: 1px 1px 30px rgba(#FF0031,0.3)
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
</style>
