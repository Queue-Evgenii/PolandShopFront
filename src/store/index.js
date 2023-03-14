import categoryModules from './modules/category.modules'
import productModules from './modules/product.modules'
import { createStore } from 'vuex'

const store = createStore({
  state: {
    cartList: [],
    quickBuy: [],
    recentList: [],
    isQuickBuy: false,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    categoryModules,
    productModules,
  }
})

export default store