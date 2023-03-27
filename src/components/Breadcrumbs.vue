<template>
  <div class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumbs__item">
        <router-link :to="crumb.route" class="breadcrumbs__link">{{ crumb.name }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return{
      breadcrumbs: [],
    }
  },
  created() {
    this.updateBreadcrumbs();
  },
  watch: {
    $route: function () {
      this.updateBreadcrumbs();
    },
  },
  methods: {
    updateBreadcrumbs() {
      const routes = this.$route.matched;
      this.breadcrumbs = routes.map(route => ({
        label: route.meta.breadcrumb,
        route: route.path
      }));
    }
  }
}
</script>
<style lang="stylus">
.breadcrumbs {
  height 50px
  &__list {
  }
  &__item {
    
  }
  &__link {
    display inline-block
  }
}
</style>
