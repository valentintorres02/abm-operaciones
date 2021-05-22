import React, { useEffect, useState } from 'react';
import { DEFAULT_PAGE_SIZE, pageUrl } from '../../../constants/constants';
import { httpGetAll } from '../../../services/httpServices';
import { getOperationsByPage, saveAllPageOperations } from '../../../storage/operations';
import OperationsContent from './OperationsContent';

function OperationsComponent() {
  const [operationsList, setOperationsList] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const size = DEFAULT_PAGE_SIZE;

  useEffect(() => {
    httpGetAll(pageUrl(currentPage, size)).then(res => { // Initial fetch to set total pages to print in pagination.
      setTotalPages(res.data.totalPages);
    });
    localStorage.clear(); // Clear localStorage to delete old pages stored.
  }, []);

  useEffect(() => {
    getOperationsByPage(currentPage) ?
      setOperationsList(getOperationsByPage(currentPage)) :
      httpGetAll(pageUrl(currentPage, size)).then(res => {
        setTotalPages(res.data.totalPages);
        setOperationsList(res.data.content);
      })
  }, [currentPage, size]);

  useEffect(() => {
    if (operationsList.length >= 1) {
      saveAllPageOperations(operationsList, currentPage);
    }
  }, [operationsList])

  return (
    <OperationsContent
      operationsList={operationsList}
      setOperationsList={setOperationsList}
      totalPages={totalPages}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
    />
  );
}

export default OperationsComponent;
