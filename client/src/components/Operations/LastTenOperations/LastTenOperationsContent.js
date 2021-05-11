import React from 'react';
import { LAST_TEN_OPERATIONS_TITLE } from '../../../constants/constants';
import OperationsTitle from '../OperationsTitle';
import Table from '../Table/Table';

function LastTenOperationsContent({ operationsList }) {
  return (
    <div>
      <OperationsTitle titleContent={LAST_TEN_OPERATIONS_TITLE} />
      <Table operations={operationsList} administrableOperations={false} />
    </div>
  );
};

export default LastTenOperationsContent;
