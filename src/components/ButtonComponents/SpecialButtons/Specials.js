import React, {useState} from "react";

//import any components needed
import SpecialButton from "../SpecialButtons/SpecialButton";

//Import your array data to from the provided data file
import { specials } from "../../../data";

const Specials = props => {
  // STEP 2 - add the imported data to state
  const [specialsState, setSpecialsState] = useState(specials)

  return (
    <div className="button_container">
      {/* Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component*/
      specialsState.map((button, index) => (
        <SpecialButton key={index} button={button} />
      ))}
    </div>
);
};

export default Specials;