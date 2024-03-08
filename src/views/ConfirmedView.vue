<template>
  <div class="confirmed">
    <layout-default>
      <div class="confirmed__data">
        <h2>Payment successful!</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio velit consectetur sunt, molestiae itaque dum?</p>
      </div>
    </layout-default>
  </div>
</template>
<script>
import LayoutDefault from '@/layouts/LayoutDefault';

export default {
  name: "confirmed", 
  components: {
    LayoutDefault
  },
}
</script>
<style lang="stylus">
  .confirmed {
    &__data{
      max-width: 700px;
      margin: 0 auto;
      padding: 96px 48px;
      h2 {
        font-size: 36px;
        font-weight: 700;
        line-height: 1.5;
        margin-bottom: 16px;
      }
      p {
        font-size: 24px;
        line-height: 1.2;
      }
    }
  }
</style>