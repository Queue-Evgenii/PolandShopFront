<template>
  <!-- instead of this array "products" should be another -->
  <li class="sidebar-category__item"
     :class="[{'withoutArr': item.children.length === 0},{'active': isVisible}]"
  >
     <router-link v-if="item.children.length === 0" :to="{name: 'catalogList', params: {id: item.id}}" class="sidebar-category__item-title" ref="title"><span>{{ item.name }}</span></router-link>
     <div v-else class="sidebar-category__item-title" @click="categoryToggle()" ref="title"><span>{{ item.name }}</span></div>
     <ul class="sidebar-category__sublist" ref="sublist">
        <li class="sidebar-category__subitem" v-for="link in item.children" :key="link.id">
          <router-link :to="{name: 'catalogList', params: {id: link.id}}"><span>{{ link.name }}</span></router-link>
        </li>
    </ul>
  </li>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
    }
  },
  data () {
    return {
      isVisible: false,
    }
  },
  methods: {
    categoryToggle () {
      this.isVisible = !this.isVisible
    }
  },
}
</script>
<style lang="stylus">
.sidebar-category__item.active{
  .sidebar-category__item-title{
    &::before{
      transform rotate(0)
    }
  }
  .sidebar-category__sublist{
      max-height: none
      opacity 1
      visibility visible
  }
}
.sidebar-category__item.withoutArr{
  .sidebar-category__item-title{
    &::before{
      display none
    }
  }
}
.sidebar-category__item-title{
    span{
      padding 5px 10px 5px 10px
      border-radius 10px
    }
}
.sidebar-category__item-title.current{
    span{
      background-color: #FF0031;
      color: #ffffff
    }
}
.sidebar-category__subitem{
  a span{
    padding 5px 10px 5px 10px
    border-radius 10px
  }
  a.current span {
    background-color: #FF0031;
      color: #ffffff
  }
}
</style>