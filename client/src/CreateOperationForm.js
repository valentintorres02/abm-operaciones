import React from 'react';
import dateFormat from 'dateformat';
import PropTypes from 'prop-types';

function CreateOperationForm({
  setOperationConcept, setOperationAmount, setOperationDate, setOperationType, submitOperation,
}) {
  return (
    <>
      <div>
        <label htmlFor="operationConcept">
          Concepto:
          <input
            type="text"
            name="operationConcept"
            onChange={(e) => {
              setOperationConcept(e.target.value);
            }}
          />
        </label>
      </div>
      <div>

        <label htmlFor="operationAmount">
          Monto:
          <input
            type="number"
            name="operationAmount"
            onChange={(e) => {
              setOperationAmount(Number(e.target.value));
            }}
          />
        </label>
      </div>
      <div>

        <label htmlFor="operationDate">
          Fecha:
          <input
            type="date"
            name="operationDate"
            onChange={(e) => {
              setOperationDate(dateFormat(e.target.value, 'dd-mm-yyyy'));
            }}
          />
        </label>
      </div>
      <div>

        <label htmlFor="operationType">
          Tipo:
          <select
            name="operationType"
            onChange={(e) => {
              setOperationType(e.target.value);
            }}
          >
            <option value="in">Ingreso</option>
            <option value="out">Egreso</option>
          </select>
        </label>

      </div>
      <div>
        <button type="button" className="btn btn-warning" style={{ margin: '10px' }} onClick={submitOperation}>Crear</button>

      </div>
    </>
  );
}

CreateOperationForm.defaultProps = {
  setOperationConcept: () => {},
  setOperationAmount: () => {},
  setOperationDate: () => {},
  setOperationType: () => {},
  submitOperation: () => {},
};

CreateOperationForm.propTypes = {
  setOperationConcept: PropTypes.func,
  setOperationAmount: PropTypes.func,
  setOperationDate: PropTypes.func,
  setOperationType: PropTypes.func,
  submitOperation: PropTypes.func,
};

export default CreateOperationForm;
