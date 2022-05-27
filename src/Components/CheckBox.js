import React, { useState, useEffect } from "react";
const max = 4;
// const checkIfWinner = function (arr1, arr2) {
//   arr1.sort();
//   arr2.sort();

//   let str1 = arr1.join("");
//   let str2 = arr2.join("");
//   console.log(str1);
//   console.log(str2);

//   result =
//     str1 == str2
//       ? "You are a winner Today"
//       : "Your selections do not match today. Try again Tomorrow.";

//   console.log(result);
//   return result;
// };
const CheckBox = (props) => {
  const [selections, setSelections] = useState([]);

  // const [selection1, setSelection1] = useState("");
  // const [selection2, setSelection2] = useState("");
  // const [selection3, setSelection3] = useState("");
  // const [selection4, setSelection4] = useState("");

  // const selections = [];

  const getSelectionHandler = (event) => {
    let newSelections = [...selections];

    if (newSelections.some((item) => item === event.target.value)) {
      newSelections = newSelections.filter(
        (item) => item !== event.target.value
      );
    } else if (newSelections.length < max) {
      newSelections.push(event.target.value);
      // checkIfWinner(newSelections, winning);
    }
    setSelections(newSelections);
  };

  const checkBoxInfo = [];
  for (let i = 1; i < 145; i++) {
    checkBoxInfo.push(i);
  }
  // console.log(checkBoxInfo);
  console.log("I was rendered!");
  const renderCheckBox = (data, index) => {
    const counter = `btncheck${data}`;
    console.log(
      selections.some((value) => value == data),
      data,
      selections
    );
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
          checked={selections.some((value) => value == data)}
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
