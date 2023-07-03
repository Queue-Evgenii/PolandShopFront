import { addFavorites } from "../../api/favorites";

const actions = {
  addFavorites(_, data) {
    return new Promise((resolve, reject) => {
      addFavorites(data)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("submitFavorites err", err);
          reject(err);
        })
    })
  }
}

export default {
  actions,
}