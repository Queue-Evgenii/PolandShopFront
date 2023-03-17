<template>
  <nav class="navigation flex">
    <a v-for="item in mainMenu" :key="item.id" :href="item.to">{{ item.label }}</a>
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
