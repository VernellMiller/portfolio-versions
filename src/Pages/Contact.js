import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pdgfl5t",
        "template_wofh7lu",
        form.current,
        "h4jiXDwtohJAXgJKq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const myName = "Vernell Miller";

  return (
    <>
      <div className="contactBgImage">
        <div className="container mt-5">
          <div className="content">
            <div class="card mb-3 shadow" id="formCard">
              <div className="card-body">
                <form ref={form} onSubmit={sendEmail}>
                  <p>to</p>
                  <input
                    type="text"
                    className="col-12 border corder-light"
                    name="to"
                    value={myName}
                  />
                  <p>Your Name or Company</p>
                  <input
                    type="text"
                    className="col-12 border corder-light"
                    name="from"
                  />
                  <p>Message</p>
                  <textarea
                    className="col-12 border corder-light"
                    name="message"
                  />
                  <p>Your Email or Phone #</p>
                  <input
                    type="text"
                    className="col-12 border corder-light"
                    name="reply_to"
                  />
                  <input
                    type="submit"
                    className="btn col-12 mt-3"
                    value="Send Message"
                  />
                </form>
              </div>
              <div class="card-footer bg-transparent border">Footer</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
