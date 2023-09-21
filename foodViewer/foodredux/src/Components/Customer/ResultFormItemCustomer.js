import React from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";

function ResultFormItemCustomer(props) {
  // let { listCustomer } = props;
  let { onHandleDelete, onHandleEdit } = props;
  let stateRedux = useSelector((state) => state);
  let listCustomer = stateRedux.listCustomer;
  let handleDelete = (id) => {
    onHandleDelete(id);
  };
  let handleEdit = (CustomerEdit) => {
    onHandleEdit(CustomerEdit);
  };
  let items = "";
  if (listCustomer) {
    items = listCustomer.map((customer, index) => {
      return (
        <tr key={index}>
          <td>{customer.id}</td>
          <td>{customer.username}</td>
          <td>{customer.fullName}</td>
          <td>{customer.address}</td>
          <td>{customer.email}</td>
          <td>{customer.phone}</td>
          <td>
            <Button color="warning" onClick={() => handleEdit(customer)}>
              Edit
            </Button>
          </td>
          <td>
            <Button
              color="warning"
              onClick={() => {
                handleDelete(customer.id);
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  }
  return items;
}

export default ResultFormItemCustomer;
