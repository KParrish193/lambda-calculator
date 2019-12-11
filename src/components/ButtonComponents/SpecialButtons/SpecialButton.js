import React from "react";

const SpecialButton = props => {
  console.log(props);
  console.log();
  return (
    <button className="special-buttons">
      <span>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.button}
      </span>
    </button>
  );
};
export default SpecialButton;
