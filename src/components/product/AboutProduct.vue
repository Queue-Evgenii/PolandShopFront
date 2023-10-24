<template>
  <div class="info-product__about about-product info-product__block">
    <h3 class="about-product__title  info-product__title">Opis</h3>
    <p v-html="aboutText" class="about-product__text">
    </p>
  </div>
</template>
<script>
  export default{
    props: {
      aboutText: {
        type: String,
        required: true,
      }
    }
  }
</script>
<style lang="stylus">
.about-product {
  &__text {
    font-size: 20px;
    line-height: 25px;
    color: #000000;
    p {
      &:not(:last-child) {
        margin-bottom 25px
      }
    }
  }
}
</style>