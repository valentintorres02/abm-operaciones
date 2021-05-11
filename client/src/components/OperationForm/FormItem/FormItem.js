import React from 'react';
import { inputChangeHandler } from '../../../constants/constants';

function FormItem({ inputName, textToDisplay, inputType, value, state, setState }) {
  return (
    <div className="form-outline mb-4">
      <label className="form-label" htmlFor={inputName}>{textToDisplay}</label>
      <input type={inputType} id={inputName} className="form-control" defaultValue={value}
        onChange={(e) => inputChangeHandler(e, inputName, state, setState)}
      />
    </div>
  );
};

export default FormItem;
