import React from 'react';

function NumberItem({ pageNumber, setCurrentPage, currentPage }) {
  return (
    <li className={`page-item ${parseInt(currentPage) === pageNumber ? 'active' : ''}`}>
      <button className="page-link" onClick={(e) => {
        setCurrentPage(e.target.innerHTML);
      }}
      >
        {pageNumber}
      </button>
    </li>
  );
}

export default NumberItem;
