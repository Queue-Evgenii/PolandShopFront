import axios from "@/api/index"

export const updateUser = (data) => axios.post("/me/update", data)
