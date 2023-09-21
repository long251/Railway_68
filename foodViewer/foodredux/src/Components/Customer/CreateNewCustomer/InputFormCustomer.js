import React, { useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";

function InputFormCustomer(props) {
  let { onHandleCreateNewCustomer } = props;
  let [username, setUsername] = useState("");
  let [fullName, setFullName] = useState("");
  let [address, setAddress] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let handleCreateCustomer = () => {
    let customerNew = {
      username: username,
      fullName: fullName,
      address: address,
      email: email,
      phone: phone,
    };
    onHandleCreateNewCustomer(customerNew);
  };
  let handleReset = () => {
    setUsername("");
    setFullName("");
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
            name="username"
            placeholder="Input username"
            type="text"
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
            name="fullName"
            placeholder="Input fullName"
            type="text"
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </FormGroup>

        {/* address */}
        <FormGroup>
          <Label for="address">Address: </Label>
          <Input
            id="address"
            name="address"
            placeholder="Input address"
            type="text"
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
            name="email"
            placeholder="Input email"
            type="text"
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
            name="phone"
            placeholder="Input phone"
            type="text"
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
        </FormGroup>
      </Form>
      {/* Nút xử lý */}
      <Button color="primary" onClick={handleCreateCustomer}>
        Create
      </Button>
      <Button color="danger" onClick={handleReset}>
        Reset
      </Button>
    </Container>
  );
}

export default InputFormCustomer;
