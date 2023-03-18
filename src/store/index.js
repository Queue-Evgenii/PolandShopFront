import { createStore } from 'vuex'
import categoryModules from './modules/category.modules'
import productModules from './modules/product.modules'

// function getFavoritesFromLocalStorage() {
//   const favoriteItems = localStorage.getItem('favoriteItems')
//   if (favoriteItems) {
//     return JSON.parse(favoriteItems)
//   } else {
//     return []
//   }
// }

const store = createStore({
  state: {
    cartList: [],
    quickBuy: [],
    recentList: [],
    isQuickBuy: false,
    favoriteItems: [],
    // favoriteItems: this.getters.getFavoritesFromLocalStorage(),
  },
  getters: {
    getFavoritesFromLocalStorage(state) {
      return JSON.parse(localStorage.getItem('cartItems')) || state.cartItems
    }
  },
  actions: {
    addFavoriteToLocalStorage({state}, product) {
      const favoriteItems = state.favoriteItems
      if (!favoriteItems.find(item => item.id === product.id)) {
        favoriteItems.push(product)
        console.log(favoriteItems)
        localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems))
      }
    },
    removeFavoriteFromLocalStorage({state}, product) {
      const favoriteItems = state.favoriteItems
      const index = favoriteItems.indexOf(product.id)
      favoriteItems.splice(index, 1)
      console.log(favoriteItems)
      localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems))
    }
  },
  modules: {
    categoryModules,
    productModules,
  }
})

export default store