import React from 'react';
import FormItems from './FormItems';

function OperationForm({ title, handleSubmit, setManagedOperation, managedOperation, operationToManage, formButtonTitle }) {
  return (
    <div className="App">
      <h5 style={{ margin: '20px' }}>{title}</h5>
      <form className="w-25 mx-auto" onSubmit={(e) => handleSubmit(e)}>
        <FormItems setManagedOperation={setManagedOperation} managedOperation={managedOperation}
          operationToManage={operationToManage} formButtonTitle={formButtonTitle}
        />
      </form>
    </div>
  );
}

export default OperationForm;
