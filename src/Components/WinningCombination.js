import React, { useState } from "react";

const WinningCombination = () => {
  function getWinningNumbers() {
    const winningNumbers = [];
    const randomNumber = Math.floor(Math.random() * 145);
    winningNumbers.push(randomNumber);
    for (let i = 0; i < 3; i++) {
      winningNumbers.push(Math.floor(Math.random() * 145));
    }
    return winningNumbers;
  }
  console.log(getWinningNumbers());

  return (
    <>
      <button
        type="submit"
        className="col btn btn-primary"
        onClick={WinningCombination}
      >
        Reset
      </button>
    </>
  );
};

export default WinningCombination;
