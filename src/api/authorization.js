import axios from "@/api/index"

export const authorization = (data) => axios.post("/admin/login", data)