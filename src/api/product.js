import axios from "@/api/index"

export const listProductsByIdCategory = (id) => axios.get(`/categories/${id}`)
export const getProduct = (id) => axios.get(`/products/${id}`)
export const getProducts = () => axios.get(`/products`)