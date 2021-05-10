import React from 'react';

function TableColumns({ administrableOperations }) {
  return (
    <tr className="table-success">
      <th scope="col">#</th>
      <th scope="col">Concepto</th>
      <th scope="col">Monto</th>
      <th scope="col">Fecha</th>
      <th scope="col">Tipo</th>
      {administrableOperations ? (
        <th scope="col">Administrar</th>
      ) : null}
    </tr>
  );
}

export default TableColumns;
