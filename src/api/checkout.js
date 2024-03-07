import axios from "@/api/index";

export const submitCheckout = (id) => axios.post(`/orders/${id}/checkout`);