import React, { useState } from "react";
import DateTime from "./DateTime";

const SquaresGame = () => {
  // const handleClick = () => {
  //   let name = document.getElementById("name").value;
  //   console.log(`Hello ${name}.`);
  //   document.getElementById("name").value = "";
  // };

  const [player, setPlayer] = useState({
    userName: "",
    userSelection1: "",
    userSelection2: "",
    userSelection3: "",
    userSelection4: "",
  });

  const userSelectedSquares = [
    player.userSelection1,
    player.userSelection2,
    player.userSelection3,
    player.userSelection4,
  ];

  const getUserNameHandler = (event) => {
    console.log(event.target.value);
    setPlayer({ userName: event.target.value });
  };

  const getUserSelections = (event) => {};

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="content mt-5">
        <h1>Lets Play</h1>
        <input
          type="text"
          onChange={getUserNameHandler}
          placeholder="enter name here"
          id="name"
          value={player.userName}
        />
        <DateTime />

        <h1>Hello, {player.userName}</h1>
        <form>
          <div className="checkBoxes mt-3">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic checkbox toggle button group"
            >
              <input type="checkbox" className="btn-check" id="btncheck1" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck1"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck2" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck2"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck3" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck3"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck4" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck4"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck5" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck5"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck6" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck6"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck7" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck7"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck8" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck8"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck9" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck9"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck10" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck10"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck11" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck11"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck12" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck12"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck13" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck13"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck14" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck14"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck15" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck15"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck16" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck16"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck17" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck17"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck18" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck18"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck19" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck19"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck20" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck20"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck21" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck21"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck22" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck22"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck23" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck23"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck24" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck24"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck25" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck25"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck26" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck26"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck27" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck27"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck28" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck28"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck29" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck29"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck30" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck30"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck31" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck31"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck32" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck32"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck33" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck33"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck34" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck34"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck35" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck35"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck36" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck36"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck37" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck37"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck38" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck38"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck39" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck39"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck40" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck40"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck41" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck41"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck42" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck42"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck43" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck43"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck44" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck44"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck45" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck45"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck46" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck46"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck47" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck47"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck48" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck48"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck49" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck49"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck50" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck50"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck51" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck51"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck52" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck52"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck53" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck53"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck54" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck54"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck55" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck55"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck56" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck56"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck57" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck57"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck58" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck58"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck59" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck59"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck60" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck60"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck61" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck61"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck62" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck62"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck63" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck63"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck64" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck64"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck65" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck65"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck66" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck66"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck67" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck67"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck68" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck68"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck69" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck69"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck70" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck70"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck71" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck71"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck72" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck72"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck73" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck73"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck74" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck74"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck75" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck75"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck76" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck76"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck77" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck77"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck78" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck78"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck79" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck79"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck80" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck80"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck81" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck81"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck82" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck82"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck83" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck83"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck84" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck84"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck85" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck85"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck86" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck86"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck87" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck87"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck88" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck88"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck89" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck89"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck90" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck90"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck91" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck91"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck92" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck92"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck93" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck93"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck94" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck94"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck95" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck95"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck96" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck96"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck97" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck97"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck98" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck98"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck99" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck99"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck100" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck100"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck101" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck101"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck102" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck102"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck103" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck103"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck104" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck104"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck105" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck105"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck106" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck106"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck107" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck107"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck108" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck108"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck109" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck109"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck110" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck110"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck111" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck111"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck112" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck112"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck113" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck113"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck114" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck114"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck115" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck115"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck116" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck116"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck117" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck117"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck118" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck118"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck119" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck119"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck120" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck120"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck121" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck121"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck122" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck122"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck123" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck123"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck124" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck124"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck125" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck125"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck126" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck126"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck127" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck127"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck128" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck128"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck129" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck129"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck130" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck130"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck131" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck131"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck132" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck132"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck133" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck133"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck134" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck134"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck135" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck135"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck136" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck136"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck137" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck137"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck138" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck138"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck139" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck139"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck140" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck140"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck141" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck141"
              ></label>
              <input type="checkbox" className="btn-check" id="btncheck142" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck142"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck143" />
              <label
                className="btn btn-outline-secondary border"
                htmlFor="btncheck143"
              ></label>

              <input type="checkbox" className="btn-check" id="btncheck144" />
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
                onClick={submitHandler}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SquaresGame;
