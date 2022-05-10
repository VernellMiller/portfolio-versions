import React, { useState } from "react";

const WinningCombination = () => {
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
