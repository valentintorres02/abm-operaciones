import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { EDIT_OPERATION_TITLE, OPERATION_URL_MAIN, updateOperation, UPDATE_FORM_BUTTON_TITLE, URL_MAIN } from '../../constants/constants';
import { httpGetOne, httpPatch } from '../../services/httpServices';
import OperationForm from '../OperationForm/OperationForm';

function EditOperationComponent() {
  const { id } = useParams();
  const [operationToEdit, setOperationToEdit] = useState({});
  const [editedOperation, setEditedOperation] = useState({});

  useEffect(() => {
    httpGetOne(`${URL_MAIN}operation/select`, id).then((res) => {
      delete res.data[0].createdAt;
      delete res.data[0].updatedAt;
      setOperationToEdit(res.data[0]);
    });
  }, []);

  useEffect(() => {
    setEditedOperation(operationToEdit)
  }, [operationToEdit])

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

export default EditOperationComponent;
