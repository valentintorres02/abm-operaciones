import React from 'react';
import { items } from './FormItem/items';
import FormItem from './FormItem/FormItem';
import OperationTypeItem from './FormItem/OperationTypeItem';
import SubmitButton from './FormItem/SubmitButton';

function FormItems({ setManagedOperation, managedOperation, operationToManage, formButtonTitle }) {
  return (
    <>
      {items.map((item) => (
        <FormItem
          key={item.name}
          inputName={item.name}
          textToDisplay={item.textToDisplay}
          inputType={item.inputType}
          setState={setManagedOperation}
          state={managedOperation}
          value={operationToManage[item.name]}
        />
      ))}
      <OperationTypeItem key="type" state={managedOperation} setState={setManagedOperation}
        value={managedOperation.type}
      />
      <SubmitButton textToDisplay={formButtonTitle} />
    </>
  );
}

export default FormItems;
