import React from "react";

const YardProject = () => {
  return (
    <>
      <section className="content col-9 mt-5 border-bottom">
        <h5>The Yard Build</h5>
        <img
          className="img-fluid"
          src="/images/yardProject1.jpg"
          alt="yardProject1"
        />
        <h6 className="mt-5">Welocome to the YardProject</h6>

        <p>
          This Design was originally hand drawn by the client Leonor Angarita. I
          was brought on to help with the actual hands on build of the yard. I
          was then given the opportunity to create a few 2D designs to help aid
          in visualizing the end goal. I took the original drawing and created a
          vector version of it to gain a bit more clarity of the space. This
          also created a file that can shared more easily amongst the
          stakeholders.
        </p>
        <img
          className="img-fluid"
          src="/images/yardProject2.jpg"
          alt="yardProject2"
        />
        <p>
          This design was created in Adobe Illustrator. It was a fun and
          interesting project, being that I had the opportunity to work on the
          design and the actual hands on build of the yard. The designs
          definitely gave great perspective and talking points throughout the
          project duration while also injecting some new ideas for the future.
        </p>
      </section>
      {/* <div className="splash-image col-9"></div> */}
    </>
  );
};

export default YardProject;
