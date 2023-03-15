<template>
  <ul class="preview-product__body">
    <li class="preview-product__item" v-for="item in Items" :key="item.id">
      <div class="preview-product__image"><img :src="item.preview" alt=""></div>
      <div class="preview-product__info">
        <div class="preview-product__label">{{ item.name }}</div>
        <div class="preview-product__price">{{ item.price }}<span>PLN</span></div>
        <div class="preview-product__quantity"><span>Ilość:</span>{{ item.quantity }}</div>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    Items: {
      type: Array,
      required: []
    },
  }
}
</script>
<style lang="stylus">
.preview-product {
  &__body {
    display flex
    flex-direction column
    row-gap: 40px
    padding 40px 0
    border-bottom 1px solid rgba(#8B8B8B, 0.3)
  }
  &__item {
    display grid
    grid-template-columns: 100px 1fr
    gap: 15px
  }
  &__image {
    width 100px
    height 100px
    position relative
    border-radius 10px;
    background #fff
    img{
      position absolute
      width 100%
      height 100%
      padding 5px 5px
      border-radius 10px;
      object-fit: cover
    }
  }
  &__info {
    display flex
    flex-direction: column
    justify-content space-between
    gap: 10px
  }
  &__label{
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #3D3D3D;
  }
  &__price {
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    span{
      font-size 16px
      margin-left 5px
    }
  }
  &__quantity {
    font-size: 12px;
    line-height: 14px;
    color: #000000;
    span{
      margin-right 5px
    }
  }
}
</style>
