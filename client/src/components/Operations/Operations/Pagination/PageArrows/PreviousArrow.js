import React from 'react';
import { handlePreviousPage } from '../../../../../constants/constants';

function PreviousArrow({ setPage, page }) {
  return (
    <li className="page-item">
      <button className="page-link" href="#" aria-label="Previous" onClick={() => handlePreviousPage(page, setPage)}>
        <span aria-hidden="true">&laquo;</span>
        <span className="sr-only">Previous</span>
      </button>
    </li>
  );
}

export default PreviousArrow;
