import React, { useState } from "react";
import DateTime from "./DateTime";
import CheckBox from "../Components/CheckBox";

const SquaresGame = (props) => {
  const [player, setPlayer] = useState({ userName: "" });

  const getUserNameHandler = (event) => {
    setPlayer((prevState) => {
      return { ...prevState, userName: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(player);
  };

  return (
    <>
      <div className="mt-5 border-bottom">
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

        <form onSubmit={submitHandler}>
          <div className="checkBoxes mt-3">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic checkbox toggle button group"
            >
              <CheckBox />
              {/* <input
                type="submit"
                className="btn mt-3"
                id="submit"
                value="Lock It In"
              /> */}
            </div>
          </div>
        </form>
        <h1 className="mt-5" id="messages">
          Make Your 4 Selections
        </h1>
      </div>
    </>
  );
};

export default SquaresGame;
