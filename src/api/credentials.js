import axios from "@/api/index"

export const getUserData = () => axios.get("/me")