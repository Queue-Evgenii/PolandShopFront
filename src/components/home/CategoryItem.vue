<template>
  <li class="sidebar-category__item"
     :class="[{'withoutArr': item.children.length === 0},{'active': isVisible}]"
  >
    <div class="sidebar-category__item-title" ref="title">
      <router-link
        :to="{name: 'catalogList', params: {id: item.id}}"
        class="sidebar-category__item-title" ref="title"
        @click="filterReset(item.id)"
      >
        <span>{{ item.name }}</span>
      </router-link>
      <div
        v-if="item.children.length !== 0"
        @click="categoryToggle()"
        class="sidebar-category__arrow"
      ></div>
    </div>
     <ul class="sidebar-category__sublist" ref="sublist">
        <li
          class="sidebar-category__subitem"
          v-for="link in item.children"
          :key="link.id"
        >
          <router-link
            :to="{name: 'catalogList', params: {id: link.id}}"
            @click="filterReset()"
          >
            <span>{{ link.name }}</span>
          </router-link>
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
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    categoryToggle() {
      this.isVisible = !this.isVisible;
    },
    filterReset() {
      this.$store.state.filterParams = ["sort[type]=asc", "sort[column]=name"];
    },
  },
}
</script>
<style lang="stylus">
.sidebar-category__item.active{
  .sidebar-category__arrow{
    &::before{
      transform rotate(-90deg)
    }
  }
  .sidebar-category__sublist{
      max-height: none
      opacity 1
      visibility visible
  }
}
.sidebar-category__item.withoutArr{
  .sidebar-category__arrow{
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
  a.current {
    span {
      background-color: #FF0031;
      color: #ffffff
      
    }
    &:hover {
      &::before {
        display none !important
      }
    }
  }
}
</style>
