import axios from "@/api/index";

export const setFilters = (data) => axios.get(`/products?${data}`);