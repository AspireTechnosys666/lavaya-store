import requests from "./httpServices";

const OrderServices = {
  addOrder: async (body, headers) => {
    return requests.post("/order/add", body, headers);
  },

  updateOrder: async (id, body ) => {
    return requests.patch(`/order/update/${id}`, body);
  },

  createPaymentIntent: async (body) => {
    return requests.post("/order/create-payment-intent", body);
  },

  getOrderCustomer: async ({ page = 1, limit = 8 }) => {
    return requests.get(`/order?limit=${limit}&page=${page}`);
  },
  getOrderById: async (id, body) => {
    return requests.get(`/order/${id}`, body);
  },
  getOrderInfoById: async (id, body) => {
    return requests.get(`/order-info/${id}`, body);
  },
};

export default OrderServices;
