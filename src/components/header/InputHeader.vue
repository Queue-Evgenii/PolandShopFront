<template>
    <input
      type="text"
      class="search-header__input"
      placeholder="Wyszukaj towary"
      v-model.trim="inputData"
      @input="searchProducts"
    >
</template>
<script>
export default {
  data() {
    return {
      inputData: "",
    }
  },
  methods: {
    searchProducts() {
      this.$emit("searchProducts", this.inputData);
    }
  },
}
</script>