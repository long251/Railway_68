import React, { useEffect } from "react";
import { Container } from "reactstrap";
import CreateButtonCustomer from "../Components/Customer/CreateButtonCustomer";
import ResultFormCustomer from "../Components/Customer/ResultFormCustomer";
import ModalCreateNewCustomer from "../Components/Customer/CreateNewCustomer/ModalCreateNewCustomer";
// import { addNewCustomerAPI } from "../API/CustomerAPI";
import { useDispatch, useSelector } from "react-redux";
import { closeFormAction, showFormAction } from "../Redux/Action/FormAction";
import {
  actionFetchListCustomerAPI,
  actionAddNewCustomerAPI,
  actionDeleteCustomerAPI,
  actionUpdateCustomerAPI,
} from "../Redux/Action/CustomerAction";
import ModalUpdateFormCustomer from "../Components/Customer/UpdateCustomer/ModalUpdateFormCustomer";
import {
  actionFetchCustomerUpdateInfoRedux,
  actionTogleFormRedux,
} from "../Redux/Action/UpdateFormAction";

function CustomerContainer(props) {
  // let [showForm, setShowForm] = useState(false);
  let dispatchRedux = useDispatch();
  //
  let stateRedux = useSelector((state) => state);
  //
  let onHandleUpdateCustomer = async (customerUpdateForm) => {
    let id_Update = stateRedux.FormUpdate.customerUpdateInfo.id;
    let customerUpdate_API = {
      id: id_Update,
      customer_Update: customerUpdateForm,
    };
    await dispatchRedux(actionUpdateCustomerAPI(customerUpdate_API));
    await dispatchRedux(actionTogleFormRedux());
    await dispatchRedux(actionFetchListCustomerAPI());
  };

  let onHandleCreateButton = () => {
    // setShowForm(true);
    dispatchRedux(showFormAction());
  };
  let onHandleCloseModal = () => {
    dispatchRedux(closeFormAction());
  };
  // let [listCustomer, setListCustomer] = useState([]);

  let onHandleCreateNewCustomer = (customerNew) => {
    let customerNew_API = {
      username: customerNew.username,
      fullName: customerNew.fullName,
      address: customerNew.address,
      email: customerNew.email,
      phone: customerNew.phone,
    };
    // addNewCustomerAPI(customerNew_API).then((res) => {
    //   // fetchListCustomer();
    //   dispatchRedux(closeFormAction());
    // });
    dispatchRedux(actionAddNewCustomerAPI(customerNew_API));
    dispatchRedux(closeFormAction());
  };
  // let fetchListCustomer = function () {
  //   getListCustomerAPI().then((res) => {
  //     setListCustomer(res);
  //   });
  // };
  let onHandleDelete = (id) => {
    dispatchRedux(actionDeleteCustomerAPI(id));
  };
  useEffect(() => {
    // fetchListCustomer();
    dispatchRedux(actionFetchListCustomerAPI());
  }, []);
  let onHandleEdit = (customerEdit) => {
    dispatchRedux(actionFetchCustomerUpdateInfoRedux(customerEdit));
    dispatchRedux(actionTogleFormRedux());
  };
  return (
    <Container>
      {/* Nút thêm mới */}
      <CreateButtonCustomer onHandleCreateButton={onHandleCreateButton} />
      {/* ModalCreateNewCustomer */}
      <ModalCreateNewCustomer
        // showForm={showForm}
        onHandleCloseModal={onHandleCloseModal}
        onHandleCreateNewCustomer={onHandleCreateNewCustomer}
      />
      <ModalUpdateFormCustomer
        onHandleUpdateCustomer={onHandleUpdateCustomer}
      />
      {/* Form kết quả */}
      <ResultFormCustomer
        // listCustomer={listCustomer}
        onHandleDelete={onHandleDelete}
        onHandleEdit={onHandleEdit}
      />
    </Container>
  );
}
export default CustomerContainer;
