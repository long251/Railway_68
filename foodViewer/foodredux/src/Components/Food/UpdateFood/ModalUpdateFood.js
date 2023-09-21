import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";
import UpdateFormFood from "./UpdateFormFood";
import { useDispatch, useSelector } from "react-redux";
import { actionToggleFormFoodRedux } from "../../../Redux/Action/UpdateFormFoodAction";

function ModalUpdateFood(props) {
  // Gọi lại các props truyền từ bên ngoài vào
  let { onHandleUpdateFood } = props;
  let dispatchRedux = useDispatch();
  let stateRedux = useSelector((state) => state.FormFoodUpdate);
  let isOpen = stateRedux.isShowFormUpdateFood;
  let handleCloseModalFood = () => {
    dispatchRedux(actionToggleFormFoodRedux());
  };
  //
  return (
    <Container>
      <br />
      <Modal isOpen={isOpen}>
        <ModalHeader>
          <h3>Update Food</h3>
        </ModalHeader>
        <ModalBody>
          <UpdateFormFood onHandleUpdateFood={onHandleUpdateFood} />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleCloseModalFood}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalUpdateFood;
