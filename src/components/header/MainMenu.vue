<template>
  <nav class="navigation flex">
    <router-link v-for="item in mainMenu" :key="item.id" :to="{name: item.to}">{{ item.label }}</router-link>
  </nav>
</template>
<script>
export default {
  props: {
    mainMenu: {
      type: Array,
    }
  },
}
</script>
