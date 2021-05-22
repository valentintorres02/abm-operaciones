export const saveOperation = (operation) => {
  localStorage.setItem(`operation_${operation.id}`, JSON.stringify(operation));
};

export const saveAllPageOperations = (operations, page) => {
  const arrayOfPages = [];
  const arrayOfOperations = [];
  const pageObject = { page: page, operations: arrayOfOperations };
  operations.map((operation) => {
    arrayOfOperations.push(operation)
  });
  arrayOfPages.push(pageObject);
  localStorage.setItem(`page-${page}`, JSON.stringify(arrayOfPages));
};

export const getAllOperations = () => {
  const items = { ...localStorage };
  return items;
};