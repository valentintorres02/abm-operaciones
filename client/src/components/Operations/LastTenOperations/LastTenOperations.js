import React, { useEffect, useState } from 'react';
import { httpGetOne } from '../../../services/httpServices';
import Table from '../Table/Table';

function LastTenOperations() {
  const [operationsList, setOperationsList] = useState([]);
  useEffect(() => {
    httpGetOne('operation', 10).then(res => setOperationsList(res.data))
  }, []);

  return (
    <div>
      <h5 style={{ margin: '20px' }}>Últimas 10 operaciones:</h5>
      <Table operations={operationsList} administrableOperations={false} />
    </div>
  );
}

export default LastTenOperations;
