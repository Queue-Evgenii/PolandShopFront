<template>
  <div class="info-product__gallery gallery-product info-product__block">
    <div class="info-product__title">Product photo:</div>
    <div class="gallery-product__items">
      <div class="gallery-product__item" v-for="item in commoditySlides" :key="item.id">
        <div class="gallery-product__image">
          <img :src="item.image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
    commoditySlides :{
      type: Array,
      required: true,
    }
  },
  }
</script>
<style lang="stylus">
  .gallery-product {
    &__items {
      display: grid
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
      gap: 25px
      @media(max-width: 420px) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
      }
    }
    &__item {
      border: 1px solid rgba(#000, 0.3);
      border-radius: 10px
    }
    &__image {
      position relative
      height: 300px
      img {
        position: absolute
        object-fit: contain
        width: 100%
        height: 100%
        padding 15px
      }
      @media(max-width: 375px) {
        height: 250px
      }
    }
  }
</style>