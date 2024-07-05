import axios from "@/api/index"

const getCategories = (param) => axios.get("/categories" + (param.length > 0 ? `? ${param}` : ''));

export const getCategoriesWithProducts = () => getCategories("with_products=1");
export const getCategoriesWithChildren = () => getCategories("with_children=1");
export const getCategoriesWithChild = () => getCategories("with_child=1");