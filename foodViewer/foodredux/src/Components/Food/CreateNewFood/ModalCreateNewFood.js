import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";

import InputFormFood from "./InputFormFood";
import { useSelector } from "react-redux";

function ModalCreateNewFood(props) {
  let { onHandleCloseModal, onHandleCreateNewFood } = props;
  let handleCloseModal = () => {
    onHandleCloseModal();
  };
  let stateRedux = useSelector((state) => state);
  let showFormFood = stateRedux.showForm;
  return (
    <Container>
      <br />
      <Modal isOpen={showFormFood}>
        <ModalHeader>
          <h3>Create Food</h3>
        </ModalHeader>
        <ModalBody>
          <InputFormFood onHandleCreateNewFood={onHandleCreateNewFood} />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleCloseModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalCreateNewFood;
