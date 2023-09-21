import { api } from "./api";

const getListFoodAPI = () => {
  return api("GET", "foods/", null);
};

const addNewFoodAPI = (FoodNew) => {
  return api("POST", "foods/", FoodNew);
};

const deleteFoodAPI = (id) => {
  let url = "foods/" + id;
  return api("DELETE", url, null);
};

const updateFoodAPI = (foodUpdate) => {
  let url = "foods/" + foodUpdate.id;
  return api("PUT", url, foodUpdate.food_Update);
};
export { getListFoodAPI, addNewFoodAPI, deleteFoodAPI, updateFoodAPI };
