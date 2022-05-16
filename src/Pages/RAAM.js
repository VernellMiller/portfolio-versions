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
                <h1>RAAM - Food Pantry application</h1>
              </a>
            </header>
            <section className="col mt-5">
              <h5 className="mt-5">Welcome to RAAM</h5>
              <p>
                A Community based, all-in-one app where anyone can create a
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
            </section>
            <section className="col mt-5 border-bottom">
              <h5>Contributions</h5>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default RAAM;
