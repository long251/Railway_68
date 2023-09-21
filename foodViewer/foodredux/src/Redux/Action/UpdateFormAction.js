import * as TYPES from "../Type/AllConstType";
// Chuyển đổi trạng thái đóng mở của Customer
export const actionTogleFormRedux = () => {
  return {
    type: TYPES.TOGLE_FORM_UPDATE,
  };
};
// Lưu thông tin của Customer Update lên redux
export const actionFetchCustomerUpdateInfoRedux = (customerUpdate) => {
  return {
    type: TYPES.FETCH_CUSTOMER_UPDATE_INFO,
    payload: customerUpdate,
  };
};
