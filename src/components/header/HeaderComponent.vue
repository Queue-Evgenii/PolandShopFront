<template>
  <header class="header">
    <div class="header__top top-header">
      <div class="top-header__container container">
        <div class="top-header__content flex">
          <nav class="menu">
            <button
              :class="{active: burgerActive}"
              @click="burgerActive ? burgerClose() : burgerOpen()"
              type="button"
              class="menu__icon icon-menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div :class="{active: burgerActive}" class="menu__body" >
              <!-- <main-menu v-if="!MobileWidth" :mainMenu="mainMenu" /> -->
              <span></span>
              <shop-menu v-if="!MobileWidth" :shopMenu="shopMenu" />
            </div>
            <div :class="{active: burgerActive}" @click="burgerClose()" class="menu__background"></div>
          </nav>
          <a href="/" class="top-header__logo"><img src="@/assets/img/header/logo.png" alt=""></a>
          <div class="top-header__phones phones-header flex">
            <button
              @click="activePhones = !activePhones"
              type="button"
              class="phones-header__icon"
            >
              <img src="@/assets/img/header/icon/phone.png" alt="">
            </button>
            <div class="phones-header__items" v-bind:class="{active: activePhones}">
              <a href="tel:48884074848" class="phones-header__item hover-underline">+48 884 074 848</a>
            </div>
          </div>
          <form class="top-header__search search-header flex">
            <button @click="changeSearchState()" type="button" class="search-header__button"><img src="@/assets/img/header/icon/search.png" alt=""></button>
            <input-header v-if="MobileWidth" @searchProducts="searchProducts" />
            <SearchList v-if="MobileWidth" :products="products" @closeSearchList="closeSearchList" :class="searchListActive ? 'active' : ''" />
          </form>
          <div class="top-header__actions actions-header flex">
            <router-link :to="{name: 'favorite'}" class="actions-header__favorite actions-header__item flex">
              <div class="actions-header__link hover-underline">Uratowany</div>
              <div class="actions-header__favorite-icon"><span>{{ this.$store.state.favoriteItems.length }}</span></div>
            </router-link>
            <div class="actions-header__cart actions-header__item flex" @click="openPopup">
              <div class="actions-header__link hover-underline">Moje zakupy</div>
              <div class="actions-header__cart-icon"><span>{{ this.$store.state.cartList.length }}</span></div>
            </div>
            <router-link :to="{name: 'logout'}" v-if="this.$store.state.isAuthorized" class="actions-header__user actions-header__item flex">
              <div class="actions-header__link hover-underline">Log Out</div>
              <div class="actions-header__logout-icon"></div>
            </router-link>
            <router-link :to="{name: 'payment'}" v-else class="actions-header__user actions-header__item flex">
              <div class="actions-header__link hover-underline">Log In</div>
              <div class="actions-header__user-icon"></div>
            </router-link>
          </div>
        </div>
        <input-header
          v-if="!MobileWidth"
          @searchProducts="searchProducts"
          :class="searchActive ? 'active' : ''"
        />
        <SearchList
          v-if="!MobileWidth"
          :products="products"
          @closeSearchList="closeSearchList"
          :class="searchListActive ? 'active' : ''"
        />
      </div>
    </div>
    <div class="header__bottom bottom-header">
      <div class="bottom-header__container container">
        <shop-menu v-if="MobileWidth" :shopMenu="shopMenu" />
      </div>
    </div>
    <div
      class="background"
      :class="searchListActive ? 'active' : ''"
      @click="closeSearchList()"
    ></div>
  </header>
</template>
<style lang="stylus">
.background{
  display none
  position absolute
  z-index 2
  width 100vw 
  height 100vh
  top 0
  &.active{
    display block
  }
}
.header {
    position: relative;
    z-index: 2;
    width 100%
    background: linear-gradient(180deg, rgba(217, 217, 217, 0) -53.92%, rgba(255, 0, 0, 0.5) 512.5%);
    border-bottom 1px solid #8b8b8b
    &__top{
      border-top 1px solid #cacaca
      padding 10px 0
    }
    &__bottom{
      border-top 1px solid #8b8b8b
      padding 12px 0
    }
  }
  .top-header{
    &__container {
      overflow visible !important
    }
    &__content{
      justify-content space-between
      min-height 120px
      column-gap: 20px
      @media(max-width: 768px){
        min-height 70px
        column-gap: 5px
        row-gap: 20px
        flex-wrap: wrap
      }
    }
    &__logo{
      display block;
      flex: 0 0 100px;
      cursor pointer
      height 81px
      img{
        width: 100%
        height: 100%
      }
      @media(max-width: 768px){
      order: 2
      height 52px
      flex: 0 0 66px
    }
    }
  }
  .phones-header{
    width: max-content
    column-gap: 20px
    position relative
    &__icon{
    }
    &__items{
      margin 0 -20px
      transition transform 0.5s ease 0s
    }
    &__item{
      display inline-block
      font-size: 16px;
      line-height: 18px;
      color: #3D3D3D;
      padding 4px 20px
      white-space nowrap
      &:not(:first-child){
        border-left: 1px solid #D9D9D9;
      }
    }
    @media(max-width: 1320px){
        &__item:last-child{
          border none
        }
        flex: 0 1 auto;
      }
    @media(max-width: 1200px){
      &__items{
        transform scale(0)
        position absolute
        z-index 2
        background-color #fff
        border-radius: 6px
        padding 10px
        margin 0
        width 170px
        text-align center
        top: 225%;
        left: -420%;
        box-shadow 1px 1px 5px #8b8b8b
        &::before {
          content: ''
          width 0
          height 0
          border-left 10px solid transparent
          border-right 10px solid transparent
          border-bottom 10px solid #fff
          top: -15%;
          position: absolute;
          left: 42%;
        }
        &.active {
          transform scale(1)
        }
      }
      &__item {
        &:not(:last-child) {
          margin-bottom 10px
        }
        padding 0
      }
    }
  }
  .search-header{
    height 50px
    max-width: 680px
    position relative
    flex 1 1 680px
    &__button{
      height 100%
      width 45px
      z-index 2
      cursor pointer
      @media(min-width: 770px){
        position relative
      }
      @media(min-width: 769px){
        position absolute
      }
    }
    &__input{
      display block
      position absolute
      height 100%
      left 0
      right 0
      width 100%
      min-width 188px
      background inherit
      padding 0 10px 0 60px
      border: 1px solid #8B8B8B;
      border-radius: 5px;
      &:focus{
        box-shadow 3px 3px 3px #8B8B8B;
    }
    }
    @media(max-width: 768px){
      flex: 0 0 auto
      &__input{
        position relative
        height 0
        margin-top 5px
        padding 0 15px
        transform translate(0, -1000%)
        visibility collapse
        transition all 0.5s ease 0.1s
        &.active {
          height 50px
          transform translate(0, 0)
          visibility visible
        }
      }
    }
  }
  .actions-header{
    margin: 0 -35px 0 0
    justify-content space-between
    flex 0 1 500px
    @media(min-width: 993px){
      margin: 0 -25px 0 0
    }
    @media(max-width: 768px){
      margin: 0 -25px 0 0
      order: 3
      flex: 0 1 40%;
    }
    @media(max-width: 360px) {
      flex: 1 1 100%
    }
    span{
        position absolute
        top -10px
        right -10px
        border-radius 50%
        height 24px
        width 24px
        display flex
        align-items center
        justify-content center
        border: 2px solid #FFFFFF;
        font-size 12px
    }
    a{
      display: inline-block
    }
    &__item{
      cursor pointer
      display flex !important
      padding 0 25px
      flex 1 1 auto
      justify-content flex-end
      min-width: 110px
      column-gap: 10px
      @media(max-width: 992px){
        padding 0 35px
        flex: 0 0 26px
        max-width: 26px
        min-width 0
      }
      @media(max-width: 768px){
        padding 0 25px
      }
    }
    &__favorite-icon{
      background url('../../../src/assets/img/header/icon/favorite.png') center no-repeat
      height 26px
      flex 0 0 26px
      position relative
      span{
        background: linear-gradient(270deg, #FDE2FF 0%, #B8A8FF 100%);
      }
    }
    &__cart-icon{
      background url('../../../src/assets/img/header/icon/cart.png') center no-repeat
      height 26px
      flex 0 0 26px
      position relative
      span{
        background: linear-gradient(90deg, rgba(212,198,219,1) 0%, rgba(251,198,217,1) 35%, rgba(255,224,211,1) 100%)
      }
    }
    &__user-icon{
      background url('../../../src/assets/img/header/icon/user.png') center no-repeat
      height 27px
      flex 0 0 26px
    }
    &__logout-icon{
      background-image url('../../../src/assets/img/header/icon/logout.png')
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      height 27px
      flex 0 0 26px
    }
    &__link{
      color: #3D3D3D;
      white-space nowrap
      @media(max-width: 992px){
        display none
        visibility hidden
      }
    }
  }
  .bottom-header{
    &__content{
      min-height 36px
      column-gap: 2.6%
      a{
        color: #3D3D3D;
        @media(min-width: 769px) {
          &:hover{
            color: #FF0031;
          }
        }
      }
      li{
        display inline-block
      }
    }
    @media(max-width: 768px){
      display none
      &__content{
        flex-direction column
        align-items start
        a{
          font-size 30px
        }
        li{
          &:not(:last-child){
            margin-bottom 20px
          }
        }
      }
    }
  }
  .menu{
    display: none;
    @media(max-width: 768px){
      display: block;
      &__background {
        content: '';
        display none;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100vw;
        height 100vh;
        z-index: 2;
        background-color: rgba(0,0,0,0.5);
        &.active {
          display: block;
          cursor: pointer;
        }
      }
    }
    &__body {
      position: absolute;
      width: 85%;
      height: 100vh;
      background: #ead9ea;
      z-index: 11;
      transition: all 0.5s ease 0s;
      top 0
      left: -100%;
      padding: 70px 20px 70px 20px;
      &.active{
        left: 0;
        overflow: auto;
      }
      span{
        display block
        width 100%
        height 2px
        background-color rgba(139,139,139,0.522)
        margin 25px 0
      }
    }
    &__icon {
      display: none;
      @media(max-width: 992px){
        background: transparent;
        display: block;
        position: relative;
        flex: 0 0 28px;
        width: 28px;
        height: 20px;
        cursor: pointer;
        z-index: 12;
        background-color: transparent;
        span{
          transition: all 0.5s ease 0s;
          position: absolute;
          top: calc( 50% - 1.55px);
          left: 0;
          width: 100%;
          height: 3px;
          background-color: #3d3d3d;
          &:first-child{
            top: 0;
          }
          &:last-child{
            top: auto;
            bottom: 0;
          }
        }
        &.active{
          span{
            transform: scale(0);
            &:first-child{
              transform: rotate(-45deg);
              top: calc(50% - 2px);
            }
            &:last-child{
              transform: rotate(45deg);
              bottom: calc(50% - 1px);
            }
          }
        }
      }
    }
}
.navigation{
  a{
    white-space nowrap
  }
  @media(max-width: 768px){
    flex-wrap: wrap
    gap: 15px
    flex-direction: column
    align-items start
    a{
      font-size 26px
    }
  }
}
</style>
<script>
import InputHeader from '@/components/header/InputHeader'
import ShopMenu from '@/components/header/ShopMenu'
//import MainMenu from '@/components/header/MainMenu'
import SearchList from './SearchList';
export default {
  components: {
    ShopMenu,
    //MainMenu,
    InputHeader,
    SearchList
  },
  props:{
    MobileWidth: {
      type: Boolean,
      required: true,
    },
  },
  data () {
    return{
      activePhones: false,
      searchActive: false,
      searchListActive: false,
      burgerActive: false,
      shopMenu: [
        {
          id: 1,
          label: 'Shop',
          url: 'home'
        },
      ],
      products: [],
    }
  },
  methods: {
    openPopup() {
      this.$emit("openPopup");
    },
    closePopup() {
      this.$emit("closePopup");
    },
    changeSearchState() {
      this.searchActive = !this.searchActive;
      this.searchListActive = !this.searchListActive;
    },
    searchProducts(val) {
      if(val.length < 2){
        this.searchListActive = false;
        return;
      }
      this.searchProductsRequest(val);
    },
    searchProductsRequest(val) {
      this.$store.dispatch("searchProducts", val).then(data =>{
        this.products = data.data;
        if(data.data.length > 0) {
          this.searchListActive = true;
        }
      })
    },
    closeSearchList() {
      this.searchListActive = false;
    },
    burgerOpen() {
      this.burgerActive = true;
      window.scrollTo(0, 0);
      document.querySelector("body").classList.add("_scroll-lock");
    },
    burgerClose() {
      this.burgerActive = false;
      document.querySelector("body").classList.remove("_scroll-lock");
    }
  },
}
</script>