import React from "react";

const CheckBox = () => {
  return (
    <div className="container">
      <input type="checkbox" className="btn-check" id="btncheck1" />
      <label
        className="btn btn-outline-secondary border"
        htmlFor="btncheck1"
      ></label>
    </div>
  );
};

export default CheckBox;
