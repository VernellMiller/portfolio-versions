import React from "react";
import { Link } from "react-router-dom";

const GettingStarted = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mt-5 ml-5">
            <header>
              <div className="bgImage">
                <h1>Passion,</h1>
                <h1>Communication,</h1>
                <h1>Execution</h1>
                <p className="col-4 mt-3">
                  We've all heard it before, Team work makes the dream work!
                  Lets work together to make our Dreams come true.
                </p>
              </div>
            </header>
            {/* <div className="splash-image col-9"></div> */}
            <section className="content col-9 mt-5">
              <p>
                Currently <strong>v2.0.1</strong>
              </p>
              <div className="row mt-5">
                <article className="col">
                  <h4>About Me</h4>
                  <p>
                    Looking to get to know more about me and my journey? Maybe
                    even looking to join me on this Fantastic Voyage? Get
                    started with, the About Me page to learn where I come from,
                    how I got started, or even where you might see me next.
                  </p>
                </article>
                <article className="col">
                  <h4>Web Dev</h4>
                  <p>
                    Want to checkout not all but a few of my most recent web
                    development projects | applications? Jump on over to the
                    Development Projects tab to see what I've been up to.
                  </p>
                </article>
                <article className="col">
                  <h4>Design</h4>
                  <p>
                    Love Art and Design? Well welcome Friend. It looks like we
                    have something in common and we're off to a great start 😊.
                    I have a few different loves as you will discover. Head on
                    over to the 2D | 3D Projects tab to check out some of my
                    designs.
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
