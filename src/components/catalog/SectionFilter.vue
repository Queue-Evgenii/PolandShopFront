<template>
  <div 
    v-if="getCategories" class="sidebar-filter__section section-filter"
  >
    <span class="section-filter__title sidebar-filter__checkbox" @click="onSelected()">{{ name }}</span>
    <ul class="section-filter__body section-filter__body-line">
      <li class="section-filter__item" v-for="item in getCategories" :key="item.id">
        <input
          type="checkbox"
          :id="item.id"
          :disabled="item.id == currentCategoryId"
          :class="item.id == currentCategoryId ? '_current' : ''"
          :checked="item.isChecked"
          @click="onChecked(item.id)"
        >
        <label class="flex" :for="item.id">{{ item.name }}</label>
      </li>
    </ul>
  </div> 
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    currentCategoryId: {
      type: Number,
    }
  },
  data () {
    return {
    }
  },
  computed: {
    getCategories() {
      const list = this.$store.state.categoriesWithProducts.filter(item => item.products.length !== 0)
      list.forEach(el => {
        el.isChecked = false;
        if (el.id == this.currentCategoryId) {
          el.isChecked = true;
        }
      })
      return list;
    },
  },
  methods: {
    onSelected () {
      this.$emit('onSelected');
    },
    onChecked(id) {
      const list = this.$store.state.categoriesWithProducts
      this.$emit('onChecked', id);
      list.forEach(el => {
        if (el.id == id) {
          el.isChecked = !el.isChecked;
        }
      })
    },
  },
}
</script>
<style lang="stylus">
  .section-filter.active{
    .section-filter__body{
      max-height: none
      opacity 1
      visibility visible
      margin-top 25px
    }
  }
</style>