import React from "react";
import SquaresGame from "../Components/SqauresGame";
import WinningCombination from "../Components/WinningCombination";

const Squares = () => {
  // const winners = ["Me", "You", "Him", "Her", "Them", "They"];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mt-5 ml-5">
            <header>
              <h1>Squares</h1>
            </header>
            <section className="col mt-5 border-bottom">
              <img
                className="img-fluid"
                src="/images/squares-01-01.jpg"
                alt="About Me"
              />
              <h5 className="mt-5">Welcome to Squares</h5>
              <p>
                Squares is a daily try your luck guessing game. Think you got
                what it takes? Try it out, have some fun and who knows, maybe
                you'll be todays Squares Winner.
              </p>
              <br></br>
              <h5>Instructions</h5>
              <p>
                Squares is made up of a 12x12 square grid. You may only play one
                game per 24 hours. Each day renders a new combination of four
                winning squares. Choose your combination of four squares to try
                to match Today's winning squares. Match Today's winning squares
                to earn the <strong>Reward Of The Day.</strong>
              </p>
              <p>Have fun and share your combination with friends.</p>
            </section>
            <section className="col mt-5 border-bottom">
              <h1>How to Play</h1>
              <sub>Step 1:</sub>
              <p>Enter your Name.</p>
              <sub>Step 2:</sub>
              <p>Select four Squares.</p>
              <img
                className="img-fluid"
                src="/images/userSelectionExample.png"
                alt="About Me"
              />
              <br />
              <sub>Step 3:</sub>
              <p>LOCK IT IN. Submit your combination for the day.</p>
            </section>

            <SquaresGame />

            {/* {winners.map((winner) => {
              return <h6> {winner} </h6>;
            })} */}
            <WinningCombination />
          </div>
        </div>
      </div>
    </>
  );
};

export default Squares;
