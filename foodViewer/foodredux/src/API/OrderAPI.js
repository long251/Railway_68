import { api } from "./api";

const getListOrderAPI = () => {
  return api("GET", "orders/", null);
};

const addNewOrderAPI = (OrderNew) => {
  return api("POST", "orders/", OrderNew);
};

export { getListOrderAPI, addNewOrderAPI };
