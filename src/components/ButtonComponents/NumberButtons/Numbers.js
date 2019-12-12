import React, {useState} from "react";
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
import NumberButton from "../NumberButtons/NumberButton";
import { numbers } from "../../../data";

//Import your array data to from the provided data file

export default function Numbers(props) {
  // STEP 2 - add the imported data to state
  const [numState, setNumState] = useState(numbers)

  return (
      <div className="button_container">
        {/* Use .map() to iterate over your array data and return a button
        component matching the name on the provided file. Pass
        it any props needed by the child component*/
        numState.map((button, index) => (
          <NumberButton key={index} button={button} addNumber={props.addNumber}/>
        ))}
      </div>
  
  );
};




