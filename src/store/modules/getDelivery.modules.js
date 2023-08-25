import { getDeliveryData } from "../../api/delivery";

const actions = {
  getDeliveryData() {
    return new Promise((resolve, reject) => {
      getDeliveryData()
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          console.log("fetchDeliveryData err", err)
          reject(err)
        })
    })
  }
}

export default {
  actions,
}