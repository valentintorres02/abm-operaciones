import React from 'react';
import Table from '../Table/Table';
import Pagination from './Pagination/Pagination';
import OperationsTitle from '../OperationsTitle';
import { OPERATIONS_TITLE } from '../../../constants/constants';

function OperationsContent({ operationsList, setOperationsList, totalPages, setPage, page }) {
  return (
    <div>
      <OperationsTitle titleContent={OPERATIONS_TITLE} />
      <Table operations={operationsList} administrableOperations={true} state={operationsList} setState={setOperationsList} />
      <Pagination totalPages={totalPages} setPage={setPage} page={page} />
    </div>
  );
};

export default OperationsContent;
