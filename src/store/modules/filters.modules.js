import { setFilters } from "../../api/filters";

const actions = {
  setFilters(_, data) {
    return new Promise((resolve, reject) => {
      setFilters(data)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          console.log("setFilters err", err);
          reject(err);
        });
    })
  }
}

export default {
  actions,
}