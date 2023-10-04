import React from "react";
import Button from "react-bootstrap/Button";

const InputForm = ({ handleOnSubmit }) => {
  return (
    <div className="container mt-2r">
      <div>GitHub username:</div>
      <div>
        <form onSubmit={handleOnSubmit}>
          <input
            className="item-width"
            placeholder="e.g.facebook"
            type="text"
            name="user"
          ></input>
          <div className="mt-2r">
            <Button
              type="submit"
              className="item-width"
              variant="secondary"
              size="lg"
            >
              GO
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default InputForm;
