const db = require('../models');
const Operation = db.Operation;

exports.queryCreateOperation = (concept, amount, date, type) => {
  return Operation.create({
    concept,
    amount,
    date,
    type,
  });
};

exports.queryGetAllOperations = async () => {
  const operations = await Operation.findAll();
  return operations;
};

exports.queryGetAllOperationsByType = async (type) => {
  let operationsByType = await Operation.findAll({
    where: {
      type: type,
    },
  });
  return operationsByType;
};