import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

function List({
  id, concept, amount, date, type,
  handleEditButton, inputClass, setNewConcept, setNewAmount, setNewDate,
  updateOperation, handleDeleteButton,
}) {
  return (
    <>
      <tr>
        <th scope="row">{id}</th>
        <td>
          <input className={inputClass} defaultValue={concept} readOnly="readonly" onChange={setNewConcept} />
        </td>
        <td>
          <input className={inputClass} defaultValue={amount} readOnly="readonly" onChange={setNewAmount} />
        </td>
        <td><input className={inputClass} defaultValue={date} readOnly="readonly" onChange={setNewDate} /></td>
        <td><input className={inputClass} defaultValue={type} disabled /></td>
        <td>
          <button type="button" className="hidden" onClick={updateOperation}>Confirmar</button>
          <button type="button" className="btn btn-primary" onClick={handleEditButton}>Editar</button>
          <button type="button" className="btn btn-danger" onClick={handleDeleteButton}>Eliminar</button>
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
  inputClass: 'input-table',
  handleEditButton: () => {},
  setNewConcept: () => {},
  setNewAmount: () => {},
  setNewDate: () => {},
  updateOperation: () => {},
  handleDeleteButton: () => {},
};

List.propTypes = {
  id: PropTypes.number,
  concept: PropTypes.string,
  amount: PropTypes.number,
  date: PropTypes.string,
  type: PropTypes.string,
  inputClass: PropTypes.string,
  handleEditButton: PropTypes.func,
  setNewConcept: PropTypes.func,
  setNewAmount: PropTypes.func,
  setNewDate: PropTypes.func,
  updateOperation: PropTypes.func,
  handleDeleteButton: PropTypes.func,
};

export default List;
