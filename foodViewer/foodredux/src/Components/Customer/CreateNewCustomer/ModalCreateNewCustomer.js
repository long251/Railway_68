import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";
import InputFormCustomer from "./InputFormCustomer";
import { useSelector } from "react-redux";

function ModalCreateNewCustomer(props) {
  let { onHandleCloseModal, onHandleCreateNewCustomer } = props;
  let handleCloseModal = () => {
    onHandleCloseModal();
  };
  let stateRedux = useSelector((state) => state);
  let showForm = stateRedux.showForm;
  return (
    <Container>
      <br />
      <Modal isOpen={showForm}>
        <ModalHeader>
          <h3>Create New Customer</h3>
        </ModalHeader>
        <ModalBody>
          <InputFormCustomer
            onHandleCreateNewCustomer={onHandleCreateNewCustomer}
          />
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

export default ModalCreateNewCustomer;
