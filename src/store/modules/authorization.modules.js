import { authorization } from "../../api/authorization"

const actions = {
  authorization(_, credentials) {
    return new Promise((resolve, reject) => {
      authorization(credentials)
        .then(res => {
          console.log(res)
          resolve(res)
        })
        .catch(err => {
          console.log("authorization err", err)
          reject(err)
        })
    })
  }
}

export default {
  actions,
}