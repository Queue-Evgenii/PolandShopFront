import axios from "@/api/index";

export const submitDelivery = (data) => axios.post("/orders", data);

export const getDeliveryData = () => axios.get("/orders/last-delivery");

export const getProductDeliveries = () => axios.get("/deliveries");