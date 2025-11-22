<template>
    <div style="font-weight: 400;">
        <span style="font-weight: 700;">{{ getWat.toFixed(2) + ' PLN' }}</span> netto, 23% VAT
    </div>
</template>

<script>
  export default {
    props: {
      basePrice: {
        type: Number,
        required: true,
      }
    },
    computed: {
      getWat() {
        return this.basePrice / 1.23;
      },
    },
  }
</script>
