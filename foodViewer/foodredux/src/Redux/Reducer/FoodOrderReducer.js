import * as TYPES from "../Type/AllConstType";

let initialStateFoodOrder = [];

let FoodOrderReducer = (state = initialStateFoodOrder, action) => {
  switch (action.type) {
    case TYPES.FETCH_FOODORDER_LIST:
      state = action.payload;
      return [...state];
    default:
      return [...state];
  }
};

export default FoodOrderReducer;
