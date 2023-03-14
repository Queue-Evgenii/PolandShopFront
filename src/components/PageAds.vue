<template>
  <div class="page__ads ads">
    <div class="ads__container container">
      <div class="ads__row flex">
        <div class="ads__item ads__content">
          <div class="ads__title">Promocje - 30%</div>
          <p class="ads__text">Wpisz swój adres e-mail, jeśli chcesz otrzymywać najnowsze informacje o promocjach.</p>
        </div>
        <div class="ads__item ads__images">
          <div class="ads__images flex">
            <div class="ads__image"><img src="@/assets/img/ads-image.png" alt=""></div>
            <div class="ads__image"><img src="@/assets/img/ads-image.png" alt=""></div>
            <div class="ads__image"><img src="@/assets/img/ads-image.png" alt=""></div>
          </div>
        </div>
        <div class="ads__item ads__action">
          <button type="button" class="ads__button button"><span>Wybierz ze zniżką - 30%</span></button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="stylus">
  .ads {
    padding 90px 0 100px 0
    &__row {
      background: linear-gradient(305.72deg, #EBE3F5 15.89%, #FFD9C4 100%);
      padding 40px
      margin 0 -20px
      row-gap: 25px
      @media(max-width: 1440px){
        flex-wrap wrap
      }
    }
    &__item {
      flex: 1 1 25%
      padding 0 20px
      display flex
      justify-content center
      @media(max-width: 1220px){
        flex-basis: 50%
      }
      @media(max-width: 700px){
        flex-basis: 100%
      }
    }
    &__content{
        flex-direction column
        gap: 10px
        @media(max-width: 700px){
        text-align center
        }
      }
    &__images{
        flex 1 1 auto
      }
    @media(max-width: 1440px){
      &__action{
        flex: 1 1 100%
      }
    }
    &__title {
      font-weight: 700;
      font-size: 40px;
      line-height: 46px;
      color: #FF0031;
    }
    &__text {
      font-size: 20px;
      line-height: 23px;
      color: #3D3D3D;
    }
    &__images {
      margin 0 -20px
      justify-content space-between
      @media(max-width: 992px){
        justify-content end
      }
      @media(max-width: 700px){
        justify-content center
      }
    }
    &__image {
      width 240px
      padding 0 20px
      img{
        width 100%
        height 100%
      }
      @media(max-width: 1220px) {
        &:last-child{
          display none
        }
      }
      @media(max-width: 992px){
        &:first-child{
          display none
        }
      }
    }
    &__button {
      span{
        font-size: 16px;
        line-height: 18px;
      }
      &:hover{
        box-shadow 2px 2px 2px #FF0031
      }
      @media(max-width:1440px){
        span{
          font-size 24px
        }
      }
    }
  }
</style>
