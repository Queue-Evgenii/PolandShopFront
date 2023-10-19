<template>
  <li class="sidebar-category__item"
     :class="[{'withoutArr': item.children.length === 0},{'active': isVisible}]"
  >
     <router-link
      v-if="item.children.length === 0"
      :to="{name: 'catalogList', params: {id: item.id}}"
      class="sidebar-category__item-title" ref="title"
      @click="filterReset(item.id)"
    >
      <span>{{ item.name }}</span>
    </router-link>
     <div v-else class="sidebar-category__item-title" @click="categoryToggle()" ref="title"><span>{{ item.name }}</span></div>
     <ul class="sidebar-category__sublist" ref="sublist">
        <li
          class="sidebar-category__subitem"
          v-for="link in item.children"
          :key="link.id"
        >
          <router-link
            :to="{name: 'catalogList', params: {id: link.id}}"
            @click="filterReset(link.id)"
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
    filterReset(id) {
      this.$store.state.filterParams = ["sort[type]=asc", "sort[column]=price", "page=1", `category_ids[]=${id}`];
      this.$store.state.categories.forEach(el => {
        el.isChecked = false;
        if (el.id == id) {
          el.isChecked = true;
        }
      })
      this.setFilters();
    },
    setFilters() {
      this.setStartupPage();
      this.$store.dispatch("setFilters", this.$store.state.filterParams.join("&"))
        .then(res => {
          this.setDefaultCatalogValues(res);
        })
    },
    setDefaultCatalogValues(res) {
      this.$store.state.catalog = res.data;
      this.$store.state.currentPage = 1;
      this.$store.state.maxCategoryPage = res.meta.last_page;
    },
    setStartupPage() {
      this.$store.state.currentPage = 1;

      const item = this.$store.state.filterParams.find(el => el.includes("page="));
      const index = this.$store.state.filterParams.indexOf(item);

      if (index >= 0) {
        this.$store.state.filterParams.splice(index, 1);
      }
      
      this.$store.state.filterParams.push("page=1");
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
