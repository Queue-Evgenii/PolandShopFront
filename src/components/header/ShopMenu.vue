<template>
  <ul v-if="categoryItems.length > 0" class="bottom-header__content flex">
    <li v-for="item in shopMenu" :key="item.id">
      <router-link class="hover-underline" :to="{name: item.url}">{{ item.label }}</router-link>
    </li>
    <li v-for="item in categoryItems" :key="item.id">
      <router-link class="hover-underline" :to="{name: 'catalogList', params: {id: item.id}}">{{ item.name }}</router-link>
    </li>
  </ul>
  <ul v-else class="bottom-header__content flex">
    <li class="skeleton-item"></li>
    <li class="skeleton-item"></li>
    <li class="skeleton-item"></li>
    <li class="skeleton-item"></li>
  </ul>
</template>
<script>
export default {
  props: {
    shopMenu: {
      type: Array,
    }
  },
  computed: {
    categoryItems() {
      return this.$store.state.categories.slice(0, 3);
    },
  },
}
</script>
<style lang="stylus">
.bottom-header__content {
  .skeleton-item {
    border-radius: 5px
    margin 10px 0
    height: 18px;
    width: 100px;
    background: #fbc6d9;
    background-image: linear-gradient(135deg, #fbc6d9 0%, #d4c6db 20%, #fbc6d9 40%, #fbc6d9 100%);
  }
}
  
</style>
