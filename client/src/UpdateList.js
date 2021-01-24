import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

function UpdateList({
  id, concept, amount, date, type, updateClass, updateOperation,
}) {
  return (
    <>
      <tr className={updateClass} bgcolor="F2F2F2">
        <th scope="row">{id}</th>
        <td><input className="form-control input-sm" defaultValue={concept} /></td>
        <td><input className="form-control input-sm" defaultValue={amount} /></td>
        <td><input className="form-control input-sm" type="date" defaultValue={date} /></td>
        <td><input className="form-control input-sm" defaultValue={type} disabled /></td>
        <td>
          <button type="button" className="btn btn-primary btn-sm" onClick={updateOperation}>Confirmar</button>
        </td>
      </tr>
    </>
  );
}

UpdateList.defaultProps = {
  id: 0,
  concept: '',
  amount: 0,
  date: '',
  type: '',
  updateClass: '',
  updateOperation: () => {},
};

UpdateList.propTypes = {
  id: PropTypes.number,
  concept: PropTypes.string,
  amount: PropTypes.string,
  date: PropTypes.string,
  type: PropTypes.string,
  updateClass: PropTypes.string,
  updateOperation: PropTypes.func,
};

export default UpdateList;
