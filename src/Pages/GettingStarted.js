import React from "react";
import { Link } from "react-router-dom";

const GettingStarted = () => {
  return (
    <>
      <div className="bgImage">
        <p>hello</p>
        <div className="container">
          <div className="row">
            <div className="col mt-5 ml-5">
              <header>
                <h1>Intro Tag</h1>
              </header>
              {/* <div className="splash-image col-9"></div> */}
              <section className="content col-9 mt-5">
                <Link to="about" className="btn btn-primary">
                  About Me
                </Link>
                <p>
                  Currently <strong>v2.0.1</strong>
                </p>
                {/* <img src="/images/abstract.jpg" alt="abstract" /> */}
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GettingStarted;
