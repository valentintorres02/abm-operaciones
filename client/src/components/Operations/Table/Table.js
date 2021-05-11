import React from 'react';
import TableColumns from './TableColumns';
import TableItem from './TableItem';

function Table({ operations, administrableOperations, state, setState }) {
  return (
    <table className="table table-bordered mb-5">
      <thead>
        <TableColumns administrableOperations={administrableOperations} />
      </thead>
      <tbody>
        {operations?.map((val) => (
          <TableItem
            id={val.id}
            key={val.id}
            concept={val.concept}
            amount={val.amount}
            date={val.date}
            type={val.type === 'in' ? 'Ingreso' : 'Egreso'}
            administrableOperations={administrableOperations}
            state={state}
            setState={setState}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
