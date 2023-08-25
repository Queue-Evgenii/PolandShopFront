import { getProductDeliveries } from "../../api/delivery";

const actions = {
  getProductDeliveries() {
    return new Promise((resolve, reject) => {
      getProductDeliveries()
        .then(res => {
          console.log(res.data.data[0])
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