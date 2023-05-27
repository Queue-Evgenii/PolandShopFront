import axios from "@/api/index"

export const submitDelivery = (data) => axios.post("/orders", data)