import React, {useState} from "react";

//import any components needed

import OperatorButton from "../OperatorButtons/OperatorButton"

//Import your array data to from the provided data file
import {operators} from "../../../data";

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [opState, setOpState] = useState(operators);

  return (
    <div className="button_container">
      {/* Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component*/
      opState.map((button, index) => (
        <OperatorButton key={index} button={button.char} />
      ))}
    </div>
  );
};

export default Operators;