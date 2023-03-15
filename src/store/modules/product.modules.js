import {listProductsByIdCategory} from "@/api/product"
import {getProducts} from "@/api/product"

const state = {
}
const mutations = {}
const actions = {
  listProductsByIdCategory(_,id) {
    return new Promise((resolve, reject) => {
      listProductsByIdCategory(id)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        console.log("err listProductsByIdCategory", err);
        reject(err)
      })
    })
  },
  getProducts() {
    return new Promise((resolve, reject) => {
      getProducts()
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        console.log("err getProducts", err);
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