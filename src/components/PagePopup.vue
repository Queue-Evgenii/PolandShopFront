<template>
  <div class="popup">
    <div class="popup__content">
      <div class="popup__header">
        <div class="popup__title">{{popupOutput.name}}</div>
        <div class="popup__close" @click="closePopup"><img src="@/assets/img/main/icons/close.png" alt=""></div>
      </div>
      <div class="popup__body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style lang="stylus">
  .popup{
    position fixed
    top 0
    right 0
    left 0
    bottom 0
    background-color rgba(0,0,0,0.5)
    z-index: 10
    padding 30px
    overflow-y scroll
    @media(max-width: 630px){
      padding 0
    }
    &__content{
      display flex
      flex-direction: column
      gap: 20px
      align-items center
      justify-content center
      max-width: max-content;
      margin 0 auto
      padding 40px
      background-color #fff
      position relative
    }
    &__header{
      display flex
      align-items center
      justify-content space-between
      width 100%
      border-bottom 1px solid rgba(0, 0, 0, 0.4);
      padding-bottom 35px
    }
    &__title{
      font-size 28px
      line-height 32px
      max-width: 500px
    }
    &__close{
      z-index 11
      @media(max-width: 630px){
        margin-bottom 30px
      }
      @media(max-width: 450px){
        margin-bottom 60px
      }
    }
    &__body{
      .slick-dots{
        display none !important
      }
    }
  }
</style>
<script>
  export default{
    name: 'PagePopup',
    props: {
      popupOutput: {
        type: Object,
      }
    },
    methods: {
      closePopup () {
        this.$emit('closePopup')
      }
    }
  }
</script>