import React, { useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";

function InputFormFood(props) {
  let { onHandleCreateNewFood } = props;
  //tạo biến lưu trữ
  let [foodName, setFoodName] = useState("");
  let [price, setPrice] = useState("");
  let [typeId, setTypeId] = useState("");
  let handleCreateFood = () => {
    let foodNew = {
      foodName: foodName,
      price: price,
      typeId: typeId,
    };
    onHandleCreateNewFood(foodNew);
  };
  let handleResetFood = () => {
    setFoodName("");
    setPrice("");
    setTypeId("");
  };
  return (
    <Container>
      <Form>
        {/* foodName */}
        <FormGroup>
          <Label for="foodName">FoodName: </Label>
          <Input
            id="foodName"
            name="foodName"
            placeholder="Input foodName"
            type="text"
            value={foodName}
            onChange={(event) => {
              setFoodName(event.target.value);
            }}
          />
        </FormGroup>

        {/* price */}
        <FormGroup>
          <Label for="price">Price: </Label>
          <Input
            id="price"
            name="price"
            placeholder="Input price"
            type="text"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </FormGroup>

        {/* typeId */}
        <FormGroup>
          <Label for="typeId">Phân loại: </Label>
          <Input
            id="typeId"
            name="typeId"
            placeholder="1=cá, 2=thịt, 3=rau, 4=fatFood"
            type="text"
            value={typeId}
            onChange={(event) => {
              setTypeId(event.target.value);
            }}
          />
        </FormGroup>
      </Form>
      {/* Nút xử lý */}
      <Button color="primary" onClick={handleCreateFood}>
        Create
      </Button>
      <Button color="danger" onClick={handleResetFood}>
        Reset
      </Button>
    </Container>
  );
}

export default InputFormFood;
