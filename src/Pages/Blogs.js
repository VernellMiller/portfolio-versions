import React from "react";

const Blogs = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mt-5 ml-5">
            <header>
              <h1>Blogs (soon to come)</h1>
            </header>
            <section className="col mt-5 border-bottom">
              <h5 className="mt-5">Welcome to My Blogs</h5>
              <p>
                Here is where I will host all of my future blogs. In my career I
                have learned a great bit of information and have gained ton of
                knowledge. I would love to share my thoughts and my journey with
                the world. Blogs will be coming soon. Thanks for your interest
                👌.
              </p>
              <br></br>
              <h5>Topics</h5>
            </section>
            <div className="cards">
              <div className="card-group">
                <div className="card">
                  <div className="card-img-top splash-image"></div>
                  <div className="card-body">
                    <h5 className="card-title placeholder col-3"></h5>
                    <p className="card-text placeholder-glow">
                      <span className="placeholder col-7"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-6"></span>
                      <span className="placeholder col-8"></span>
                    </p>
                    <a
                      href="#"
                      tabIndex="-1"
                      className="btn btn-primary disabled placeholder col-6"
                    ></a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-img-top splash-image"></div>
                  <div className="card-body">
                    <h5 className="card-title placeholder col-3"></h5>
                    <p className="card-text placeholder-glow">
                      <span className="placeholder col-7"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-6"></span>
                      <span className="placeholder col-8"></span>
                    </p>
                    <a
                      href="#"
                      tabIndex="-1"
                      className="btn btn-primary disabled placeholder col-6"
                    ></a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-img-top splash-image"></div>
                  <div className="card-body">
                    <h5 className="card-title placeholder col-3"></h5>
                    <p className="card-text placeholder-glow">
                      <span className="placeholder col-7"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-6"></span>
                      <span className="placeholder col-8"></span>
                    </p>
                    <a
                      href="#"
                      tabIndex="-1"
                      className="btn btn-primary disabled placeholder col-6"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
