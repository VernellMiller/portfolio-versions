import React from "react";
import TownShip from "../Components/TownShip";
import YardProject from "../Components/YardProject";
import Honda from "../Components/Honda";

const TwoD = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mt-5 ml-5">
            <header>
              <h1>2D Designs</h1>
            </header>
            <TownShip />
            <YardProject />
            <Honda />
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoD;
