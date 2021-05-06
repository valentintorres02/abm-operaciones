export const URL_MAIN = 'http://localhost:3001/api';

export const MESSAGE_STRING_CONCEPT = "El concepto debe ser un texto";

export const MESSAGE_REQUIRED_CONCEPT = "Debe ingresar un concepto";

export const MESSAGE_NOT_A_NUMBER = "El monto debe ser un número";

export const MESSAGE_NEGATIVE_NUMBER = "El monto no puede ser negativo";

export const MESSAGE_REQUIRED_AMOUNT = "Debe ingresar un monto";

export const MESSAGE_REQUIRED_DATE = "Debe ingresar una fecha";

export const MESSAGE_STRING_DATE = "Ingrese una fecha válida";

export const MESSAGE_REQUIRED_TYPE = "Debe ingresar un tipo de operación";

export const MESSAGE_STRING_TYPE = "Ingrese un tipo de operación válido"

export const validateForm = (itemToValidate1, itemToValidate2, itemToValidate3) => {
  if (itemToValidate1.length && itemToValidate2.length && itemToValidate3.length > 0) {
    return true;
  }
  return false;
};