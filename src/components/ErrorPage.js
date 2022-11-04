import { Link } from "react-router-dom";
import { FaSadCry } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="message">
        <h1 style={{ listStyleType: "none", textAlign: "center" }}>
          Sorry <span>Page</span> Not <span>Found</span>
        </h1>
      </div>
      <li style={{ listStyleType: "none", textAlign: "center" }}>
        <Link to="/">
          <span>Go</span> Back <span>To</span> Home <span>Page</span>
        </Link>
      </li>
      <li style={{ listStyleType: "none", textAlign: "center" }}>
        <Link to="/repositories">
          Back {`>>`} <span>Repositories</span>
        </Link>
      </li>
      <li style={{ listStyleType: "none", textAlign: "center" }}>
        <FaSadCry size="2em" />
      </li>
    </div>
  );
};

export default ErrorPage;
