import { Link } from "react-router-dom";

export default function ErrorFallBack({ error }) {
    return (
      <div style={{ width: "100%", height: "590px" }} role="alert">
        <h1 style={{ textAlign: "center", color: "red" }}>
          Something went wrong
        </h1>
        <p style={{ textAlign: "center", color: "#FDF208" }}>
          <Link aria-label="back to repositories" to="/home">
            Back {`>>`} Repositories
          </Link>
        </p>
        <pre style={{ color: "blue" }}>{error.message}</pre>
      </div>
    );
  }