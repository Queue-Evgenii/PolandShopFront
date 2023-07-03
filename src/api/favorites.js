import axios from "@/api/index";

export const getFavorites = () => axios.get("/products/favorites");

export const addFavorites = (data) => axios.post("/products/favorites", data);

export const removeFavorites = (data) => axios.post("/products/favorites/remove", data);