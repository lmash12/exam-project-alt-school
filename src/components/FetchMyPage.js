import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const FetchMyPage = () => {
  
  const [repo, setRepo] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [loading, setLoading] = useState(true);

  const reposPerPage = 3;
  const pagesVisited = pageNum * reposPerPage;
  /*repos to be displayed per page */

  const displayRepos = repo
    .slice(pagesVisited, pagesVisited + reposPerPage)
    .map((repo) => {
      return (
        <Link to={`/repositories/${repo.id}`}>
        <div key={repo.id} className="single-repo">
          <div className="repo-body" >
            <dl>
              <dt>
                {repo.name}
              </dt>
              <dd>{repo.description}</dd>
              <dd>{repo.created_at}</dd>
              <dt>{repo.language}</dt>
            </dl>
          </div>
        </div>
        </Link>
      );
    });
    
  /*this function handles the page incase we have an uneven number of repos */
  const pageCount = Math.ceil(repo.length / reposPerPage);
  /*handle click function for pagination */
  const handlePageClick = ({ selected }) => {
    setPageNum(selected);
  };
  
  

  useEffect(() => {
    setLoading(true);
    try {
      fetch("https://api.github.com/users/lmash12/repos")
        .then((res) => res.json())
        .then((data) => setRepo(data));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <main className="main">
      
      {displayRepos}
      <nav aria-label="Repository results pages">
        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          breakLabel={"..."}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </nav>

    </main>
  );
};
export default FetchMyPage;
