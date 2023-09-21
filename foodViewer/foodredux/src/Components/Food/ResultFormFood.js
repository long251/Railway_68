import React from "react";
import { Table, Container } from "reactstrap";
import ResultFormItemFood from "./ResultFormItemFood";

function ResultFormFood(props) {
  let { listFood, onHandleDeleteFood, onHandleEditFood } = props;
  return (
    <Container>
      <br />
      <h3>LIST FOOD</h3>
      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>foodName</th>
            <th>Price</th>
            <th>Phân loại</th>

            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <ResultFormItemFood 
          listFood={listFood} 
          onHandleDeleteFood={onHandleDeleteFood}
          onHandleEditFood={onHandleEditFood}/>
        </tbody>
      </Table>
    </Container>
  );
}

export default ResultFormFood;
