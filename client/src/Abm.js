import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Axios from 'axios';
import dateFormat from 'dateformat';
import List from './List';
import UpdateList from './UpdateList';

function Abm({ operationsList, setOperationsList }) {
  const [operationConcept, setOperationConcept] = useState('');
  const [operationAmount, setOperationAmount] = useState('');
  const [operationDate, setOperationDate] = useState('');
  const [operationType, setOperationType] = useState('in');
  const [updateClass, setUpdateClass] = useState('hidden');
  // const [newAmount, setNewAmount] = useState('');
  const [operationToUpdate, setOperationToUpdate] = useState({});

  const submitOperation = () => {
    Axios.post('http://localhost:3001/api/insert', {
      operationConcept, operationAmount, operationDate, operationType,
    });
    setOperationsList([...operationsList, {
      operationConcept, operationAmount, operationDate, operationType,
    }]);
  };

  const deleteOperation = (operation) => {
    Axios.delete(`http://localhost:3001/api/delete/${operation}`);
  };

  // const updateOperation = (operation) => {
  //   Axios.put('http://localhost:3001/api/update', {
  //     operationConcept: operation,
  //     operationAmount: newAmount,
  //   });
  //   setNewAmount('');
  // };

  // const updateOperation = (operation) => {
  //   console.log(operation);
  // };

  return (
    <div className="App">
      <h1>Nueva operación:</h1>

      <div className="form">
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

        <button type="button" onClick={submitOperation}>Submit</button>

      </div>

      <br />

      <div>
        <table className="table table-bordered mb-5">
          <thead>
            <tr className="table-success">
              <th scope="col">#</th>
              <th scope="col">Concepto</th>
              <th scope="col">Monto</th>
              <th scope="col">Fecha</th>
              <th scope="col">Tipo</th>
              <th scope="col">Administrar</th>
            </tr>
          </thead>
          <tbody>
            {operationsList.map((val) => (
              <>
                <List
                  key={val.id}
                  id={val.id}
                  concept={val.concept}
                  amount={val.amount}
                  date={val.date}
                  type={val.type === 'in' ? 'Ingreso' : 'Egreso'}
                  updateClass=""
                  deleteOperation={() => {
                    deleteOperation(val.id);
                  }}
                  updateOperation={() => {
                    console.log('ASD');
                  }}
                  editButtonHandler={(e) => {
                    setOperationToUpdate(val);
                    setUpdateClass('');
                    console.log(e);
                    console.log(operationToUpdate);
                  }}
                />
                <UpdateList
                  key={`${val.id}u`}
                  id={val.id}
                  concept={val.concept}
                  amount={val.amount}
                  date={val.date}
                  type={val.type === 'in' ? 'Ingreso' : 'Egreso'}
                  updateClass="hidden"
                />
              </>
            ))}
          </tbody>
        </table>
      </div>
      {console.log(updateClass)}
    </div>
  );
}

Abm.defaultProps = {
  operationsList: [],
  setOperationsList: () => {},
};

Abm.propTypes = {
  operationsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    concept: PropTypes.string,
    amount: PropTypes.string,
    date: PropTypes.string,
    type: PropTypes.string,
  })),
  setOperationsList: PropTypes.func,
};

export default Abm;
