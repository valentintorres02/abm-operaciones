import React from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';
import { deleteOperation, OPERATION_URL_MAIN } from '../../../constants/constants';
import { httpDelete } from '../../../services/httpServices';

function TableItem({
  id, concept, amount, date, type, administrableOperations, state, setState
}) {
  return (
    <>
      <tr>
        <th scope="row">{id}</th>
        <td>{concept}</td>
        <td>${amount}</td>
        <td>{date}</td>
        <td>{type}</td>
        {administrableOperations ?
          <td>
            <Link to={`/edit-operation/${id}`}>
              <button type="button" className="btn btn-primary">Editar</button>
            </Link>
            <button type="button" className="btn btn-danger" id={id} onClick={(e) => {
              deleteOperation(e, httpDelete, OPERATION_URL_MAIN, state, setState)
            }}>Eliminar</button>
          </td>
          : null}
      </tr>
    </>
  )
}

export default TableItem;
