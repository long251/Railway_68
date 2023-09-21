import * as TYPES from "../Type/AllConstType"; // Import acctionType đê sử dụng

// Khai báo các state showForm để quản lý
let initialState = false;

// Khai báo reducer, truyền vào các state mặc định
let FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SHOW_FORM: // Xử lý Action showForm
      return true;

    case TYPES.CLOSE_FORM: // Xử lý Action showForm
      return false;

    case TYPES.SHOW_FORM_FOOD:
      return true;
    case TYPES.CLOSE_FORM_FOOD:
      return false;
    default:
      return state; // Chú ý cần return về state mặc định nếu không sẽ gặp lỗi.
  }
};

export default FormReducer;
