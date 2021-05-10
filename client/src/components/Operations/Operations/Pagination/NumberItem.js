import React from 'react';

function NumberItem({ pageNumber, setPage }) {
  return (
    <li className={`page-item ${activeClass}`}>
      <button className="page-link" onClick={(e) => {
        setPage(e.target.innerHTML);
      }}
      >
        {pageNumber}
      </button>
    </li>
  );
}

export default NumberItem;
