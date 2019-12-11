import React from "react";

const OperatorButton = props => {
  console.log(props);
  console.log();
  return (
    <button className="operator-button">
      <span>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.button}
      </span>
    </button>
  );
};
export default OperatorButton;
