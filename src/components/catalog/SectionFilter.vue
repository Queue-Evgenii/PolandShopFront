<template>
  <div 
    class="sidebar-filter__section section-filter" 
    @click="onSelected(item.id)"
  >
    <div class="section-filter__title" >{{ item.name }}</div>
    <ul class="section-filter__body section-filter__body-line">
      <li class="section-filter__item" v-for="input in item.filterInputs" :key="input.id">
        <input type="checkbox" :id="input.for">
        <label class="flex" :for="input.for">{{ input.label }}</label>
      </li>
    </ul>
  </div> 
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
  methods: {
    onSelected (id) {
      this.$emit('onSelected', id)
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