import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const SingleRepo = () => {
  const { singlerepo } = useParams();
  const [sameid, setSameId] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSameRepo() {
      const response = await fetch(
        "https://api.github.com/users/lmash12/repos"
      );
      const data = await response.json();
      setSameId(data);
      data ? setLoading(false) : alert("loading...");
    }
    fetchSameRepo();
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="single">
      <div className="showone">{singlerepo}</div>
      <ul>
        <li>
          <Link aria-label="back to repositories" to="/repositories">
            Back {`>>`} Repositories
          </Link>
        </li>
        <li>
          <Link aria-label="this link will show an error" to="/fetchmypage">
            See Error Page
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SingleRepo;