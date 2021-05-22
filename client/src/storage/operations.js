export const saveAllPageOperations = (operations, page) => {
  const arrayOfPages = [];
  const arrayOfOperations = [];
  const pageObject = { page: page, operations: arrayOfOperations };
  operations.map((operation) => {
    arrayOfOperations.push(operation)
  });
  arrayOfPages.push(pageObject);
  localStorage.setItem(`page_${page}`, JSON.stringify(arrayOfOperations));
};

export const getOperationsByPage = (pageNumber) => {
  const operationsByPage = JSON.parse(localStorage.getItem(`page_${pageNumber}`));
  return operationsByPage;
};