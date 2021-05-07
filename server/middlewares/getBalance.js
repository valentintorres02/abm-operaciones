exports.getBalance = (inOperationsBalance, outOperationsBalance) => {
  const inOperationsTotalValue = inOperationsBalance[0].toJSON().totalAmount;
  const outOperationsTotalValue = outOperationsBalance[0].toJSON().totalAmount;
  return JSON.stringify(inOperationsTotalValue - outOperationsTotalValue);
}