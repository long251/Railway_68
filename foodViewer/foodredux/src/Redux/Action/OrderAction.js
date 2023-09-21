import { addNewOrderAPI, getListOrderAPI } from "../../API/OrderAPI";
import * as TYPES from "../Type/AllConstType";

// Viết các Action liên quan đến Call API
export const actionFetchListOrderAPI = () => {
  return (dispatch) => {
    return getListOrderAPI().then((response) => {
      dispatch(actionFetchListOrderRedux(response));
    });
  };
};
export const actionFetchListOrderRedux = (listOrder) => {
  return {
    type: TYPES.FETCH_ORDER_LIST,
    payload: listOrder,
  };
};
//create Order
export const actionAddOrderAPI = (OrderNew) => {
  return (dispatch) => {
    return addNewOrderAPI(OrderNew).then((response) => {
      dispatch(actionFetchListOrderAPI());
    });
  };
};
//setList
export const actionSetListFoodOrder = (foodOrder)=>{
  return {
    type: TYPES.SET_LIST_FOODORDER,
    payload: foodOrder,
  }
}