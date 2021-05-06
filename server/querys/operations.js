const db = require('../models');
const Operation = db.Operation;

exports.createOperation = (concept, amount, date, type) => {
  return Operation.create({
    concept,
    amount,
    date,
    type,
  });
};

exports.getAllOperations = async () => {
  const operations = await Operation.findAll();
  return operations;
};

exports.getAllOperationsByType = async (type) => {
  let operationsByType = await Operation.findAll({
    where: {
      type: type,
    },
  });
  return operationsByType;
};