import { createStore } from 'vuex';
import categoryModules from './modules/category.modules';
import productModules from './modules/product.modules';
import registrationModules from './modules/registration.modules';
import authorizationModules from './modules/authorization.modules';
import updateUserModules from './modules/updateUser.modules';
import submitDeliveryModules from './modules/submitDelivery.modules';
import credentialsModules from './modules/credentials.modules';
import getDeliveryModules from './modules/getDelivery.modules';
import getFavoritesModules from './modules/getFavorites.modules';
import addFavoritesModules from './modules/addFavorites.modules';
import removeFavoritesModules from './modules/removeFavorites.modules';
import searchModules from './modules/search.modules';
import filtersModules from './modules/filters.modules';


function getCartFromLocalStorage() {
  const favoriteItems = localStorage.getItem('cartItems')
  if (!favoriteItems) {
    return [];
  } else{
    return JSON.parse(favoriteItems);
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
    favoriteItems: [],
    filterParams: ["sort[type]=asc", "sort[column]=id"],
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
    getDeliveryModules,
    getFavoritesModules,
    addFavoritesModules,
    removeFavoritesModules,
    searchModules,
    filtersModules,
  }
});

export default store;