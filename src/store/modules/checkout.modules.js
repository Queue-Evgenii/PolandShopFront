import { submitCheckout } from "../../api/checkout";

const actions = {
  submitCheckout(_, orderId) {
    return new Promise((resolve, reject) => {
      submitCheckout(orderId)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          console.log("submitCheckout Err", err);
          reject(err);
        })
    })
  }
}

export default {
  actions,
};