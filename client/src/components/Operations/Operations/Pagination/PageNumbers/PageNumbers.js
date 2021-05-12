import React from 'react';
import NumberItem from './NumberItem';

function PageNumbers({ totalPages, setCurrentPage, currentPage }) {
  var rows = [];
  for (var i = 1; i <= totalPages; i++) {
    rows.push(<NumberItem key={i} setCurrentPage={setCurrentPage} currentPage={currentPage} pageNumber={i} />);
  }
  return <>{rows}</>;
}

export default PageNumbers;
