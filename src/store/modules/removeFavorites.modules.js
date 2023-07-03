import { removeFavorites }  from "../../api/favorites";

const actions = {
  removeFavorites(_, data) {
    return new Promise((resolve, reject) => {
      removeFavorites(data)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("removeFavorites err", err);
          reject(err);
        })
    })
  }
}

export default {
  actions,
}