import React from 'react';
import Table from '../Table/Table';
import LastTenOperationsTitle from './LastTenOperationsTitle';

function LastTenOperationsContent({ operationsList }) {
  return (
    <div>
      <LastTenOperationsTitle />
      <Table operations={operationsList} administrableOperations={false} />
    </div>
  );
};

export default LastTenOperationsContent;
