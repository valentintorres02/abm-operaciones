import React from 'react';
import { inputChangeHandler } from '../../../constants/constants';

function OperationTypeItem({ setState, state }) {
  const inputName = 'type';
  return (
    <div className="form-outline mb-4">
      <label className="form-label" htmlFor={inputName}>Tipo</label>
      <select className="form-control" id={inputName} defaultValue="in"
        onChange={(e) => inputChangeHandler(e, inputName, state, setState)}
      >
        <option value="in">Ingreso</option>
        <option value="out">Egreso</option>
      </select>
    </div>
  );
};

export default OperationTypeItem;
