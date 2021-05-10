import React from 'react';
import NumberItem from './NumberItem';

function PageNumbers({ totalPages, setPage }) {
  var rows = [];
  for (var i = 1; i <= totalPages; i++) {
    rows.push(<NumberItem key={i} setPage={setPage} pageNumber={i} />);
  }
  return <>{rows}</>;
}

export default PageNumbers;
