import React from 'react';
import { EDIT_OPERATION_TITLE, UPDATE_FORM_BUTTON_TITLE } from '../../constants/constants';
import { updateSelectedOperation } from '../../constants/operationsFunctions';
import OperationForm from '../OperationForm/OperationForm';

function EditOperationContent({ editedOperation, setEditedOperation, operationToEdit }) {
  return (
    <div>
      <OperationForm
        title={EDIT_OPERATION_TITLE}
        handleSubmit={(e) => {
          updateSelectedOperation(e, editedOperation)
        }}
        setManagedOperation={setEditedOperation}
        managedOperation={editedOperation}
        operationToManage={operationToEdit}
        formButtonTitle={UPDATE_FORM_BUTTON_TITLE}
      />
    </div>
  );
};

export default EditOperationContent;
