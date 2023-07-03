<template>
  <ul class="bottom-header__content flex">
    <li v-for="item in shopMenu" :key="item.id">
      <router-link class="hover-underline" :to="{name: item.url}">{{ item.label }}</router-link>
    </li>
    <li v-for="item in categoryItems" :key="item.id">
      <router-link class="hover-underline" :to="{name: 'catalogList', params: {id: item.id}}">{{ item.name }}</router-link>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    shopMenu: {
      type: Array,
    }
  },
  methods: {
    fetchCategory() {
      this.$store.dispatch('getCategories')
        .then(res => {
          this.categoryItems = res.data;
          this.categoryItems = res.data.slice(0, 3);
        })
    }
  },
  mounted() {
    this.fetchCategory()
  },
  data() {
    return {
      categoryItems: []
    }
  }
}
</script>
