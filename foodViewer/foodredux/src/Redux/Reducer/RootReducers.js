import { combineReducers } from "redux";
import FormReducer from "./FormReducer";
import CustomerReducer from "./CustomerReducer";
import FoodReducer from "./FoodReducer";
import FormUpdate from "./UpdateFormReducer";
import FormFoodUpdate from "./UpdateFormFoodReducer";
import FoodTypeReducer from "./FoodTypeReducer";
import { OrderReducer, setListFoodOrder } from "./OrderReducer";
import FoodOrderReducer from "./FoodOrderReducer";

const RootReducers = combineReducers({
  showForm: FormReducer,
  listCustomer: CustomerReducer,
  listFood: FoodReducer,
  listFoodType: FoodTypeReducer,
  FormUpdate: FormUpdate,
  FormFoodUpdate: FormFoodUpdate,
  listOrder: OrderReducer,
  listFoodOrder: FoodOrderReducer,
  listFoodOrderNew: setListFoodOrder,
});
export default RootReducers;
