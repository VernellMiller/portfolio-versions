import React from "react";

const CheckBox = (props) => {
  const checkBoxInfo = [];
  for (let i = 1; i < 145; i++) {
    checkBoxInfo.push(i);
  }
  console.log(checkBoxInfo);

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
          onChange={props.getSelectionHandler}
        />
        <label
          className="btn btn-outline-secondary border"
          htmlFor={counter}
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "#00d6cc",
          }}
        ></label>
      </div>
    );
  };
  return <>{checkBoxInfo.map(renderCheckBox)}</>;
};

export default CheckBox;
