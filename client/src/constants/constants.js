// Urls

export const URL_MAIN = "http://localhost:3000/";
export const OPERATION_URL_MAIN = `${URL_MAIN}operation`;
export const pageUrl = (page, size) => {
  return `operation/page?page=${page}&size=${size}`;
}

// Buttons and titles

export const EDIT_OPERATION_TITLE = "Editar operación";
export const OPERATIONS_TITLE = "Operaciones";
export const UPDATE_FORM_BUTTON_TITLE = "Editar";
export const CREATE_OPERATION_TITLE = "Crear operación";
export const CREATE_FORM_BUTTON_TITLE = "Crear";
export const LAST_TEN_OPERATIONS_TITLE = "Últimas 10 operaciones";

// Form validations

export const MESSAGE_REQUIRED_CONCEPT = "Debe ingresar un concepto."
export const MESSAGE_MAX_CONCEPT_CHARACTERS = "El concepto debe ser menor a 50 caracteres."
export const MESSAGE_REQUIRED_AMOUNT = "Debe ingresar un monto."
export const MESSAGE_MAX_AMOUNT_CHARACTERS = "El monto debe ser menor a 20 caracteres."
export const MESSAGE_NEGATIVE_AMOUNT = "El monto no puede ser negativo."
export const MESSAGE_NOT_A_NUMBER_AMOUNT = "El monto debe ser un número."
export const MESSAGE_VALID_DATE = "Ingrese una fecha válida"
export const MESSAGE_REQUIRED_TYPE = "Debe ingresar un tipo de operación."
export const MESSAGE_VALID_TYPE = "Ingresa un tipo de operación válido."

//Pagination

export const DEFAULT_PAGE_SIZE = 5;

export const handlePreviousPage = (page, setState) => {
  if (page !== 1) {
    setState(page - 1);
  } else {
    return;
  };
};

export const handleNextPage = (totalPages, page, setState) => {
  if (totalPages !== page) {
    setState(page + 1);
  } else {
    return;
  };
};

// Operations

export const inputChangeHandler = (e, key, state, setState) => {
  state[key] = e.target.value;
  setState({ ...state });
};

export const deleteOperation = (e, deleteServices, url, state, setState) => {
  const itemId = parseInt(e.target.id);
  if (confirm(`Eliminar la operación ID ${itemId}?`)) {
    deleteServices(url, itemId);
    setState(state.filter(({ id }) => id !== itemId));
  };
};

export const updateOperation = (e, updateServices, url, id, data) => {
  e.preventDefault();
  updateServices(url, id, data);
};

export const createOperation = (e, createServices, url, data) => {
  e.preventDefault();
  createServices(url, data);
};

// Object handlers

export const removeSequelizeKeys = (obj) => {
  delete obj.createdAt;
  delete obj.updatedAt;
  return obj;
};