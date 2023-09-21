import * as TYPES from "../Type/AllConstType";

let initialStateFoodType = [];

let FoodTypeReducer = (state = initialStateFoodType, action) => {
  switch (action.type) {
    case TYPES.FETCH_FOODTYPE_LIST:
      state = action.payload;
      return [...state];
    default:
      return [...state];
  }
};

export default FoodTypeReducer;
