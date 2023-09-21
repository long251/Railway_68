import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";


import UpdateFormCustomer from "./UpdateFormCustomer";
import { useDispatch, useSelector } from "react-redux";
import { actionTogleFormRedux } from "../../../Redux/Action/UpdateFormAction";
function ModalUpdateFormCustomer(props) {
  // Gọi lại các props truyền từ bên ngoài vào
  let { onHandleUpdateCustomer } = props;
  // Lấy giá trị State đang lưu trên Redux để sử dụng
  // Hàm xử lý khi nhấn nút Close
  let dispatchRedux = useDispatch();
  let stateRedux = useSelector((state)=>state.FormUpdate);
  let isOpen = stateRedux.isShowFormUpdate;
  let handleCloseModalUpdateCustomer = () => {
    dispatchRedux(actionTogleFormRedux());
  };
  return (
    <Container>
      <br />
      <Modal isOpen={isOpen}>
        <ModalHeader>
          <h3>Update Account</h3>
        </ModalHeader>
        <ModalBody>
          <UpdateFormCustomer onHandleUpdateCustomer={onHandleUpdateCustomer} />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleCloseModalUpdateCustomer}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}


export default ModalUpdateFormCustomer;
