import React from 'react';
import NextArrow from './PageArrows/NextArrow';
import PreviousArrow from './PageArrows/PreviousArrow';
import PageNumbers from './PageNumbers/PageNumbers';

function Pagination({ totalPages, setCurrentPage, currentPage }) {
  return (
    <nav>
      <ul className="pagination justify-content-center fixed-bottom">
        <PreviousArrow setCurrentPage={setCurrentPage} currentPage={currentPage} />
        <PageNumbers totalPages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        <NextArrow totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </ul>
    </nav>
  );
};

export default Pagination;
