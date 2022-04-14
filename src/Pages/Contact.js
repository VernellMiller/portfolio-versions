import React from "react";

const Contact = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col mt-5 ml-5">
            <header>
              <h1>Contact Page</h1>
            </header>
            <div class="splash-image col-9"></div>
            <a href="mailto:vernellmiller1@gmailcom">
              <div class="infoCard rounded col-4 mt-5">
                <div class="infoboximage d-inline-block">
                  <img src="/images/gmail.png" alt="gmail" />
                </div>
                <div class="infoboxname d-inline-block bg-light">Email</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
