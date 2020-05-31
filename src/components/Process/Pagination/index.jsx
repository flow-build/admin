/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Pagination = ({
  resultsPerPage, totalResults, paginate,
}) => {
  const [indexOfLast, setIndexOfLast] = useState(5);
  const [indexOfFirst, setIndexOfFirst] = useState(0);
  const pageNumbers = [];
  const prevPage = () => {
    setIndexOfFirst((prevState) => prevState - 5);
    setIndexOfLast((prevState) => prevState - 5);
  };
  const nextPage = () => {
    setIndexOfFirst((prevState) => prevState + 5);
    setIndexOfLast((prevState) => prevState + 5);
  };

  for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link button-pagination" onClick={prevPage} aria-label="Previous">
            <span>Previous</span>
          </button>
        </li>
        {pageNumbers.slice(indexOfFirst, indexOfLast).map((number) => (
          <li key={number} className="page-item">
            <a onClick={(event) => paginate(number, event)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
        <li className="page-item">
          <button className="page-link button-pagination" onClick={nextPage} aria-label="Next">
            <span>Next</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
