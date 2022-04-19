import React from "react";
import SquaresGame from "../Components/SqauresGame";

const Squares = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col mt-5 ml-5">
            <header>
              <h1>Welcome to Squares</h1>
            </header>
            <div class="splash-image col-9"></div>
            <section class="content col-9 mt-5">
              <h5>Squares</h5>
              <p>
                Squares is a daily try your luck guessing game. Think you got
                what it takes? Try it out, have some fun and who knows, maybe
                you'll be todays Squares Winner.
              </p>

              <br></br>

              <h5>How to Play</h5>

              <sub>Step 1:</sub>

              <br></br>

              <p>
                Squares is made up of a 26x26 square grid. Only one game is
                played per 24 hours. Each player may attempt to guess the
                jackpot location a max 4 times per day.
              </p>
            </section>

            <SquaresGame />
          </div>
        </div>
      </div>
    </>
  );
};

export default Squares;
