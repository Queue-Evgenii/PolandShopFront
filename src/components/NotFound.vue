<template>
  <div class="PageNotFound">
    <LayoutDefault>
      <div class="container page404">
        <h1 class="top-footer__title">404</h1>
        <h2 class="top-footer__title">Page Not Found</h2>
        <router-link :to="{name: 'home'}" class="top-footer__title">Back to Home Page</router-link>
      </div>
    </LayoutDefault>
  </div>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault'
export default {
  components: {
    LayoutDefault,
  }
}
</script>
<style>
.page404{
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>
