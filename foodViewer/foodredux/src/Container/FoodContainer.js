import React, { useEffect } from "react";
import { Container } from "reactstrap";
import CreateButtonFood from "../Components/Food/CreateButtonFood";
import ResultFormFood from "../Components/Food/ResultFormFood";
import ModalCreateNewFood from "../Components/Food/CreateNewFood/ModalCreateNewFood";
import { useDispatch, useSelector } from "react-redux";
import {
  closeFormFoodAction,
  showFormFoodAction,
} from "../Redux/Action/FormAction";
import {
  actionFetchListFoodAPI,
  actionAddFoodAPI,
  actionDeleteFoodAPI,
  actionUpdateFoodtAPI,
} from "../Redux/Action/FoodAction";
import {
  actionFetchFoodUpdateInfoRedux,
  actionToggleFormFoodRedux,
} from "../Redux/Action/UpdateFormFoodAction";
import ModalUpdateFood from "../Components/Food/UpdateFood/ModalUpdateFood";
function FoodContainer(props) {
  // let [showFormFood, setShowFormFood] = useState(false);
  let dispatchRedux = useDispatch();
  let onHandleCreateButtonFood = () => {
    // setShowFormFood(true);
    dispatchRedux(showFormFoodAction());
  };
  let onHandleCloseModal = () => {
    // setShowFormFood(false);
    dispatchRedux(closeFormFoodAction());
  };
  // let [listFood, setListFood] = useState([]);
  let onHandleCreateNewFood = (FoodNew) => {
    let foodNew_API = {
      foodName: FoodNew.foodName,
      price: FoodNew.price,
      typeId: FoodNew.typeId,
    };
    // addNewFoodAPI(foodNew_API).then((res) => {
    //   // fetchListFood();
    // });
    dispatchRedux(actionAddFoodAPI(foodNew_API));
    // setShowFormFood(false);
    dispatchRedux(closeFormFoodAction());
  };
  useEffect(() => {
    // fetchListFood();
    dispatchRedux(actionFetchListFoodAPI());
  }, []);
  let onHandleDeleteFood = (id) => {
    dispatchRedux(actionDeleteFoodAPI(id));
  };
  let stateRedux = useSelector((state) => state);

  let onHandleUpdateFood = async (foodUpdateForm) => {
    let id_Update = stateRedux.FormFoodUpdate.foodUpdateInfo.id;
    let foodUpdate_API = {
      id: id_Update,
      food_Update: foodUpdateForm,
    };
    await dispatchRedux(actionUpdateFoodtAPI(foodUpdate_API));
    await dispatchRedux(actionToggleFormFoodRedux());
    await dispatchRedux(actionFetchListFoodAPI());
  };
  let onHandleEditFood = (foodEdit) => {
    dispatchRedux(actionFetchFoodUpdateInfoRedux(foodEdit));
    dispatchRedux(actionToggleFormFoodRedux());
  };
  return (
    <Container>
      {/* Nút thêm mới */}
      <CreateButtonFood onHandleCreateButtonFood={onHandleCreateButtonFood} />
      {/* bảng Modal */}
      <ModalCreateNewFood
        // showFormFood={showFormFood}
        onHandleCloseModal={onHandleCloseModal}
        onHandleCreateNewFood={onHandleCreateNewFood}
      />
      <ModalUpdateFood onHandleUpdateFood={onHandleUpdateFood} />
      {/* Form kết quả */}
      <ResultFormFood
        // listFood={listFood}
        onHandleDeleteFood={onHandleDeleteFood}
        onHandleEditFood={onHandleEditFood}
      />
    </Container>
  );
}
export default FoodContainer;
