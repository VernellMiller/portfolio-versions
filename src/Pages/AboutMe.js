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
            I was born in Detroit Michigan, However I’ve spent majority of my
            life in Georgia. I enjoyed a very active childhood filled with
            exuberant outdoor activities and sports. Although it was sort lived,
            my first sport was soccer. I then went on to play basketball and
            football for as long as the days were. Ive grew to learn many
            lessons through my experiences in these activities which have become
            corner stones to the success in my life. One of those lessons I
            still closely hold onto is. COMMUNICATION.
          </p>
          <p>
            Video Games, Art and Movies also took precedent in my life early on.
            It was through those mediums where my mind truly blossomed and
            unleashed a world of curiosity. I then only wondered how "things"
            were done. How "things" were made. The decisions that were made for
            this "thing" to exist and ultimately how someone could be brilliant
            enough to create something out of nothing. These questions lead to
            more questions which lead to even more questions which set me on the
            path of discovery and problem solving. If I wanted to learn about a
            subject or product I had to first learn all that I could about it.
            That would then spark my interest in how I could use what I learned
            to accomplish my goals and from there I started building my problem
            solving skills to accomplish those goals.
          </p>

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
            and what I am passionate about, there is no way I wont succeed 👌😊.
          </p>
          <p>
            After several years working for an IT Solutions Company I knew I
            needed to take a step back to finish.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            molestiae asperiores perferendis aperiam consequatur qui, quasi
            vitae repellat minima ad explicabo voluptas rem magnam labore quia
            esse natus aliquam enim.
          </p>

          <h3 className="mt-5">Interests</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            molestiae asperiores perferendis aperiam consequatur qui, quasi
            vitae repellat minima ad explicabo voluptas rem magnam labore quia
            esse natus aliquam enim.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            molestiae asperiores perferendis aperiam consequatur qui, quasi
            vitae repellat minima ad explicabo voluptas rem magnam labore quia
            esse natus aliquam enim.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            molestiae asperiores perferendis aperiam consequatur qui, quasi
            vitae repellat minima ad explicabo voluptas rem magnam labore quia
            esse natus aliquam enim.
          </p>
        </section>
      </div>
    </>
  );
};

export default AboutMe;
