import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Axios from 'axios';
import List from './List';
import CreateOperation from './CreateOperation';

function Abm({ fetchData, operationsList, setOperationsList }) {
  const [operationConcept, setOperationConcept] = useState('');
  const [operationAmount, setOperationAmount] = useState('');
  const [operationDate, setOperationDate] = useState('');
  const [operationType, setOperationType] = useState('in');

  const [newConcept, setNewConcept] = useState('');
  const [newAmount, setNewAmount] = useState(0);
  const [newDate, setNewDate] = useState('');

  const submitOperation = () => {
    Axios.post('http://localhost:3001/api/insert', {
      operationConcept, operationAmount, operationDate, operationType,
    });
    setOperationsList([...operationsList, {
      operationConcept, operationAmount, operationDate, operationType,
    }]);
    console.log('Operation submitted');
  };

  const deleteOperation = (operation) => {
    Axios.delete(`http://localhost:3001/api/delete/${operation}`);
  };

  const updateOperation = (operation) => {
    Axios.put('http://localhost:3001/api/update', {
      operationId: operation,
      operationConcept: newConcept,
      operationAmount: newAmount,
      operationDate: newDate,
    });
    setNewAmount('');
  };

  return (
    <div className="App">
      <p className="create-operation-title">Crear nueva operación:</p>

      <CreateOperation
        setOperationConcept={setOperationConcept}
        setOperationAmount={setOperationAmount}
        setOperationDate={setOperationDate}
        setOperationType={setOperationType}
        submitOperation={submitOperation}
      />

      {operationsList.map((val) => (
        <List
          key={val.id}
          id={val.id}
          concept={val.concept}
          amount={val.amount}
          date={val.date}
          type={val.type === 'in' ? 'Ingreso' : 'Egreso'}
          deleteOperation={() => {
            if (window.confirm(`Estás seguro que quieres eliminar la operación ${val.concept}?`)) {
              deleteOperation(val.id);
              fetchData();
            }
          }}
          updateOperation={() => updateOperation(val.id)}
          editButtonHandler={(e) => {
            e.target.parentElement.parentElement.childNodes[6].className = '';
            setNewConcept(val.concept);
            setNewAmount(val.amount);
            setNewDate(val.date);
          }}
          handleNewConceptInput={setNewConcept}
          handleNewAmountInput={setNewAmount}
          handleNewDateInput={setNewDate}
        />
      ))}

      <br />

    </div>
  );
}

Abm.defaultProps = {
  operationsList: [],
  setOperationsList: () => {},
  fetchData: () => {},
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
  fetchData: PropTypes.func,
};

export default Abm;
