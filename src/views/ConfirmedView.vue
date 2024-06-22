<template>
  <div class="confirmed">
    <layout-default>
      <div class="confirmed__data">
        <template v-if="paymentStatus != 'error'">
          <h2>Payment successful!</h2>
          <p>
            Thank you for your purchase!
            Your payment has been processed successfully.
            You will receive a confirmation email shortly with the details of your order.
          </p>
          <p>
            Your Order ID is: {{ orderId }}.
          </p>
        </template>
        <template v-else>
          <h2>Payment declined!</h2>
          <p>
            We're sorry, but your payment could not be processed at this time.
            Please check your payment details and try again. If the issue persists, contact your bank or payment provider for further assistance.
          </p>
          <p>
            Your Order ID is: {{ orderId }}.
          </p>
        </template>
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
  computed: {
    paymentStatus() {
      return this.$route.query.status;
    },
    orderId() {
      return this.$route.query.order_id;
    }
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