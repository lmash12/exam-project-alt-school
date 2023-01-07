import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const SingleRepo = () => {
  const { singlerepo } = useParams();
  const [sameid, setSameId] = useState();
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSameRepo() {
      const response = await fetch(
        "https://api.github.com/users/lmash12/repos"
      );
      const card = await response.json();
      setSameId(card);
      card ? setLoading(false) : alert("loading...");
    }
    fetchSameRepo();
  }, []);

  function ShowSingleCard() {
    const ShowSingleCard = sameid.find((repo) => singlerepo == repo.id);

    return (
      <div className="singleCard">
        <div className="showSingle">
          <label>Name:</label>
          <h4 style={{ fontSize: "18px" }}>{ShowSingleCard.name} </h4>
        </div>
        {ShowSingleCard.description && (
          <div className="showSingle">
            <label>Description:</label>
            <h3 style={{ fontSize: "18px" }}>{ShowSingleCard.description}</h3>
          </div>
        )}
        {ShowSingleCard.created_at && (
          <div className="showSingle">
            <label>Created:</label>
            <h3 style={{ fontSize: "18px" }}>{ShowSingleCard.created_at}</h3>
          </div>
        )}
        {ShowSingleCard.language && (
          <div className="showSingle">
            <label>Langauage:</label>
            <h3 style={{ fontSize: "18px" }}>{ShowSingleCard.language}</h3>
          </div>
        )}
        <div className="showSingle">
          <label>{`Open In GitHub:`}</label>
          <a target="_blank" href={ShowSingleCard.html_url}>
            {ShowSingleCard.name}
          </a>
        </div>
      </div>
    );
  }

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="single">
      <div className="showone">
        <ShowSingleCard />
      </div>
      <div className="backToRepo">
        <Link aria-label="back to repositories" to="/repositories">
          Back {`>>`} Repositories
        </Link>
      </div>
    </div>
  );
};

export default SingleRepo;
