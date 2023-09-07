import { getProductDeliveries } from "../../api/delivery";

const actions = {
  getProductDeliveries() {
    return new Promise((resolve, reject) => {
      getProductDeliveries()
        .then(res => {
          resolve(res.data.data[0]);
        })
        .catch(err => {
          console.log("getProductDeliveries err", err);
          reject(err);
        })
    })
  }
};

export default {
  actions,
}