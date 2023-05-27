import { submitDelivery } from "../../api/delivery";

const actions = {
  submitDelivery(_, data) {
    return new Promise((resolve, reject) => {
      submitDelivery(data)
        .then(res => {
          console.log(res)
          resolve(res)
        })
        .catch(err => {
          console.log("updateDelivery err", err)
          reject(err)
        })
    })
  }
}

export default {
  actions,
}