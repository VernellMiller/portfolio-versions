import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mt-5 ml-5">
            <header>
              <h1>Contact Page</h1>
            </header>
            <div className="splash-image col-9"></div>
            <a href="mailto:vernellmiller1@gmailcom">
              <div className="infoCard rounded col-4 mt-5">
                <div className="infoboximage d-inline-block">
                  <img src="/images/gmail.png" alt="gmail" />
                </div>
                <div className="infoboxname d-inline-block bg-light">Email</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
