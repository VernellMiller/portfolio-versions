import react from "react";

const RAAM = () => {
  return (
    <>
      <div>
        <img
          className="img-fluid"
          src="/images/foodbasket.jpg"
          alt="About Me"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col mt-5 ml-5">
            <header>
              <a
                className="text-decoration-none"
                href="https://radiant-chamber-29667.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <h1>RAAM - Food Pantry Application</h1>
              </a>
            </header>
            <section className="col mt-5">
              <h5 className="mt-5">Welcome to RAAM</h5>
              <p>
                A Community based, all-in-one app, where anyone can create a
                local food pantry to lend a helping hand to their community.
                Also, locate a local pantry to donate or pick up essential
                items.
              </p>
              <p className="fs-4">
                “Here at RAAM we believe that real change begins within a
                community itself. RAAM was created to assist communities in
                tackling the issue of hunger with a more “grass-roots”
                approach.”
              </p>
              <h3 className="mt-5">Objectives</h3>
              <p>
                As a team of 4 build a full-stack application that uses the
                Python-based Django Web Framework. the requirements were as
                follows:
              </p>
              <ul>
                <li>Be a full-stack Django application.</li>
                <li>Persist data in PostreSQL.</li>
                <li>
                  Authenticate users using Django's built-in authentication.
                </li>
                <li>
                  Implement authorization by restricting access to the Creation,
                  Updating & Deletion of resources.
                </li>
                <li>Be deployed online using Heroku.</li>
              </ul>
              <a
                className="text-decoration-none"
                href="https://radiant-chamber-29667.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <p>Check out the application HERE.</p>
              </a>
            </section>
            <section className="col mt-5 border-bottom">
              <h3 className="mt-5">Meet the Team</h3>

              <div className="cards">
                <div className="card-group">
                  <div className="card">
                    <img
                      className="img-fluid"
                      src="/images/me.png"
                      alt="Meadowcreek HighSchool Logo"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Vernell Miller</h5>
                      <ul className="card-text">
                        <li>Wireframe</li>
                        <li>Designer</li>
                        <li>Backend</li>
                        <li>Api Management</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      className="img-fluid"
                      src="/images/corey.jpg"
                      alt="corey"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Corey Alvarez</h5>
                      <ul className="card-text">
                        <li>Scrum Master</li>
                        <li>DataBase Manager</li>
                        <li>Backend</li>
                        <li>Api Management</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      className="img-fluid"
                      src="/images/mario.jpg"
                      alt="Mario"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Mario Rojas</h5>
                      <ul className="card-text">
                        <li>Frontend</li>
                        <li>GitH Manager</li>
                        <li>Documentor</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      className="img-fluid"
                      src="/images/cahyl.png"
                      alt="General Assembly Logo"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Cahyl Alouidor</h5>
                      <ul className="card-text">
                        <li>Frontend</li>
                        <li>GitH Manager</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <h5 className="mt-5">My Contributions</h5>
              <p>
                While this project created its own unique problems, problems our
                team did not have was communication and efficient production of
                user stories. Our team of 4 took the mob coding approach and we
                all jumped on a live link server in VS Code for an all hands on
                coding session.
              </p>

              <p>
                Furthermore, we all had our own individual responsibilities. I
                was first tasked with the initial design of the application and
                I began with the wireframes.
              </p>
              <img
                className="img-fluid mt-5"
                src="/images/wireframes-01.png"
                alt="wireframe1"
              />
              <img
                className="img-fluid mt-5"
                src="/images/wireframes-02.png"
                alt="wireframe2"
              />
              <img
                className="img-fluid mt-5"
                src="/images/wireframes-03.png"
                alt="wireframe3"
              />
              <img
                className="img-fluid mt-5"
                src="/images/wireframes3-03.png"
                alt="wireframe4"
              />
              <p className="mt-5">
                From here I helped build out the Backend and connected the
                Backend to the Frontend using Python and Django. I also was
                responsible for writing out the all the paths for a fully
                functioning CRUD application. Last but not least was retrieving
                the data from the data base. We had some issues here as a team.
                Howerver, this is is a moment I would like to highlight.
              </p>
              <h5 className="mt-5">Highlight</h5>
              <img
                className="img-fluid"
                src="/images/raam1.png"
                alt="slack message"
              />
              <img
                className="img-fluid"
                src="/images/raam2.png"
                alt="slack message"
              />
              <a
                className="text-decoration-none"
                href="https://github.com/VernellMiller/raam/tree/vernell"
                target="_blank"
                rel="noreferrer"
              >
                <p>GitHub Repo HERE</p>
              </a>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default RAAM;
