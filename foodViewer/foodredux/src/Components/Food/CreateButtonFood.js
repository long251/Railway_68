import React from "react";
import { Container, Button } from "reactstrap";

function CreateButtonFood(props) {
  let { onHandleCreateButtonFood } = props;

  let handleCreateNewFood = () => {
    onHandleCreateButtonFood();
  };
  return (
    <Container>
      <br />
      <Button color="primary" onClick={handleCreateNewFood}>
        Create Food
      </Button>
    </Container>
  );
}

export default CreateButtonFood;
