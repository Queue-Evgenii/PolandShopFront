<template>
  <div class="default">
    <div class="container header-tabs">
      <main-menu v-if="MobileWidth" :mainMenu="mainMenu" />
    </div>
    <HeaderComponent :MobileWidth="MobileWidth" @openPopup="openPopup" @closePopup="closePopup" :visibilityPopup="visibilityPopup" />
    <slot></slot>
    <FooterComponent :FooterWidth="FooterWidth" />
    <page-popup
      v-if="visibilityPopup"
      @closePopup="closePopup"
      :popupOutput="popupOutput"
    >
      <cart-component :cartList="cartList" @closePopup="closePopup"/>
    </page-popup>
    <access-alert />
  </div>
</template>
<style lang="stylus">
  .default{
    //background-color #fff
    background: linear-gradient(180deg, rgba(217, 217, 217, 0) -53.92%, rgba(255, 0, 0, 0.5) 1000%);
    position relative
  }
</style>
<script>
import HeaderComponent from '../components/header/HeaderComponent'
import FooterComponent from '../components/footer/FooterComponent'

import PagePopup from '@/components/PagePopup'
import AccessAlert from '@/components/AccessAlert'
import CartComponent from '@/components/cart/CartComponent'
export default {
  components: {
    HeaderComponent,
    FooterComponent,
    PagePopup,
    AccessAlert,
    CartComponent
  },
  data () {
    return {
      visibilityPopup: false,
      popupOutput: {
        name: "Dodano do koszyka"
      },
      mainMenu: [
        {
          id: 1,
          label: 'GŁÓWNA',
          to: '/'
        },
        {
          id: 2,
          label: 'SUFITY NAPINANE',
          to: 'https://polandgroups.pl/sufity-napinane'
        },
        {
          id: 3,
          label: 'O FIRMIE',
          to: 'https://polandgroups.pl/o-firmie'
        },
        {
          id: 4,
          label: 'GALERIA',
          to: 'https://polandgroups.pl/galeria'
        },
        {
          id: 4,
          label: 'KONTAKT',
          to: 'https://polandgroups.pl/kontakt'
        }
      ],
    }
  },
  computed: {
    cartList () {
      return this.$store.state.cartList
    },
    MobileWidth () {
      if (window.innerWidth <= 768) {
        return false
      } else {
        return true
      }
    },
    FooterWidth () {
      if (window.innerWidth <= 688) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    openPopup () {
      this.visibilityPopup = true;
      document.body.style.overflowY = "hidden"
    },
    closePopup () {
      this.visibilityPopup = false;
      document.body.style.overflowY = "initial"
    },
    getFavorites() {
      if (localStorage.getItem('access_token')) {
        this.$store.dispatch("getFavorites").then(res => {
          this.$store.state.favoriteItems = res.data;
        })
      }
      const favItems = localStorage.getItem('favoriteItems')
      if (favItems) {
        this.$store.state.favoriteItems = JSON.parse(favItems);
        return;
      }
      this.$store.state.favoriteItems = [];
    },
    getCategories() {
      this.$store.dispatch("getCategories")
        .then(data => {
          this.$store.state.categories = data.data;
        })
    },
    getProductDeliveries() {
        this.$store.dispatch('getProductDeliveries')
          .then(data => {
            this.$store.state.deliveriesData = data;
          });
      },
  },
  mounted() {
    this.getFavorites();
    this.getCategories();
    this.getProductDeliveries();
  }
}
</script>
