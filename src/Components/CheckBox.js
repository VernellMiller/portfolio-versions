import React, { useState } from "react";

const max = 4;

let result = "";
const winningNumbers = [];

const getWinningNumber = () => {
  const randomNumber = Math.floor(Math.random() * 145);
  if (winningNumbers.includes(randomNumber)) {
    return getWinningNumber();
  }
  return randomNumber;
};

for (let i = 0; i < 4; i++) {
  let winningNumber = getWinningNumber();
  winningNumbers.push(winningNumber);
}
// console.log(winningNumbers);

const checkIfWinner = function (arr1, arr2) {
  arr1.sort();
  arr2.sort();

  let str1 = arr1.join("");
  let str2 = arr2.join("");
  // console.log(str1);
  // console.log(str2);

  result =
    str1 == str2
      ? (document.getElementById("messages").innerHTML =
          "You are a winner Today. Congratulations!")
      : (document.getElementById("messages").innerHTML =
          "Your selections do not match. Make sure you have 4 selections or try a new combination.");
  return result;
};

const CheckBox = (props) => {
  const [selections, setSelections] = useState([]);

  const getSelectionHandler = (event) => {
    let newSelections = [...selections];

    if (newSelections.some((item) => item === event.target.value)) {
      newSelections = newSelections.filter(
        (item) => item !== event.target.value
      );
    } else if (newSelections.length < max) {
      newSelections.push(event.target.value);
      checkIfWinner(newSelections, winningNumbers);
    }
    setSelections(newSelections);
  };

  const checkBoxInfo = [];
  for (let i = 1; i < 145; i++) {
    checkBoxInfo.push(i);
  }
  // console.log(checkBoxInfo);
  // console.log("I was rendered!");

  const renderCheckBox = (data, index) => {
    const counter = `btncheck${data}`;
    // console.log(
    //   selections.some((value) => value == data),
    //   data,
    //   selections
    // );
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
        <label className="btn btn-outline-secondary border" htmlFor={counter}>
          {/* {data} */}
        </label>
      </div>
    );
  };
  return <>{checkBoxInfo.map(renderCheckBox)}</>;
};

export default CheckBox;
