import React from "react";
import { Link } from "react-router-dom";

const GettingStarted = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mt-5 ml-5">
            <header>
              <div className="bgImage position-relative">
                <h1>Passion,</h1>
                <h1>Communication,</h1>
                <h1>Execution</h1>
                <p className="col-4 mt-3">
                  We've all heard it before, Team work makes the dream work!
                  Lets work together to make our Dreams come true.
                </p>
                <Link
                  to="about"
                  className="btn btn-outline-light btn-lg position-absolute top-100 start-0 translate-middle pl-4"
                  id="getStarted"
                >
                  Get Started
                </Link>
              </div>
            </header>
            <section className="content col-9 mt-5">
              <p>
                Currently <strong>v2.0.1</strong>
              </p>
              <h2 className="d-inline">Hello and Welcome to </h2>
              <h1 className="d-inline" id="myName">
                VERNELL MILLER'S{" "}
              </h1>
              <h2 className="d-inline">Portfolio</h2>
              <div className="row mt-5">
                <article className="col">
                  <h4>About Me</h4>
                  <p>
                    Looking to get to know more about me and my journey? Maybe
                    even looking to join me on this Fantastic Voyage? Get
                    started with, the About Me page to learn where I come from,
                    what I am working on, or even where you might see me next.
                  </p>
                </article>
                <article className="col">
                  <h4>Web Dev</h4>
                  <p>
                    Want to checkout not all but a few of my most recent Web
                    Development Projects | Applications? Jump on over to the
                    Development Projects tab to see what I've been up to. Who
                    knows, you might get lucky.
                  </p>
                </article>
                <article className="col">
                  <h4>Design</h4>
                  <p>
                    Love Art and Design? Well welcome Friend. It looks like we
                    have something in common 😊. I have a few different loves as
                    you will discover. Head on over to the 2D | 3D Projects tab
                    to check out some of my designs.
                  </p>
                </article>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default GettingStarted;
