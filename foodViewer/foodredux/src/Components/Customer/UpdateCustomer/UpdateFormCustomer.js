import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";

function UpdateFormCustomer(props) {
  // Gọi lại các props từ bên trên truyền xuống
  let { onHandleUpdateCustomer } = props;
  // Khai báo State lưu trữ giá trị của các ô nhập liệu
  let [address, setAddress] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [username, setUsername] = useState("");
  let [fullName, setFullName] = useState("");

  // Lấy các State từ Redux
  let stateRedux = useSelector((state) => state);
  let stateCustomerUpdateInfoRedux = stateRedux.FormUpdate.customerUpdateInfo;
  // Gọi useEffect
  useEffect(() => {
    // // Tìm depID
    // let depId = listDepartment.find(
    //   (department) => department.name === stateAccountUpdateInfoRedux.department
    // ).id;
    setUsername(stateCustomerUpdateInfoRedux.username);
    setFullName(stateCustomerUpdateInfoRedux.fullName);
    setAddress(stateCustomerUpdateInfoRedux.address);
    setEmail(stateCustomerUpdateInfoRedux.email);
    setPhone(stateCustomerUpdateInfoRedux.phone);
  }, []);

  // Hàm xử lý khi click vào nút Create
  let handleUpdateCustomer = () => {
    console.log("abc");
    let customerUpdate = {
      username: username,
      fullName: fullName,
      address: address,
      email: email,
      phone: phone,
    };
    onHandleUpdateCustomer(customerUpdate);
  };
  // Hàm xử lý khi click vào nút Reset
  let handleResetCustomer = () => {
    // Set lại State các ô nhập liệu về ""
    setAddress("");
    setEmail("");
    setPhone("");
  };
  return (
    <Container>
      <Form>
        {/* username */}
        <FormGroup>
          <Label for="username">Username: </Label>
          <Input
            id="username"
            placeholder="Input username"
            type="text"
            name="username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </FormGroup>

        {/* fullName */}
        <FormGroup>
          <Label for="fullName">FullName: </Label>
          <Input
            id="fullName"
            placeholder="Input fullName"
            type="text"
            name="fullName"
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </FormGroup>

        {/* Address */}
        <FormGroup>
          <Label for="address">Address: </Label>
          <Input
            id="address"
            placeholder="Input address"
            type="text"
            name="address"
            value={address}
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
        </FormGroup>

        {/* email */}
        <FormGroup>
          <Label for="email">Email: </Label>
          <Input
            id="email"
            placeholder="Input email"
            type="text"
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </FormGroup>

        {/* phone */}
        <FormGroup>
          <Label for="phone">Phone: </Label>
          <Input
            id="phone"
            placeholder="Input phone"
            type="text"
            name="phone"
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
        </FormGroup>
      </Form>
      {/* Nút xử lý */}
      <Button color="primary" onClick={handleUpdateCustomer}>
        Update
      </Button>
      <Button color="danger" onClick={handleResetCustomer}>
        Reset
      </Button>
    </Container>
  );
}
export default UpdateFormCustomer;
