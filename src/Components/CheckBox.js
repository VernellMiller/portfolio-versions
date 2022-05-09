import React from "react";

const CheckBox = () => {
  const checkBoxInfo = [];

  //   let x = 0;

  //     while (x < 144) {
  //       checkBoxInfo.push({});
  //       x++;
  //     }
  //     console.log(checkBoxInfo);

  for (let i = 0; i < 144; i++) {
    checkBoxInfo.push({});
  }
  console.log(checkBoxInfo);

  const renderCheckBox = (index) => {
    return (
      <>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic checkbox toggle button group"
        >
          <input
            // key={index}
            type="checkbox"
            className="checkBoxes btn-check"
            id="btncheck1"
            value="1"
          />
          <label
            className="btn btn-outline-secondary border"
            //   htmlFor="btncheck1"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#00d6cc",
            }}
          ></label>
        </div>
      </>
    );
  };
  return <>{checkBoxInfo.map(renderCheckBox)}</>;
};

export default CheckBox;
