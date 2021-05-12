import React from 'react';
import { handlePreviousPage } from '../../../../../constants/constants';

function PreviousArrow({ setCurrentPage, currentPage }) {
  return (
    <li className="page-item">
      <button className="page-link" href="#" aria-label="Previous" onClick={() => handlePreviousPage(currentPage, setCurrentPage)}>
        <span aria-hidden="true">&laquo;</span>
        <span className="sr-only">Previous</span>
      </button>
    </li>
  );
}

export default PreviousArrow;
