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
              <p>
                Here is a collection of a few 2D designs that I would like to
                share with you. These Designs are in no particular order or of
                importance. They are just designs that I am grateful to have the
                opportunity to work on. Some are my own projects and some are
                client projects. I hope you enjoy.
              </p>
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
