import axios from "@/api/index";

export const listProductsByIdCategory = (id) => axios.get(`/categories/${id}`)
// export const listProductsByIdCategory = (id) => axios.get(`/products?category_ids[]=${id}&sort[column]=id&sort[type]=desc&perPage=4`);
export const getProduct = (id) => axios.get(`/products/${id}`);
export const getProducts = () => axios.get(`/products`);