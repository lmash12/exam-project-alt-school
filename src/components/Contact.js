import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaCode,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 style={{ textAlign: "center", color: "gray", marginTop: "20px"}}>Let's Talk</h1>
      <h3 style={{ textAlign: "center", marginTop: "20px" }}>
        <a aria-label="GitHub link to a profile"
          href="https://github.com/lmash12"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lesley Mashaya
        </a>
      </h3>
      <ul className="contact-list">
        <li>
          <h4>
            <a aria-label="twitter profile link"
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
            <a aria-label="facebook profile link"
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
            <a aria-label="instagram profile link"
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
            <a aria-label="Whatsapp contact link"
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
            <a aria-label="phone number link" href="tel: +260978386755" rel="noopener noreferrer">
              <FaPhoneAlt color="black" />
            </a>
          </h4>
        </li>
        <li>
          <h4>
            <a aria-label="Profile description with a coding sign" href="#">
              I am a ReactJs FrontEnd Dev <FaCode color="#FD0B1B" />
            </a>
          </h4>
        </li>
      </ul>
    </div>
  );
};

export default Contact;

