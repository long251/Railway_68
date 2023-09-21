import { getListFoodOrderAPI } from "../../API/FoodOrderAPI";
import * as TYPES from "../Type/AllConstType";

// Viết các Action liên quan đến Call API
export const actionFetchListFoodOrderAPI = () => {
  return (dispatch) => {
    return getListFoodOrderAPI().then((response) => {
      dispatch(actionFetchListFoodOrderRedux(response));
    });
  };
};
export const actionFetchListFoodOrderRedux = (listFoodOrder) => {
  return {
    type: TYPES.FETCH_FOODORDER_LIST,
    payload: listFoodOrder,
  };
};
//create Order
export const actionAddFoodOrderAPI = (FoodOrderNew) => {
  return (dispatch) => {
    return addNewFoodOrderAPI(FoodOrderNew).then((response) => {
      dispatch(actionFetchListFoodOrderAPI());
    });
  };
};