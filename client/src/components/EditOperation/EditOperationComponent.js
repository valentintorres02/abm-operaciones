import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { URL_MAIN } from '../../constants/constants';
import { httpGetOne } from '../../services/httpServices';
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
      <OperationForm title="Editar operación" setEditedOperation={setEditedOperation}
        operationToEdit={operationToEdit} editedOperation={editedOperation}
      />
    </div>
  );
};

export default EditOperationComponent;
