import axios from "@/api/index";

export const searchProducts = (data) => axios.get(`/products/search?search=${data}`);