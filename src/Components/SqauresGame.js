import React, { useState } from "react";
import DateTime from "./DateTime";

const SquaresGame = () => {
  const [player, setPlayer] = useState({
    userName: "",
    selection1: "",
    selection2: "",
    selection3: "",
    selection4: "",
  });

  const getUserNameHandler = (event) => {
    console.log(event.target.value);
    setPlayer((prevState) => {
      return { ...prevState, userName: event.target.value };
    });
  };

  const getSelectionHandler = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    console.log(event.target.value, value);

    setPlayer((prevState) => {
      return { ...prevState, selection1: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(player);
    // const player = {
    //   userName: "",
    //   selection1: "",
    //   selection2: "",
    //   selection3: "",
    //   selection4: "",
    // };
  };

  return (
    <>
      <div className="mt-5">
        <h1>Lets Play</h1>
        <input
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
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck1"
                // checked={isChecked}
                onChange={getSelectionHandler}
                value="1"
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck1"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck2"
                onChange={getSelectionHandler}
                value="2"
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck2"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck3"
                onChange={getSelectionHandler}
                value="3"
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck3"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck4"
                onChange={getSelectionHandler}
                value="4"
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck4"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck5"
                onChange={getSelectionHandler}
                value="5"
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck5"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck6"
                onChange={getSelectionHandler}
                value="6"
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck6"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck7"
                onChange={getSelectionHandler}
                value="7"
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck7"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck8"
                onChange={getSelectionHandler}
                value="8"
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck8"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck9"
                onChange={getSelectionHandler}
                value="9"
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck9"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck10"
                onChange={getSelectionHandler}
                value="10"
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck10"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck11"
                onChange={getSelectionHandler}
                value="11"
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck11"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck12"
                onChange={getSelectionHandler}
                value="12"
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck12"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck13"
                onChange={getSelectionHandler}
                value="13"
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck13"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck14"
                onChange={getSelectionHandler}
                value="14"
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck14"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck15"
                onChange={getSelectionHandler}
                value="15"
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck15"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck16"
                onChange={getSelectionHandler}
                value="16"
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck16"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck17"
                onChange={getSelectionHandler}
                value="17"
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck17"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck18"
                onChange={getSelectionHandler}
                value="18"
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck18"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck19"
                onChange={getSelectionHandler}
                value="19"
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck19"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck20"
                onChange={getSelectionHandler}
                value="20"
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck20"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck21"
                onChange={getSelectionHandler}
                value="21"
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck21"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck22"
                onChange={getSelectionHandler}
                value="22"
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck22"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck23"
                onChange={getSelectionHandler}
                value="23"
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck23"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck24"
                onChange={getSelectionHandler}
                value="24"
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck24"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck25"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck25"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck26"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck26"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck27"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck27"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck28"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck28"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck29"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck29"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck30"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck30"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck31"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck31"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck32"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck32"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck33"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck33"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck34"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck34"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck35"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck35"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck36"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck36"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck37"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck37"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck38"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck38"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck39"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck39"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck40"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck40"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck41"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck41"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck42"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck42"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck43"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck43"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck44"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck44"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck45"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck45"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck46"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck46"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck47"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck47"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck48"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck48"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck49"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck49"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck50"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck50"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck51"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck51"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck52"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck52"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck53"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck53"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck54"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck54"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck55"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck55"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck56"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck56"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck57"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck57"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck58"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck58"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck59"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck59"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck60"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck60"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck61"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck61"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck62"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck62"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck63"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck63"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck64"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck64"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck65"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck65"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck66"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck66"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck67"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck67"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck68"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck68"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck69"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck69"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck70"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck70"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck71"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck71"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck72"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck72"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck73"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck73"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck74"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck74"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck75"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck75"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck76"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck76"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck77"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck77"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck78"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck78"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck79"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck79"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck80"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck80"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck81"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck81"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck82"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck82"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck83"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck83"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck84"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck84"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck85"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck85"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck86"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck86"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck87"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck87"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck88"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck88"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck89"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck89"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck90"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck90"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck91"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck91"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck92"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck92"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck93"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck93"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck94"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck94"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck95"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck95"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck96"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck96"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck97"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck97"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck98"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck98"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck99"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck99"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck100"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck100"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck101"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck101"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck102"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck102"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck103"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck103"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck104"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck104"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck105"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck105"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck106"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck106"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck107"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck107"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck108"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck108"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck109"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck109"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck110"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck110"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck111"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck111"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck112"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck112"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck113"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck113"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck114"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck114"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck115"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck115"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck116"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck116"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck117"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck117"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck118"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck118"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck119"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck119"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck120"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck120"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck121"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck121"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck122"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck122"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck123"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck123"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck124"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck124"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck125"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck125"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck126"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck126"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck127"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck127"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck128"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck128"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck129"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck129"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck130"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck130"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck131"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck131"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck132"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck132"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck133"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck133"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck134"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck134"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck135"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck135"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck136"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck136"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck137"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck137"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck138"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck138"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck139"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck139"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck140"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck140"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck141"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck141"
              ></label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck142"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck142"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck143"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck143"
              ></label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck144"
                onChange={getSelectionHandler}
              />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck144"
              ></label>
              {/* <button
                type="submit"
                className="btn btn-primary mt-3"
                id="submit"
                // onClick={handleClick}
              >
                Lock It In
              </button> */}
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
