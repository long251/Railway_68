import {
  addNewCustomerAPI,
  deleteCustomerAPI,
  getListCustomerAPI,
  updateCustomerAPI,
} from "../../API/CustomerAPI";
import * as TYPES from "../Type/AllConstType"; // Import AllConstType đê sử dụng

// Viết các Action liên quan đến Call API
export const actionFetchListCustomerAPI = () => {
  return (dispatch) => {
    return getListCustomerAPI().then((response) => {
      console.log("reponseAPI:", response);
      dispatch(actionFetchListCustomerRedux(response));
    });
  };
};

export const actionFetchListCustomerRedux = (listCustomer) => {
  return {
    type: TYPES.FETCH_CUSTOMER_LIST,
    payload: listCustomer,
  };
};

//action thêm mới customer
export const actionAddNewCustomerAPI = (CustomerNew) => {
  return (dispatch) => {
    return addNewCustomerAPI(CustomerNew).then((response) => {
      // console.log("reponseAPI After add New Customer:", response);
      // Sau khi thêm mới thành công thực hiện dispatch actionFetchListCustomerAPI
      // để load lại danh sách Account cập nhật
      dispatch(actionFetchListCustomerAPI());
      // Trong TH Backend trả về thông tin Account vừa tạo mới có thể xử lý theo hướng add Account
      // vừa tạo mới vào listCustomer Redux ==> sẽ k cần call API lần nữa
    });
  };
};

//delete
export const actionDeleteCustomerAPI = (id) => {
  return (dispatch) => {
    return deleteCustomerAPI(id).then((response) => {
      console.log("res", response);
      dispatch(actionDeleteCustomerRedux(id));
    });
  };
};
export const actionDeleteCustomerRedux = (idDelete) => {
  return {
    type: TYPES.DELETE_CUSTOMER,
    payload: idDelete,
  };
};


//update
export const actionUpdateCustomerAPI = (customerUpdate_API) => {
  return (dispatch) => {
    return updateCustomerAPI(customerUpdate_API).then((response) => {
      // console.log("response sau khi xóa Account: ", response);
    });
  };
};


