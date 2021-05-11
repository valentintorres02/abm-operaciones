import React, { useState } from 'react';
import CreateOperationContent from './CreateOperationContent';

function CreateOperationComponent() {
  const [newOperation, setNewOperation] = useState({ type: 'in' });

  return (
    <CreateOperationContent
      newOperation={newOperation}
      setNewOperation={setNewOperation}
    />
  );
};

export default CreateOperationComponent;
