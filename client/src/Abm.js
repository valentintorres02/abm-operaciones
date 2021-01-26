import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Axios from 'axios';
import List from './List';
import CreateOperationForm from './CreateOperationForm';

function Abm({ operationsList, setOperationsList }) {
  const [operationConcept, setOperationConcept] = useState('');
  const [operationAmount, setOperationAmount] = useState('');
  const [operationDate, setOperationDate] = useState('');
  const [operationType, setOperationType] = useState('in');

  const [newConcept, setNewConcept] = useState('state');
  const [newAmount, setNewAmount] = useState(0);
  const [newDate, setNewDate] = useState('');

  const validarFormulario = () => {
    if (operationConcept || operationAmount || operationDate) {
      return true;
    }
    return false;
  };

  const submitOperation = () => {
    if (validarFormulario()) {
      Axios.post('http://localhost:3001/api/insert', {
        operationConcept, operationAmount, operationDate, operationType,
      });
      setOperationsList([...operationsList, {
        id: operationsList[operationsList.length - 1].id + 1,
        concept: operationConcept,
        amount: operationAmount,
        date: operationDate,
        type: operationType,
      }]);
    } else {
      alert('Completa todos los campos!');
    }
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
  };

  return (
    <div className="App">
      <p className="create-operation-title">Crear nueva operación:</p>

      <CreateOperationForm
        setOperationConcept={setOperationConcept}
        setOperationAmount={setOperationAmount}
        setOperationDate={setOperationDate}
        setOperationType={setOperationType}
        submitOperation={submitOperation}
      />

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
            <List
              key={val.id}
              id={val.id}
              concept={val.concept}
              amount={Number(val.amount)}
              date={val.date}
              type={val.type === 'in' ? 'Ingreso' : 'Egreso'}
              handleEditButton={(e) => {
                const operationClicked = e.target.parentElement.parentElement.childNodes;

                operationClicked[1].childNodes[0].readOnly = false;
                operationClicked[1].childNodes[0].className = '';
                operationClicked[2].childNodes[0].readOnly = false;
                operationClicked[2].childNodes[0].className = '';
                operationClicked[3].childNodes[0].readOnly = false;
                operationClicked[3].childNodes[0].className = '';

                const editOperationButtons = e.target.parentElement.childNodes;

                editOperationButtons[1].className = 'hidden';
                editOperationButtons[2].className = 'hidden';
                editOperationButtons[0].className = 'btn btn-success';
                setNewConcept(
                  e.target.parentElement.parentElement.childNodes[1].childNodes[0].value,
                );
                setNewAmount(
                  e.target.parentElement.parentElement.childNodes[2].childNodes[0].value,
                );
                setNewDate(
                  e.target.parentElement.parentElement.childNodes[3].childNodes[0].value,
                );
              }}
              handleDeleteButton={() => {
                if (window.confirm(`Deseas eliminar la operación ${val.concept}?`)) {
                  deleteOperation(val.id);
                  setOperationsList(operationsList.filter((activity) => (activity.id !== val.id)));
                }
              }}
              setNewConcept={(e) => setNewConcept(e.target.value)}
              setNewAmount={(e) => setNewAmount(Number(e.target.value))}
              setNewDate={(e) => setNewDate(e.target.value)}
              updateOperation={(e) => {
                updateOperation(val.id);
                e.target.parentElement.parentElement.childNodes[1].childNodes[0].readOnly = true;
                e.target.parentElement.parentElement.childNodes[1].childNodes[0].className = 'input-table';
                e.target.parentElement.parentElement.childNodes[2].childNodes[0].readOnly = true;
                e.target.parentElement.parentElement.childNodes[2].childNodes[0].className = 'input-table';
                e.target.parentElement.parentElement.childNodes[3].childNodes[0].readOnly = true;
                e.target.parentElement.parentElement.childNodes[3].childNodes[0].className = 'input-table';

                (e.target.parentElement.childNodes[1].className = 'btn btn-primary');
                (e.target.parentElement.childNodes[2].className = 'btn btn-danger');
                (e.target.parentElement.childNodes[0].className = 'hidden');
              }}
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

        </tbody>
      </table>
      <br />

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
