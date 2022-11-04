import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer-list">
        <li>
          <Link to="/about">Terms & Conditions</Link>
        </li>

        <li>
          <Link to="/about">Work with me</Link>
        </li>
        <li>
          <Link to="/about">Advertise</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
