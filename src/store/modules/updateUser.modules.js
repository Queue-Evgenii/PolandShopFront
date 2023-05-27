import { updateUser } from "../../api/update";

const actions = {
  updateUser(_, data) {
    return new Promise((resolve, reject) => {
      updateUser(data)
        .then(res => {
          console.log(res)
          resolve(res)
        })
        .catch(err => {
          console.log("updateUser err", err)
          reject(err)
        })
    })
  }
}

export default {
  actions,
}