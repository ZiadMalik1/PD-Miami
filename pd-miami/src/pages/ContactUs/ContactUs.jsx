import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import "./ContactUs.scss";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qxam7qu",
        "template_11oi9xs",
        form.current,
        "wB9xgbi2EGeJfkVYS"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="contact--banner">
        <div class="hero-text">
          <h1>I am John Doe</h1>
          <p>And I'm a Photographer</p>
          <button>Hire me</button>
        </div>
      </div>
      <div className="contact--container">
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <label for="fname">Name</label>
            <input
              type="text"
              id="fname"
              name="user_name"
              placeholder="Your name.."
            />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label for="subject">Message</label>
            <textarea
              id="subject"
              name="message"
              placeholder="Write something.."
            />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;