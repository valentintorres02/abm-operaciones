import React, { useEffect, useState } from 'react';
import { DEFAULT_PAGE_SIZE, pageUrl } from '../../../constants/constants';
import { httpGetAll } from '../../../services/httpServices';
import OperationsContent from './OperationsContent';

function OperationsComponent() {
  const [operationsList, setOperationsList] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const [page, setPage] = useState(1);
  const size = DEFAULT_PAGE_SIZE;

  useEffect(() => {
    httpGetAll(pageUrl(page, size)).then(res => {
      setTotalPages(res.data.totalPages);
      setOperationsList(res.data.content)
    })
  }, [page, size]);

  return (
    <OperationsContent
      operationsList={operationsList}
      setOperationsList={setOperationsList}
      totalPages={totalPages}
      setPage={setPage}
      page={page}
    />
  );
}

export default OperationsComponent;
