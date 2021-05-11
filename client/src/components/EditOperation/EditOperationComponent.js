import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { OPERATION_URL_MAIN } from '../../constants/constants';
import { httpGetOne } from '../../services/httpServices';
import EditOperationContent from './EditOperationContent';

function EditOperationComponent() {
  const { id } = useParams();
  const [operationToEdit, setOperationToEdit] = useState({});
  const [editedOperation, setEditedOperation] = useState({});

  useEffect(() => {
    httpGetOne(`${OPERATION_URL_MAIN}/select`, id).then((res) => {
      delete res.data[0].createdAt;
      delete res.data[0].updatedAt;
      setOperationToEdit(res.data[0]);
    });
  }, []);

  useEffect(() => {
    setEditedOperation(operationToEdit)
  }, [operationToEdit])

  return (
    <EditOperationContent
      editedOperation={editedOperation}
      setEditedOperation={setEditedOperation}
      operationToEdit={operationToEdit}
    />
  );
};

export default EditOperationComponent;
