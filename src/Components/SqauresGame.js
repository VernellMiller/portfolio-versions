import React, { useState } from "react";
import DateTime from "./DateTime";
import CheckBox from "../Components/CheckBox";

const SquaresGame = (props) => {
  const [player, setPlayer] = useState({ userName: "" });

  const [selections, setSelections] = useState({
    selections: [],
  });

  const getUserNameHandler = (event) => {
    setPlayer((prevState) => {
      return { ...prevState, userName: event.target.value };
    });
  };

  const getSelectionHandler = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    // console.log(event.target.value, value);

    setSelections((prevState) => {
      return { ...prevState, selections: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(player);
  };

  return (
    <>
      <div className="mt-5">
        <h1>Lets Play</h1>
        <input
          className="mt-3 border"
          type="text"
          onChange={getUserNameHandler}
          placeholder="enter name here"
          id="name"
        />
        <DateTime />

        <h1>Hello, {player.userName}</h1>
        {/* <p>The checkbox is {isChecked ? "checked" : "unchecked"}</p> */}

        <form onSubmit={submitHandler}>
          <div className="checkBoxes mt-3">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic checkbox toggle button group"
            >
              <CheckBox onChange={getSelectionHandler} />
              <input
                type="submit"
                className="btn mt-3"
                id="submit"
                value="Lock It In"
              />
            </div>
          </div>
        </form>
        {/* <p>your numbers are: {player.userSelection1}</p> */}
      </div>
    </>
  );
};

export default SquaresGame;
