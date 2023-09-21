import * as TYPES from "../Type/AllConstType";

//customer
// action dùng mở Modal InputForm
export const showFormAction = () => {
  return {
    type: TYPES.SHOW_FORM, //
  };
};
// action dùng đóng Modal InputForm
export const closeFormAction = () => {
  return {
    type: TYPES.CLOSE_FORM,
  };
};

//food
export const showFormFoodAction = () => {
  return {
    type: TYPES.SHOW_FORM_FOOD, 
  };
};
export const closeFormFoodAction = () => {
  return {
    type: TYPES.CLOSE_FORM_FOOD,
  };
};