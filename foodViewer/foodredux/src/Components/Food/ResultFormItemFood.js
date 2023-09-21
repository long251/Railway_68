import React from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";

function ResultFormItemFood(props) {
  let { onHandleDeleteFood, onHandleEditFood } = props;
  let handleDeleteFood = (id) => {
    onHandleDeleteFood(id);
  };
  let HandleEditFood = (foodEdit) => {
    onHandleEditFood(foodEdit);
  };
  let stateRedux = useSelector((state) => state);
  let listFood = stateRedux.listFood;
  let itemss = "";
  if (listFood) {
    itemss = listFood.map((food, index) => {
      return (
        <tr key={index}>
          <td>{food.id}</td>
          <td>{food.foodName}</td>
          <td>{food.price}</td>
          <td>{food.typeName}</td>

          <td>
            <Button color="warning" onClick={() => HandleEditFood(food)}>
              Edit
            </Button>
          </td>
          <td>
            <Button
              color="warning"
              onClick={() => {
                handleDeleteFood(food.id);
                console.log("foodId", food.id);
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  }
  return itemss;
}

export default ResultFormItemFood;
