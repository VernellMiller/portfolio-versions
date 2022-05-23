import React, { useState } from "react";

const CheckBox = (props) => {
  // const [selections, setSelections] = useState({
  //   selections: [],
  // });

  const [selection1, setSelection1] = useState("");
  const [selection2, setSelection2] = useState("");
  const [selection3, setSelection3] = useState("");
  const [selection4, setSelection4] = useState("");

  const selections = [];

  const getSelectionHandler = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    console.log(event.target.value, value);
    // setSelections((prevState) => {
    //   return { ...prevState, selections: event.target.value };
    // });

    if (selection1 === "") {
      setSelection1(event.target.value);
    } else if (selection2 === "") {
      setSelection2(event.target.value);
    } else if (selection3 === "") {
      setSelection3(event.target.value);
    } else {
      setSelection4(event.target.value);
    }
  };
  selections.push(selection1, selection2, selection3, selection4);
  console.log(selections);

  const checkBoxInfo = [];
  for (let i = 1; i < 145; i++) {
    checkBoxInfo.push(i);
  }
  // console.log(checkBoxInfo);

  const renderCheckBox = (data, index) => {
    const counter = `btncheck${data}`;
    return (
      <div
        key={data}
        className="col btn-group"
        id="boxes"
        role="group"
        aria-label="Basic checkbox toggle button group"
      >
        <input
          type="checkbox"
          className="checkBoxes btn-check"
          id={counter}
          value={data}
          onChange={getSelectionHandler}
        />
        <label
          className="btn btn-outline-secondary border"
          htmlFor={counter}
        ></label>
      </div>
    );
  };
  return <>{checkBoxInfo.map(renderCheckBox)}</>;
};

export default CheckBox;
