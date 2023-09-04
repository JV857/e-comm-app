import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMsg, setContactMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_CONFIG_ID,
        process.env.REACT_APP_EMAIL_SERVICE_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_SERVICE_APP_ID
      )
      .then(
        (result) => {
          if (result) {
            setContactName("");
            setContactEmail("");
            setContactMsg("");
          }
        },
        (error) => {
          console.log("error", error.text);
        }
      );
  };

  return (
    <div className="contact_wrapper">
      <h2 className="common-heading">Contact Us</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.184896831007!2d77.25728797418243!3d28.5341616885435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e76c224e3b%3A0xc1adaf837f425093!2sVishal%20Mega%20Mart!5e0!3m2!1sen!2sin!4v1693824338606!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        title="home"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="container">
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail} className="contact-inputs">
            <input
              type="text"
              placeholder="Name"
              name="to_name"
              required
              autoComplete="off"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
            />

            <input
              type="email"
              name="from_name"
              placeholder="Email"
              autoComplete="off"
              required
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />

            <textarea
              name="message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"
              value={contactMsg}
              onChange={(e) => setContactMsg(e.target.value)}
            />

            <div className="submit_btn_container">
            <input type="submit" value="send" className="submit_btn"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
