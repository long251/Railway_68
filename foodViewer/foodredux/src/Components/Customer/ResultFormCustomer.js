import React from "react";
import { Table, Container } from "reactstrap";
import ResultFormItemCustomer from "./ResultFormItemCustomer";

function ResultFormCustomer(props) {
  let { listCustomer, onHandleDelete, onHandleEdit } = props;
  return (
    <Container>
      <br />
      <h3>Danh sách Account</h3>
      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>fullName</th>
            <th>address</th>
            <th>email</th>
            <th>phone</th>

            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <ResultFormItemCustomer
            listCustomer={listCustomer}
            onHandleDelete={onHandleDelete}
            onHandleEdit={onHandleEdit}
          />
        </tbody>
      </Table>
    </Container>
  );
}

export default ResultFormCustomer;
