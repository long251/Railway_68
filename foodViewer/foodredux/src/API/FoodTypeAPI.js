import { api } from "./api";

export const getListFoodTypeAPI = () => {
  return api("GET", "foodTypes/", null);
};
