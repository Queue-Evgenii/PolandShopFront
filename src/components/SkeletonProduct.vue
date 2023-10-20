<template>
  <div class="products__items skeleton">
    <div v-for="(item, index) in 4" :key="index" class="skeleton-container">
      <div class="skeleton-item skeleton-image"></div>
      <div class="skeleton-item skeleton-line"></div>
      <div class="skeleton-item skeleton-line"></div>
      <div class="skeleton-item skeleton-line"></div>
    </div>
  </div>
</template>
<style lang="stylus">
.products__items {
  .skeleton-container {
    padding: 0 10px;
  }
  .skeleton-image {
    height: 250px;
    margin-bottom: 20px;
  }
  .skeleton-line {
    height 28px
    margin-bottom: 12px;
    &:nth-child(2) {
      width: 85%;
    }
    &:nth-child(3) {
      width: 50%;
    }
    &:nth-child(4) {
      width: 65%;
    }
  }
}
</style>