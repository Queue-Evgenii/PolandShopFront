import {
  getCategoriesWithProducts,
  getCategoriesWithChildren,
  getCategoriesWithChild
} from "@/api/category"

const state = {
}
const mutations = {}
const actions = {
  getCategoriesWithProducts() {
    return new Promise((resolve, reject) => {
      getCategoriesWithProducts()
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        console.log("err getCategoriesWithProducts", err);
        reject(err)
      })
    })
  },
  getCategoriesWithChildren() {
    return new Promise((resolve, reject) => {
      getCategoriesWithChildren()
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        console.log("err getCategoriesWithChildren", err);
        reject(err)
      })
    })
  },
  getCategoriesWithChild() {
    return new Promise((resolve, reject) => {
      getCategoriesWithChild()
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        console.log("err getCategoriesWithChild", err);
        reject(err)
      })
    })
  }
}

export default {
  state,
  mutations,
  actions,
}