import React from 'react';
import dateFormat from 'dateformat';

function CreateOperationForm({
  setOperationConcept, setOperationAmount, setOperationDate, setOperationType, submitOperation,
}) {
  return (
    <div className="input-group justify-content-center">
      <div>
        <label htmlFor="operationConcept">
          Concepto:
          <input
            type="text"
            className="form-control"
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
            className="form-control"
            name="operationAmount"
            onChange={(e) => {
              setOperationAmount((e.target.value));
            }}
          />
        </label>
      </div>
      <div>

        <label htmlFor="operationDate">
          Fecha:
          <input
            type="date"
            style={{ marginRight: '50px' }}
            className="form-control"
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
            className="form-control"
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
        <button type="button" style={{ marginTop: '23px' }} className="btn btn-warning" onClick={submitOperation}>Crear</button>

      </div>
    </div>
  );
}

export default CreateOperationForm;
