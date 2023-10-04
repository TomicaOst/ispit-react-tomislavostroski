import React from "react";
import Button from "react-bootstrap/Button";

const InputForm = ({ handleOnSubmit }) => {
  return (
    <div>
      <span>Github username:</span>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="user"></input>
        <div>
          <Button variant="secondary" size="lg">
            GO
          </Button>
        </div>
      </form>
    </div>
  );
};
export default InputForm;
