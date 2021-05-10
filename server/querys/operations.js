const { sequelize } = require('../models');
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

exports.getOperationById = async (id) => {
  const operations = await Operation.findAll({
    where: {
      id: id,
    },
  });
  return operations;
}

exports.getAllOperationsByPage = async (page, size) => {
  const operations = await Operation.findAndCountAll({
    limit: size,
    offset: page * size,
  });
  return operations;
};

exports.getTotalOperationsAmountByType = async (type) => {
  let totalOperationsAmount = await Operation.findAll({
    attributes: [[sequelize.fn('SUM', sequelize.col('amount')), 'totalAmount']],
    where: {
      type: type,
    },
  });
  return totalOperationsAmount;
};

exports.getLastOperationsByNumber = async (number) => {
  const lastOperations = await Operation.findAll({
    limit: number,
    order: [['id', 'DESC']]
  })
  return lastOperations;
}