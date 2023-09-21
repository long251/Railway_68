import * as TYPES from "../Type/AllConstType";

let initialState = {
  isShowFormUpdateFood: false,
  foodUpdateInfo: {},
};
const FormFoodUpdate = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.TOGLE_FORM_FOOD_UPDATE:
      return {
        ...state,
        isShowFormUpdateFood: !state.isShowFormUpdateFood,
      };
    case TYPES.FETCH_FOOD_UPDATE_INFO:
      return {
        ...state,
        foodUpdateInfo: action.payload,
      };
    default:
      return { ...state };
  }
};

export default FormFoodUpdate;
