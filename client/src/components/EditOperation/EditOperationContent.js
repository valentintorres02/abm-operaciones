import React from 'react';
import { EDIT_OPERATION_TITLE, OPERATION_URL_MAIN, updateOperation, UPDATE_FORM_BUTTON_TITLE } from '../../constants/constants';
import { httpPatch } from '../../services/httpServices';
import OperationForm from '../OperationForm/OperationForm';

function EditOperationContent({ editedOperation, setEditedOperation, operationToEdit }) {
  return (
    <div>
      <OperationForm
        title={EDIT_OPERATION_TITLE}
        handleSubmit={(e) => updateOperation(e, httpPatch, OPERATION_URL_MAIN, editedOperation.id, editedOperation)}
        setManagedOperation={setEditedOperation}
        managedOperation={editedOperation}
        operationToManage={operationToEdit}
        formButtonTitle={UPDATE_FORM_BUTTON_TITLE}
      />
    </div>
  );
};

export default EditOperationContent;
