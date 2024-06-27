import { createStore } from 'vuex';
import categoryModules from './modules/category.modules';
import productModules from './modules/product.modules';
import registrationModules from './modules/registration.modules';
import authorizationModules from './modules/authorization.modules';
import updateUserModules from './modules/updateUser.modules';
import submitDeliveryModules from './modules/submitDelivery.modules';
import credentialsModules from './modules/credentials.modules';
import getDeliveryModules from './modules/getDelivery.modules';
import getProductDeliveriesModules from './modules/getProductDeliveries.modules';
import getFavoritesModules from './modules/getFavorites.modules';
import addFavoritesModules from './modules/addFavorites.modules';
import removeFavoritesModules from './modules/removeFavorites.modules';
import searchModules from './modules/search.modules';
import filtersModules from './modules/filters.modules';
import checkoutModules from './modules/checkout.modules';
import { PaymentFormStatus } from '../models/PaymentFormStatus';

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
    
    isAuthorized: false,
    paymentFormStatus: PaymentFormStatus.None,

    favoriteItems: [],
    categories: [],
    deliveriesData: null,
    filterParams: ["sort[type]=asc", "sort[column]=name"],
    maxCategoryPage: 1,
    currentPage: 1,
    catalog: [],
    isCatalogSkeleton: true,
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
    getProductDeliveriesModules,
    getFavoritesModules,
    addFavoritesModules,
    removeFavoritesModules,
    searchModules,
    filtersModules,
    checkoutModules,
  }
});

export default store;
