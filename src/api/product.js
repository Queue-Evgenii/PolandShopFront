import axios from "@/api/index"

export const listProductsByIdCategory = (id) => axios.get(`/categories/${id}`)
export const getProducts = () => axios.get(`/products`)