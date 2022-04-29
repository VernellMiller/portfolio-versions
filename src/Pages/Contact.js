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

  return (
    <>
      <div className="container">
        <div className="content">
          <div className="card">
            <form ref={form} onSubmit={sendEmail}>
              <label>to</label>
              <input type="text" name="name" />
              <label>from</label>
              <input type="text" name="from" />
              <label>Message</label>
              <textarea name="message" />
              <label>reply_to</label>
              <input type="text" name="reply_to" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
