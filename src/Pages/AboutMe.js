import React from "react";
import Education from "../Components/Education";
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
        <section className="col mt-3 border-bottom">
          <img
            className="img-fluid"
            src="/images/About Me.jpg"
            alt="About Me"
          />
          <p className="mt-5">
            <strong>Vernell Miller</strong> to be exact. Thank you for visiting.
          </p>
          <section className="border-bottom">
            <h3 className="mt-5">Early Life</h3>
            <p>
              I was born in Detroit Michigan, However I’ve spent the majority of
              my life in Georgia. I enjoyed a very active childhood filled with
              exuberant outdoor activities and sports. Although it was sort
              lived, my first sport was soccer. I then went on to play
              basketball and football for as the sun lit the sky.
            </p>
            <p>
              I've grown to learn many life lessons through my experiences in
              these activities which have become corner stones to the success in
              my life. One of those key corner stones I still closely hold onto
              is, COMMUNICATION.
            </p>
            <p>
              Video Games, Art and Movies also took precedent in my life early
              on. It was through those mediums where my mind truly blossomed and
              unleashed a world of curiosity. I then only wondered how "things"
              were done. How "things" were made.
            </p>

            <p>
              The decisions that were made for this "thing" to exist and
              ultimately how someone could be brilliant enough to create
              something out of nothing. These questions lead to more questions
              which lead to even more questions which set me on the path of
              discovery and problem solving.
            </p>

            <p>
              With my initial exposure to a subject or product, I had to first
              learn all that I could about it. That would then spark my interest
              in how I could use what I learned to accomplish my goals and from
              there I started building my problem solving skills to accomplish
              those goals. Then ONWARD into higher education.
            </p>
          </section>

          <h3 className="mt-5">Education</h3>
          <Education />

          <h3 className="mt-5">Work Experience</h3>
          <Career />

          <h3 className="mt-5">Passions</h3>
          <p>
            Being open minded, listening and learning lies at the base of
            everything that I am passionate about. Also, I love having the
            opportunity to be creative. Therefore, I am most passionate about
            taking in Knowledge and using it to create unique products and
            experiences. I am also passionate about my loved ones including
            close Friends and Family. My passions are what drives me and I
            always give them my best effort. As long as I stay true to who I am
            and what I am passionate about, there is no way that I wont succeed
            👌😊.
          </p>

          <h3 className="mt-5">Interests</h3>
          <h6>Web | Application Development</h6>
          <p>
            Being that I am always intrigued with how anything works, it is
            natural for me to imagine ways I could create a product or service
            that helps solve a problem. There is also the opportunity to have a
            little fun in there also 😁. Web Dev has been a great journey for me
            so far and I cant wait to see how far I can take it. I am excited
            and I hope you are too.
          </p>
          <h6>Digital Art</h6>
          <p>
            Both 2D and 3D art inspires me daily. There are so many talented
            artist out there and with technology booming there are tons of
            software available for all to learn. I was introduced to both
            mediums in college through Graphic Design and Game Design and I have
            continued to research and practice to keep my skills fresh. My
            favorite 2D software is Adobe Illustrator and my favorite 3D
            software is Blender.
          </p>
          <h6>Game Development | 3D Animation</h6>
          <p>
            Games and Animation grew to staple in my child hood. After playing
            my favorite games or watching my favorite cartoons, I set a goal to
            one day create my own video game and or 3d animated series. I have
            kept that promise to a much younger me and I am proud to say that I
            am very much on my way to accomplishing those goals.{" "}
            <strong>One Step At A Time👟.</strong>
          </p>
          <p>
            My goal is to combine all that I am passionate about and all that I
            am interested in with my ever expanding Knowledge, to help create
            and develop unique products and experiences for the end user.
          </p>
        </section>
      </div>
    </>
  );
};

export default AboutMe;
