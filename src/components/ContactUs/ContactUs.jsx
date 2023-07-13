import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import Button from "../../UI/Button/Button";
import "./ContactUs.scss";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="contact--container">
        <div className="heading">
          <h2>Contact Us</h2>
        </div>
        <div className="contact--form">
          <form ref={form} onSubmit={sendEmail}>
            <label for="fname">Name</label>
            <input
              type="text"
              id="fname"
              name="user_name"
              placeholder="Your name.."
              value={name}
            />

            <label for="email">Email</label>
            <input
              type="email"
              name="user_email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label for="subject">Message</label>
            <textarea
              id="subject"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
