import { createStore } from 'vuex'
import categoryModules from './modules/category.modules'
import productModules from './modules/product.modules'

export default createStore({
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
