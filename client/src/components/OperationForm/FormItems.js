import React from 'react';
import { items } from './FormItem/items';
import FormItem from './FormItem/FormItem';
import OperationTypeItem from './FormItem/OperationTypeItem';
import SubmitButton from './FormItem/SubmitButton';

function FormItems({ setEditedOperation, editedOperation, operationToEdit }) {
  return (
    <>
      {items.map((item) => (
        <FormItem
          key={item.name}
          inputName={item.name}
          textToDisplay={item.textToDisplay}
          inputType={item.inputType}
          setState={setEditedOperation}
          state={editedOperation}
          value={operationToEdit[item.name]}
        />
      ))}
      <OperationTypeItem key="type" state={editedOperation} setState={setEditedOperation}
        value={editedOperation.type}
      />
      <SubmitButton textToDisplay="Editar" />
    </>
  );
}

export default FormItems;
