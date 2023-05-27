import axios from "@/api/index"

export const registration = (data) => axios.post("/registration", data)