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
            <div class="card-body">
              <h5 class="card-title">Meadowcreek High</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="img-fluid"
              src="/images/gsu-01.jpg"
              alt="Georgia State University Logo"
            />
            <div class="card-body">
              <h5 class="card-title">BA Game Development & Design</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="img-fluid"
              src="/images/ga-01.jpg"
              alt="General Assembly Logo"
            />
            <div class="card-body">
              <h5 class="card-title">
                Full-Stack Software Engineering Immersive
              </h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
