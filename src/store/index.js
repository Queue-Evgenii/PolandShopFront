import { createStore } from 'vuex'
import categoryModules from './modules/category.modules'
import productModules from './modules/product.modules'

function getFavoritesFromLocalStorage() {
  const favoriteItems = localStorage.getItem('favoriteItems')
  if (!favoriteItems) {
    return []
  }
  return JSON.parse(favoriteItems)
}
function getCartFromLocalStorage() {
  const favoriteItems = localStorage.getItem('cartItems')
  if (!favoriteItems) {
    return []
  } else{
    return JSON.parse(favoriteItems)
  }
  
}

const store = createStore({
  state: {
    cartList: getCartFromLocalStorage(),
    quickBuy: [],
    recentList: [],
    isQuickBuy: false,
    favoriteItems: getFavoritesFromLocalStorage(),
  },
  getters: {
  },
  mutations: {},
  actions: {
  },
  modules: {
    categoryModules,
    productModules,
  }
})

export default store