import React from 'react';
import { handleNextPage } from '../../../../../constants/constants';

function NextArrow({ totalPages, currentPage, setCurrentPage }) {
  return (
    <li className="page-item">
      <button className="page-link" href="#" aria-label="Next" onClick={() => handleNextPage(totalPages, currentPage, setCurrentPage)}>
        <span aria-hidden="true">&raquo;</span>
        <span className="sr-only">Next</span>
      </button>
    </li>
  );
}

export default NextArrow;
