<template>
  <div class="info-product__reviews reviews-product info-product__block">
    <div class="info-product__title">Opinie klientów:</div>
    <ul v-if="ReviewsProductItems.length !== 0" class="reviews-product__items">
      <li class="reviews-product__item" v-for="item in ReviewsProductItems" :key="item.id">
        <span class="reviews-product__username">{{item.username}}</span>
        <span class="reviews-product__rating rating-product">
          <div class="rating-product__body">
            <div class="rating-product__active" v-bind:style="{width: 20*item.grade+'%'}"></div>
          </div>
        </span>
        <p class="reviews-product__text">{{item.text}}</p>
      </li>
    </ul>
    <div v-else class="reviews-product__no-reviews">This product not contain feedbacks ;(</div>
  </div>
</template>
<script>
  export default {
    props: {
      ReviewsProductItems: {
        type: Array,
        required: true,
      }
    }
  }
</script>
<style lang="stylus">
  .reviews-product{
    &__items{
      overflow-y: scroll
      max-height 475px
      padding-right 15px
    }
    &__item{
      padding 55px 0
      &:first-child{
        padding-top 0
      }
      &:not(:last-child){
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      }
    }
    &__username{
      display inline-block
      font-weight: 700;
      font-size: 24px;
      line-height: 28px
      color: #3D3D3D;
      margin-bottom 15px
    }
    &__text{
      color: #3D3D3D;
    }
    &__no-reviews{
      font-size: 20px;
      line-height: 25px;
      color: #000;
    }
  }
  .rating-product{
  margin-bottom 1px
  margin-left 5px
  font-size: 28px;
  line-height: 0;
  display: inline-flex;
  align-items: flex-end;
  letter-spacing: 1px;
  line-height: 0.75;
  &__body{
    position: relative;
    height: 20px;
    width: 120px;
    &::before{
      content: '★★★★★';
      position: absolute;
      display: block;
      color: #8B8B8B;
      opacity: 0.6;
    }
  }
  &__active{
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
    &::before{
      content: '★★★★★';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      color:#000;
    }
  }
}
</style>