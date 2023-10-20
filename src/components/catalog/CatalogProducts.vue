<template>
  <div class="catalog-products products">
    <div class="products__title">{{productsLabel}}</div>
    <div v-if="getProducts.length !== 0" class="catalog-products__settings settings-products">
      <div class="settings-products__menu flex">
        <button type="button" class="settings-products__filters" @click="filtersToggle">Filtr</button>
        <button @click="changeSortType()" type="button" :class="{asc: isAsc}" class="settings-products__order">Cena rosnąco</button>
        <div class="settings-products__view flex">
          <button type="button" class="settings-products__view-columns" ref="column" @click="filtersLayout"><img src="@/assets/img/catalog/columns.png" alt=""></button>
          <button type="button" class="settings-products__view-rows" @click="filtersLayout"><img src="@/assets/img/catalog/rows.png" alt=""></button>
        </div>
      </div>
    </div>
    <SkeletonProduct v-if="$store.state.isCatalogSkeleton" />
    <div v-else-if="getProducts.length !== 0" :class="isRowDirection ? 'products-items-row' : ''" class="products__items" ref="products">
      <product-item
        v-for="product in getProducts" 
        :key="product.id" 
        :product="product"
        :class="isRowDirection ? 'item-product-row' : ''"
        :isRowDirection="isRowDirection"
        @addToCart="addToCart"
      />
    
    </div>
    <div v-else class="products__title">Not exist product...</div>
    <div v-if="getProducts.length && hasNextPage" class="products__navi navi-products">
      <div class="navi-products__button">
        <button
          @click="getNextPage()"
          type="button"
        >
          Załaduj jeszcze produktów
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import SkeletonProduct from '../SkeletonProduct';
import ProductItem from '@/components/ProductItem'
export default {
  components: {
    ProductItem,
    SkeletonProduct,
  },
  props: {
    productsLabel: {
      type: String,
      required: true,
    }
  },
  data () {
    return {
      currentPage: 1,
      isRowDirection: false,
      isAsc: true,
    }
  },
  computed: {
    getPaginateCount () {
      return Math.ceil(this.getProducts.length / this.perPage);
    },
    isAuthorised() {
      return localStorage.getItem("access_token");
    },
    getProducts() {
      return this.$store.state.catalog;
    },
    hasNextPage() {
      return this.$store.state.currentPage < this.$store.state.maxCategoryPage
    }
  },
  methods: {
    filtersToggle (e) {
      const title = e.target
      const list = document.querySelector(".settings-products__body");
      title.classList.toggle('active')
      list.classList.toggle('active')
    },
    filtersLayout (e) {
      const column = this.$refs.column;
      const row = column.nextElementSibling;
      if (column === e.target) {
        this.isRowDirection = false;
      } else if (row === e.target) {
        this.isRowDirection = true;
      }
    },
    addToCart (product) {
      const cartItems = this.$store.state.cartList
      if(this.$store.state.cartList.find(item => item.id === product.id)){
        const cartItem = cartItems.find(item => item.id === product.id)
        if (cartItem.amount < cartItem.quantity){
          cartItem.amount++
        }
      } else  if (product.quantity > 0) {
        product.amount = 1;
        cartItems.push(product)
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
      }
    },
    clearAnyFilter(param) {
      const item = this.$store.state.filterParams.find(el => el.includes(param));
      const index = this.$store.state.filterParams.indexOf(item);
      if (index >= 0) {
        this.$store.state.filterParams.splice(index, 1);
      }
    },
    setNewSortFilter(string) {
      this.clearAnyFilter("sort[type]");
      this.$store.state.filterParams.push(string);
      this.setFilters(false);
    },
    setNextProductsPage(string) {
      this.clearAnyFilter("page");
      this.$store.state.filterParams.push(string);
      this.setFilters(true);
    },
    changeSortType() {
      this.isAsc = !this.isAsc;

      const value = this.isAsc ? "asc" : "desc";
      const string = `sort[type]=${value}`;

      this.setNewSortFilter(string);
    },
    setFilters(isNextPage) {
      this.$store.dispatch("setFilters", this.$store.state.filterParams.join("&"))
        .then(res => {
          this.$store.state.maxCategoryPage = res.meta.last_page;
          if (isNextPage) {
            this.$store.state.catalog.push(...res.data);
            return;
          }
          this.clearAnyFilter("page=");
          this.setDefaultCatalogValues(res);
        })
        .finally(() => {
          this.$store.state.isCatalogSkeleton = false;
        })
    },
    setDefaultCatalogValues(res) {
      this.$store.state.currentPage = 1;
      this.$store.state.catalog = res.data;
      this.$store.state.filterParams.push("page=1");
    },
    getNextPage() {
      if (!this.hasNextPage) return;

      this.$store.state.currentPage++;


      const string = `page=${this.$store.state.currentPage}`;

      this.setNextProductsPage(string);
    },
  },
}
</script>
<style lang="stylus">

.catalog-page__notice{
  padding-left 10px
  font-size 28px
  padding 50px 0 90px
}
  .settings-products {
    @media(min-width: 1201px){
      &__filters {
        display none
      }
    }
    position relative
    &__menu {
      padding 50px 0 20px 0
      justify-content space-between
      gap: 20px
      @media (max-width: 992px) {
        padding-top 20px;
      }
    }
    &__body {
    }
    &__filters,
    &__order{
      padding 16px 5px
      border: 1px solid #000000;
      font-size: 28px;
      line-height: 16px;
      border-radius: 6px
      color: #000000;
      @media(max-width: 560px){
        border-radius 3px
        font-size 14px
        padding 12px 5px
      }
    }
    &__filters{
      width 180px
      @media(max-width: 560px){
        width 100px
      }
      &.active{
        background-color #fff  
        color: #FF0031;
      }
    }
    &__order{
      width 300px
      display flex
      align-items center
      justify-content center
      &::after{
        content ''
        background url('../../assets/img/catalog/price-arrow.png') 0 0 / 100% no-repeat
        display inline-block
        height 17px
        width 12px
        margin-left 9px
        transform: rotate(180deg);
        transition: transform ease 0.3s 0s;
      }
      &.asc{
        &::after {
          transform: rotate(0);
        }
      }
      @media(max-width: 560px){
        width 147px
        &::after{
          height 14px
          width 9px
        }
      }
    }
    &__view{
      margin 0 -20px 0 0
      button{
        display inline-block
        padding 0 20px
      }
      img{
        position relative
        z-index -1
      }
    }
    &__view-columns{
      border-right: 1px solid #000000;
    }
  }
  .navi-products{
    display flex
    flex-direction column
    row-gap: 60px
    &__button{
      margin 0 auto
      button{
        padding 20px 10px
        text-align center
        width 280px
        border 2px solid #000
        border-radius 6px
      }
    }
  }

    @media(min-width: 501px) {
      .products-items-row{
        grid-template-columns: repeat(1, minmax(300px, 1fr)) !important
      }
      .item-product-row .item-product__body{
        flex-direction: row
      }
    }
    .catalog-products {
      .products__items{
        @media(min-width: 1371px) and (max-width: 1650px){
          grid-template-columns: repeat(3, minmax(300px, 1fr));
        }
        @media(min-width: 1201px) and (max-width: 1370px){
          grid-template-columns: repeat(2, minmax(300px, 1fr));
        }
      }
    }
</style>