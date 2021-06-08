import React from 'react';
import { CREATE_OPERATION_TITLE, CREATE_FORM_BUTTON_TITLE } from '../../constants/constants';
import { createSelectedOperation } from '../../constants/operationsFunctions';
import OperationForm from '../OperationForm/OperationForm';

function CreateOperationContent({ setNewOperation, newOperation }) {
  return (
    <div>
      <OperationForm
        title={CREATE_OPERATION_TITLE}
        handleSubmit={(e) => {
          createSelectedOperation(e, newOperation)
        }}
        setManagedOperation={setNewOperation}
        managedOperation={newOperation}
        operationToManage={newOperation}
        formButtonTitle={CREATE_FORM_BUTTON_TITLE}
      />
    </div>
  );
};

export default CreateOperationContent;
