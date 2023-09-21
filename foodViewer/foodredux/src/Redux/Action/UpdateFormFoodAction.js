import * as TYPES from "../Type/AllConstType";
// Chuyển đổi trạng thái đóng mở của Food
export const actionToggleFormFoodRedux = () => {
  return {
    type: TYPES.TOGLE_FORM_FOOD_UPDATE,
  };
};
// Lưu thông tin của Food Update lên redux
export const actionFetchFoodUpdateInfoRedux = (foodUpdate) => {
  return {
    type: TYPES.FETCH_FOOD_UPDATE_INFO,
    payload: foodUpdate,
  };
};
