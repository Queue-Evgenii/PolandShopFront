import { getUserData } from "../../api/credentials";

const actions = {
  getUserData() {
    return new Promise((resolve, reject) => {
      getUserData()
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          console.log("getUserData err", err)
          reject(err)
        })
    })
  },
}

export default {
  actions,
}