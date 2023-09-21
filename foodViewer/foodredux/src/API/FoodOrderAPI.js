import { api } from "./api";

const getListFoodOrderAPI = () => {
  return api("GET", "foodOrders/", null);
};

const addNewFoodOrderAPI = (FoodOrderNew) => {
  return api("POST", "foodOrders/", FoodOrderNew);
};

const deleteFoodOrderAPI = (id) => {
  let url = "foodOrders/" + id;
  return api("DELETE", url, null);
};

const updateFoodOrderAPi = (foodOrderUpdate) => {
  let url = "foodOrders/" + foodOrderUpdate.id;
  return api("PUT", url, foodOrderUpdate);
};
export {
  getListFoodOrderAPI,
  addNewFoodOrderAPI,
  deleteFoodOrderAPI,
  updateFoodOrderAPi,
};
