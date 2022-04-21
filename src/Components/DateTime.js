import React from "react";

const DateTime = () => {
  let showDate = new Date();
  let displayTodaysDate =
    showDate.getDate() +
    "/" +
    showDate.getMonth() +
    "/" +
    showDate.getFullYear() +
    " " +
    showDate.getHours() +
    ":" +
    showDate.getMinutes();
  return (
    <div>
      <p className="mt-3">Today is {displayTodaysDate}</p>
    </div>
  );
};

export default DateTime;
