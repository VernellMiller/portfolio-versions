import React, { useState } from "react";

const CheckBox = (props) => {
  const [selections, setSelections] = useState({
    selections: [],
  });

  const getSelectionHandler = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    console.log(event.target.value, value);

    setSelections((prevState) => {
      return { ...prevState, selections: event.target.value };
    });
  };

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
