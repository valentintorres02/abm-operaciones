import React from 'react';
import { handleNextPage } from '../../../../../constants/constants';

function NextArrow({ totalPages, page, setPage }) {
  return (
    <li className="page-item">
      <button className="page-link" href="#" aria-label="Next" onClick={() => handleNextPage(totalPages, page, setPage)}>
        <span aria-hidden="true">&raquo;</span>
        <span className="sr-only">Next</span>
      </button>
    </li>
  );
}

export default NextArrow;
