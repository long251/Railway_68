import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";

function UpdateFormFood(props) {
  // Gọi lại các props từ bên trên truyền xuống
  let { onHandleUpdateFood } = props;
  let stateRedux = useSelector((state) => state);
  let stateFoodUpdateInfoRedux = stateRedux.FormFoodUpdate.foodUpdateInfo;
  useEffect(() => {
    setFoodName(stateFoodUpdateInfoRedux.foodName);
    setPrice(stateFoodUpdateInfoRedux.price);
    setTypeId(stateFoodUpdateInfoRedux.typeId);
  }, []);
  // Khai báo State lưu trữ giá trị của các ô nhập liệu
  let [price, setPrice] = useState("");
  let [typeId, setTypeId] = useState("");
  let [foodName, setFoodName] = useState("");
  let handleUpdateFood = () => {
    let foodUpdate = {
      foodName: foodName,
      price: price,
      typeId: typeId,
    };
    onHandleUpdateFood(foodUpdate);
  };
  // Hàm xử lý khi click vào nút Reset
  let handleResetFood = () => {
    // Set lại State các ô nhập liệu về ""
    setPrice("");
    setTypeId("");
  };
  return (
    <Container>
      <Form>
        {/* foodName */}
        <FormGroup>
          <Label for="foodName">foodName: </Label>
          <Input
            id="foodName"
            placeholder="Input foodName"
            type="text"
            name="foodName"
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
            placeholder="Input price"
            type="text"
            name="price"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </FormGroup>

        {/* typeId */}
        <FormGroup>
          <Label for="typeId">TypeId: </Label>
          <Input
            id="typeId"
            placeholder="Input typeId"
            type="text"
            name="typeId"
            value={typeId}
            onChange={(event) => {
              setTypeId(event.target.value);
            }}
          />
        </FormGroup>
      </Form>
      {/* Nút xử lý */}
      <Button color="primary" onClick={handleUpdateFood}>
        Update
      </Button>
      <Button color="danger" onClick={handleResetFood}>
        Reset
      </Button>
    </Container>
  );
}

export default UpdateFormFood;
