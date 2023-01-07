import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaCode,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nqfu6vj",
        "template_6xe37aq",
        form.current,
        "nMAEWyJ8xHsmgeh0P"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-page">
      <h1 style={{ textAlign: "center", color: "gray", marginTop: "20px" }}>
        Let's Chat
      </h1>

      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      <ul className="contact-list">
        <li>
          <h4>
            <a
              aria-label="twitter profile link"
              href="https://twitter.com/lmash12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </h4>
        </li>
        <li>
          <h4>
            <a
              aria-label="facebook profile link"
              href="https://facebook.com/lmashaya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook color="blue" />
            </a>
          </h4>
        </li>
        <li>
          <h4>
            <a
              aria-label="instagram profile link"
              href="https://instagram.com/lesley.t.m"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram color="#EA0175" />
            </a>
          </h4>
        </li>
        <li>
          <h4>
            <a
              aria-label="Whatsapp contact link"
              href="https://wa.me/+260978386755?text=hello"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp color="green" />
            </a>
          </h4>
        </li>
        <li>
          <h4>
            <a
              aria-label="phone number link"
              href="tel: +260978386755"
              rel="noopener noreferrer"
            >
              <FaPhoneAlt color="black" />
            </a>
          </h4>
        </li>
        <li>
          <h4>
            <a aria-label="Profile description with a coding sign" href="#">
              FrontEnd Developer <FaCode color="#FD0B1B" />
            </a>
          </h4>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
