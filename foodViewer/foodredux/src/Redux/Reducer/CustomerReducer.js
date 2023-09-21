import * as TYPES from "../Type/AllConstType"; // Import AllConstType đê sử dụng

let initialState = [];

const CustomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_CUSTOMER_LIST:
      //   console.log("payload: ", action.payload);
      state = action.payload;
      return [...state];

    case TYPES.DELETE_CUSTOMER:
      console.log("payload: ", action.payload);
      let idDelete = action.payload;
      let listCustomerState = state;
      let indexDelete = listCustomerState.findIndex(
        (customer) => customer.id === idDelete
      );
      listCustomerState.splice(indexDelete, 1);
      state = listCustomerState;
      return [...state];

    default:
      return [...state];
  }
};

export default CustomerReducer;
