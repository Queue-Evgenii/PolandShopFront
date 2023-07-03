import { getFavorites } from "../../api/favorites";

const actions = {
  getFavorites() {
    return new Promise((resolve, reject) => {
      getFavorites()
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          console.log("getFavorites err", err);
          reject(err);
        })
    })
  }
}

export default {
  actions,
}