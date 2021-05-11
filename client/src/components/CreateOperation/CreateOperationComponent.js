import React, { useState } from 'react';
import { CREATE_OPERATION_TITLE, OPERATION_URL_MAIN, CREATE_FORM_BUTTON_TITLE, createOperation } from '../../constants/constants';
import { httpPost } from '../../services/httpServices';
import OperationForm from '../OperationForm/OperationForm';

function CreateOperationComponent() {
  const [newOperation, setNewOperation] = useState({ type: 'in' });

  return (
    <div>
      <OperationForm
        title={CREATE_OPERATION_TITLE}
        handleSubmit={(e) => createOperation(e, httpPost, OPERATION_URL_MAIN, newOperation)}
        setManagedOperation={setNewOperation}
        managedOperation={newOperation}
        operationToManage={newOperation}
        formButtonTitle={CREATE_FORM_BUTTON_TITLE}
      />
    </div>
  );
};

export default CreateOperationComponent;
