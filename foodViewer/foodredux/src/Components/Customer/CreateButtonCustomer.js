import React from "react";
import { Container, Button } from "reactstrap";

function CreateButtonCustomer(props) {
    let {onHandleCreateButton} = props;
    let handleCreateNewCustomer =()=>{
        onHandleCreateButton();
    }
  return (
    <Container>
      <br />
      <Button color="primary" onClick={handleCreateNewCustomer}>Create New Account</Button>
    </Container>
  );
}

export default CreateButtonCustomer;
