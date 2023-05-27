import { registration } from "../../api/registration"

const actions = {
  registration(_, credentials) {
    return new Promise((resolve, reject) => {
      registration(credentials)
        .then(res => {
          console.log(res)
          resolve(res)
        })
        .catch(err => {
          console.log("registration err", err.response.data.errors)
          reject(err)
        })
    })
  }
}

export default {
  actions,
}