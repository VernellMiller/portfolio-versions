import React from "react";
import Career from "../Components/Career";

const AboutMe = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mt-5 ml-5">
            <header>
              <h4>Hello and Welcome!</h4>
              <h1>I am Vernell.</h1>
            </header>
          </div>
        </div>
        <section className="content col-9 mt-3">
          <img
            className="img-fluid"
            src="/images/About Me.jpg"
            alt="About Me"
          />
          <p className="mt-5">
            <strong>Vernell Miller</strong> to be exact. Thank you for visiting.
          </p>
          <h3 className="mt-5">Early Life</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            quis aut itaque alias deserunt inventore fugit laudantium quos?
            Tenetur facilis quas iure quia architecto aspernatur aliquid
            voluptatem ratione? Optio, rem. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptatem laboriosam, consequatur
            error, aliquid praesentium id deleniti at totam rem accusantium iste
            numquam vel libero fuga? Dolor optio fugit placeat nihil.
          </p>

          <h3>Career</h3>
          <Career />
          <h3>Passions</h3>
        </section>
      </div>
    </>
  );
};

export default AboutMe;
