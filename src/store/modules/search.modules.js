import { searchProducts } from "../../api/search";

const actions = {
  searchProducts(_, data) {
    return new Promise((resolve, reject) => {
      searchProducts(data)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          console.log("searchProducts err", err);
          reject(err);
        })
    })
  }
}

export default {
  actions,
}