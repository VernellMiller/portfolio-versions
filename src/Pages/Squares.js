import React from "react";
import SquaresGame from "../Components/SqauresGame";

const Squares = () => {
  const winners = ["Me", "You", "Him", "Her", "Them", "They"];
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

              <h5>How to Play</h5>

              <sub>Step 1:</sub>

              <br></br>

              <p>
                Squares is made up of a 12x12 square grid. Each player may only
                play one game per 24 hours. Each player may attempt to guess the
                jackpot location a max 4 times per day.
              </p>
            </section>

            <SquaresGame />

            {winners.map((winner) => {
              return <h6> {winner} </h6>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Squares;
