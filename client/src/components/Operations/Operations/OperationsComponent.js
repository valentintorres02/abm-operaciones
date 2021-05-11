import React, { useEffect, useState } from 'react';
import { pageUrl } from '../../../constants/constants';
import { httpGetAll } from '../../../services/httpServices';
import Table from '../Table/Table';
import Pagination from './Pagination/Pagination';

function OperationsComponent() {
  const [operationsList, setOperationsList] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(5);

  useEffect(() => {
    httpGetAll(pageUrl(page, size)).then(res => {
      setTotalPages(res.data.totalPages);
      setOperationsList(res.data.content)
    })
  }, [page, size]);

  return (
    <div>
      <h5 style={{ margin: '20px' }}>Operaciones:</h5>
      <Table operations={operationsList} administrableOperations={true} state={operationsList} setState={setOperationsList} />
      <Pagination totalPages={totalPages} setPage={setPage} page={page} />
    </div>
  );
}

export default OperationsComponent;
