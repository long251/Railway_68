import { useDispatch } from "react-redux";
import "./App.css";
// import CustomerPage from "./Page/CustomerPage";
// import FoodPage from "./Page/FoodPage";
import Menu from "./Components/Menu/Menu";
import { routes } from "./Router/routes";
import { useEffect } from "react";
import {
  actionFetchListFoodTypeAPI,
} from "./Redux/Action/FoodTypeAction";
import {
  actionFetchListFoodAPI,
} from "./Redux/Action/FoodAction";

function App() {
  let dispatchRedux = useDispatch();
  useEffect(() => {
    dispatchRedux(actionFetchListFoodTypeAPI());
    dispatchRedux(actionFetchListFoodAPI());
  }, []);
  return (
    <div className="App">
      <Menu />
      {routes}
      {/* <CustomerPage />
      <FoodPage /> */}
    </div>
  );
}

export default App;
