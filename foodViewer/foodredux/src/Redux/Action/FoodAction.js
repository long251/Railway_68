import {
  addNewFoodAPI,
  deleteFoodAPI,
  getListFoodAPI,
  updateFoodAPI,
} from "../../API/FoodAPI";
import * as TYPES from "../Type/AllConstType";

// Viết các Action liên quan đến Call API
export const actionFetchListFoodAPI = () => {
  return (dispatch) => {
    return getListFoodAPI().then((response) => {
      dispatch(actionFetchListFoodRedux(response));
    });
  };
};
export const actionFetchListFoodRedux = (listFood) => {
  return {
    type: TYPES.FETCH_FOOD_LIST,
    payload: listFood,
  };
};
//create food
export const actionAddFoodAPI = (FoodNew) => {
  return (dispatch) => {
    return addNewFoodAPI(FoodNew).then((response) => {
      // console.log("reponseAPI After add New Account:", response);
      // Sau khi thêm mới thành công thực hiện dispatch actionFetchListAccountAPI
      // để load lại danh sách Account cập nhật
      dispatch(actionFetchListFoodAPI());
      // Trong TH Backend trả về thông tin Account vừa tạo mới có thể xử lý theo hướng add Account
      // vừa tạo mới vào listAccount Redux ==> sẽ k cần call API lần nữa
    });
  };
};

//delete
export const actionDeleteFoodAPI = (id) => {
  return (dispatch) => {
    return deleteFoodAPI(id).then((response) => {
      // console.log("res", response);
      dispatch(actionDeleteFoodRedux(id));
    });
  };
};
export const actionDeleteFoodRedux = (idDelete) => {
  return {
    type: TYPES.DELETE_FOOD,
    payload: idDelete,
  };
};
/////////////////////////////////////////////////
//update
export const actionUpdateFoodtAPI = (foodUpdate_API) => {
  return (dispatch) => {
    return updateFoodAPI(foodUpdate_API).then((response) => {
      // console.log("response sau khi xóa Account: ", response);
    });
  };
};

