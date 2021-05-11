import React from 'react';
import NextArrow from './PageArrows/NextArrow';
import PreviousArrow from './PageArrows/PreviousArrow';
import PageNumbers from './PageNumbers/PageNumbers';

function Pagination({ totalPages, setPage, page }) {
  return (
    <nav className="pagination-sticky">
      <ul className="pagination">
        <PreviousArrow setPage={setPage} page={page} />
        <PageNumbers totalPages={totalPages} setPage={setPage} />
        <NextArrow totalPages={totalPages} page={page} setPage={setPage} />
      </ul>
    </nav>
  );
};

export default Pagination;
