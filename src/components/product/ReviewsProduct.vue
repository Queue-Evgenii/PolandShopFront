<template>
  <div  v-if="ReviewsProductItems.length !== 0" class="info-product__reviews reviews-product info-product__block">
    <div class="info-product__title">Opinie klientów:</div>
    <ul class="reviews-product__items">
      <li class="reviews-product__item" v-for="item in ReviewsProductItems" :key="item.id">
        <div class="reviews-product__row">
          <span v-if="item.avatar" class="reviews-product__avatar"><img :src="item.avatar" alt=""></span>
          <span class="reviews-product__username">{{item.name}}</span>
          <span class="reviews-product__rating rating-product">
            <span class="rating-product__body">
              <span class="rating-product__active" v-bind:style="{width: 10*item.grade+'%'}"></span>
            </span>
          </span>
        </div>
        <p class="reviews-product__text">{{item.message}}</p>
      </li>
    </ul>
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
    &__row{
      display flex
      align-items center
      flex-wrap: wrap
      gap: 15px
      margin-bottom 15px
    }
    &__avatar{
      display inline-block
      width 25px
      height 25px
      position relative
      img{
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        object-fit cover
      }
    }
    &__username{
      display inline-block
      font-weight: 700;
      font-size: 24px;
      line-height: 28px
      color: #3D3D3D;
    }
    &__text{
      color: #3D3D3D;
      font-size 18px
      line-height 114%
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