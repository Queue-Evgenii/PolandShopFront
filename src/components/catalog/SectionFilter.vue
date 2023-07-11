<template>
  <div 
    v-if="items" class="sidebar-filter__section section-filter"
  >
    <span class="section-filter__title sidebar-filter__checkbox" @click="onSelected()">{{ name }}</span>
    {{ categoryFilters }}
    <ul class="section-filter__body section-filter__body-line">
      <li class="section-filter__item" v-for="item in items.filter(item => item.children.length == 0)" :key="item.id">
        <input
          type="checkbox"
          :id="item.id"
          :checked="isChecked(item)"
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
    items: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    currentCategoryId: {
      type: Number,
    }
  },
  methods: {
    onSelected () {
      this.$emit('onSelected');
    },
    onChecked(id) {
      this.$emit('onChecked', id)
    },
    isChecked(item) {
      return this.currentCategoryId == item.id
    }
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