import React from "react";

const Education = () => {
  return (
    <>
      <div className="cards">
        <div className="card-group">
          <div className="card">
            <img
              className="img-fluid"
              src="/images/msu-01.jpg"
              alt="Meadowcreek HighSchool Logo"
            />
            <div className="card-body">
              <h5 className="card-title">Meadowcreek HighSchool</h5>
              <p className="card-text">
                Graduated from one of the most diverse classes in georgia during
                my time which immersed me in connecting and working with piers
                from all sorts of backgrounds.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="img-fluid"
              src="/images/gsu-01.jpg"
              alt="Georgia State University Logo"
            />
            <div className="card-body">
              <h5 className="card-title">BA Game Development & Design</h5>
              <p className="card-text">
                Grew within the Creative Media Industries space which brought
                many opportunities to engage with new and cutting edge
                technologies.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="img-fluid"
              src="/images/ga-01.jpg"
              alt="General Assembly Logo"
            />
            <div className="card-body">
              <h5 className="card-title">
                Full-Stack Software Engineering Immersive
              </h5>
              <p className="card-text">
                Participated in over 500+ hours of instruction focused skills
                needed to succeed as a Software Engineer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
