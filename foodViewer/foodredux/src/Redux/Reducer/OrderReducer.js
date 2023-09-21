import * as TYPES from "../Type/AllConstType";

let initialStateOrder = [];

let OrderReducer = (state = initialStateOrder, action) => {
  switch (action.type) {
    case TYPES.FETCH_ORDER_LIST:
      state = action.payload;
      return [...state];
    default:
      return [...state];
  }
};
let setListFoodOrder = (state = initialStateOrder, action) => {
  switch (action.type) {
    case TYPES.SET_LIST_FOODORDER:
      state = action.payload;
      return [...state];
    default:
      return [...state];
  }
};

export { OrderReducer, setListFoodOrder };
