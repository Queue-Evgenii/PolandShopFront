import { createStore } from 'vuex'
import categoryModules from './modules/category.modules'
import productModules from './modules/product.modules'
import registrationModules from './modules/registration.modules'
import authorizationModules from './modules/authorization.modules'
import updateUserModules from './modules/updateUser.modules'
import submitDeliveryModules from './modules/submitDelivery.modules'
import credentialsModules from './modules/credentials.modules'

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
    isNewAccount: false,
    isAuthorized: false,
    favoriteItems: getFavoritesFromLocalStorage(),
    tempUserData: {
      userInfo: {
        email: '',
        password: '',
        name: '',
        gender: '',
        agree_to_receive_information: false,
      },
      deliveryInfo: {
        fullname: '',
        business: '',
        nipue: '',
        adress: '',
        mailCod: '',
        country: '',
        city: '',
        phone: '',
      },
      otherDeliveryInfo: {
        fullname: '',
        business: '',
        nipue: '',
        adress: '',
        mailCod: '',
        country: '',
        city: '',
        phone: '',
        rulesAgreement: false,
        policyAgreement: false,
      },
      agreements: {
        rulesAgreement: false,
        policyAgreement: false,
      }
    },
  },
  getters: {
  },
  mutations: {},
  actions: {
  },
  modules: {
    categoryModules,
    productModules,
    registrationModules,
    authorizationModules,
    updateUserModules,
    submitDeliveryModules,
    credentialsModules,
  }
})

export default store