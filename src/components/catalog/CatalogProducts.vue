<template>
  <div class="catalog-products products">
    <div class="products__title">{{productsLabel}}</div>
    <div class="catalog-products__settings settings-products">
      <div class="settings-products__menu flex">
        <button type="button" class="settings-products__filters" @click="filtersToggle">Filtr</button>
        <button type="button" class="settings-products__order">Cena rosnąco</button>
        <div class="settings-products__view flex">
          <button type="button" class="settings-products__view-columns" ref="column" @click="filtersLayout"><img src="@/assets/img/catalog/columns.png" alt=""></button>
          <button type="button" class="settings-products__view-rows" @click="filtersLayout"><img src="@/assets/img/catalog/rows.png" alt=""></button>
        </div>
      </div>
      <div class="settings-products__body" ref="filters">
        <slot></slot>
      </div>
    </div>
      <div v-if="catalogProducts.length === 0" class="catalog-page__notice">Category does not contain products yet ;(</div>
     <div v-if="catalogProducts.length !== 0" class="products__items" ref="products">
      <product-item
        v-for="product in getItems" 
        :key="product.id" 
        :product="product"
        @addToCart="addToCart"
      />
    </div>
    <div v-if="catalogProducts.length > this.perPage" class="products__navi navi-products">
      <div class="navi-products__button"><button type="button">Załaduj jeszcze 10 produktów</button></div>
      <paginate
        :page-count="getPaginateCount"
        :page-range="1"
        :container-class="'paginate-products'"
        :page-class="'paginate-products__number'"
        :prev-class="'paginate-products__prev'"
        :next-class="'paginate-products__next'"
        :break-view-text="'●'"
        :click-handler="paginateClickCallback"
      ></paginate>
    </div>
  </div>
</template>
<script>
import ProductItem from '@/components/ProductItem'
import Paginate from 'vuejs-paginate'
export default {
  data () {
    return {
      currentPage: 1,
      perPage: 16,
    }
  },
  props: {
    catalogProducts: {
      type: Array,
    },
    productsLabel: {
      type: String,
      required: true,
    }
  },
  components: {
    Paginate,
    ProductItem,
  },
  methods: {
    paginateClickCallback (pageNum) {
      this.currentPage = Number(pageNum);
    },
    filtersToggle (e) {
      const title = e.target
      const list = this.$refs.filters
      title.classList.toggle('active')
      list.classList.toggle('active')
    },
    filtersLayout (e) {
      const column = this.$refs.column;
      const row = column.nextElementSibling;
      let products = this.$refs.products;
            // productItems = this.$refs.product
      if (column === e.target) {
        for (let productItem of products.children) {
          productItem.classList.remove('item-product-row')
        }
        products.classList.remove('products-items-row')
      } else if (row === e.target) {
        for (let productItem of products.children) {
          //const productItem = products[index];
          productItem.classList.add('item-product-row');
        }
        products.classList.add('products-items-row')
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
    }
  },
  computed: {
    getPaginateCount () {
      return Math.ceil(this.catalogProducts.length / this.perPage);
    },
    getItems () {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      this.catalogProducts.slice(start, end);
      return this.catalogProducts.slice(start, end);
    }
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
      display none
    }
    position relative
    &__menu {
      padding 50px 0 20px 0
      justify-content space-between
      gap: 20px
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
  .paginate-products{
    display flex
    align-items center
    justify-content space-between
    max-width 466px
    width 100%
    margin 0 auto
    position relative
    z-index 1
    &__number{
      position relative
      width 37px
      height 37px
      border-radius 50%
      z-index 3
      display flex
      align-items center
      justify-content center
      a{
        font-size: 40px;
        line-height: 46px;
        color: #9E9B9B
      }
      &.active{
        background-color: #FF0031;
        a{
          color: #FFFFFF;
          font-size: 24px;
          line-height: 28px;
        }
      }
      @media(max-width: 420px) {
        a{
          font-size 24px
        }
      }
    }
    
  }
  .paginate-products__next,
  .paginate-products__prev{
    width 75px
    height 75px
    background: rgb(255, 255, 255);
    border-radius 50%
    position relative
    z-index 3
    border: 1px solid #3D3D3D;
    opacity: 0.4
    @media(min-width: 769px) {
      &:hover{
        background: rgb(255, 255, 255);
        opacity: 0.9
      }
    }
    &::before, &::after{
      content ''
      position absolute
      // width 22.5px
      // height 2px
      width 30%
      height 2.666%
      background-color #000
    }
    &::before{
      transform rotate(45deg)
      // top: 28.5px
      // left: 28.5px
      top 38%
      left 38%
    }
    &::after{
      transform rotate(-45deg)
      // bottom: 28.5px
      // left: 28.5px
      bottom 38%
      left 38%
    }
    a{
      font-size 0
      position absolute
      width 100%
      height 100%
      z-index 2
    }
    @media(max-width: 420px) {
      width 50px
      height 50px
    }
  }
  .paginate-products__prev{
    transform rotate(180deg)
  }
  .item-product__info-text{
    display flex
    align-items center
    flex-wrap wrap
    gap: 20px
  }
    @media(min-width: 501px) {
      .products-items-row{
      grid-template-columns: repeat(1, minmax(300px, 1fr)) !important
    }
      .item-product-row .item-product__body{
        flex-direction: row
        @media(max-width: 669px){
          flex-direction: column
        }
        .item-product__image{
          @media(min-width: 670px) {
            flex 0 0 200px
            width 200px
          }
        }
        .item-product-row .item-product__image{
          
          @media(max-width: 669px){
            flex: 0 0 100px 
            width 100px
            height 100px
          }
        }
      }
      .item-product-row .item-product__info{
        flex-direction: row
        align-items: start;
        margin-top 15px
        margin-right 60px
        @media(max-width: 669px){
          margin-right 0
          align-items center
        }
        .item-product__price{
          width unset
        }
      }
      .item-product-row .item-product__actions{
        position absolute
        left 270px
        right 30px
        bottom 60px
        justify-content space-between
        width unset
        @media(max-width: 768px){
          bottom 55px
        }
        @media(max-width: 669px){
          position relative
          top 0
          left 0
          width 100%
        }
      }
      .item-product-row .item-product__text-row{
        flex-direction row !important;
        align-items center
        @media(max-width: 590px){
          flex-direction column !important
          align-items start
        }
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