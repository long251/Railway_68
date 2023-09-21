import { getListFoodTypeAPI } from "../../API/FoodTypeAPI";
import * as TYPES from "../Type/AllConstType";

// Viết các Action liên quan đến Call API
export const actionFetchListFoodTypeAPI = () => {
  return (dispatch) => {
    return getListFoodTypeAPI().then((response) => {
      dispatch(actionFetchListFoodtypeRedux(response));
    });
  };
};
export const actionFetchListFoodtypeRedux = (listFoodType) => {
  return {
    type: TYPES.FETCH_FOODTYPE_LIST,
    payload: listFoodType,
  };
};
