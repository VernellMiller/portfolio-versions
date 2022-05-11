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
                <p className="col-6 mt-3">
                  We've all heard it before, Team work makes the dream work!
                  Lets work together to make our Dreams come true.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-arrow-down-circle mt-5"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                  />
                </svg>
                <Link
                  to="about"
                  className="btn btn-outline-light btn-lg position-absolute top-100 start-0 translate-middle pl-4"
                  id="getStarted"
                >
                  Get Started
                </Link>
                <Link
                  to="contact"
                  className="btn btn-outline-light btn-lg position-absolute top-100 start-0 translate-middle pl-4"
                  id="contactMe"
                >
                  Contact
                </Link>
              </div>
            </header>
            <section className="col mt-5">
              <p>
                Currently <strong>v2.0.1</strong>
              </p>
              <h2 className="d-inline">Hello and Welcome to </h2>
              <h1 className="d-inline" id="myName">
                VERNELL MILLER'S{" "}
              </h1>
              <h2 className="d-inline">Portfolio</h2>
              <div className="row mt-5">
                <article className="col-sm">
                  <h4>About Me</h4>
                  <p>
                    Looking to get to know more about me and my journey? Maybe
                    even looking to join me on this Fantastic Voyage? Get
                    started with, the About Me page to learn where I come from,
                    what I am working on, or even where you might see me next.
                  </p>
                </article>
                <article className="col-sm">
                  <h4>Web Dev</h4>
                  <p>
                    Want to checkout not all but a few of my most recent Web
                    Development Projects | Applications? Jump on over to the
                    Development Projects tab to see what I've been up to. Who
                    knows, you might get lucky.
                  </p>
                </article>
                <article className="col-sm">
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
