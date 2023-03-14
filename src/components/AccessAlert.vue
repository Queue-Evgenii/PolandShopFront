<template> 
  <div class="access-alert__container">
    <div class="access-alert__text flex"><span>Dodano do koszyka</span></div>
  </div>
</template>
<style lang="stylus">
  .access-alert__container {
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    width 100%
    height 100%
    background-color rgba(0, 0, 0, 0)
    z-index -1
    overflow hidden
    display flex
    justify-content center
    transition: all 0.5s ease 0s
    &.show-access-alert{
      background-color rgba(0, 0, 0, 0.4)
      z-index 5
      .access-alert__text {
        bottom 20px !important
      }
    }
  }
  .access-alert__text {
    transition: all 0.5s ease 0s
    position absolute
    justify-content center
    border-radius: 7px;
    background-color #fff
    border 1px solid #000
    width 220px
    height 45px
    bottom -150px
    span{
      font-size: 16px;
      line-height: 18px;
      color: #000;
      display block
    }
  }
</style>