<template>
  <div class="alert-block">
    <!-- <div class="alert-block__text">{{popupOutput.title}}</div>  -->
    <div class="alert-block__buttons" :class="popupOutput.nclass === 'before-payment' ? 'before-payment' : ''">
      <router-link :to="{name: 'payment'}" class="alert-block__buy button alert-block__button"><span  @click="quickBuy();closePopup()">Buy onle that</span></router-link>
      <router-link :to="{name: 'cart'}" class="alert-block__payment button alert-block__button"><span @click="closePopup()">Go to cart</span></router-link>
    </div>
    <div class="alert-block__buttons" :class="popupOutput.nclass === 'on-payment' ? 'on-payment' : ''">
      <router-link :to="{name: 'cart'}" @click="goBack();closePopup()" class="alert-block__buy button alert-block__button"><span>Go to cart page</span></router-link>
      <button class="alert-block__payment button alert-block__button" @click="closePopup()"><span>Back to payment</span></button>
    </div>
  </div>
</template>
<style lang="stylus">
    .before-payment, .on-payment{
      display flex !important
    }
  .alert-block {
    max-width: 620px
    &__text {
      font-weight: 700;
      font-size: 30px;
      line-height: 34px;
      color: #3d3d3d;
      margin-bottom: 30px;
    }
    &__buttons {
      display none
      gap: 30px
      justify-content center
      flex-wrap: wrap
    }
    &__button {
      flex: 0 1 240px
    }
    &__buy {
      display inline-block
      text-align center
      background-color #fff
      border 1px solid #FF0031
      span{
        display inline-block
        color #FF0031
        width 100%
        height 100%
      }
      @media(min-width: 769px) {
        &:hover{
          background-color #FF0031
          span{
            color #fff
          }
        }
      }
    }
    &__payment {
      border 1px solid transparent
      display inline-block
      text-align center
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
    }
  }
</style>
<script>
export default {
  props: {
    popupOutput: {
      type: Object,
      required: true,
    }
  },
  methods: {
    goBack(event) {
      this.$emit('goBack', event);
    },
    quickBuy() {
      this.$emit('quickBuy')
    },
    closePopup() {
      this.$emit('closePopup');
      document.body.style.overflowY = "initial"
    }
  }
}
</script>