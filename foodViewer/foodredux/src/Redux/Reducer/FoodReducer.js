import * as TYPES from "../Type/AllConstType";

let initialStateFood = [];

let FoodReducer = (state = initialStateFood, action) => {
  switch (action.type) {
    case TYPES.FETCH_FOOD_LIST:
      state = action.payload;
      return [...state];

    case TYPES.DELETE_FOOD:
      console.log("payload: ", action.payload);
      let idDelete = action.payload;
      let listFoodState = state;
      let indexDelete = listFoodState.findIndex((food) => food.id === idDelete);
      listFoodState.splice(indexDelete, 1);
      state = listFoodState;
      return [...state];
    default:
      return [...state];
  }
};

export default FoodReducer;
