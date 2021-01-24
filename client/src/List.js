import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

function List({
  id, concept, amount, date, type, deleteOperation, updateClass, updateOperation,
}) {
  return (
    <>
      <tr>
        <th scope="row">{id}</th>
        <td>
          {concept}
          {' '}
          <input className="hidden" />
        </td>
        <td>{amount}</td>
        <td>{date}</td>
        <td>{type}</td>
        <td>
          <button type="button" className="btn btn-primary btn-sm">Editar</button>
          <button type="button" className="btn btn-danger btn-sm" onClick={deleteOperation}>Eliminar</button>
        </td>
      </tr>
      <tr className={updateClass}>
        <th scope="row">{id}</th>
        <td><input className="form-control input-sm" /></td>
        <td><input className="form-control input-sm" /></td>
        <td><input className="form-control input-sm" /></td>
        <td><input className="form-control input-sm" /></td>
        <td>
          <button type="button" className="btn btn-primary btn-sm" onClick={updateOperation}>Editar</button>
          <button type="button" className="btn btn-danger btn-sm" onClick={deleteOperation}>Eliminar</button>
        </td>
      </tr>
    </>
  );
}

List.defaultProps = {
  id: 0,
  concept: '',
  amount: 0,
  date: '',
  type: '',
  updateClass: 'hidden',
  deleteOperation: () => {},
  updateOperation: () => {},
};

List.propTypes = {
  id: PropTypes.number,
  concept: PropTypes.string,
  amount: PropTypes.string,
  date: PropTypes.string,
  type: PropTypes.string,
  updateClass: PropTypes.string,
  deleteOperation: PropTypes.func,
  updateOperation: PropTypes.func,
};

export default List;
