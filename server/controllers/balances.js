const operationsQuery = require("../querys/operations");
const constants = require("../constants/constants");
const { getBalance } = require("../middlewares/getBalance");

exports.getOperationsBalance = async (req, res, next) => {
  const inOperationsTotalAmount = await operationsQuery.getTotalOperationsAmountByType('in');
  const outOperationsTotalAmount = await operationsQuery.getTotalOperationsAmountByType('out');
  const balance = getBalance(inOperationsTotalAmount, outOperationsTotalAmount);
  if (balance) {
    res.status(constants.REQ_SUCCESS).send(balance);
  } else {
    res.status(constants.CODE_FAILURE_404);
  }
}