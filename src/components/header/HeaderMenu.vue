<template>
  <ul class="bottom-header__content flex">
    <li v-for="item in headerMenu" :key="item.id">
      <router-link class="hover-underline" :to="{name: item.url}">{{ item.label }}</router-link>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    headerMenu: {
      type: Array,
    }
  },
}
</script>
