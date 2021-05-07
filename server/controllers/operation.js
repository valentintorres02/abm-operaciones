const operationsQuery = require("../querys/operations");
const constants = require("../constants/constants");

exports.createOperation = (req, res, next) => {
  operationsQuery.queryCreateOperation(req.body.concept, req.body.amount, req.body.date, req.body.type)
    .then(() => {
      res.status(constants.CODE_SUCCESS).send(constants.SUCCESS_OPERATION_CREATE);
    })
    .catch((err) =>
      res.status(constants.CODE_FAILURE_404).send({ message: err.message })
    );
};

exports.getAllOperations = async (req, res, next) => {
  const operations = await operationsQuery.queryGetAllOperations();
  if (operations) {
    res.status(constants.REQ_SUCCESS).send(operations);
  } else {
    res.status(constants.CODE_FAILURE_404);
  }
};