import React from 'react';
import { OPERATION_URL_MAIN } from '../../constants/constants';
import { httpPatch } from '../../services/httpServices';
import FormItems from './FormItems';

function OperationForm({ title, setEditedOperation, editedOperation, operationToEdit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    httpPatch(OPERATION_URL_MAIN, editedOperation.id, editedOperation);
  }
  return (
    <div className="App">
      <h5 style={{ margin: '20px' }}>{title}</h5>
      <form className="w-25 mx-auto" onSubmit={(e) => handleSubmit(e)}>
        <FormItems setEditedOperation={setEditedOperation} editedOperation={editedOperation}
          operationToEdit={operationToEdit}
        />
      </form>
    </div>
  );
}

export default OperationForm;
