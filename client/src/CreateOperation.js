import React from 'react';
import dateFormat from 'dateformat';
import PropTypes from 'prop-types';

function CreateOperation({
  setOperationConcept, setOperationAmount, setOperationDate, setOperationType, submitOperation,
}) {
  return (
    <form className="form-inline">

      <div className="form-group mb-2">
        <label htmlFor="operationConcept">
          Concepto:
          <input
            className="form-control"
            type="text"
            name="operationConcept"
            onChange={(e) => {
              setOperationConcept(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="form-group mx-sm-3 mb-2">

        <label htmlFor="operationAmount">
          Monto:
          <input
            className="form-control"
            type="number"
            name="operationAmount"
            onChange={(e) => {
              setOperationAmount(Number(e.target.value));
            }}
          />
        </label>
      </div>
      <div className="form-group mx-sm-3 mb-2">

        <label htmlFor="operationDate">
          Fecha:
          <input
            className="form-control"
            type="date"
            name="operationDate"
            onChange={(e) => {
              setOperationDate(dateFormat(e.target.value, 'dd-mm-yyyy'));
            }}
          />
        </label>
      </div>
      <div className="form-group mx-sm-3 mb-2">

        <label htmlFor="operationType">
          Tipo:
          <select
            className="form-control"
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
      <div className="form-group mx-sm-3 mb-2">
        <button className="btn btn-success" type="button" onClick={submitOperation}>Crear</button>

      </div>
    </form>
  );
}

CreateOperation.defaultProps = {
  setOperationConcept: () => {},
  setOperationAmount: () => {},
  setOperationDate: () => {},
  setOperationType: () => {},
  submitOperation: () => {},
};

CreateOperation.propTypes = {
  setOperationConcept: PropTypes.func,
  setOperationAmount: PropTypes.func,
  setOperationDate: PropTypes.func,
  setOperationType: PropTypes.func,
  submitOperation: PropTypes.func,
};

export default CreateOperation;
