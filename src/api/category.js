import axios from "@/api/index"

export const getCategories = () => axios.get("/categories")