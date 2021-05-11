import React, { useEffect, useState } from 'react';
import { httpGetOne } from '../../../services/httpServices';
import LastTenOperationsContent from './LastTenOperationsContent';

function LastTenOperations() {
  const [operationsList, setOperationsList] = useState([]);
  useEffect(() => {
    httpGetOne('operation/operations', 10).then(res => setOperationsList(res.data))
  }, []);

  return (
    <LastTenOperationsContent operationsList={operationsList} />
  );
}

export default LastTenOperations;
