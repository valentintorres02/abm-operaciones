import React from 'react';
import FormItems from './FormItems';

function OperationForm({ title, setEditedOperation, editedOperation, operationToEdit }) {
  return (
    <div className="App">
      <h5 style={{ margin: '20px' }}>{title}</h5>
      <form className="w-25 mx-auto">
        <FormItems setEditedOperation={setEditedOperation} editedOperation={editedOperation}
          operationToEdit={operationToEdit}
        />
      </form>
    </div>
  );
}

export default OperationForm;
