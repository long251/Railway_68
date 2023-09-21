import * as TYPES from "../Type/AllConstType";


let initialState = {
  isShowFormUpdate: false,
  customerUpdateInfo: {},
};

const FormUpdate = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.TOGLE_FORM_UPDATE:
      return {
        ...state,
        isShowFormUpdate: !state.isShowFormUpdate,
      };
    case TYPES.FETCH_CUSTOMER_UPDATE_INFO:
      return {
        ...state,
        customerUpdateInfo: action.payload,
      };
    default:
      return { ...state };
  }
};

export default FormUpdate;


